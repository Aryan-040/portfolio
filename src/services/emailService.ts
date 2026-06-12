

import emailjs from "@emailjs/browser";

export type ContactPayload = {
  name: string;
  email: string;
  subject?: string;
  message: string;
};

function getEnvVar(name: 'VITE_EMAILJS_SERVICE_ID' | 'VITE_EMAILJS_TEMPLATE_ID' | 'VITE_EMAILJS_PUBLIC_KEY'): string {
  const val = import.meta.env[name];
  if (!val || typeof val !== 'string') {
    throw new Error(`${name} is not defined. Please set it in your Vite environment variables.`);
  }
  return val;
}

/**
 * sendContactEmail
 * Sends an email using the EmailJS browser SDK.
 * Throws an error if sending fails or if env vars are missing.
 */
export async function sendContactEmail(payload: ContactPayload): Promise<void> {
  const serviceId = getEnvVar('VITE_EMAILJS_SERVICE_ID');
  const templateId = getEnvVar('VITE_EMAILJS_TEMPLATE_ID');
  const publicKey = getEnvVar('VITE_EMAILJS_PUBLIC_KEY');

  const templateParams = {
    name: payload.name,
    email: payload.email,
    subject: payload.subject,
    message: payload.message,
  };

  // EmailJS returns a promise
  await emailjs.send(serviceId, templateId, templateParams, publicKey);
}

