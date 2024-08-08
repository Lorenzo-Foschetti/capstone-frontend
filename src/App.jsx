import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavbar from "./components/MyNavbar";
import MyFooter from "./components/Myfooter";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Registration from "./components/Registration";
import Login from "./components/Login";
import AdminDashboard from "./components/AdminDashboard";
import BottlesCategories from "./components/BottlesCategories";
import BottlesPage from "./components/BottlesPage";
import BackgroundMain from "./components/BackgroundMain";
import CreateBottleForm from "./components/CreateBottleForm";
import EditBottleForm from "./components/EditBottleForm";
import Cart from "./components/Cart";
import BottleDetailsPage from "./components/BottleDetailsPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />

        <ConditionalBottlesCategories />
        <Routes>
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/:category" element={<BottlesPage />} />
          <Route path="/createBottleForm" element={<CreateBottleForm />} />
          <Route path="/editBottle/:id" element={<EditBottleForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/bottle/:id" element={<BottleDetailsPage />} />
        </Routes>
        <ConditionalBackgroundMain />
        <MyFooter />
      </BrowserRouter>
    </div>
  );
}
const ConditionalBottlesCategories = () => {
  const location = useLocation();

  if (location.pathname === "/admin-dashboard") {
    return null;
  }

  return <BottlesCategories />;
};

const ConditionalBackgroundMain = () => {
  const location = useLocation();

  if (location.pathname === "/admin-dashboard") {
    return null;
  }

  return <BackgroundMain />;
};

export default App;
