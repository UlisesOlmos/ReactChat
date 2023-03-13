import { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useUser } from "../../contexts/UserContext";
import { auth } from "../../firebase-config";
import { onAuthStateChanged } from "firebase/auth";

import "./SignInForm.css";

const SignInForm = () => {
	const { user, setUser } = useUser();
	const { handleSignIn } = useAuth(); // authError
	const navigate = useNavigate();

	useEffect(() => {
		if (user) navigate("/");
	}, [user, navigate]);

	onAuthStateChanged(auth, (currentUser) => setUser(currentUser));

	return (
		<div className="signInForm">
			<div className="signInForm__content">
				<button onClick={() => handleSignIn("google")} className="signIn__google">Sign In With Google</button>
			</div>
		</div>
	);
};

export default SignInForm;
