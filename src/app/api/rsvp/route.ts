// POST: recibe el form y escribe en Sheets
import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const auth = new google.auth.JWT({
  email: process.env.GOOGLE_CLIENT_EMAIL,
  key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

export async function POST(req: Request) {
  try {
    console.log('Entró al POST');

    const body = await req.json();

    console.log('Body recibido:', body);

    const {
      attendance,
      invitationType,
      fullName,
      foodRestriction,
      member1,
      foodRestriction1,
      member2,
      foodRestriction2,
      member3,
      foodRestriction3,
      mail,
      message,
    } = body;

    const rows = [];

    // Invitación individual
    if (invitationType === 'individual') {
      rows.push([
        new Date().toISOString(),
        attendance,
        invitationType,
        fullName,
        foodRestriction,
        mail,
        message,
        new Date().toLocaleString('es-AR'),
      ]);
    }

    // Invitación familiar
    if (invitationType === 'familiar') {
      if (member1) {
        rows.push([
          new Date().toISOString(),
          attendance,
          invitationType,
          member1,
          foodRestriction1,
          mail,
          message,
          new Date().toLocaleString('es-AR'),
        ]);
      }

      if (member2) {
        rows.push([
          new Date().toISOString(),
          attendance,
          invitationType,
          member2,
          foodRestriction2,
          mail,
          message,
          new Date().toLocaleString('es-AR'),
        ]);
      }

      if (member3) {
        rows.push([
          new Date().toISOString(),
          attendance,
          invitationType,
          member3,
          foodRestriction3,
          mail,
          message,
          new Date().toLocaleString('es-AR'),
        ]);
      }
    }

    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Hoja 1',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: rows,
      },
    });

    console.log('Se escribió correctamente');

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('ERROR GOOGLE');
    console.error(error);
    console.error(error.response?.data);

    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
