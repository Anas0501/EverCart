import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GithubAuthProvider, sendPasswordResetEmail } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC3OgUuxbj1A0q1ctFyt1PS8KWh22B3sqM",
	authDomain: "evercart-0501.firebaseapp.com",
	databaseURL: "https://evercart-0501-default-rtdb.asia-southeast1.firebasedatabase.app",
	projectId: "evercart-0501",
	storageBucket: "evercart-0501.appspot.com",
	messagingSenderId: "145334889702",
	appId: "1:145334889702:web:caba9ef067fd033af6df27",
	measurementId: "G-M1YS0S78ZG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const githubProvider = new GithubAuthProvider();
export default app;


// Function to sign in with Google using a pop-up -DONE
export const signInWithGooglePopUp = async () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;
		console.log('User signed in with Google:', user.displayName);
		return user;
	} catch (error) {
		console.error('Error signing in with Google:', error.message);
		throw error;
	}
};


// Function to register with Google using a pop-up -DONE
export const registerWithGooglePopUp = async () => {
	const auth = getAuth();
	const provider = new GoogleAuthProvider();

	try {
		const result = await signInWithPopup(auth, provider);
		const user = result.user;
		console.log('User registered with Google:', user.displayName);
		return user;
	} catch (error) {
		console.error('Error registering with Google:', error.message);
		throw error;
	}
};


// Function to log in with email and password -DONE
export const logInWithEmailAndPassword = async (email, password) => {
	try {
		const result = await signInWithEmailAndPassword(auth, email, password);
		const user = result.user;
		console.log('User logged in:', user.uid);
		return user;
	} catch (error) {
		console.error('Error logging in:', error.message);
		throw error;
	}
};

// registering a user with firebase -DONE
export const registerWithEmailAndPassword = async (email, password) => {
	try {
		const result = await createUserWithEmailAndPassword(auth, email, password);
		const user = result.user;
		console.log('User registered:', user.uid);
		return user;
	} catch (error) {
		console.error('Error registering user:', error.code, error.message);
		throw error;
	}
};

// this will be used to logout the user -DONE
export const logout = async () => {
	try {
		await signOut(auth);
		console.log('User logged out');
	} catch (error) {
		console.error('Error logging out:', error.code, error.message);
		throw error;
	}
};

// Function to sign in with GitHub using a pop-up
export const signInWithGitHubPopUp = async () => {
	try {
		const result = await signInWithPopup(auth, githubProvider);
		const user = result.user;
		console.log('User signed in with GitHub:', user.displayName);
		return user;
	} catch (error) {
		console.error('Error signing in with GitHub:', error.code, error.message);
		throw error;
	}
};

// Function to register with GitHub using a pop-up
export const registerWithGitHubPopUp = async () => {
	try {
		const result = await signInWithPopup(auth, githubProvider);
		const user = result.user;
		console.log('User registered with GitHub:', user.displayName);
		return user;
	} catch (error) {
		console.error('Error registering with GitHub:', error.code, error.message);
		throw error;
	}
};

// Function to send a password reset email
export const sendPasswordReset = async (email) => {
	try {
		await sendPasswordResetEmail(auth, email);
		console.log('Password reset email sent successfully');
	} catch (error) {
		console.error('Error sending password reset email:', error.code, error.message);
		throw error;
	}
};

