export const ArtistWorkReducer = (state = {}, action) => {
    switch (action.type) {
        case "ARTIST_WORK_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ARTIST_WORK_SUCCESS":
            return {
                ...state,
                loading: false,
                artistWorkData: action.payload,
                error: false
            }
        case "ARTIST_WORK_FAILED":
            return {
                ...state,
                loading: false,
                artistWorkData: null,
                error: action.payload
            }
        case "ARTIST_WORK_RESET":
            return {
                ...state,
                artistWorkData: null,
                error: null
            }
        default:
            return state
    }
}

export const ArtistGetWorkReducer = (state = {}, action) => {
    switch (action.type) {
        case "ARTIST_GET_WORK_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ARTIST_GET_WORK_SUCCESS":
            return {
                ...state,
                loading: false,
                artistGetWorkData: action.payload,
                error: false
            }
        case "ARTIST_GET_WORK_FAILED":
            return {
                ...state,
                loading: false,
                artistGetWorkData: null,
                error: action.payload
            }
        default:
            return state
    }
}
