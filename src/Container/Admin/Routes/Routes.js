import AllArtist from "../Pages/AllArtist/AllArtist";
import ArtistDetail from "../Pages/AllArtist/ArtistDetail";
import WorkDetail from "../Pages/AllArtist/WorkDetail";
import AllReviewer from "../Pages/AllReviewer/AllReviewer";
import ReviewWorkDetail from "../Pages/AllReviewer/ReviewWorkDetail";
import ReviewerDetail from "../Pages/AllReviewer/ReviewerDetail";
import AllWorkDetail from "../Pages/AllWorks/AllWorkDetail";
import AllWorks from "../Pages/AllWorks/AllWorks";
import Dashboad from "../Pages/Dashboard/Dashboad";
import AboutPage from "../Pages/EditPages/AboutPage";
import AgreementPage from "../Pages/EditPages/AgreementPage";
import ContactPage from "../Pages/EditPages/ContactPage";
import CopyRightPage from "../Pages/EditPages/CopyRightPage";
import FaqPage from "../Pages/EditPages/FaqPage";
import HomePage from "../Pages/EditPages/HomePage";
import PrivacyPage from "../Pages/EditPages/PrivacyPage";
import ServicePage from "../Pages/EditPages/ServicePage";
import SubmissionPage from "../Pages/EditPages/SubmissionPage";
import TermsPage from "../Pages/EditPages/TermsPage";
import TestimonialPage from "../Pages/EditPages/TestimonialPage";
import Payment from "../Pages/Payment/Payment";
import Pricing from "../Pages/Pricing/Pricing";
import Profession from "../Pages/Profession/Profession";
import Profile from "../Pages/Profile/Profile";
import AddQuestions from "../Pages/QuestionSets/AddQuestions";
import QuestionSets from "../Pages/QuestionSets/QuestionSets";
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
    },
    {
        component: <Profession />,
        path: "/admin/profession"
    },
    {
        component: <Profession />,
        path: "/admin/profession"
    },
    {
        component: <Pricing />,
        path: "/admin/pricing"
    },
    {
        component: <HomePage />,
        path: "/admin/edit-home"
    },
    {
        component: <AboutPage />,
        path: "/admin/edit-about"
    },
    {
        component: <AgreementPage />,
        path: "/admin/edit-agreement"
    },
    {
        component: <ContactPage />,
        path: "/admin/edit-contact"
    },
    {
        component: <CopyRightPage />,
        path: "/admin/edit-copyRight"
    },
    {
        component: <PrivacyPage />,
        path: "/admin/edit-privacy"
    },
    {
        component: <SubmissionPage />,
        path: "/admin/edit-submission"
    },
    {
        component: <TermsPage />,
        path: "/admin/edit-terms"
    },
    {
        component: <TestimonialPage />,
        path: "/admin/edit-testimonial"
    },
    {
        component: <FaqPage />,
        path: "/admin/edit-faq"
    },
    {
        component: <ServicePage />,
        path: "/admin/edit-service"
    },
    {
        component: <QuestionSets />,
        path: "/admin/question-sets"
    },
    {
        component: <AddQuestions />,
        path: "/admin/question-sets/add-questions/:id"
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
    // {
    //     path: "/admin/profile",
    //     icon: "/images/create_page.png",
    //     title: "Profile",
    // },
    {
        path: "/admin/profession",
        icon: "/images/create_page.png",
        title: "Profession",
    },
    {
        path: "/admin/pricing",
        icon: "/images/create_page.png",
        title: "Pricing",
    },
    {
        path: "/admin/question-sets",
        icon: "/images/create_page.png",
        title: "Question Sets",
    },
    // {
    //     path: "/admin/reviewer-payment",
    //     icon: "/images/files_icon.png",
    //     title: "Reviewer Payment",
    // }
];

export const adminEditSidebarItems = [
    {
        title: "Edit Home",
        path: "/admin/edit-home"
    },
    {
        title: "Edit About",
        path: "/admin/edit-about"
    },
    {
        title: "Edit Agreement",
        path: "/admin/edit-agreement"
    },
    {
        title: "Edit Contact",
        path: "/admin/edit-contact"
    },
    {
        title: "Edit CopyRights",
        path: "/admin/edit-copyRight"
    },
    {
        title: "Edit Privacy",
        path: "/admin/edit-privacy"
    },
    {
        title: "Edit Submission",
        path: "/admin/edit-submission"
    },
    {
        title: "Edit Terms",
        path: "/admin/edit-terms"
    },
    {
        title: "Edit Testimonial",
        path: "/admin/edit-testimonial"
    },
    {
        title: "Edit FAQ",
        path: "/admin/edit-Faq"
    },
    {
        title: "Edit Service",
        path: "/admin/edit-service"
    },
]