import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const spreadsheetId = "1rZ_1zMhDsO2gzTexvUsrHIC3edYQuRZ3ymmjHleJo50";

export default defineEventHandler(async (event) => {
  const { creds } = useRuntimeConfig(event);
  const { name, email, phone, state, district } = await readBody(event);

  try {
    const jwt = new google.auth.JWT(
      creds.client_email,
      null,
      creds.private_key,
      SCOPES,
    );

    await jwt.authorize();

    const sheets = google.sheets({ version: "v4", auth: jwt });

    // First, get all existing data
    const getRes = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range: "Sheet1!A:E", // Assuming email is in column B
    });

    const rows = getRes.data.values || [];

    // Check if email already exists
    const emailExists = rows.some(row => row[1] === email);

    if (emailExists) {
      event.res.statusCode = 400;
      return { statusCode: 400, body: { message: "Email already exists" } };
    }

    // If email doesn't exist, proceed with adding the new entry
    const addRes = await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:A",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[name, email, phone, state, district]],
      },
    });

    if (addRes.status === 200) {
      event.res.statusCode = 200;
      return { statusCode: 200, body: { message: "Successfully Enrolled" } };
    } else {
      throw new Error("Failed to add data to spreadsheet");
    }
  } catch (err) {
    event.res.statusCode = 500;
    console.error("Error:", err.message);
    return { statusCode: 500, body: { message: "Something went wrong" } };
  }
});
