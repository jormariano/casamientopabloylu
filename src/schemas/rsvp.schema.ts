import { z } from 'zod';

export const guestSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, 'Ingresá el nombre completo.')
    .max(80, 'El nombre es demasiado largo.'),

  foodRestriction: z.enum([
    'ninguna',
    'vegetariano',
    'vegano',
    'celiaco',
    'otra',
  ]),
});

export const RSVPSchema = z
  .object({
    attendance: z.enum(['si', 'no'], {
      message: 'Seleccioná si vas a asistir.',
    }),

    invitationType: z.enum(['individual', 'familiar']).optional(),

    email: z
      .string()
      .trim()
      .email('Ingresá un correo electrónico válido.')
      .optional(),

    guests: z.array(guestSchema).default([]),

    message: z
      .string()
      .trim()
      .max(300, 'El mensaje puede tener hasta 300 caracteres.')
      .optional(),
  })
  .superRefine((data, ctx) => {
    // Si asiste, debe elegir el tipo de invitación
    if (data.attendance === 'si' && !data.invitationType) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['invitationType'],
        message: 'Seleccioná el tipo de invitación.',
      });
    }

    // Si asiste, debe haber al menos un invitado
    if (data.attendance === 'si' && data.guests.length === 0) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['guests'],
        message: 'Ingresá al menos un invitado.',
      });
    }

    // Si asiste, el email es obligatorio
    if (data.attendance === 'si' && !data.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ['email'],
        message: 'Ingresá un correo electrónico.',
      });
    }
  });

export type RSVPFormData = z.infer<typeof RSVPSchema>;
