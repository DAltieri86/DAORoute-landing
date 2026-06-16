# DaoRoute Pilot Form Setup

This guide connects the public DaoRoute landing page form to a Google Sheet
through Google Apps Script.

The landing page can be published before this setup is complete. Until the Web
App URL is configured in `pilot-form.js`, form submissions fall back to a
prefilled email to `softwaretamrsv@gmail.com`.

## 1. Create The Google Sheet

1. Open Google Sheets.
2. Create a new spreadsheet named:

```text
DaoRoute Pilot Requests
```

3. Keep the first sheet empty. The script will create or update a sheet tab
   named `Pilot Requests` automatically.

## 2. Add Apps Script

1. In the Google Sheet, open:

```text
Extensions -> Apps Script
```

2. Delete the default code.
3. Copy the full contents of:

```text
docs/google-apps-script-pilot-form.js
```

4. Paste it into the Apps Script editor.
5. Click **Save**.

## 3. Deploy As Web App

1. In Apps Script, click **Deploy -> New deployment**.
2. Select deployment type: **Web app**.
3. Use these settings:

```text
Description: DaoRoute pilot form
Execute as: Me
Who has access: Anyone
```

4. Click **Deploy**.
5. Authorize the script when Google asks.
6. Copy the Web App URL.

Use the URL that ends with:

```text
/exec
```

Do not use the `/dev` URL for production.

## 4. Send The URL Back To Codex

Send only the Web App `/exec` URL. It is not a secret, but it should be used
only for the DaoRoute form.

Codex will then update:

```text
pilot-form.js
```

by replacing:

```js
const PILOT_FORM_ENDPOINT = "";
```

with:

```js
const PILOT_FORM_ENDPOINT = "https://script.google.com/macros/s/.../exec";
```

## 5. Test

After the landing page is deployed:

1. Open the public site.
2. Fill in the pilot form.
3. Submit.
4. Confirm the page shows:

```text
Pilot request received.
```

5. Open the Google Sheet and confirm a new row appears in the `Pilot Requests`
   tab.

## Troubleshooting

If the page opens an email draft instead of submitting to Google Sheets, the
Web App URL has not been configured in `pilot-form.js` yet.

If the page says the request was received but the Google Sheet has no new row:

1. Open Apps Script.
2. Go to **Executions**.
3. Check the latest error.
4. Confirm the deployment is a Web App with access set to **Anyone**.
5. Confirm the URL in `pilot-form.js` ends with `/exec`.
