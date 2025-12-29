import { atom } from 'jotai';
import { atomWithStorage } from 'jotai/utils';
import { User } from 'firebase/auth';

// Persist auth state
export const userAtom = atomWithStorage<User | null>('qr-transfer-user', null);

// Loading state for auth operations
export const authLoadingAtom = atom(true);

// Error state
export const authErrorAtom = atom<string | null>(null);
