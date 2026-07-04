import AnimatedLayout from '../components/layout/AnimatedLayout/AnimatedLayout';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import ProjectsPages from '../components/pages/ProjectsPages/ProjectsPages';
import ProfilePage from '../components/pages/ProfilePage/ProfilePage';
import ContactPage from '../components/pages/ContactPage/ContactPage';

const routes = [
    {
        element: <AnimatedLayout />,
        children: [
            {
                path: '/',
                element: <App />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/projects',
                element: <ProjectsPages />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/profile',
                element: <ProfilePage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/contact',
                element: <ContactPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '*',
                element: <ErrorPage />,
            },
        ],
    },
];

export default routes;
