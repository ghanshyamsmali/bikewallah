import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Aboutus from "./Pages/Aboutus"

import MyRegistration from "./Pages/MyRegistration";
import MyNavigationLinks from "./Pages/MyNavigationLinks";

import Contactus from "./Pages/Contactus"
import Homepage from "./Pages/Homepage";
import AppLogin from "./Pages/AppLogin";
import Motor from "./Pages/Motor";
import MyUserList from "./Pages/MyUserList";
import Navbar from "./Component/Navbar";
function App() {
  return (
    <>
      <BrowserRouter>
        {/* <MyNavigationLinks /> */}
        <Navbar/>
        <Routes>
          
          {/** 1 Route means 1 Page */}
          <Route path="/home" element={<Homepage />} />
          <Route path="/login" element={<AppLogin />} />

          {/** Private Needs Protection */}
          <Route
            path="/home"
            element={
            
                <Homepage />
              
            }
          />
          <Route
            path="/Motor"
            element={
            
                <Motor />
              
            }
          />
          <Route
            path="/Aboutus"
            element={
            
                <Aboutus />
              
            }
          />

          <Route
            path="/Contactus"
            element={
              
                <Contactus />
              
            }
          />

          <Route
            path="/AppLogin"
            element={
            
                <AppLogin />
             
            }
          />
          <Route
            path="/MyRegistration"
            element={
              
                <MyRegistration />
              
            }
          />
            <Route
            path="/user-list"
            element={
              <ProtectedRoute>
                <MyUserList />
              </ProtectedRoute>
            }
          />


         
         

          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

// lets protect the pages
function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default App;