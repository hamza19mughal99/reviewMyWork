// import FileSubmit from "../Pages/FileSubmit/FileSubmit";
import SubmitForm from "../Pages/FileSubmit/SubmitForm/SubmitForm";
import Payment from "../Pages/PaymentPage/Payment";
import Profile from "../Pages/Profile/Profile";
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
        component: <Payment />,
        path: "/artist/payment"
    },
]

export default artistRoute;