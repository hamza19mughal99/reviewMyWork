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