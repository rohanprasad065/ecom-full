import { create } from "zustand";
import type { User as FirebaseUser } from "firebase/auth"; // ✅ type-only import
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

interface User {
  uid: string;
  email: string;
  name?: string;
  role?: "buyer" | "seller";
}

interface AuthState {
  user: User | null;
  loading: boolean;
  setUser: (user: User) => void;
  logout: () => void;
  initializeAuthListener: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  setUser: (user) => set({ user }),

  logout: () => set({ user: null }),

  initializeAuthListener: () => {
    onAuthStateChanged(auth, (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        const currentUser: User = {
          uid: firebaseUser.uid,
          email: firebaseUser.email || "",
        };
        set({ user: currentUser, loading: false });
      } else {
        set({ user: null, loading: false });
      }
    });
  },
}));
