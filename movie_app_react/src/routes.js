import UserDashboard from "views/user/Dashboard.jsx";

import Category from "views/admin/genre/Category.jsx";
import CategoryList from "views/admin/genre/List.jsx";
import AddCategory from "views/admin/genre/Add.jsx";

import MovieCategory from "views/admin/movie/Category.jsx";
import MovieCategoryList from "views/admin/movie/List.jsx";
import MovieAddCategory from "views/admin/movie/Add.jsx";

import UserCategory from "views/admin/user/Category.jsx";
import UserCategoryList from "views/admin/user/List.jsx";
import UserAddCategory from "views/admin/user/Add.jsx";

import Watchlist from "views/user/category/Watchlist.jsx";
import Profile from "views/user/category/Profile.jsx"

import UserProfile from "views/UserProfile.jsx";
import Movies from "views/Movies";
import Users from "views/Users";
import Genres from "views/Genres";

const routes = {
  admin: {
    mainroutes: [
      {
        path: "/category/genre",
        name: "Update Genre",
        icon: "pe-7s-edit",
        component: Category,
        layout: "/admin"
      },
      {
        path: "/category/movie",
        name: "Update Movie",
        icon: "pe-7s-edit",
        component: MovieCategory,
        layout: "/admin"
      },
      {
        path: "/category/user",
        name: "Update User",
        icon: "pe-7s-edit",
        component: UserCategory,
        layout: "/admin"
      },
      {
        path: "/movies",
        name: "Search Movie",
        icon: "pe-7s-film",
        component: Movies,
        layout: "/admin"
      },
      ,
      {
        path: "/genres",
        name: "Search Genre",
        icon: "pe-7s-video",
        component: Genres,
        layout: "/admin"
      },
      {
        path: "/users",
        name: "Search User",
        icon: "pe-7s-users",
        component: Users,
        layout: "/admin"
      },
      {
        path: "/user",
        name: "User Profile",
        icon: "pe-7s-user",
        component: UserProfile,
        layout: "/admin"
      }],
      childroutes: {
        category: [
          {
            path: "/add",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: AddCategory,
            layout: "/admin/category/genre"
          },
          {
            path: "/",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: CategoryList,
            layout: "/admin/category/genre"
          },
          {
            path: "/add",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: MovieAddCategory,
            layout: "/admin/category/movie"
          },
          {
            path: "/",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: MovieCategoryList,
            layout: "/admin/category/movie"
          },
          {
            path: "/add",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: UserAddCategory,
            layout: "/admin/category/user"
          },
          {
            path: "/",
            name: "Dashboard",
            icon: "pe-7s-graph",
            component: UserCategoryList,
            layout: "/admin/category/user"
          }
          ]
      }
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
