import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'multipart/form-data',
    },
};

export const ArtistWork = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "ARTIST_WORK_REQUEST",
        });

        const { data } = await axios.post("create-work", d, config);

        dispatch({
            type: "ARTIST_WORK_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "ARTIST_WORK_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const ArtistGetWork = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "ARTIST_GET_WORK_REQUEST",
        });

        const { data } = await axios.get(`get-work/${id}`);

        dispatch({
            type: "ARTIST_GET_WORK_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "ARTIST_GET_WORK_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const SubsPayment = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "SUBSCRIPTION_REQUEST",
        });

        const { data } = await axios.post("payment/succesfull", d);

        dispatch({
            type: "SUBSCRIPTION_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "SUBSCRIPTION_FAILED",
            payload: e?.response?.data,
            success: false,
        });
    }
};

export const OneTimePayment = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "ONE_TIME_REQUEST",
        });

        const { data } = await axios.post("onetime/payment/succesfull", d);

        dispatch({
            type: "ONE_TIME_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "ONE_TIME_FAILED",
            payload: e?.response?.data,
            success: false,
        });
    }
};