import emailjs from "emailjs-com";
import { Link } from 'react-router-dom';
const Mailer = () =>{
    function sendEmail(e){
        e.preventDefault();

        emailjs.sendForm("service_dz0zzkn",
         'template_9ew4qtv',
          e.target,
          "user_TA9OxKSZELrcfge2g58c5"
          ).then(res=>{
            alert("E-mail send successfully")
             }).catch(err=>
                alert("Failed to send email") );
         }

    return(
        <div> 
        <link rel="stylesheet" href="staffStyles.css"></link>
        <link rel="stylesheet" href="cardStyles.css"></link>
        <link rel="stylesheet" href="itemStyles.css"/><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <body>
      <div class="main-container">
        <div class="flex-box-container">
          <div class="flex-box sidebar-container">
            <div class="sidebar-item logo">
                <img class="logo" src="../logo.png"/>
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
          </div>
          <div class ="flex-box content-container">
                <div class ="grid-container">
                  <div class ="grid-item item-1">
                    <div class="scroll-item scroll-item-1">
                  <h2 style={{color:"#084587"}}>Create Appointment</h2>  
        <div className="container border"
        style={{marginTop:"50px",
        width:"50%",
        backgroundImage:`url('https://img.freepik.com/free-photo/hand-painted-watercolor-background-with-sky-clouds-shape_24972-1095.jpg?size=664&ext=jpg')`,
        backgroundPosition:"center",
        backgroundSize:"cover",
        }}>
    <form className="row" style={{margin:"25px 85px 75px 100px"}}   onSubmit={sendEmail}>

    <lable>Name:</lable>
        <input type="text" name="name"  required/><br></br><br></br>

        <lable>Email:</lable>
        <input type="email" name="user_email" className="form-control"   required pattern = "[a-zA-Z0-9.%_+-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}"/><br></br><br></br>

        <lable>Message:</lable>
        <textarea name="message" rows="4"  required/><br></br><br></br>

        <input type ='submit' name='Send' className="form-control btn btn-primary" style = {{marginTop:"30px"}}  />
            </form>
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

export default Mailer;