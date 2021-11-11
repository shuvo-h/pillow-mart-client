import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import firebaseInitialization from "../firebase/firebase.init";

firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [error,setError] = useState("");
    const [isLoading,setIsloading]= useState(true);

    const auth = getAuth();
    const registerNewUser = (newEmail,newPassword, newName, newPhotoUrl, newPhoneNumber,navigate) =>{
        setIsloading(true)
        createUserWithEmailAndPassword(auth, newEmail, newPassword,newName,newPhotoUrl, newPhoneNumber,navigate)
            .then((userCredential)=>{
                setUser(userCredential.user);
                console.log(userCredential.user);
                updateProfile(auth.currentUser,{
                    displayName: newName,
                    photoURL: newPhotoUrl,
                    phoneNumber: newPhoneNumber
                })
                    .then(()=>{
                        navigate("/home");
                    })
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }

    const loginExistUser = (existEmail,existPassword,navigate,locationFrom) =>{
        setIsloading(true);
        signInWithEmailAndPassword(auth,existEmail,existPassword)
            .then(userCrediential =>{
                if (userCrediential.user) {
                    setUser(userCrediential.user)
                    navigate(locationFrom, {replace: true})
                }
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
            
    }

    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            if (user) {
                setUser(user)
            }else{
                setUser({})
            }
            setIsloading(false)
        })
    },[auth])

    const logOut = () =>{
        setIsloading(true);
        signOut(auth)
            .then(()=>{
                setUser({})
            })
            .catch(error=>setError(error.message))
            .finally(()=>setIsloading(false))
    }

    return {
        user,
        error,
        isLoading,
        logOut,
        setError,
        loginExistUser,
        registerNewUser,
    }
};

export default useFirebase;