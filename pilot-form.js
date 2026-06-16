(function () {
  "use strict";

  /*
   * Paste the Google Apps Script Web App /exec URL here after deployment.
   * Leave empty while DNS and Apps Script are being configured; the form will
   * fall back to a prefilled email instead of dropping the request.
   */
  const PILOT_FORM_ENDPOINT = "";
  const PILOT_EMAIL = "softwaretamrsv@gmail.com";

  const form = document.querySelector("#pilot-form");
  const status = document.querySelector("#pilot-form-status");
  const submitButton = form ? form.querySelector("button[type='submit']") : null;

  if (!form || !status || !submitButton) {
    return;
  }

  form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    if (payload.website) {
      showStatus("Pilot request received.", "success");
      form.reset();
      return;
    }

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    payload.source_url = window.location.href;
    payload.user_agent = window.navigator.userAgent;
    payload.submitted_at = new Date().toISOString();
    payload.needs_attestation = formData.has("needs_attestation") ? "yes" : "no";
    payload.needs_execution_metadata = formData.has("needs_execution_metadata")
      ? "yes"
      : "no";

    submitButton.disabled = true;
    submitButton.textContent = "Submitting...";

    try {
      if (!PILOT_FORM_ENDPOINT) {
        window.location.href = buildMailto(payload);
        showStatus(
          "Email draft opened. Send it to complete your pilot request.",
          "success",
        );
        form.reset();
        return;
      }

      await fetch(PILOT_FORM_ENDPOINT, {
        method: "POST",
        mode: "no-cors",
        body: new URLSearchParams(payload),
      });

      showStatus(
        "Pilot request received. We review requests manually and reply by email.",
        "success",
      );
      form.reset();
    } catch (error) {
      showStatus(
        "Something went wrong. Please use the email link below to request access.",
        "error",
      );
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = "Submit pilot request";
    }
  });

  function showStatus(message, tone) {
    status.textContent = message;
    status.dataset.tone = tone;
  }

  function buildMailto(payload) {
    const subject = "DaoRoute Pilot Access Request";
    const body = [
      "Hi DaoRoute team,",
      "",
      "I would like to request pilot access to DaoRoute.",
      "",
      `Name: ${payload.name || ""}`,
      `Email: ${payload.email || ""}`,
      `Project/company: ${payload.project || ""}`,
      `Role: ${payload.role || ""}`,
      `Agent type: ${payload.agent_type || ""}`,
      `Use case: ${payload.use_case || ""}`,
      `Expected monthly volume: ${payload.monthly_volume || ""}`,
      `Chains of interest: ${payload.chains || ""}`,
      `Needs signed attestations: ${payload.needs_attestation || "no"}`,
      `Needs execution metadata: ${payload.needs_execution_metadata || "no"}`,
      "",
      "I understand DaoRoute is non-custodial, does not guarantee returns,",
      "and does not provide investment advice.",
    ].join("\n");

    return `mailto:${PILOT_EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
  }
})();
