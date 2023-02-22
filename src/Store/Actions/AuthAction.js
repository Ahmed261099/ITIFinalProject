import { auth } from "../../Firebase";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth'

const registerStart = () => ({
    type: "REGISTER_START"
});

const registerSuccess = (user) => ({
    type: "REGISTER_SUCCESS",
    payload: user
});

const registerFail = (error) => ({
    type: "REGISTER_FAIL",
    payload: error
});

const loginStart = () => ({
    type: "LOGIN_START"
});

const loginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user
});

const loginFail = (error) => ({
    type: "LOGIN_FAIL",
    payload: error
});

const logoutStart = () => ({
    type: "LOGOUT_START"
});

const logoutSuccess = (user) => ({
    type: "LOGOUT_SUCCESS",
    payload: user
});

const logoutFail = (error) => ({
    type: "LOGOUT_FAIL",
    payload: error
});

export const setUser = ( user ) => ({
    type: "SET_USER",
    payload: user
})

export const registerInitiate = ( email, password, userName, phone ) => {
    return function (dispatch) {
        dispatch(registerStart());
        createUserWithEmailAndPassword ( auth, email, password )
        .then(({ user }) => {
            updateProfile (user, {
                displayName: userName,
                phoneNumber: phone,
            })
            dispatch(registerSuccess(user))
            console.log(user);
        })
        .catch((error) => {
            dispatch(registerFail(error.message))
            console.log(error)
        })
    }
}

export const loginInitiate = ( email, password ) => {
    return function (dispatch) {
        dispatch(loginStart());
        signInWithEmailAndPassword ( auth, email, password)
        .then(({ user }) => {
            dispatch(loginSuccess(user))
            console.log(user);
        })
        .catch((error) => 
        {
            dispatch(loginFail(error.message))
            console.log(error)
        })
    }
}

export const logoutInitiate = () => {
    return function (dispatch) {
        dispatch(logoutStart());
        signOut ( auth )
        .then((res) => {
            dispatch(logoutSuccess())
            console.log("logged out");
        })
        .catch((error) => dispatch(logoutFail(error.message)))
    }
}

