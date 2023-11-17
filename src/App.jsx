import { Route, Routes } from "react-router-dom";
import Login from "./pages/auth/login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateLayout from "./layouts/private-layout";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        // hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PrivateLayout />}></Route>
      </Routes>
    </>
  );
}

export default App;
