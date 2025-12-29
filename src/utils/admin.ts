// Admin configuration and utilities

export const ADMIN_EMAIL = 'cgumucio93@gmail.com';

/**
 * Check if a user is an admin
 */
export function isAdmin(email: string | null | undefined): boolean {
  return email === ADMIN_EMAIL;
}

/**
 * Generate a unique shareable token for accounts
 */
export function generateShareableToken(): string {
  return `${Date.now()}-${Math.random().toString(36).substring(2, 15)}`;
}
