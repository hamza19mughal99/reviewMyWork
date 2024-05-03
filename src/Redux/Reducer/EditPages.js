export const EditHomeGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "HOME_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "HOME_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getHomeEditData: action.payload,
                error: false
            }
        case "HOME_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getHomeEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditHomePostReducer = (state = {}, action) => {
    switch (action.type) {
        case "HOME_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "HOME_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                getHomeUpdateData: action.payload,
                error: false
            }
        case "HOME_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                getHomeUpdateData: null,
                error: action.payload
            }
        case "HOME_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                getHomeUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditAboutGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "ABOUT_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ABOUT_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getAboutEditData: action.payload,
                error: false
            }
        case "ABOUT_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getAboutEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditAboutPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "ABOUT_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "ABOUT_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                aboutUpdateData: action.payload,
                error: false
            }
        case "ABOUT_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                aboutUpdateData: null,
                error: action.payload
            }
        case "ABOUT_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                aboutUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditAgreementGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "AGREEMENT_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "AGREEMENT_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getAgreementEditData: action.payload,
                error: false
            }
        case "AGREEMENT_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getAgreementEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditAgreementPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "AGREEMENT_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "AGREEMENT_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                agreementUpdateData: action.payload,
                error: false
            }
        case "AGREEMENT_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                agreementUpdateData: null,
                error: action.payload
            }
        case "AGREEMENT_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                agreementUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditContactGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "CONTACT_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "CONTACT_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getContactEditData: action.payload,
                error: false
            }
        case "CONTACT_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getContactEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditContactPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "CONTACT_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "CONTACT_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                contactUpdateData: action.payload,
                error: false
            }
        case "CONTACT_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                contactUpdateData: null,
                error: action.payload
            }
        case "CONTACT_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                contactUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditCopyRightGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "COPYRIGHT_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "COPYRIGHT_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getCopyRightEditData: action.payload,
                error: false
            }
        case "COPYRIGHT_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getCopyRightEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditCopyRightPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "COPYRIGHT_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "COPYRIGHT_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                copyRightUpdateData: action.payload,
                error: false
            }
        case "COPYRIGHT_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                copyRightUpdateData: null,
                error: action.payload
            }
        case "COPYRIGHT_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                copyRightUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditPrivacyGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "PRIVACY_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "PRIVACY_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getPrivacyEditData: action.payload,
                error: false
            }
        case "PRIVACY_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getPrivacyEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditPrivacyPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "PRIVACY_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "PRIVACY_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                PrivacyUpdateData: action.payload,
                error: false
            }
        case "PRIVACY_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                PrivacyUpdateData: null,
                error: action.payload
            }
        case "PRIVACY_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                PrivacyUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditSubmissionGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "SUBMISSION_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "SUBMISSION_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getSubmissionEditData: action.payload,
                error: false
            }
        case "SUBMISSION_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getSubmissionEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditSubmissionPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "SUBMISSION_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "SUBMISSION_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                SubmissionUpdateData: action.payload,
                error: false
            }
        case "SUBMISSION_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                SubmissionUpdateData: null,
                error: action.payload
            }
        case "SUBMISSION_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                SubmissionUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditTermsGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "TERMS_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "TERMS_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getTermsEditData: action.payload,
                error: false
            }
        case "TERMS_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getTermsEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditTermsPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "TERMS_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "TERMS_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                TermsUpdateData: action.payload,
                error: false
            }
        case "TERMS_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                TermsUpdateData: null,
                error: action.payload
            }
        case "TERMS_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                TermsUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditTestimonialGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "TESTIMONIAL_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "TESTIMONIAL_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getTestimonialEditData: action.payload,
                error: false
            }
        case "TESTIMONIAL_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getTestimonialEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditTestimonialPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "TESTIMONIAL_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "TESTIMONIAL_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                TestimonialUpdateData: action.payload,
                error: false
            }
        case "TESTIMONIAL_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                TestimonialUpdateData: null,
                error: action.payload
            }
        case "TESTIMONIAL_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                TestimonialUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditFaqGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "FAQ_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "FAQ_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getFaqEditData: action.payload,
                error: false
            }
        case "FAQ_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getFaqEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditFaqPostReducer = (state = {}, action) => {
    switch (action.type) {
        case "FAQ_EDIT_POST_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "FAQ_EDIT_POST_SUCCESS":
            return {
                ...state,
                loading: false,
                faqUpdateData: action.payload,
                error: false
            }
        case "FAQ_EDIT_POST_FAILED":
            return {
                ...state,
                loading: false,
                faqUpdateData: null,
                error: action.payload
            }
        case "FAQ_EDIT_POST_RESET":
            return {
                ...state,
                loading: false,
                faqUpdateData: null,
                error: null
            }
        default:
            return state
    }
}

// =========================================================

export const EditServiceGetReducer = (state = {}, action) => {
    switch (action.type) {
        case "SERVICE_EDIT_GET_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "SERVICE_EDIT_GET_SUCCESS":
            return {
                ...state,
                loading: false,
                getServiceEditData: action.payload,
                error: false
            }
        case "SERVICE_EDIT_GET_FAILED":
            return {
                ...state,
                loading: false,
                getServiceEditData: null,
                error: action.payload
            }
        default:
            return state
    }
}

export const EditServiceUpdateReducer = (state = {}, action) => {
    switch (action.type) {
        case "SERVICE_EDIT_UPDATE_REQUEST":
            return {
                loading: true,
                error: false
            }
        case "SERVICE_EDIT_UPDATE_SUCCESS":
            return {
                ...state,
                loading: false,
                updateServiceEditData: action.payload,
                error: false
            }
        case "SERVICE_EDIT_UPDATE_FAILED":
            return {
                ...state,
                loading: false,
                updateServiceEditData: null,
                error: action.payload
            }
        case "SERVICE_EDIT_UPDATE_RESET":
            return {
                ...state,
                loading: false,
                updateServiceEditData: null,
                error: null
            }
        default:
            return state
    }
}