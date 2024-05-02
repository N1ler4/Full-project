import {
  Home,
  About,
  Service,
  Contact,
  ErrorPage,
  Blog,
  SignIn,
  SignUp,
} from "@pages";

const router = [
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/",
    element: <SignUp />,
  },
  {
    path: "/main",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/service",
    element: <Service />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },

  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
];

export default router;
