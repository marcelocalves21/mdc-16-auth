import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const SignIn = (email, password) => {
    return signInWithEmailAndPassword(getAuth(), email, password)
    .then((userCredential) => {
     console.log(userCredential)
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage)
    });
}
