// import FileSubmit from "../Pages/FileSubmit/FileSubmit";
import FormDetail from "../Pages/FileSubmit/SubmitForm/FormDetail";
import SubmitForm from "../Pages/FileSubmit/SubmitForm/SubmitForm";
import Payment from "../Pages/PaymentPage/Payment";
import Profile from "../Pages/Profile/Profile";
import ReviewDetail from "../Pages/Work/ReviewDetail";
import Work from "../Pages/Work/Work";

const artistRoute = [
    {
        component: <Work />,
        path: "/artist/work"
    },
    {
        component: <Profile />,
        path: "/artist/profile"
    },
    // {
    //     component: <FileSubmit />,
    //     path: "/artist/submission"
    // },
    {
        component: <SubmitForm />,
        path: "/artist/form-submit"
    },
    {
        component: <FormDetail />,
        path: "/artist/form-detail/:id"
    },
    {
        component: <ReviewDetail />,
        path: "/artist/review/detail/:id"
    },
    {
        component: <Payment />,
        path: "/artist/payment"
    },
]

export default artistRoute;