import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Component/Footer";

function AppLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/login-by-post`;
      let data = { email: user.email, password: user.password };
      let res = await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-6">
          {/* <div className="fs-2">Login Form</div> */}
          <h2 style={{textAlign: 'center', fontSize: 35, fontWeight: 'bold',marginTop: "10%",marginBottom: "5%"}}>Signin</h2>

          <form ref={formRef} className="needs-validation">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />

            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-secondary"
              onClick={loginAction}
            />

            <div className="d-flex justify-content-center ">
              <Link to={"/registration"}>New User, Register here</Link>
            </div>
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
      <br/>
      <br/>
      <Footer/>
    </>
  );
}

export default AppLogin;