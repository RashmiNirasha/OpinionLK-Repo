import React from 'react'
import Dashboard from "../pages/DashboardLayout"
import ClientPortal from "../pages/Surveyee/ClientPortal"
import Survey from "../pages/Surveyee/surveys"
import Profile from "../pages/Surveyee/Profile"
import Serydashboard from "../pages/Surveyee/SurveyeeDashboard"
import Myrewards from "../pages/Surveyee/Myrewards"
import Upgrade from "../pages/Surveyee/Upgrade"

import { PrivateRoute } from '../components/Auth/PrivateRoute';

import { BsHouseFill } from 'react-icons/bs';

import {
    Navigate
} from 'react-router-dom';

const Links = [

    { route: '/portal/dashboard', linkName: 'Dashboard', icon: BsHouseFill },
    { route: '/portal/surveys', linkName: 'Surveys', icon: BsHouseFill},
    { route: '/portal/profile', linkName: 'Profile', icon: BsHouseFill },
    { route: '/portal/My Rewards', linkName: 'Rewards', icon: BsHouseFill },
    { route: '/portal/Upgrade', linkName: 'Upgrade', icon: BsHouseFill }];

//   const { user } = useAuthContext()
const SurveyeeRoutes = [
    {
        path: '/portal',
        element: (
            <PrivateRoute allowedRoles={['user']}>
                <Dashboard sidebarLinks={Links} /> ,
            </PrivateRoute>
            ),
        children: [
            {
                path: '',
                element: <Navigate to="/portal/dashboard" replace />,
            },
            {
                path: 'home',
                element: <ClientPortal />,
            },
            {
                path: '/portal/dashboard',
                element: <Serydashboard />,
            },
            {
                path: '/portal/surveys',
                element: <Survey />,
            },
            {
                path: '/portal/profile',
                element: <Profile />,
            },
            {
                path: '/portal/My Rewards',
                element: <Myrewards />,
            },
            {
                path: '/portal/Upgrade',
                element: <Upgrade />,
            },
           
           
        ],
    },
]

export default SurveyeeRoutes