import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";

const views = name => () => import(`@/pages/${name}.vue`);

import store from "./store"

const routes = [
  {
    path: '/',
    name: 'landing',
    component: views("Landing"),
  },
  {
  path: "/",
  component: DashboardLayout,
  redirect: "dashboard",
  children:[
    {
      path: "dashboard",
      name: "Dashboard",
      component: Dashboard
    },
    {
      path: "my-music",
      name: "My Music",
      component: views("MyMusic")
    },
    {
      path: "icons",
      name: "Icons",
      component: Icons
    },
    {
      path: "maps",
      name: "Maps",
      component: Maps
    },
    {
      path: "notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "user",
      name: "User Profile",
      component: UserProfile
    },
    {
      path: "table",
      name: "Table List",
      component: TableList
    },
    {
      path: "typography",
      name: "Typography",
      component: Typography
    },
    {
      path: '/change-password',
      name: 'changePassword',
      component: views("ForgotPassword")
    },
  ]
},
{
  path: '/register',
  name: 'Register',
  component: views("Register")
},
{
  path: '/login',
  name: "Login",
  component: views("Login")
},
];

export default routes;
