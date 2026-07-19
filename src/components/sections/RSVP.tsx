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

  return (
    <Container>
      <Section className="bg-olive">
        <SectionTitle>Confirmá tu asistencia</SectionTitle>
        <h3 className="text-1xl text-cream text-center">
          (antes del 15 de octubre de 2026)
        </h3>
        <form className="bg-cream rounded-xl p-6 flex flex-col shadow-lg">
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
                  className={classText}
                  options={invitationOptions}
                  onValueChange={setInvitationType}
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
                      ></Input>
                      <RadioButton
                        label="Restricción alimentaria:"
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

                          <RadioButton
                            label="Restricción alimentaria"
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
          <Button
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
