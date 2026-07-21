'use client';

import Container from '../ui/Container';
import Section from '../ui/Section';
import SectionTitle from '../ui/SectionTitle';
import Input from '../ui/Input';
import RadioButton from '../ui/RadioButton';
import {
  foodRestrictions,
  attendanceOptions,
  invitationOptions,
} from '@/src/constants/rsvp.constants';
import Button from '../ui/Button';
import LineBorder from '../ui/LineBorder';
import { useState } from 'react';
import clsx from 'clsx';

const RSVP = () => {
  const [invitationConfirmation, setInvitationConfirmation] = useState('');
  const [invitationType, setInvitationType] = useState('');
  const [members, setMembers] = useState([1, 2]);

  const handleAddMember = () => {
    setMembers((prev) => [...prev, prev.length + 1]);
  };

  const classText = 'text-1xl text-ink';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Ver lo que sale del formulario
    console.log('Datos enviados:', data);

    try {
      const response = await fetch('/api/rsvp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert('¡Gracias por confirmar tu asistencia!');
      } else {
        alert('Hubo un error al enviar la confirmación.');
      }
    } catch (error) {
      console.error(error);
      alert('Error de conexión.');
    }
  };

  return (
    <Container>
      <Section className="bg-olive">
        <SectionTitle>Confirmá tu asistencia</SectionTitle>
        <h3 className="text-1xl text-cream text-center">
          (antes del 1 de noviembre de 2026)
        </h3>
        <form
          onSubmit={handleSubmit}
          className="bg-cream rounded-xl p-6 flex flex-col shadow-lg"
        >
          <RadioButton
            label="¿Vas a asistir?"
            name="attendance"
            options={attendanceOptions}
            onValueChange={setInvitationConfirmation}
            className="text-1xl text-ink text-center"
            layout="grid"
            variant="button"
            required
          />
          <div
            className={clsx(
              'transition-opacity duration-500',
              invitationConfirmation ? 'opacity-100' : 'opacity-0 hidden',
            )}
          >
            {invitationConfirmation === 'no' && (
              <>
                <h3
                  className={clsx(
                    classText,
                    'text-center',
                    'mt-10',
                    'font-bold',
                  )}
                >
                  Lamentamos que te lo pierdas!
                </h3>
              </>
            )}
            {invitationConfirmation === 'si' && (
              <>
                <LineBorder />
                <p className="text-1xl text-ink text-center border-2 border-rust rounded-md p-1.5">
                  Tu invitación fue:
                </p>
                <RadioButton
                  name="invitationType"
                  options={invitationOptions}
                  onValueChange={setInvitationType}
                  className={classText}
                  layout="flex"
                  variant="button"
                />
                <LineBorder />
                <div
                  className={clsx(
                    'transition-opacity duration-500',
                    invitationType ? 'opacity-100' : 'opacity-0 hidden',
                  )}
                >
                  {invitationType === 'individual' && (
                    <>
                      <Input
                        label="Nombre y apellido:"
                        name="fullName"
                        placeholder="Nombre y apellido"
                        type="text"
                        required
                        autoComplete="name"
                        maxLength={80}
                        className={classText}
                      />
                      <Input
                        label="Correo electrónico:"
                        name="mail"
                        placeholder="Correo electrónico"
                        type="mail"
                        required
                        maxLength={80}
                        className={classText}
                      ></Input>
                      <RadioButton
                        label="Preferencia alimentaria:"
                        name="foodRestriction"
                        options={foodRestrictions}
                        className={classText}
                        layout="grid"
                        variant="radio"
                      ></RadioButton>
                    </>
                  )}
                  {invitationType === 'familiar' && (
                    <>
                      {members.map((member) => (
                        <div key={member}>
                          <Input
                            label={`Integrante ${member}`}
                            name={`member${member}`}
                            placeholder="Nombre y apellido"
                            className={classText}
                          />
                          <Input
                            label="Correo electrónico:"
                            name="mail"
                            placeholder="Correo electrónico"
                            type="mail"
                            required
                            maxLength={80}
                            className={classText}
                          ></Input>
                          <RadioButton
                            label="Preferencia alimentaria"
                            name={`foodRestriction${member}`}
                            options={foodRestrictions}
                            className={classText}
                            layout="grid"
                            variant="radio"
                          />

                          <LineBorder />
                        </div>
                      ))}
                      <Button
                        label="Agregar invitado"
                        onClick={handleAddMember}
                        className={clsx(
                          'w-3xs',
                          'flex',
                          'items-center',
                          'justify-center',
                          'rounded-sm',
                          'border',
                          'border-rust',
                          'px-6',
                          'py-3',
                          'transition-all',
                          'duration-200',
                          'bg-rust',
                          'text-1xl',
                          'text-cream',
                        )}
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
          <LineBorder />
          <div className="mb-3 flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-medium text-ink">
              Mensaje para los novios (opcional)
            </label>

            <textarea
              id="message"
              name="message"
              placeholder="Escribiles unas lindas palabras..."
              rows={5}
              maxLength={500}
              className="
      w-full
      rounded-lg
      border
      border-olive/20
      bg-white
      px-4
      py-2
      text-ink
      placeholder:text-gray-400
      focus:border-rust
      focus:outline-none
      focus:ring-2
      focus:ring-rust/20
      transition-all
      duration-200
      resize-none
    "
            />
          </div>
          <LineBorder />
          <Button
            type="submit"
            label="Enviar"
            className={clsx(
              'w-3xs',
              'flex',
              'items-center',
              'justify-center',
              'rounded-sm',
              'border',
              'border-rust',
              'px-6',
              'py-3',
              'transition-all',
              'duration-200',
              'bg-rust',
              'text-1xl',
              'text-cream',
            )}
          />
        </form>
      </Section>
    </Container>
  );
};

export default RSVP;
