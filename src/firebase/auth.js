import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, RecaptchaVerifier, signInWithPhoneNumber, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail } from "firebase/auth";
import app from "./firebaseConfig";

const auth = getAuth(app);

export const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        return result.user;
    } catch (error) {
        console.error("Google Login Error:", error);
        throw error;
    }
};

export const signInWithPhone = async (phoneNumber) => {
    try {
        // Clear any existing recaptcha verifiers
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
        }
        
        // Create a new recaptcha verifier and store it on the window object
        window.recaptchaVerifier = new RecaptchaVerifier(auth, 'recaptcha-container', {
            size: 'invisible',
            callback: () => {
                // reCAPTCHA solved, allow signInWithPhoneNumber.
                console.log('reCAPTCHA verified');
            }
        });
        
        // Format phone number if needed (add country code if not present)
        const formattedPhone = phoneNumber.startsWith('+') ? phoneNumber : `+91${phoneNumber}`;
        
        // Get the verification ID from the confirmation result
        const confirmationResult = await signInWithPhoneNumber(
            auth, 
            formattedPhone, 
            window.recaptchaVerifier
        );
        
        return confirmationResult;
    } catch (error) {
        console.error("Phone Login Error:", error);
        // Reset recaptcha verifier on error
        if (window.recaptchaVerifier) {
            window.recaptchaVerifier.clear();
        }
        throw error;
    }
};

export const signUpWithEmail = async (email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Email Signup Error:", error);
        throw error;
    }
};

export const loginWithEmail = async (email, password) => {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        return userCredential.user;
    } catch (error) {
        console.error("Email Login Error:", error);
        throw error;
    }
};

export const resetPassword = async (email) => {
    try {
        await sendPasswordResetEmail(auth, email);
        return true;
    } catch (error) {
        console.error("Password Reset Error:", error);
        throw error;
    }
};

export const logout = async () => {
    try {
        await signOut(auth);
    } catch (error) {
        console.error("Logout Error:", error);
        throw error;
    }
};