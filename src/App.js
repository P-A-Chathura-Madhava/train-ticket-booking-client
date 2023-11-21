import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AvailableTrains from "./pages/AvailableTrains.jsx";
import BookingDetails from "./pages/BookingDetails.jsx";
import Checkout from "./pages/Checkout.jsx";
import PaymentCompleted from "./pages/PaymentCompleted.jsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="" element={<PrivateRoute />}>
          <Route path="/profile" element={<ProfilePage />} />
          <Route
            path="/availableTrains/:from/:to/:departure/:returnDate/:method"
            element={<AvailableTrains />}
          />
          <Route
            path="/bookingDetails/:from/:to/:departure/:returnDate/:method/:trainClass"
            element={<BookingDetails />}
          />
          <Route
            path="/checkout/:from/:to/:departure/:returnDate/:method/:trainClass"
            element={<Checkout />}
          />
          <Route path="/paymentCompleted" element={<PaymentCompleted />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
