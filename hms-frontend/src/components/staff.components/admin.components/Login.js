import React from "react";
import './login.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import StaffLogin from "./Staff_login";
import DocDashboard from "./DocDashboard";
import PharmacistDashboard from "./PharmacistDashboard";

export default function Login() {
    return (

        <div className="App">
            <Router>
                <Switch>
                    <div className="login-main-container">
                        <div className="login-container">
                            <Route path="/login/staff" exact component={StaffLogin} />
                            <Route path="/staff-dashboard/:fname" component={DocDashboard} />
                            <Route path="/pharmacist-dashboard/:fname" component={PharmacistDashboard} />
                            <Route path="/receptionist-dashboard/:fname" component={Reception} />
                        </div>
                    </div>
                </Switch>
            </Router>
        </div>

    );
}