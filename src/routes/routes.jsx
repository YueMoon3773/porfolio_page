import AnimatedLayout from '../components/layout/AnimatedLayout/AnimatedLayout';

import App from '../App';
import ErrorPage from '../components/pages/ErrorPage/ErrorPage';
import ProjectsPages from '../components/pages/ProjectsPages/ProjectsPages';

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
                // path: '/profile/:name?',
                // element: <Profile />,
            },

            {
                path: '*',
                element: <ErrorPage />,
                // errorElement: <ErrorPage />,
            },
        ],
    },
];

export default routes;
