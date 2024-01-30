import axios from "axios";
import { errorNotify } from "../../Util/Toast";

export const ArtistGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "ARTIST_GET_REQUEST",
        });

        const { data } = await axios.get("artist/get");

        dispatch({
            type: "ARTIST_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "ARTIST_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const ReviewerGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "REVIEWER_GET_REQUEST",
        });

        const { data } = await axios.get("reviewer/get");

        dispatch({
            type: "REVIEWER_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "REVIEWER_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const UserUpdate = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "USER_UPDATE_REQUEST",
        });

        const { data } = await axios.put("updated-user", d);

        dispatch({
            type: "USER_UPDATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "USER_UPDATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const DashboardGetData = () => async (dispatch) => {
    try {
        dispatch({
            type: "DASHBOARD_GET_REQUEST",
        });

        const { data } = await axios.get("/dashboard/get");

        dispatch({
            type: "DASHBOARD_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "DASHBOARD_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const AllPaymentGetData = () => async (dispatch) => {
    try {
        dispatch({
            type: "ALL_PAYMENT_GET_REQUEST",
        });

        const { data } = await axios.get("/all-payment/get");

        dispatch({
            type: "ALL_PAYMENT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "ALL_PAYMENT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const ProfessionGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "PROFESSION_GET_REQUEST",
        });

        const { data } = await axios.get("profession-get");

        dispatch({
            type: "PROFESSION_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PROFESSION_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const PlanGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "PLAN_GET_REQUEST",
        });

        const { data } = await axios.get("plan-get");

        dispatch({
            type: "PLAN_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PLAN_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};