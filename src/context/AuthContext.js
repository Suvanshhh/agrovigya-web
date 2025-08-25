import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebaseConfig";
import { getUserProfile, updateLastLogin } from "../firebase/db";

const auth = getAuth(app);
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
            setUser(currentUser);
            
            if (currentUser) {
                try {
                    // Get user profile from Firestore
                    const profile = await getUserProfile(currentUser.uid);
                    setUserProfile(profile);
                    
                    // Update last login timestamp
                    await updateLastLogin(currentUser.uid);
                } catch (error) {
                    console.error("Error loading user profile:", error);
                    setUserProfile(null);
                }
            } else {
                setUserProfile(null);
            }
            
            setLoading(false);
        });
        
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ 
            user, 
            userProfile, 
            loading,
            setUserProfile 
        }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
