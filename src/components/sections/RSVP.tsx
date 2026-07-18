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
import { useState } from 'react';
import clsx from 'clsx';

const RSVP = () => {
  const [invitationConfirmation, setInvitationConfirmation] = useState('');
  const [invitationType, setInvitationType] = useState('');

  const classText = 'text-1xl text-ink';

  return (
    <Container>
      <Section className="bg-olive">
        <SectionTitle>Confirmá tu asistencia</SectionTitle>
        <h3 className="text-1xl text-cream text-center">
          (antes del 15 de octubre de 2026)
        </h3>
        <form className="bg-cream rounded-xl p-6 flex flex-col gap-6 shadow-lg">
          <RadioButton
            label="¿Vas a asistir?"
            name="attendance"
            options={attendanceOptions}
            onValueChange={setInvitationConfirmation}
            className="text-1xl text-ink text-center"
            required
          />

          <div
            className={clsx(
              'overflow-hidden transition-all duration-500',
              invitationConfirmation === 'si'
                ? 'max-h-250 opacity-100 mt-6'
                : 'max-h-0 opacity-0',
            )}
          >
            {invitationConfirmation === 'no' && (
              <>
                <h3 className={classText}>Lamentamos que te lo pierdas!</h3>
              </>
            )}
            {invitationConfirmation === 'si' && (
              <>
                <div className="border-t border-olive/20 my-6" />
                <p className="text-1xl text-ink text-center border-2 border-rust rounded-md p-1.5">
                  Por favor, completa el form según tu invitación
                </p>
                <RadioButton
                  label="Tu invitación fue:"
                  name="invitationType"
                  className="text-1xl text-ink text-center"
                  options={invitationOptions}
                  onValueChange={setInvitationType}
                />
                <div className="border-t border-olive/20 my-6" />
                <div
                  className={clsx(
                    'overflow-hidden transition-all duration-500',
                    invitationType === 'individual'
                      ? 'max-h-250 opacity-100 mt-6'
                      : 'max-h-0 opacity-0',
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
                      ></Input>
                      <RadioButton
                        label="Restricción alimentaria:"
                        name="foodRestriction"
                        options={foodRestrictions}
                        className={classText}
                      ></RadioButton>
                    </>
                  )}
                  {invitationType === 'familiar' && (
                    <>
                      <Input
                        label="Integrante 1"
                        name="member1"
                        placeholder="Nombre y apellido"
                        className={classText}
                      />

                      <RadioButton
                        label="Restricción alimentaria"
                        name="foodRestriction1"
                        options={foodRestrictions}
                        className={classText}
                      />

                      <Input
                        label="Integrante 2"
                        name="member2"
                        placeholder="Nombre y apellido"
                        className={classText}
                      />

                      <RadioButton
                        label="Restricción alimentaria"
                        name="foodRestriction2"
                        options={foodRestrictions}
                        className={classText}
                      />
                      <Input
                        label="Integrante 3"
                        name="member3"
                        placeholder="Nombre y apellido"
                        className={classText}
                      />

                      <RadioButton
                        label="Restricción alimentaria"
                        name="foodRestriction3"
                        options={foodRestrictions}
                        className={classText}
                        layout="grid"
                      />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </form>
      </Section>
    </Container>
  );
};

export default RSVP;
