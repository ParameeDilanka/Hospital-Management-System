import React from 'react';
import {Link} from 'react-router-dom';



export default function StockManagerSidebarNavigation(){

    return(
        <div className="sidebar-item sidebar-menu">
               
                <ul>
                  <li>
                    <Link className="menu-link" to={"/staff/stock-manager/list-item/"}><i className="fas fa-list-ul"></i><span>View item list</span></Link>
                  </li>

                  <li>
                    <Link className="menu-link" to={"/staff/stock-manager/add-item/"}><i className="fa fa-plus-square"></i><span>Add New items</span></Link>
                  </li>

                  <li>
                    <Link className="menu-link" to={"/staff/stock-manager/stock-report/"}><i className="fas fa-chart-line"></i><span>Current stock report</span></Link>
                  </li>
                  
                  <li>
                    <Link className="menu-link" to={"/staff/stock-manager/sales-report/"}><i className="fas fa-chart-line"></i><span>Sales reports</span></Link>
                  </li>
                  
                </ul>
              
        </div>
    );
}