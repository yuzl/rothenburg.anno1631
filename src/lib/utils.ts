import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Obfuscates an email address to protect it from spam bots
 * Uses multiple techniques: character encoding, HTML entities, and JavaScript decoding
 */
export function obfuscateEmail(email: string): {
  encoded: string;
  entities: string;
  reversed: string;
  rot13: string;
  mixed: string;
} {
  // Method 1: Character encoding (base64-like approach)
  const encoded = btoa(email).replace(/[A-Za-z]/g, char =>
    String.fromCharCode(char.charCodeAt(0) + 1)
  );

  // Method 2: HTML entities
  const entities = email
    .split('')
    .map(char => `&#${char.charCodeAt(0)};`)
    .join('');

  // Method 3: Simple reversal with offset
  const reversed = email
    .split('')
    .reverse()
    .map(char => String.fromCharCode(char.charCodeAt(0) + 1))
    .join('');

  // Method 4: ROT13 encoding
  const rot13 = email.replace(/[A-Za-z]/g, char => {
    const code = char.charCodeAt(0);
    return String.fromCharCode(
      code <= 90 ? ((code - 65 + 13) % 26) + 65 : ((code - 97 + 13) % 26) + 97
    );
  });

  // Method 5: Mixed approach - split and encode differently
  const [local, domain] = email.split('@');
  const mixed = `${btoa(local)}@${domain
    .split('')
    .map(c => `&#${c.charCodeAt(0)};`)
    .join('')}`;

  return { encoded, entities, reversed, rot13, mixed };
}

/**
 * Decodes an obfuscated email address
 */
export function decodeEmail(
  obfuscated: string,
  method: 'encoded' | 'entities' | 'reversed' | 'rot13' | 'mixed'
): string {
  switch (method) {
    case 'encoded':
      return atob(
        obfuscated.replace(/[A-Za-z]/g, char => String.fromCharCode(char.charCodeAt(0) - 1))
      );
    case 'entities':
      return obfuscated
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
        .replace(/&amp;/g, '&');
    case 'reversed':
      return obfuscated
        .split('')
        .map(char => String.fromCharCode(char.charCodeAt(0) - 1))
        .reverse()
        .join('');
    case 'rot13':
      return obfuscated.replace(/[A-Za-z]/g, char => {
        const code = char.charCodeAt(0);
        return String.fromCharCode(
          code <= 90 ? ((code - 65 + 13) % 26) + 65 : ((code - 97 + 13) % 26) + 97
        );
      });
    case 'mixed':
      const [encodedLocal, encodedDomain] = obfuscated.split('@');
      const local = atob(encodedLocal);
      const domain = encodedDomain
        .replace(/&#(\d+);/g, (_, code) => String.fromCharCode(parseInt(code)))
        .replace(/&amp;/g, '&');
      return `${local}@${domain}`;
    default:
      return obfuscated;
  }
}
