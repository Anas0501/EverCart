import store from '../store';
import axios from 'axios';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getIdToken,

} from 'firebase/auth'
import { app } from '../../config/firebase';
import { authActions } from '../reducers/auth';
import { toast } from "react-toastify";

const { dispatch } = store;

export const signInWithGoogle = () => async (dispatch) => {
	dispatch(authActions.requestStart()); 

	try {
		const auth = getAuth(app);
		const provider = new GoogleAuthProvider();
		const result = await signInWithPopup(auth, provider);

		const user = result.user;
		const idToken = await getIdToken(auth, user);

		dispatch(authActions.loadUser({ user, idToken }));
		toast.success("Signed in with Google successfully!"); 
	} catch (error) {
		dispatch(authActions.requestFail(error));
		toast.error("Failed to sign in with Google: " + error.message); 
	}
};