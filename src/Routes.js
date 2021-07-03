import Vue from 'vue';
import Router from 'vue-router';

import Layout from '@/components/Layout/Layout';

// Pages
import Dashboard from '@/pages/Dashboard/Dashboard';
import Typography from '@/pages/Typography/Typography'
import Tables from '@/pages/Tables/Basic'
import Notifications from '@/pages/Notifications/Notifications'
import Icons from '@/pages/Icons/Icons'
import Charts from '@/pages/Charts/Charts'
import Maps from '@/pages/Maps/Google'
import Error from "@/pages/Error/Error";
import Login from "@/pages/Login/Login";
import admindashboard from '@/pages/adminDashboard/adminDashboard';
import financedashboard from '@/pages/financedashboard/financedashboard';
import allstudents from '@/pages/adminDashboard/Allstudents';
import addstudent from  '@/pages/adminDashboard/addstudent';
import sendpayment from '@/pages/sendpayment/sendpayment'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
    path: '/',
    redirect: 'login',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: 'studentDashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: 'cources',
        name: 'Typography',
        component: Typography
      },
      {
        path: 'admindashboard',
        name: 'admindashboard',
        component: admindashboard
      },
      {
        path: 'registrardashboard',
        name: 'financedashboard',
        component: financedashboard
      },
      {
        path: 'allstudents',
        name: 'allstudents',
        component: allstudents
      },
      {
        path: 'sendpayment',
        name: 'sendpayment',
        component: sendpayment
      },
      {
        path: 'addstudent',
        name: 'addstudent',
        component: addstudent
      },
      {
        path: 'payment',
        name: 'Tables',
        component: Tables
      },
      {
        path: 'notifications',
        name: 'Notifications',
        component: Notifications
      },
      {
        path: 'icons',
        name: 'Icons',
        component: Icons
      },
      {
        path: 'schedule',
        name: 'Charts',
        component: Charts
      },
      {
        path: 'maps',
        name: 'Maps',
        component: Maps
      },
    ],
  },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
});
