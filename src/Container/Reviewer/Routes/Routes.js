import Profile from "../Pages/Profile/Profile";
import Review from "../Pages/Review/Review";
import Thankyou from "../Pages/Thankyou/Thankyou";
import Work from "../Pages/Work/Work";

const reviewerRoute = [
    {
        component: <Profile />,
        path: "/reviewer/profile"
    },
    {
        component: <Work />,
        path: "/reviewer/work"
    },
    {
        component: <Review />,
        path: "/reviewer/review/:id"
    },
    {
        component: <Thankyou />,
        path: "/reviewer/thankyou"
    },
]

export default reviewerRoute;