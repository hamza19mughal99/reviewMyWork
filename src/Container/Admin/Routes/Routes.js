import AllArtist from "../Pages/AllArtist/AllArtist";
import ArtistDetail from "../Pages/AllArtist/ArtistDetail";
import AllReviewer from "../Pages/AllReviewer/AllReviewer";
import ReviewerDetail from "../Pages/AllReviewer/ReviewerDetail";
import Dashboad from "../Pages/Dashboard/Dashboad";
import Profile from "../Pages/Profile/Profile";
import ReviewedWork from "../Pages/ReviewedWork/ReviewedWork";

export const adminRoute = [
    // {
    //     component: <Dashboad />,
    //     path: "/admin/dashboard"
    // },
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
        path: "/admin/artist/:id"
    },
    {
        component: <AllReviewer />,
        path: "/admin/all-reviewers"
    },
    {
        component: <ReviewerDetail />,
        path: "/admin/reviewer/:id"
    },
    // {
    //     component: <ReviewedWork />,
    //     path: "/admin/reviewed-work"
    // }
]

export const adminSideBarItems = [
    // {
    //     path: "/admin/dashboard",
    //     icon: "/images/create_page.png",
    //     title: "Dashboard",
    // },
    {
        path: "/admin/profile",
        icon: "/images/create_page.png",
        title: "Profile",
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
    // {
    //     path: "/admin/reviewed-work",
    //     icon: "/images/files_icon.png",
    //     title: "Reviewed Work",
    // },
];