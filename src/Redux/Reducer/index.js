import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer, editPasswordReducer, editProfileReducer } from "./auth";
import {
    AllPaymentGetDataReducer, ArtistGetReducer, DashboardGetReducer, PlanGetReducer,
    ProfessionGetReducer, ReviewerGetReducer, UserUpdatedReducer
} from "./admin";
import { ArtistGetWorkReducer, ArtistWorkReducer, OneTimePaymentReducer, SubsPaymentReducer } from "./artist";
import { GetAllWorkReducer, GiveReviewReducer, ReviewGetWorkReducer, ReviewerGetAllWorkReducer } from "./reviewer";

const rootReducer = combineReducers({

    //AUTH
    loginData: LoginReducer,
    registerData: RegisterReducer,

    getEditProfile: editProfileReducer,
    getEditPassword: editPasswordReducer,

    //ADMIN
    artistGetData: ArtistGetReducer,
    reviewerData: ReviewerGetReducer,
    getAllWork: GetAllWorkReducer,
    userGetData: UserUpdatedReducer,
    getDashboardData: DashboardGetReducer,
    getAllPaymentData: AllPaymentGetDataReducer,
    getAllProfessionData: ProfessionGetReducer,
    getAllPlanData: PlanGetReducer,

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