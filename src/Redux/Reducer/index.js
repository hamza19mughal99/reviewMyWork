import { combineReducers } from "redux";
import { ForgetPasswordReducer, LoggedInUserReducer, LoginReducer, RegisterReducer, changePasswordReducer, editPasswordReducer, editProfileReducer } from "./auth";
import {
    AllPaymentGetDataReducer, ArtistGetReducer, DashboardGetReducer, PlanGetReducer,
    ProfessionCreateReducer,
    ProfessionDeleteReducer,
    ProfessionGetReducer, ProfessionUpdateReducer, ReviewerGetReducer, UserUpdatedReducer, getWorksReducer
} from "./admin";
import { ArtistGetWorkReducer, ArtistWorkReducer, OneTimePaymentReducer, SubsPaymentReducer } from "./artist";
import { GetAllWorkReducer, GiveReviewReducer, ReviewGetWorkReducer, ReviewerGetAllWorkReducer } from "./reviewer";

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
    getWorksData: getWorksReducer,


    //ARTIST
    postArtistWork: ArtistWorkReducer,
    getArtistWork: ArtistGetWorkReducer,
    postSubscription: SubsPaymentReducer,
    postOneTimePayment: OneTimePaymentReducer,

    //REVIEWER
    getNotReviewWork: ReviewerGetAllWorkReducer,
    reviewCreate: GiveReviewReducer,
    reviewGetData: ReviewGetWorkReducer
})

export default rootReducer;