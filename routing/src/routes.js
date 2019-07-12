import Home from "./components/Home.vue";

const User = resolve => {
  require.ensure(
    ["./components/user/User.vue"],
    () => {
      resolve(require("./components/user/User.vue"));
    },
    "user"
  );
};

const UserStart = resolve => {
  require.ensure(
    ["./components/user/UserStart.vue"],
    () => {
      resolve(require("./components/user/UserStart.vue"));
    },
    "user"
  );
};

const UserDetail = resolve => {
  require.ensure(
    ["./components/user/UserDetail.vue"],
    () => {
      resolve(require("./components/user/UserDetail.vue"));
    },
    "user2"
  );
};

const UserEdit = resolve => {
  require.ensure(
    ["./components/user/UserEdit.vue"],
    () => {
      resolve(require("./components/user/UserEdit.vue"));
    },
    "user2"
  );
};

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
