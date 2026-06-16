const SHEET_NAME = "Pilot Requests";

const HEADERS = [
  "submitted_at",
  "name",
  "email",
  "project",
  "role",
  "agent_type",
  "use_case",
  "monthly_volume",
  "chains",
  "needs_attestation",
  "needs_execution_metadata",
  "consent",
  "source_url",
  "user_agent",
  "status",
  "notes",
];

function doGet() {
  return json_({
    ok: true,
    service: "DaoRoute pilot form",
    status: "ready",
  });
}

function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(5000);

  try {
    const params = e && e.parameter ? e.parameter : {};

    if (params.website) {
      return json_({ ok: true, message: "Pilot request received" });
    }

    const row = normalize_(params);
    const errors = validate_(row);

    if (errors.length > 0) {
      return json_({
        ok: false,
        error: "validation_failed",
        errors,
      });
    }

    const sheet = getSheet_();
    ensureHeaders_(sheet);
    sheet.appendRow(HEADERS.map((header) => row[header] || ""));

    return json_({
      ok: true,
      message: "Pilot request received",
    });
  } catch (error) {
    return json_({
      ok: false,
      error: String(error && error.message ? error.message : error),
    });
  } finally {
    try {
      lock.releaseLock();
    } catch (error) {
      // Ignore lock release errors after timeout or partial execution.
    }
  }
}

function normalize_(params) {
  return {
    submitted_at: sanitize_(params.submitted_at) || new Date().toISOString(),
    name: sanitize_(params.name, 200),
    email: sanitize_(params.email, 240).toLowerCase(),
    project: sanitize_(params.project, 240),
    role: sanitize_(params.role, 160),
    agent_type: sanitize_(params.agent_type, 120),
    use_case: sanitize_(params.use_case, 2000),
    monthly_volume: sanitize_(params.monthly_volume, 120),
    chains: sanitize_(params.chains, 240),
    needs_attestation: params.needs_attestation === "yes" ? "yes" : "no",
    needs_execution_metadata:
      params.needs_execution_metadata === "yes" ? "yes" : "no",
    consent: params.consent === "yes" ? "yes" : "",
    source_url: sanitize_(params.source_url, 500),
    user_agent: sanitize_(params.user_agent, 500),
    status: "new",
    notes: "",
  };
}

function validate_(row) {
  const errors = [];

  if (!row.name) {
    errors.push("name_required");
  }

  if (!row.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(row.email)) {
    errors.push("valid_email_required");
  }

  if (!row.agent_type) {
    errors.push("agent_type_required");
  }

  if (!row.use_case || row.use_case.length < 20) {
    errors.push("use_case_too_short");
  }

  if (row.consent !== "yes") {
    errors.push("consent_required");
  }

  return errors;
}

function getSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();

  if (!spreadsheet) {
    throw new Error("Open this script from the target Google Sheet.");
  }

  return (
    spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME)
  );
}

function ensureHeaders_(sheet) {
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(HEADERS);
    return;
  }

  const currentHeaders = sheet
    .getRange(1, 1, 1, HEADERS.length)
    .getValues()[0];

  if (currentHeaders.join("|") !== HEADERS.join("|")) {
    sheet.insertRowBefore(1);
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
  }
}

function sanitize_(value, maxLength) {
  const limit = maxLength || 400;
  return String(value || "")
    .replace(/\u0000/g, "")
    .trim()
    .slice(0, limit);
}

function json_(payload) {
  return ContentService.createTextOutput(JSON.stringify(payload)).setMimeType(
    ContentService.MimeType.JSON,
  );
}
