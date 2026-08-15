import { describe, expect, it } from 'vitest';
import { escapeHtml, parseContactRequest } from '@/lib/contact';

const validRequest = {
  firstname: 'Masoud',
  lastname: 'Mousavi',
  email: 'masoud@example.com',
  phone: '',
  service: 'Frontend engineering',
  message: 'Hello from the portfolio.',
  website: '',
};

describe('parseContactRequest', () => {
  it('normalizes a valid contact request', () => {
    expect(
      parseContactRequest({
        ...validRequest,
        firstname: '  Masoud  ',
        message: '  Hello from the portfolio.  ',
      }),
    ).toEqual(validRequest);
  });

  it.each([
    ['missing required fields', { ...validRequest, firstname: '' }],
    ['invalid email address', { ...validRequest, email: 'not-an-email' }],
    ['oversized message', { ...validRequest, message: 'a'.repeat(5001) }],
    ['non-string field', { ...validRequest, phone: 123 }],
  ])('rejects %s', (_label, input) => {
    expect(parseContactRequest(input)).toBeNull();
  });
});

describe('escapeHtml', () => {
  it('escapes user-controlled HTML characters', () => {
    expect(escapeHtml(`<script>alert('xss') & "test"</script>`)).toBe(
      '&lt;script&gt;alert(&#39;xss&#39;) &amp; &quot;test&quot;&lt;/script&gt;',
    );
  });
});
