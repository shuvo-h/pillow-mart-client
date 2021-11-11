import { useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile,signInWithEmailAndPassword,signOut   } from "firebase/auth";
import firebaseInitialization from "../firebase/firebase.init";

firebaseInitialization();
const useFirebase = () => {
    const [user,setUser] = useState({});
    const [isAdmin,setIsAdmin] = useState("");
    const [error,setError] = useState("");
    const [isLoading,setIsloading]= useState(true);

    const auth = getAuth();
    const registerNewUser = (newEmail,newPassword, newName, newPhotoUrl, newPhoneNumber,navigate,userFullObjInfo) =>{
        setIsloading(true)
        createUserWithEmailAndPassword(auth, newEmail, newPassword,newName,newPhotoUrl, newPhoneNumber,navigate,userFullObjInfo)
            .then((userCredential)=>{
                setUser(userCredential.user);
                console.log(userCredential.user);
                updateProfile(auth.currentUser,{
                    displayName: newName,
                    photoURL: newPhotoUrl,
                    phoneNumber: newPhoneNumber
                })
                    .then(()=>{
                        saveRegData(userFullObjInfo);
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

    // save new registration data to database 
    const saveRegData = (userFullObjInfo) =>{
        fetch('http://localhost:5000/users',{
            method:"POST",
            headers:{
                "content-type":"application/json"
            },
            body: JSON.stringify(userFullObjInfo)
        })
            .then(res=>res.json())
            .then(data=>{
                if (data.insertedId) {
                    alert("Registration Successful!")
                }
            })
        return;
    }

    // set if a user is Admin or not 
    useEffect(()=>{
        fetch(`http://localhost:5000/users?existEmail=${user.email}`)
            .then(res=>res.json())
            .then(data=>{
                if (data.role === "admin") {
                    setIsAdmin(data.role);
                }else{
                    setIsAdmin("")
                }
            })
    },[user.email])

    return {
        user,
        error,
        isAdmin,
        isLoading,
        logOut,
        setError,
        loginExistUser,
        registerNewUser,
    }
};

export default useFirebase;