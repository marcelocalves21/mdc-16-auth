import { getAuth, signOut } from "firebase/auth";


export const logOut = () => {
    signOut(getAuth())
    .then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
        console(error)
    });
}