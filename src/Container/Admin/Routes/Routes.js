import AllArtist from "../Pages/AllArtist/AllArtist";
import ArtistDetail from "../Pages/AllArtist/ArtistDetail";
import WorkDetail from "../Pages/AllArtist/WorkDetail";
import AllReviewer from "../Pages/AllReviewer/AllReviewer";
import ReviewWorkDetail from "../Pages/AllReviewer/ReviewWorkDetail";
import ReviewerDetail from "../Pages/AllReviewer/ReviewerDetail";
import AllWorkDetail from "../Pages/AllWorks/AllWorkDetail";
import AllWorks from "../Pages/AllWorks/AllWorks";
import Dashboad from "../Pages/Dashboard/Dashboad";
import Payment from "../Pages/Payment/Payment";
import Profile from "../Pages/Profile/Profile";
import ReviewedWork from "../Pages/ReviewedWork/ReviewedWork";

export const adminRoute = [
    {
        component: <Dashboad />,
        path: "/admin/dashboard"
    },
    {
        component: <Profile />,
        path: "/admin/profile"
    },
    {
        component: <AllArtist />,
        path: "/admin/all-artist"
    },
    {
        component: <ArtistDetail />,
        path: "/admin/all-artist/artist/:id"
    },
    {
        component: <WorkDetail />,
        path: "/admin/all-artist/work/:id"
    },
    {
        component: <ReviewWorkDetail />,
        path: "/admin/all-reviewers/work/:id"
    },
    {
        component: <AllWorkDetail />,
        path: "/admin/all-works/work/:id"
    },
    {
        component: <AllReviewer />,
        path: "/admin/all-reviewers"
    },
    {
        component: <ReviewerDetail />,
        path: "/admin/all-reviewers/reviewer/:id"
    },
    {
        component: <ReviewedWork />,
        path: "/admin/reviewer-payment"
    },
    {
        component: <AllWorks />,
        path: "/admin/all-works"
    },
    {
        component: <Payment />,
        path: "/admin/payment"
    }
]

export const adminSideBarItems = [
    {
        path: "/admin/dashboard",
        icon: "/images/create_page.png",
        title: "Dashboard",
    },
    {
        path: "/admin/all-artist",
        icon: "/images/blog_icon.png",
        title: "All Artist",
    },
    {
        path: "/admin/all-reviewers",
        icon: "/images/files_icon.png",
        title: "All Reviewers",
    },
    {
        path: "/admin/all-works",
        icon: "/images/files_icon.png",
        title: "All Works",
    },
    {
        path: "/admin/payment",
        icon: "/images/files_icon.png",
        title: "All Payments",
    },
    {
        path: "/admin/profile",
        icon: "/images/create_page.png",
        title: "Profile",
    },
    // {
    //     path: "/admin/reviewer-payment",
    //     icon: "/images/files_icon.png",
    //     title: "Reviewer Payment",
    // }
];