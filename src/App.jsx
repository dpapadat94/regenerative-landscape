import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import LawnCarePage, { lawnCareLoader } from "./pages/LawnCarePage";
import GardenPage, { GardenCareLoader } from "./pages/GardenPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Estimate from "./pages/Estimate";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/lawncare/:id"
          element={<LawnCarePage />}
          loader={lawnCareLoader}
        />
        <Route
          path="/garden/:id"
          element={<GardenPage />}
          loader={GardenCareLoader}
        />
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="estimate" element={<Estimate />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
