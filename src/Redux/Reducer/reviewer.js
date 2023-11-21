export const ReviewerGetAllWorkReducer = (state = {}, action) => {
    switch (action.type) {
        case "REVIEWER_GET_ALL_WORK_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "REVIEWER_GET_ALL_WORK_SUCCESS":
            return {
                ...state,
                loading: false,
                reviewerGetAllWorkData: action.payload,
                error: false
            }
        case "REVIEWER_GET_ALL_WORK_FAILED":
            return {
                ...state,
                loading: false,
                reviewerGetAllWorkData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const GetAllWorkReducer = (state = {}, action) => {
    switch (action.type) {
        case "GET_ALL_WORK_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "GET_ALL_WORK_SUCCESS":
            return {
                ...state,
                loading: false,
                GetAllWorkData: action.payload,
                error: false
            }
        case "GET_ALL_WORK_FAILED":
            return {
                ...state,
                loading: false,
                GetAllWorkData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const GiveReviewReducer = (state = {}, action) => {
    switch (action.type) {
        case "GIVE_REVIEW_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "GIVE_REVIEW_SUCCESS":
            return {
                ...state,
                loading: false,
                giveReviewData: action.payload,
                error: false
            }
        case "GIVE_REVIEW_FAILED":
            return {
                ...state,
                loading: false,
                giveReviewData: null,
                error: action.payload
            }

        case "GIVE_REVIEW_RESET":
            return {
                ...state,
                loading: false,
                giveReviewData: null,
                error: null
            }
        default:
            return state
    }
}

export const ReviewGetWorkReducer = (state = {}, action) => {
    switch (action.type) {
        case "REVIEW_GET_WORK_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "REVIEW_GET_WORK_SUCCESS":
            return {
                ...state,
                loading: false,
                reviewerGetWorkData: action.payload,
                error: false
            }
        case "REVIEW_GET_WORK_FAILED":
            return {
                ...state,
                loading: false,
                reviewerGetWorkData: null,
                error: action.payload
            }
        default:
            return state
    }
}
