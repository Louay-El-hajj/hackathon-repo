import { useEffect, useState } from "react";
import Header from "../components/Header";
import { useGeolocation } from "@uidotdev/usehooks";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Authentication = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(false);
  const location = useGeolocation();
  const [authInfo, setAuthInfo] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });
  const [latLong, setLatLong] = useState({
    latitude: 0,
    longitude: 0,
  });

  const handleInputChange = (type, value) => {
    setAuthInfo({
      ...authInfo,
      [type]: value,
    });
  };

  const handleAuth = (e) => {
    e.preventDefault();
    axios
      .post(
        login
          ? "http://localhost:8000/api/login"
          : "http://localhost:8000/api/register",
        {
          name: authInfo.name,
          username: authInfo.username,
          email: authInfo.email,
          password: authInfo.password,
          latitude: latLong.latitude,
          longitude: latLong.longitude,
        }
      )
      .then((response) => {
        localStorage.userId = response?.data?.user?.id;
        navigate("/community");
      })
      .catch((error) => {
        const message =
          error?.response?.data?.message ?? "Sorry, something went wrong!";
        toast.error(message);
      });
  };

  useEffect(() => {
    if (!location.loading && !location.error) {
      setLatLong({
        latitude: location.latitude,
        longitude: location.longitude,
      });
    }
  }, [location]);

  return (
    <main className="w-screen h-screen bg-slate-900">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Header />
      <div className="container mx-auto">
        <div className="max-w-lg bg-white p-10 rounded-lg mx-auto text-center">
          <h1>Join ResQ</h1>
          <p className="mt-2">Signup or login to continue.</p>

          <form className="mt-4 flex flex-col gap-4" onSubmit={handleAuth}>
            {!login && (
              <>
                <input
                  value={authInfo.name}
                  onChange={(e) => handleInputChange("name", e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
                />
                <input
                  value={authInfo.username}
                  onChange={(e) =>
                    handleInputChange("username", e.target.value)
                  }
                  type="text"
                  placeholder="Username"
                  className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
                />
              </>
            )}
            <input
              value={authInfo.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              type="email"
              placeholder="Email Address"
              className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
            />
            <input
              value={authInfo.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full p-2 border rounded-lg outline-none focus:border-slate-900"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-lg text-white bg-blue-950 inline-block mx-auto mt-auto"
            >
              {login ? "Login" : "Signup"}
            </button>

            <a href="#" onClick={() => setLogin(!login)}>
              {login ? "New to ResQ? Join now!" : "Already a member?"}
            </a>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Authentication;
