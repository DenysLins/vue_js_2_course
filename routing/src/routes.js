import Home from "./components/Home.vue";
import User from "./components/user/User.vue";
import UserStart from "./components/user/UserStart.vue";
import UserDetail from "./components/user/UserDetail.vue";
import UserEdit from "./components/user/UserEdit.vue";
import { runInNewContext } from "vm";

export const routes = [
  {
    path: "",
    component: Home
  },
  {
    path: "/user",
    component: User,
    children: [
      {
        path: "",
        component: UserStart
      },
      {
        path: ":id",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("Routes file beforeEach");
          next();
        }
      },
      {
        path: ":id/edit",
        component: UserEdit,
        name: "userEdit"
      }
    ]
  },
  {
    path: "*",
    redirect: "/"
  }
];
