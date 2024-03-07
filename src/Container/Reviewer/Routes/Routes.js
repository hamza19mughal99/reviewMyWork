import CardDetails from "../Pages/CardDetails/CardDetails";
import Profile from "../Pages/Profile/Profile";
import Review from "../Pages/Review/Review";
import Thankyou from "../Pages/Thankyou/Thankyou";
import Work from "../Pages/Work/Work";
import WorkDetail from "../Pages/Work/WorkDetail";

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
        component: <WorkDetail />,
        path: "/reviewer/work/:id"
    },
    {
        component: <Thankyou />,
        path: "/reviewer/thankyou"
    },
    {
        component: <CardDetails />,
        path: "/reviewer/card-details"
    },
]

export default reviewerRoute;