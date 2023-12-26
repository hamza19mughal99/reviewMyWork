import axios from "axios";

export const ReviewerGetAllWork = (getProfession) => async (dispatch) => {
    try {
        dispatch({
            type: "REVIEWER_GET_ALL_WORK_REQUEST",
        });

        const { data } = await axios.get(`not-reviewed-work?profession=${getProfession}`);

        dispatch({
            type: "REVIEWER_GET_ALL_WORK_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "REVIEWER_GET_ALL_WORK_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const GiveReview = (d) => async (dispatch) => {
    try {
        dispatch({
            type: "GIVE_REVIEW_REQUEST",
        });

        const { data } = await axios.post(`create-review`, d);

        dispatch({
            type: "GIVE_REVIEW_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "GIVE_REVIEW_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const ReviewGetWork = (id) => async (dispatch) => {
    try {
        dispatch({
            type: "REVIEW_GET_WORK_REQUEST",
        });

        const { data } = await axios.get(`get-work/reviewer/${id}`);

        dispatch({
            type: "REVIEW_GET_WORK_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "REVIEW_GET_WORK_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};

export const ReviewGetAllWork = () => async (dispatch) => {
    try {
        dispatch({
            type: "GET_ALL_WORK_REQUEST",
        });

        const { data } = await axios.get(`get-work`);

        dispatch({
            type: "GET_ALL_WORK_SUCCESS",
            payload: data,
            success: true,
        });
    }
    catch (e) {
        dispatch({
            type: "GET_ALL_WORK_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};