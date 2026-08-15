export interface ContactRequest {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  website: string;
}

const FIELD_LIMIT = 200;
const MESSAGE_LIMIT = 5000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const CONTACT_FIELDS = [
  'firstname',
  'lastname',
  'email',
  'phone',
  'service',
  'message',
  'website',
] as const satisfies ReadonlyArray<keyof ContactRequest>;

export function escapeHtml(value: string) {
  return value.replace(
    /[&<>'"]/g,
    (character) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      })[character]!,
  );
}

export function parseContactRequest(value: unknown): ContactRequest | null {
  if (!value || typeof value !== 'object') return null;

  const input = value as Record<string, unknown>;
  if (CONTACT_FIELDS.some((field) => typeof input[field] !== 'string')) return null;

  const contact = Object.fromEntries(
    CONTACT_FIELDS.map((field) => [field, (input[field] as string).trim()]),
  ) as unknown as ContactRequest;

  const shortFieldsAreValid = [
    contact.firstname,
    contact.lastname,
    contact.email,
    contact.phone,
    contact.service,
    contact.website,
  ].every((field) => field.length <= FIELD_LIMIT);

  if (
    !contact.firstname ||
    !contact.email ||
    !contact.message ||
    !EMAIL_PATTERN.test(contact.email) ||
    !shortFieldsAreValid ||
    contact.message.length > MESSAGE_LIMIT
  ) {
    return null;
  }

  return contact;
}
