import store from '../store';
import axios from 'axios';
import {
	getAuth,
	signInWithEmailAndPassword,
	signInWithPopup,
	GoogleAuthProvider,
	getIdToken,
	
} from 'firebase/auth'

import { authAction } from '../reducers/auth';
import { toast } from "react-toastify";

const { dispatch } = store;

