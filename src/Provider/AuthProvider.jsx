import auth from "@/firebase/firebase.config";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [cars, setCars] = useState([]);

    console.log('---->>>>>',user)
    const [loading, setLoading] = useState(true)
    const axiosPublic=useAxiosPublic()

    const registerUser = async (email, password) => {
        setLoading(true);
        try {
            return await createUserWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    };
    const login = async (email, password) => {
        setLoading(true);
        try {
            return await signInWithEmailAndPassword(auth, email, password);
        } finally {
            setLoading(false);
        }
    };
    const updateUserProfile = (name, photo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        })

    }
    const signInWithGoogle = async () => {
        setLoading(true);
        try {
            return await signInWithPopup(auth, googleProvider);
        } finally {
            setLoading(false);
        }
    };
    const logout = async () => {
        setLoading(true);
        try {
            await signOut(auth);
            await axiosPublic.post("/api/auth/logout", {}, { withCredentials: true });
            setUser(null);
        } catch (error) {
            console.error("Logout Error:", error);
        } finally {
            setLoading(false);
        }
    };

 
// console.log(user?.displayName,user?.photoURL)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async(currentUser) => {
            // setUser(currentUser);
            setLoading(false);

            if (currentUser?.email && currentUser?.displayName && currentUser?.photoURL ) {
                const userData = { email: currentUser.email, name: currentUser.displayName, photoUrl: currentUser.photoURL };

                await axiosPublic.post("/api/auth/login", userData, { withCredentials: true })
                    .then(res =>{console.log("Login success:", res.data); setUser(res?.data?.data)})
                    .catch(error => console.error("Login error:", error));
                    // setUser(res?.data)
            } else {
                await axiosPublic.post("/api/auth/logout", {}, { withCredentials: true })
                    .then(res => console.log("Logout:", res.data))
                    .catch(error => console.error("Logout error:", error));
                  
            }
        })
        return () => unsubscribe()
    }, [axiosPublic, user?.photoURL])


    const authInfo = {
        registerUser,
        login,
        updateUserProfile,
        logout,
        user,
        setUser,
        loading,
        setLoading,
        signInWithGoogle,
        cars,
        setCars
    }
    return (
        <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
    );
};

export default AuthProvider;