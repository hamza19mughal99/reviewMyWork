import axios from "axios";
import { errorNotify } from "../../Util/Toast";

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const EditHomeGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "HOME_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-home");

        dispatch({
            type: "HOME_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "HOME_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditHomePost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "HOME_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("updatingHome", d, config);

        dispatch({
            type: "HOME_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "HOME_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditAboutGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "ABOUT_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-about");

        dispatch({
            type: "ABOUT_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "ABOUT_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditAboutPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "ABOUT_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-about", d);

        dispatch({
            type: "ABOUT_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "ABOUT_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditAgreementGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "AGREEMENT_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-agreement");

        dispatch({
            type: "AGREEMENT_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "AGREEMENT_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditAgreementPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "AGREEMENT_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-agreement", d);

        dispatch({
            type: "AGREEMENT_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "AGREEMENT_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditContactGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "CONTACT_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-contact");

        dispatch({
            type: "CONTACT_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "CONTACT_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditContactPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "CONTACT_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-contact", d);

        dispatch({
            type: "CONTACT_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "CONTACT_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditCopyRightGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "COPYRIGHT_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-copyRight");

        dispatch({
            type: "COPYRIGHT_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "COPYRIGHT_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditCopyRightPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "COPYRIGHT_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-copyRight", d);

        dispatch({
            type: "COPYRIGHT_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "COPYRIGHT_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditPrivacyGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "PRIVACY_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-privacy");

        dispatch({
            type: "PRIVACY_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PRIVACY_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditPrivacyPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "PRIVACY_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-privacy", d);

        dispatch({
            type: "PRIVACY_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "PRIVACY_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditSubmissionGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "SUBMISSION_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-submission");

        dispatch({
            type: "SUBMISSION_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "SUBMISSION_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditSubmissionPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "SUBMISSION_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-submission", d);

        dispatch({
            type: "SUBMISSION_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "SUBMISSION_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditTermsGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "TERMS_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-terms");

        dispatch({
            type: "TERMS_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "TERMS_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditTermsPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "TERMS_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-terms", d);

        dispatch({
            type: "TERMS_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "TERMS_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// =====================================================

export const EditTestimonialGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "TESTIMONIAL_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-testimonial");

        dispatch({
            type: "TESTIMONIAL_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "TESTIMONIAL_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditTestimonialPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "TESTIMONIAL_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-testimonial", d);

        dispatch({
            type: "TESTIMONIAL_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "TESTIMONIAL_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// ====================================================

export const EditFaqGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "FAQ_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-faq");

        dispatch({
            type: "FAQ_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "FAQ_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditFaqPost = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "FAQ_EDIT_POST_REQUEST",
        });

        const { data } = await axios.post("update-faq", d);

        dispatch({
            type: "FAQ_EDIT_POST_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "FAQ_EDIT_POST_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

// ====================================================

export const EditServicesGet = () => async (dispatch) => {
    try {
        dispatch({
            type: "SERVICE_EDIT_GET_REQUEST",
        });

        const { data } = await axios.get("get-service");

        dispatch({
            type: "SERVICE_EDIT_GET_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "SERVICE_EDIT_GET_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};

export const EditServicesUpdate = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "SERVICE_EDIT_UPDATE_REQUEST",
        });

        const { data } = await axios.post("update-service", d);

        dispatch({
            type: "SERVICE_EDIT_UPDATE_SUCCESS",
            payload: data,
            success: true,
        });
    }

    catch (e) {
        if (e?.code === "ERR_NETWORK") {
            errorNotify("Network Error");
        }
        dispatch({
            type: "SERVICE_EDIT_UPDATE_FAILED",
            payload: e?.response?.data?.message,
            success: false,
        });
    }
};