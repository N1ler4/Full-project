import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from "react-router-dom";
import App from "../App";
import { Home, About, Service, Contact, ErrorPage  , SignIn , SignUp , Restore} from "@pages";



const index = () => {
    


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<App />}>
          <Route index element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="restore" element={<Restore/>}/>
          <Route path="/main/*" element={<Home />} >
          <Route path="about" element={<About />} />
          <Route path="service" element={<Service />} />
          <Route path="contact" element={<Contact />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default index;
