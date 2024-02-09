import React from 'react'
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { Link } from 'react-router-dom';

export const ExportToExcel = ({ apiData, fileName }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";
  


  const exportToCSV = (apiData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(apiData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
};
  return (
    <div> 
    <link rel="stylesheet" href="staffStyles.css"></link>
    <link rel="stylesheet" href="cardStyles.css"></link>
    <link rel="stylesheet" href="itemStyles.css"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <body>
  <div class="main-container">
    <div class="flex-box-container">
      <div class="flex-box sidebar-container">
        <div class="sidebar-item logo">
            <img class="logo" src="/logo.png"/>
        </div>
        <div class="sidebar-item profile">
            <img class="profileImg" src={require("../../../../images/profile.png").default}/> 
            <h6>Sasini</h6>
         <h7>Receptionist</h7>
        </div>
        <div class="sidebar-item sidebar-menu">
             
        <ul>
        <li className="item">
                            <Link to={"/appointment/mainstaff"}><i class="fa-solid fa-house"></i><span>Dashboard</span></Link>
              </li>
    
                  <li className="item">
                                <Link to={"/appointment/mailer"}><i class="fas fa-envelope" aria-hidden="true"></i><span>Send E-mail</span></Link>
                  </li>
                  
                  <li className="item">
                                <Link to={"/appointment/report"}><i class="fas fa-chart-line"></i><span>Reports</span></Link>
                  </li>
                </ul>
        </div>
        <div class="sidebar-item logout">
          <ul>
              <li><a class="logout-btn"><i class="fa fa-sign-out" aria-hidden="true"></i><span>Log Out</span></a></li>
          </ul>  
        </div>
      </div>
      <div class ="flex-box content-container">
            <div class ="grid-container">
              <div class ="grid-item item-1">
                <div class="scroll-item scroll-item-1">
              <h2 style={{color:"#084587"}}>Generate</h2>         
     <div>
     <center>
     <div class ="column"  style={{margin:"auto", width:"300px",padding: "10px", align:"center"}}>
                   <div class ="card" style={{align:"center"}}>
                   <div class ="zoom">
                     <img src={require("../../../../images/report2.jpg").default} alt="Avatar" style={{width:"100%", height:"200"}}/><br></br><br></br><br></br>
                     </div>
                     <div class ="container">
                     <button style={{ background:"green"}}class ="button-73" role="button" height = "100" onClick={(e) => exportToCSV(apiData, fileName)}>Generate .csv file</button>
                  </div>
                    </div>
     </div> 
    </center>   

    <div class ="column"  style={{margin:"auto", width:"300px",padding: "10px", align:"center"}}>
                   <div class ="card" style={{align:"center"}}>
                   <div class ="zoom">
                     <img src={require("../../../../images/pdf .png").default} alt="pdf" style={{width:"100%", height:"200"}}/><br></br><br></br><br></br>
                     </div>
                     <div class ="container">
                   <Link to={'/appointment/pdf'}><button class ="button-73" role="button" height = "100"> Generate pdf file </button></Link> <br/> <br/>
                    </div>
                  </div>
                 </div> 

</div>
        </div>
   



        
    </div> 
    </div> 
  </div>
</div>       
</div>
</body>
</div> 
    );
  }
