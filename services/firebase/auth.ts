"use client";

import {
  signInWithEmailAndPassword,
  signOut as firebaseSignOut,
} from "firebase/auth";
import { auth } from "@/lib/firebase";

export async function signIn(
  email: string,
  password: string
): Promise<string> {
  const credential = await signInWithEmailAndPassword(auth, email, password);
  return credential.user.getIdToken();
}

export async function signOut(): Promise<void> {
  await firebaseSignOut(auth);
}
