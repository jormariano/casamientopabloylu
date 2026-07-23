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
      mail,
      foodRestriction,
      member1,
      mail1,
      foodRestriction1,
      otraRestriccion1,
      member2,
      mail2,
      foodRestriction2,
      otraRestriccion2,
      member3,
      mail3,
      foodRestriction3,
      otraRestriccion3,
      member4,
      mail4,
      foodRestriction4,
      otraRestriccion4,
      member5,
      mail5,
      foodRestriction5,
      otraRestriccion5,
      otraRestriccion,
      message,
    } = body;

    const finalFoodRestriction =
      foodRestriction === 'otra' ? otraRestriccion : foodRestriction;

    const finalFoodRestriction1 =
      foodRestriction1 === 'otra' ? otraRestriccion1 : foodRestriction1;

    const finalFoodRestriction2 =
      foodRestriction2 === 'otra' ? otraRestriccion2 : foodRestriction2;

    const finalFoodRestriction3 =
      foodRestriction3 === 'otra' ? otraRestriccion3 : foodRestriction3;

    const finalFoodRestriction4 =
      foodRestriction4 === 'otra' ? otraRestriccion4 : foodRestriction4;

    const finalFoodRestriction5 =
      foodRestriction5 === 'otra' ? otraRestriccion5 : foodRestriction5;

    const rows = [];

    // Invitación rechazada
    if (attendance === 'no') {
      rows.push([
        new Date().toISOString(),
        attendance,
        invitationType,
        fullName,
        mail,
        finalFoodRestriction,
        message,
        new Date().toLocaleString('es-AR'),
      ]);
    }

    // Invitación individual
    if (invitationType === 'individual') {
      rows.push([
        new Date().toISOString(),
        attendance,
        invitationType,
        fullName,
        mail,
        finalFoodRestriction,
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
          mail1,
          finalFoodRestriction1,
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
          mail2,
          finalFoodRestriction2,
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
          mail3,
          finalFoodRestriction3,
          message,
          new Date().toLocaleString('es-AR'),
        ]);
      }
      if (member4) {
        rows.push([
          new Date().toISOString(),
          attendance,
          invitationType,
          member4,
          mail4,
          finalFoodRestriction4,
          message,
          new Date().toLocaleString('es-AR'),
        ]);
      }
      if (member5) {
        rows.push([
          new Date().toISOString(),
          attendance,
          invitationType,
          member5,
          mail5,
          finalFoodRestriction5,
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
