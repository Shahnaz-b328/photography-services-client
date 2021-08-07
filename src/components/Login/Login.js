import React from 'react';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import firebaseConfig from './firebase.config';
const Login = () => {
    const [logInUser, setLogInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const googleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result);
                const { displayName, email } = result.user;
                const signInUser = { UserName: displayName, email }
                setLogInUser(signInUser);
                history.replace(from);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                var email = error.email;
                var credential = error.credential;

            });
    }
    return (
        <div className="mt-5 mx-5 my-5 d-flex justify-content-center">
            <button onClick={googleSignIn} style={{ backgroundColor: 'lightskyblue', border: 'none' }}><FontAwesomeIcon style={{ color: 'lightsalmon' }} className="fa-2x" icon={faGoogle} />Sign Up With Login</button>
        </div>
    );
};

export default Login;