import axios from "axios";

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
        dispatch({
            type: "ARTIST_GET_FAILED",
            payload: e.response.data.message,
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
        dispatch({
            type: "REVIEWER_GET_FAILED",
            payload: e.response.data.message,
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
        dispatch({
            type: "USER_UPDATE_FAILED",
            payload: e.response.data.message,
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
        dispatch({
            type: "DASHBOARD_GET_FAILED",
            payload: e.response.data.message,
            success: false,
        });
    }
};