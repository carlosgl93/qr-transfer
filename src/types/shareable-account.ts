import { BankAccount } from './bank-account';

/**
 * Shareable account with token for public access
 */
export interface ShareableAccount extends BankAccount {
  token: string;
  createdBy: string; // Admin user ID
  claimed?: boolean;
  claimedAt?: Date;
}
