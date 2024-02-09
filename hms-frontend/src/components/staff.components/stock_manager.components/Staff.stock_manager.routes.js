import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import '../../common.components/common_styles.css';
import '../../common.components/gridContainerStyles.css';
import './gridItemStyles.css';
import './stockManagerStyles.css';
import '../../common.components/tableStyles.css';
import Logo from "../../common.components/Logo";
import LogOut from "../../common.components/LogOut";
import SidebarProfile from "../../common.components/SidebarProfile";
import StockManagerSidebarNavigation from "./Stock_manager_sidebarNavigation";
import AddNewItem from "./Add_pharmacyItem";
import ViewListItem from "./View_listItem";
import AddNewStock from "./Add_pharmacyStock";
import ViewListStock from "./View_listStock";
import DeleteStock from "./Delete_stock";
import DeleteItem from "./Delete_item";
import ModifyItem from "./Modify_pharmacyItem";
import ModifyStock from "./Modify_pharmacyStock";
import SalesReport from "./View_sales_report";



export default function StockManager(){
    return(
        <Router>
            <div>
                <Switch>
                    <Route path="/staff/stock-manager">
                        <div className="main-container">
                            <div className="flex-box-container">
                                <div className="flex-box sidebar-container">
                                    <Logo/>
                                    <SidebarProfile/>
                                    <StockManagerSidebarNavigation/>
                                    <LogOut/>
                                </div>
                                <div className="flex-box content-container">                    
                                    <Route exact path="/staff/stock-manager/add-item" component={AddNewItem}/>
                                    <Route exact path="/staff/stock-manager/list-item" component={ViewListItem}/>
                                    <Route exact path="/staff/stock-manager/list-item/list-stock/add-stock/:id" component={AddNewStock}/>
                                    <Route exact path="/staff/stock-manager/list-item/list-stock/:id" component={ViewListStock}/>
                                    <Route exact path="/staff/stock-manager/sales-report" component={SalesReport}/>
                                    <Route exact path="/staff/stock-manager/delete-item/:id" component={DeleteItem}/>
                                    <Route exact path="/staff/stock-manager/delete-stock/:itemId/:stockId" component={DeleteStock}/>
                                    <Route exact path="/staff/stock-manager/list-item/edit-item/:itemId" component={ModifyItem}/>
                                    <Route exact path="/staff/stock-manager/list-item/list-stock/edit-stock/:itemId/:stockId" component={ModifyStock}/>
                                </div>
                            </div>                
                        </div>
                    </Route>
                </Switch>
            </div>
    </Router>
    );
}