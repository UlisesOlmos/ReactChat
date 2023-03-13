import {
    GoogleAuthProvider,
    getAuth,
    onAuthStateChanged,
    signOut,
    signInWithPopup,
} from 'firebase/auth';

import { useUser } from '../contexts/UserContext';
import { auth } from '../firebase-config';

const useAuth = () => {
    const { setUser, authError, setAuthError } = useUser();

    const handleSignIn = async (signInMethod) => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            switch (signInMethod) {
                case 'google':
                    await signInWithPopup(auth, provider)
                    setAuthError('')
                    break;

                default:
                    return;
            }
        } catch (error) {
            setAuthError(error?.code);
            console.error(error?.code);
        }
    };

    const handleSignUp = async (signUpMethod) => {
        const provider = new GoogleAuthProvider();
        const auth = getAuth();

        try {
            switch (signUpMethod) {
                case 'google':
                    await signInWithPopup(auth, provider)
                    setAuthError('')
                    break;

                default:
                    return;
            }
        } catch (error) {
            setAuthError(error?.code);
            console.error(error?.code);
        }
    };

    const signout = () => signOut(auth);

    onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

    return {
        authError,
        setAuthError,
        handleSignIn,
        handleSignUp,
        signout,
    };
};

export default useAuth;