import { combineReducers } from "redux";
import { LoginReducer, RegisterReducer, editPasswordReducer, editProfileReducer } from "./auth";
import { ArtistGetReducer, ReviewerGetReducer, UserUpdatedReducer } from "./admin";
import { ArtistGetWorkReducer, ArtistWorkReducer } from "./artist";
import { GiveReviewReducer, ReviewGetWorkReducer, ReviewerGetAllWorkReducer } from "./reviewer";

const rootReducer = combineReducers({

    //AUTH
    loginData: LoginReducer,
    registerData: RegisterReducer,

    getEditProfile: editProfileReducer,
    getEditPassword: editPasswordReducer,

    //ADMIN
    artistGetData: ArtistGetReducer,
    reviewerData: ReviewerGetReducer,

    userGetData: UserUpdatedReducer,

    //ARTIST
    postArtistWork: ArtistWorkReducer,
    getArtistWork: ArtistGetWorkReducer,

    //REVIEWER
    getNotReviewWork: ReviewerGetAllWorkReducer,
    reviewCreate: GiveReviewReducer,
    reviewGetData: ReviewGetWorkReducer
})

export default rootReducer;