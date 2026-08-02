// TEMPLATE GOOGLE APPS SCRIPT
// Tempelkan kode ini pada script.google.com, isi SPREADSHEET_ID,
// lalu deploy sebagai Web App. URL hasil deploy diisi ke feedbackEndpoint
// pada file site-config.js.

const SPREADSHEET_ID = "1WkF4hv2aQEcaJVkWr0yZj8sKZDoupnkYF3etI-6FZ_c";
const SHEET_NAME = "Kritik & Saran";

function doPost(e) {
  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

  if (sheet.getLastRow() === 0) {
    sheet.appendRow([
      "Waktu kirim",
      "Nama",
      "Prodi",
      "Nomor WhatsApp",
      "Kritik & Saran",
      "Sumber"
    ]);
    sheet.setFrozenRows(1);
  }

  const data = e.parameter;
  sheet.appendRow([
    new Date(),
    data.name || "",
    data.program || "",
    data.whatsapp || "",
    data.message || "",
    data.source || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ success: true }))
    .setMimeType(ContentService.MimeType.JSON);
}
