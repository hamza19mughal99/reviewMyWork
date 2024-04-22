import axios from "axios";
import { errorNotify } from "../../Util/Toast";

export const AuthLogin = (inputData) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGIN_REQUEST",
        });

        const { data } = await axios.post("auth/login", inputData);

        dispatch({
            type: "LOGIN_SUCCESS",
            payload: data,
            success: true,
        });

        if (data) {
            localStorage.setItem("user", JSON.stringify(data));
        }
    }
    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "LOGIN_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const AuthRegister = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "REGISTER_REQUEST",
        });

        const { data } = await axios.post("auth/register", d);

        dispatch({
            type: "REGISTER_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "REGISTER_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const ForgotPassword = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "FORGET_PASSWORD_REQUEST",
        });

        const { data } = await axios.post("auth/forgot-password", d);

        dispatch({
            type: "FORGET_PASSWORD_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "FORGET_PASSWORD_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const UpdatePassword = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "CHANGE_PASSWORD_REQUEST",
        });

        const { data } = await axios.post("auth/change-password", d);

        dispatch({
            type: "CHANGE_PASSWORD_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "CHANGE_PASSWORD_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditProfile = (inputData) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_PROFILE_REQUEST",
        });

        const { data } = await axios.post("auth/update-profile", inputData);

        dispatch({
            type: "EDIT_PROFILE_SUCCESS",
            payload: data,
            success: true,
        });

        localStorage.setItem("user", JSON.stringify(data));
    }
    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "EDIT_PROFILE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const LoggedInUser = (inputData) => async (dispatch) => {
    try {
        dispatch({
            type: "LOGGED_IN_REQUEST",
        });

        const { data } = await axios.post("auth/get-current-user", { email: inputData });

        dispatch({
            type: "LOGGED_IN_SUCCESS",
            payload: data,
            success: true,
        });

        localStorage.setItem("user", JSON.stringify(data));
    }
    catch (e) {
        dispatch({
            type: "LOGGED_IN_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const EditPassword = (inputData) => async (dispatch) => {
    try {
        dispatch({
            type: "EDIT_PASSWORD_REQUEST",
        });

        const { data } = await axios.post("auth/update-password", inputData);

        dispatch({
            type: "EDIT_PASSWORD_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "EDIT_PASSWORD_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};