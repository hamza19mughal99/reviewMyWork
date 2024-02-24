export const LoginReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                getLoginData: action.payload,
                error: false
            }
        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                getLoginData: null,
                error: action.payload
            }
        case "LOGIN_RESET":
            return {
                ...state,
                getLoginData: null,
                error: null
            }
        default:
            return state
    }
}

export const RegisterReducer = (state = {}, action) => {
    switch (action.type) {
        case "REGISTER_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                getRegisterData: action.payload,
                error: false
            }
        case "REGISTER_FAILED":
            return {
                ...state,
                loading: false,
                getRegisterData: null,
                error: action.payload
            }
        case "REGISTER_RESET":
            return {
                ...state,
                getRegisterData: null,
                error: null
            }
        default:
            return state
    }
}

export const editProfileReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_PROFILE_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "EDIT_PROFILE_SUCCESS":
            return {
                ...state,
                loading: false,
                getEditData: action.payload,
                error: false
            }
        case "EDIT_PROFILE_FAILED":
            return {
                ...state,
                loading: false,
                getEditData: null,
                error: action.payload
            }
        case "EDIT_PROFILE_RESET":
            return {
                ...state,
                getEditData: null,
                error: null
            }
        default:
            return state
    }
}

export const LoggedInUserReducer = (state = {}, action) => {
    switch (action.type) {
        case "LOGGED_IN_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "LOGGED_IN_SUCCESS":
            return {
                ...state,
                loading: false,
                getCurrentUser: action.payload,
                error: false
            }
        case "LOGGED_IN_FAILED":
            return {
                ...state,
                loading: false,
                getCurrentUser: null,
                error: action.payload
            }
        case "LOGGED_IN_RESET":
            return {
                ...state,
                getCurrentUser: null,
                error: null
            }
        default:
            return state
    }
}

export const editPasswordReducer = (state = {}, action) => {
    switch (action.type) {
        case "EDIT_PASSWORD_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "EDIT_PASSWORD_SUCCESS":
            return {
                ...state,
                loading: false,
                getEditPasswordData: action.payload,
                error: false
            }
        case "EDIT_PASSWORD_FAILED":
            return {
                ...state,
                loading: false,
                getEditPasswordData: null,
                error: action.payload
            }
        case "EDIT_PASSWORD_RESET":
            return {
                ...state,
                getEditPasswordData: null,
                error: null
            }
        default:
            return state
    }
}