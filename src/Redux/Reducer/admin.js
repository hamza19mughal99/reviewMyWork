export const ArtistGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "ARTIST_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ARTIST_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getArtistData: action.payload,
                error: false
            }
        case "ARTIST_GET_FAILED":
            return {
                ...state,
                loading: false,
                getArtistData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const ReviewerGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "REVIEWER_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "REVIEWER_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getReviewerData: action.payload,
                error: false
            }
        case "REVIEWER_GET_FAILED":
            return {
                ...state,
                loading: false,
                getReviewerData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const UserUpdatedReducer = (state = {}, action) => {
    switch (action.type) {

        case "USER_UPDATE_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "USER_UPDATE_SUCCESS":
            return {
                ...state,
                loading: false,
                getUserUpdateData: action.payload,
                error: false
            }
        case "USER_UPDATE_FAILED":
            return {
                ...state,
                loading: false,
                getUserUpdateData: null,
                error: action.payload
            }
        case "USER_UPDATE_RESET":
            return {
                ...state,
                getUserUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

export const DashboardGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "DASHBOARD_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "DASHBOARD_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getDashData: action.payload,
                error: false
            }
        case "DASHBOARD_GET_FAILED":
            return {
                ...state,
                loading: false,
                getDashData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const AllPaymentGetDataReducer = (state = {}, action) => {
    switch (action.type) {
        case "ALL_PAYMENT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ALL_PAYMENT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getPaymentData: action.payload,
                error: false
            }
        case "ALL_PAYMENT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getPaymentData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const ProfessionGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "PROFESSION_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "PROFESSION_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getProfessionData: action.payload,
                error: false
            }
        case "PROFESSION_GET_FAILED":
            return {
                ...state,
                loading: false,
                getProfessionData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const PlanGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "PLAN_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "PLAN_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getPlanData: action.payload,
                error: false
            }
        case "PLAN_GET_FAILED":
            return {
                ...state,
                loading: false,
                getPlanData: null,
                error: action.payload
            }
        default:
            return state
    }
}