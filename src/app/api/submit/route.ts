// src/app/api/submit/route.ts
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone } = body;

    // Validate input (basic)
    if (!name || !email || !phone) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    // Authenticate with Google
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        // The private key must be correctly formatted
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({
      auth,
      version: 'v4',
    });

    const timestamp = new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' });

    // Append the new row to the spreadsheet
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Sheet1!A1:D1', // Or whatever your sheet name is
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [timestamp, name, phone, email], // Must match your header order
        ],
      },
    });

    return NextResponse.json({ success: true, data: response.data }, { status: 200 });

  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    // Check if error is an instance of Error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json({ error: 'Internal server error', details: errorMessage }, { status: 500 });
  }
}