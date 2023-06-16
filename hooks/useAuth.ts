import { useEffect, useState } from "react";

import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

/**
 * Firebase authentication hook.
 * @returns Access to main auth service using email and password strategy, plus user object and loading state flag.
 */
export default function useAuth() {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(false);

  /**
   * Wrapper for login users with loading state flag for conditional renders.
   * @param email An active user registered in your firebase project.
   * @param password User's password.
   */
  const login = async (email: string, password: string) => {
    setLoading(true);
    const user = await signInWithEmailAndPassword(getAuth(), email, password)
    .catch(() => {
      setError(true);
    });

    if(user) {
      AsyncStorage.setItem('@user', JSON.stringify(user));
    }

    setLoading(false);
  };

  /**
   * Wrapper for logout users.
   */
  const logout = async () => {
    await signOut(getAuth());
    // await AsyncStorage.removeItem('@user');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(getAuth(), (user) => {
      if (user) {
        console.log('if');
        setUser(user);
      } else {
        console.log('else');
        setUser(null);
      }
      setLoading(false);
    });

    AsyncStorage.getItem("@user").then((value) => {
      if(value){
        return JSON.parse(value) as User;
      }
    }).then((value) => {
      // console.log(value);
      // if(value) {
        setUser(value as User);
      // }
    })
    .catch((err: any) => { console.error(err) });

    // console.log('asyncsotrage', user);
    
    return () => {
      unsubscribe();
    }
  }, []);

  return { error, loading, user, login, logout };
}
