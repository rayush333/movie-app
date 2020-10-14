import Dashboard from "views/Dashboard.jsx";

import UserProfile from "views/UserProfile.jsx";
import UserDashboard from "views/user/Dashboard.jsx";
import Watchlist from "views/user/category/Watchlist.jsx";
import Profile from "views/user/category/Profile.jsx";

const routes = {
  admin: {
    mainroutes: [
      {
        path: "/dashboard",
        name: "Manage Users",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/user",
        name: "Manage Movies",
        icon: "pe-7s-user",
        component: UserProfile,
        layout: "/admin"
      }]
  },
  user: {
    mainroutes: [{
      path: "/dashboard",
      name: "Dashboard",
      icon: "pe-7s-graph",
      component: UserDashboard,
      layout: "/user"
    },
    {
      path: "/watchlist",
      name: "Watchlist",
      icon: "pe-7s-graph",
      component: Watchlist,
      layout: "/user"
    },
    {
        path: "/profile",
        name: "Profile",
        icon: "pe-7s-graph",
        component: Profile,
        layout: "/user"
    }]
  }
};

export default routes;
