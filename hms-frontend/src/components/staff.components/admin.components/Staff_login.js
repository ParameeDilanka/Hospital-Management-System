import React, { useState, useEffect } from 'react';
import med from '../../../images/med.png'
import { useHistory } from 'react-router-dom';

export default function StaffLogin() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [available, setAvailable] = useState("");
  const [loading, setLoading] = useState(false); //additional
  const [isError, setIsError] = useState(false);

  const history = useHistory();

  const loginHandler = async (e) => {
    //handler method for login

    setLoading(true);
    setIsError(false); //additional

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:8070/staff/login",
        { email, password },
        config
      );

      localStorage.setItem("authToken", data?.token); //set the browser caching or local storage for globally accessed anywhere in the application
      localStorage.setItem("gender", data?.gender);
      localStorage.setItem("fname", data?.fname);
      localStorage.setItem("lname", data?.lname);
      localStorage.setItem("nic", data?.nic);
      localStorage.setItem("specialization", data?.specialization);
      localStorage.setItem("number", data?.number);
      localStorage.setItem("email", data?.email);
      localStorage.setItem("password", data?.password);
      localStorage.setItem("province", data?.province);
      localStorage.setItem("city", data?.city);
      localStorage.setItem("street", data?.street);
      localStorage.setItem("pcode", data?.pcode);
      localStorage.setItem("type", data?.type);

      setTimeout(() => {
        // set a 5seconds timeout for authentication


        history.push(`/staff-dashboard/${data.fname}`);



        setLoading(false);
        window.location.reload();
      }, 5000);
    } catch (error) {
      setError(error.response.data.error);
      setAvailable(error.response.data.available);
      setLoading(false);
      setIsError(true);
      setTimeout(() => {
        setError("");
        setAvailable("");
      }, 5000); //5s
    }
  };

  const showPassword = () => {
    //show password method when check box is enabled
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  };

  return (


    <div className="grid-container">
      <div className="left-9">
        <img className="DocImg" src={med} height="580" alt="DocImg" />
      </div>
      <div className="grid-item-2 item-1">
        <h2> Staff Login Form</h2>
        <center>
          {error && (
            <span style={{ color: "white", background: "orange" }}>
              {error}
            </span>
          )}
          {available && (
            <span style={{ color: "white", background: "red" }}>
              {available}
            </span>
          )}
        </center>
        {/* <img className="DocImg" src = {wel}  height="370"   alt="DocImg"/>  */}
        <form onClick={loginHandler}>
          <label for="uname"><b>Email</b></label>
          <input type="text" placeholder="Enter Username" name="uname" required />
          <label for="uname"><b>password</b></label>
          <input type="password" placeholder="Enter Username" id="password" name="uname" required />
          <input type="checkbox" onClick={showPassword} />Show Password

          <center>
            {isError && (
              <small style={{ color: "red" }}>
                Something went wrong. Please try again later.
              </small>
            )}
            {loading ? (
              <button
                label={"SUBMIT"}

                htmlType="submit"
                type={"primary"}
                disabled={loading}

              >
                &nbsp;Authenticating...
              </button>
            ) : (
              <button
                label={"SUBMIT"}

                htmlType="submit"
                type={"primary"}

                disabled={loading}
              >
                LOGIN
              </button>
            )}
          </center>
        </form>

      </div>
    </div>


  )
}