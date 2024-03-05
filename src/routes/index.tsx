import * as React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// components import
import Loadable from '@/components/loadable';
// error pages import
import Error404 from '@/pages/not-found';

// routes import
import ProtectedRoute from './protected-routes';
import AuthLayout from '@/layout/auth-layout';
import AppLayout from '@/layout/app-layout';
import Login from '@/pages/login';
import Profile from '@/pages/profile';

// // layout import
// import AppLayout from '@/layout/app-layout';
// import AuthLayout from '@/layout/auth-layout';

// import Login from '@/pages/login';
// pages with lazy imports
// const Profile = Loadable(React.lazy(() => import('@/pages/profile/index')));
// const DashboardCrm = Loadable(React.lazy(() => import('@/pages/dashboard')));
// const UserManager = Loadable(React.lazy(() => import('@/pages/user-manager')));
// const TaskManager = Loadable(React.lazy(() => import('@/pages/task-manager')));
// const IssueManager = Loadable(
//     React.lazy(() => import('@/pages/issue-manager'))
// );
// const ProjectManager = Loadable(
//     React.lazy(() => import('@/pages/project-manager'))
// );

const protectedRoutes = [
    { path: '/', component: Profile },
    // { path: '/profile', component: Profile },
    // { path: '/users', component: UserManager },
    // { path: '/tasks', component: TaskManager },
    // { path: '/issues', component: IssueManager },
    // { path: '/projects', component: ProjectManager },
];

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/sign-in"
                    element={
                        <AuthLayout>
                            <Login />
                        </AuthLayout>
                    }
                />

                {/* Protected Routes */}
                {protectedRoutes.map(({ path, component: Component }) => (
                    <Route
                        key={path}
                        path={path}
                        element={
                            <AppLayout>
                                <ProtectedRoute component={Component} />
                            </AppLayout>
                        }
                    />
                ))}

                {/* Error Routes */}
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;