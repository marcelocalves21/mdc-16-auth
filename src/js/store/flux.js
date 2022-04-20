import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			signIn : async (email, password) => {
				try{
					await signInWithEmailAndPassword(getAuth(), email, password)
					.then((userCredential) => {
				 		console.log(userCredential)
					})
				}catch{(error) => {
				  const errorCode = error.code;
				  const errorMessage = error.message;
				  alert(errorMessage)
				}};
			}
		}
	};
};

export default getState;
