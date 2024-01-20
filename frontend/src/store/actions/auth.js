import store from '../store';
import axios from 'axios';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getIdToken,

} from 'firebase/auth'
import { app } from '../../firebase/firebase'
import { authActions } from '../reducers/auth';
import { toast } from "react-toastify";

const { dispatch } = store;