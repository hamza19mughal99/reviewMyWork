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


export const SubsPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case "SUBSCRIPTION_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "SUBSCRIPTION_SUCCESS":
            return {
                ...state,
                loading: false,
                subPayData: action.payload,
                error: false
            }
        case "SUBSCRIPTION_FAILED":
            return {
                ...state,
                loading: false,
                subPayData: null,
                error: action.payload
            }
        case "SUBSCRIPTION_RESET":
            return {
                ...state,
                subPayData: null,
                error: null
            }
        default:
            return state
    }
}

export const OneTimePaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case "ONE_TIME_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ONE_TIME_SUCCESS":
            return {
                ...state,
                loading: false,
                oneTimeData: action.payload,
                error: false
            }
        case "ONE_TIME_FAILED":
            return {
                ...state,
                loading: false,
                oneTimeData: null,
                error: action.payload
            }
        case "ONE_TIME_RESET":
            return {
                ...state,
                oneTimeData: null,
                error: null
            }
        default:
            return state
    }
}