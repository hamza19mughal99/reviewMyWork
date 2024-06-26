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

export const ProfessionCreate = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "PROFESSION_CREATE_REQUEST",
        });

        const { data } = await axios.post("profession-create", d);

        dispatch({
            type: "PROFESSION_CREATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PROFESSION_CREATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const ProfessionDelete = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "PROFESSION_DELETE_REQUEST",
        });

        const { data } = await axios.delete(`profession-delete/${d}`);

        dispatch({
            type: "PROFESSION_DELETE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PROFESSION_DELETE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const ProfessionUpdate = (id, d) => async (dispatch) => {
    try {
        dispatch({
            type: "PROFESSION_UPDATE_REQUEST",
        });

        const { data } = await axios.put(`profession-edit/${id}`, d);

        dispatch({
            type: "PROFESSION_UPDATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PROFESSION_UPDATE_FAILED",
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

export const PlanCreate = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "PLAN_CREATE_REQUEST",
        });

        const { data } = await axios.post("plan-create", d);

        dispatch({
            type: "PLAN_CREATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PLAN_CREATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const PlanDelete = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "PLAN_DELETE_REQUEST",
        });

        const { data } = await axios.delete(`plan-delete/${id}`);

        dispatch({
            type: "PLAN_DELETE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PLAN_DELETE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const PlanUpdate = (id, d) => async (dispatch) => {
    try {
        dispatch({
            type: "PLAN_UPDATE_REQUEST",
        });

        const { data } = await axios.put(`plan-update/${id}`, d);

        dispatch({
            type: "PLAN_UPDATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PLAN_UPDATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getWorks = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_WORKS_REQUEST",
        });

        const { data } = await axios.get("get-all-works");

        dispatch({
            type: "GET_WORKS_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "GET_WORKS_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const questionCreate = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "QUESTION_CREATE_REQUEST",
        });

        const { data } = await axios.post("create-questions", d);

        dispatch({
            type: "QUESTION_CREATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        console.log(e.response)
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "QUESTION_CREATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const questionSetsGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "QUESTION_SET_GET_REQUEST",
        });

        const { data } = await axios.get("get-all-questions");

        dispatch({
            type: "QUESTION_SET_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "QUESTION_SET_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const questionUpdate = (d, id) => async (dispatch) => {
    try {
        dispatch({
            type: "QUESTION_UPDATE_REQUEST",
        });

        const { data } = await axios.put(`update-questions/${id}`, d);

        dispatch({
            type: "QUESTION_UPDATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "QUESTION_UPDATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const getQuestionsById = (planId, professionId) => async (dispatch) => {
    try {
        dispatch({
            type: "GET_QUESTIONS_BY_ID_REQUEST",
        });

        const { data } = await axios.get(`get-questions-byPlan/?planId=${planId}&professionId=${professionId}`);

        dispatch({
            type: "GET_QUESTIONS_BY_ID_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "GET_QUESTIONS_BY_ID_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};