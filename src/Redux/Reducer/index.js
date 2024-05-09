import { combineReducers } from "redux";
import { ForgetPasswordReducer, LoggedInUserReducer, LoginReducer, RegisterReducer, changePasswordReducer, editPasswordReducer, editProfileReducer } from "./auth";
import {
    AllPaymentGetDataReducer, ArtistGetReducer, DashboardGetReducer, PlanCreateReducer, PlanDeleteReducer, PlanGetReducer,
    PlanUpdateReducer,
    ProfessionCreateReducer,
    ProfessionDeleteReducer,
    ProfessionGetReducer, ProfessionUpdateReducer, QuestionCreateReducer, QuestionSetGetReducer, QuestionUpdateReducer, ReviewerGetReducer, UserUpdatedReducer, getQuestionsByIdReducer, getWorksReducer
} from "./admin";
import { ArtistGetWorkReducer, ArtistWorkReducer, OneTimePaymentReducer, SubsPaymentReducer } from "./artist";
import { GetAllWorkReducer, GiveReviewReducer, ReviewGetWorkReducer, ReviewerGetAllWorkReducer } from "./reviewer";
import { EditAboutGetReducer, EditAboutPostReducer, EditAgreementGetReducer, EditAgreementPostReducer, EditContactGetReducer, EditContactPostReducer, EditCopyRightGetReducer, EditCopyRightPostReducer, EditFaqGetReducer, EditFaqPostReducer, EditHomeGetReducer, EditHomePostReducer, EditPrivacyGetReducer, EditPrivacyPostReducer, EditServiceGetReducer, EditServiceUpdateReducer, EditSubmissionGetReducer, EditSubmissionPostReducer, EditTermsGetReducer, EditTermsPostReducer, EditTestimonialGetReducer, EditTestimonialPostReducer } from "./EditPages";

const rootReducer = combineReducers({

    //AUTH
    loginData: LoginReducer,
    registerData: RegisterReducer,
    forgetPasswordData: ForgetPasswordReducer,
    changePasswordData: changePasswordReducer,
    getEditProfile: editProfileReducer,
    getEditPassword: editPasswordReducer,
    getCurrentUserData: LoggedInUserReducer,

    //ADMIN
    artistGetData: ArtistGetReducer,
    reviewerData: ReviewerGetReducer,
    getAllWork: GetAllWorkReducer,
    userGetData: UserUpdatedReducer,
    getDashboardData: DashboardGetReducer,
    getAllPaymentData: AllPaymentGetDataReducer,
    getAllProfessionData: ProfessionGetReducer,
    professionCreateData: ProfessionCreateReducer,
    professionDeleteData: ProfessionDeleteReducer,
    professionUpdateData: ProfessionUpdateReducer,

    getAllPlanData: PlanGetReducer,
    postPlanData: PlanCreateReducer,
    PlanDeletedData: PlanDeleteReducer,
    planUpdatedData: PlanUpdateReducer,
    getWorksData: getWorksReducer,

    //ARTIST
    postArtistWork: ArtistWorkReducer,
    getArtistWork: ArtistGetWorkReducer,
    postSubscription: SubsPaymentReducer,
    postOneTimePayment: OneTimePaymentReducer,

    //REVIEWER
    getNotReviewWork: ReviewerGetAllWorkReducer,
    reviewCreate: GiveReviewReducer,
    reviewGetData: ReviewGetWorkReducer,

    //EDIT PAGES
    getEditHome: EditHomeGetReducer,
    updateEditHome: EditHomePostReducer,

    getEditAbout: EditAboutGetReducer,
    updateEditAbout: EditAboutPostReducer,

    getAgreementEdit: EditAgreementGetReducer,
    updateAgreementEdit: EditAgreementPostReducer,

    getContactEdit: EditContactGetReducer,
    updateContactEdit: EditContactPostReducer,

    getCopyRightEdit: EditCopyRightGetReducer,
    updateCopyRightEdit: EditCopyRightPostReducer,

    getPrivacyEdit: EditPrivacyGetReducer,
    updatePrivacyEdit: EditPrivacyPostReducer,

    getSubmissionEdit: EditSubmissionGetReducer,
    updateSubmissionEdit: EditSubmissionPostReducer,

    getTermsEdit: EditTermsGetReducer,
    updateTermsEdit: EditTermsPostReducer,

    getTestimonialEdit: EditTestimonialGetReducer,
    updateTestimonialEdit: EditTestimonialPostReducer,

    getFaqEdit: EditFaqGetReducer,
    updateFaqEdit: EditFaqPostReducer,

    getServiceEdit: EditServiceGetReducer,
    updateServiceEdit: EditServiceUpdateReducer,

    //QUESTIONS

    questionCreateData: QuestionCreateReducer,
    getQuestionSetData: QuestionSetGetReducer,
    updateQuestionsData: QuestionUpdateReducer,
    getDataQuestionsById: getQuestionsByIdReducer
})

export default rootReducer;