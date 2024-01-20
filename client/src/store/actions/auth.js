import store from '../store';
import axios from 'axios';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getIdToken,
	
} from 'firebase/auth'
import {app} from '../../firebase/firebase'
import { authActions } from '../reducers/auth';
import { toast } from "react-toastify";

const { dispatch } = store;

export const signInWithGoogle = async () => {
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();

	try {
		const res = await signInWithPopup(auth, provider);
		console.log(res);

		const token = await getIdToken(res.user);
		console.log(token);
		dispatch(authActions.loadUser({ user: res.user, idToken: token }));
	} catch (err) {
		console.log(err);
		toast.error(err.message);
		dispatch(authActions.requestFail(err.message));
		dispatch(authActions.resetAuth());
		toast.error("Request failed");

	}
};