import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Logo from "../../common.components/Logo";
import './pharmacyCashierStyles.css';
import './qrCodeScannerStyles.css';
import '../../common.components/gridContainerStyles.css';
import './shoppingCartStyles.css';
import './gridItemStyles.css';
import QRcodeScanner from "./QR_code_scanner";
import ShoppingCart from "./Shopping_cart";

export default function PharmacyCashier(){

    return (
        <Router>
          <div>
            <Switch>
              <Route path="/staff/pharmacy-cashier">
                <div className="main-container">
                  <div className="flex-box-container">
                    <div className="flex-box sidebar-container">
                      <Logo/>
                      <Route path="/staff/pharmacy-cashier" component={QRcodeScanner}/>
                    </div>
                    <div className="flex-box content-container">                    
                      <Route exact path="/staff/pharmacy-cashier/shopping-cart" component={ShoppingCart}/>
                    </div>
                  </div>                
                </div>
              </Route>
            </Switch>
          </div>
        </Router>
          
    );
}