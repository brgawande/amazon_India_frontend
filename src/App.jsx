import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Register from "./components/auth/Register";
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./components/auth/PrivateRoute";
import PublicRoute from "./components/auth/PublicRoute";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import isUserAuthenticated from "./components/auth/isUserAuthenticated";
import { loginSuccess } from "./redux/reducer/authReducer";

function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  // we will create a conditional header, so that ye register wala page pe dikhna nhi chahiye q ki wo look kharab honga islsiye bass isko home page and baki sare pages pe hi rakhenge
  const ConditionalHeader = () => {
    const location = useLocation();
    if (location.pathname === "/register") {
      return null;
    }
    return <Header />;
  };

  useEffect(() => {
    const token = isUserAuthenticated();
    if (token) {
      // By passing null as the user, you can still trigger the login success action without needing actual user data at that moment.
      dispatch(loginSuccess({ user: null }));
    }
  }, [dispatch]);

  console.log("homepage isloggedin", isLoggedIn);

  return (
    <>
      <Router>
        <ConditionalHeader />
        <Routes>
          <Route
            path="/"
            element={<PrivateRoute isLoggedIn={isLoggedIn} element={Home} />}
          />
          <Route
            path="/register"
            element={<PublicRoute isLoggedIn={isLoggedIn} element={Register} />}
          />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
