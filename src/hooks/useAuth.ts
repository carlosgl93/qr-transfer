import { useAtom } from 'jotai';
import { useCallback, useEffect } from 'react';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut as firebaseSignOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth, googleProvider } from '@/config/firebase';
import { authErrorAtom, authLoadingAtom, userAtom } from './atoms';

export function useAuth() {
  const [user, setUser] = useAtom(userAtom);
  const [loading, setLoading] = useAtom(authLoadingAtom);
  const [error, setError] = useAtom(authErrorAtom);

  // Listen to auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [setUser, setLoading]);

  const signIn = useCallback(
    async (email: string, password: string) => {
      try {
        setLoading(true);
        setError(null);
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } catch (err: any) {
        setError(err.message || 'Failed to sign in');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setUser],
  );

  const signUp = useCallback(
    async (email: string, password: string) => {
      try {
        setLoading(true);
        setError(null);
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        setUser(userCredential.user);
      } catch (err: any) {
        setError(err.message || 'Failed to sign up');
        throw err;
      } finally {
        setLoading(false);
      }
    },
    [setLoading, setError, setUser],
  );

  const signInWithGoogle = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const userCredential = await signInWithPopup(auth, googleProvider);
      setUser(userCredential.user);
    } catch (err: any) {
      setError(err.message || 'Failed to sign in with Google');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setUser]);

  const signOut = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      await firebaseSignOut(auth);
      setUser(null);
    } catch (err: any) {
      setError(err.message || 'Failed to sign out');
      throw err;
    } finally {
      setLoading(false);
    }
  }, [setLoading, setError, setUser]);

  return {
    user,
    loading,
    error,
    signIn,
    signUp,
    signInWithGoogle,
    signOut,
  };
}
