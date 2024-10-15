import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import ForgotPassword from "./Pages/ForgotPassword";
import OTP from "./Pages/OTP";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import DashboardLayout from "./Components/DashboardLayout";
import Message from "./Pages/Message";
import ResetPassword from "./Pages/ResetPassword";
import ResentOTP from "./Pages/ResentOTP";
import Profile from "./Pages/Profile";
import Settings from "./Pages/Settings";
import Appointments from "./Pages/Appointments";
import FirstDashboard from "./Pages/FirstDashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/Profile",
    element: <Profile />,
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword />,
  },
  {
    path: "/SignIn",
    element: <SignIn />,
  },
  {
    path: "/OTP",
    element: <OTP />,
  },
  {
    path: "/ResentOTP",
    element: <ResentOTP />,
  },
  {
    path: "/dashing",
    element: <Dashboard />,
  },
  {
    path: "/ResetPassword",
    element: <ResetPassword />,
  },
  {
    path: "/Dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "Settings",
        element: <Settings />,
      },
      {
        path: "FirstDashboard",
        element: <FirstDashboard />,
      },

      {
        index: "true",
        element: <Dashboard />,
      },
      {
        path: "Order",
        element: <Order />,
      },
      {
        path: "Message",
        element: <Message />,
      },
      {
        path: "Appointments",
        element: <Appointments />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
