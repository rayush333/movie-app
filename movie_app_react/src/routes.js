import Dashboard from "views/Dashboard.jsx";
import UserDashboard from "views/user/Dashboard.jsx";
import Category from "views/user/category/Category.jsx";
import CategoryList from "views/user/category/List.jsx";
import AddCategory from "views/user/category/Add.jsx";




import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";

const routes = {
  admin: {
    mainroutes: [
      {
        path: "/dashboard",
        name: "Dashboard",
        icon: "pe-7s-graph",
        component: Dashboard,
        layout: "/admin"
      },
      {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile,
        layout: "/admin"
      },
      {
        path: "/table",
        name: "Table List",
        icon: "pe-7s-note2",
        component: TableList,
        layout: "/admin"
      },
      {
        path: "/typography",
        name: "Typography",
        icon: "pe-7s-news-paper",
        component: Typography,
        layout: "/admin"
      },
      {
        path: "/icons",
        name: "Icons",
        icon: "pe-7s-science",
        component: Icons,
        layout: "/admin"
      },
      {
        path: "/maps",
        name: "Maps",
        icon: "pe-7s-map-marker",
        component: Maps,
        layout: "/admin"
      },
      {
        path: "/notifications",
        name: "Notifications",
        icon: "pe-7s-bell",
        component: Notifications,
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
      path: "/category",
      name: "Category",
      icon: "pe-7s-graph",
      component: Category,
      layout: "/user"
    }],
    childroutes: {
      category: [
        {
          path: "/add",
          name: "Dashboard",
          icon: "pe-7s-graph",
          component: AddCategory,
          layout: "/user/category"
        },
        {
          path: "/",
          name: "Dashboard",
          icon: "pe-7s-graph",
          component: CategoryList,
          layout: "/user/category"
        }
        ]
    }
  }
};

export default routes;
