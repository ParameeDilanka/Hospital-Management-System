import React, { Component } from 'react'  
import Table from '@material-ui/core/Table';  
import TableBody from '@material-ui/core/TableBody';  
import TableCell from '@material-ui/core/TableCell';  
import TableContainer from '@material-ui/core/TableContainer';  
import TableHead from '@material-ui/core/TableHead';  
import TableRow from '@material-ui/core/TableRow';  
import Paper from '@material-ui/core/Paper';  
import axios from 'axios';  
import jsPDF from 'jspdf';  
import Button from '@material-ui/core/Button'; 
import html2canvas from 'html2canvas';  
  
export class MatTable extends Component {  
  constructor(props) {  
    super(props)  
    this.state = {  
        appointments: []  
  
    }  
  }  
  printDocument() {  
    const input = document.getElementById('pdfdiv');  
    html2canvas(input)  
      .then((canvas) => {  
        var imgWidth = 200;  
        var pageHeight = 290;  
        var imgHeight = canvas.height * imgWidth / canvas.width;  
        var heightLeft = imgHeight;  
        const imgData = canvas.toDataURL('image/png');  
        const pdf = new jsPDF('appointment', 'mm', 'a4')  
        var position = 0;  
        var heightLeft = imgHeight;  
        pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);  
        pdf.save("download.pdf");  
      });  
  }  
  
  componentDidMount() {  
    axios.get('http://localhost:8070/appointments/').then(response => {  
      console.log(response.data);  
      this.setState({  
        appointments: response.data  
      });  
    });  
  }  
  render() {  
    console.log(this.state.appointments);  
    return ( 
      <div>
        <TableContainer id="pdfdiv" className="txt" component={Paper} style={{color:"blue"}}>  
          <Table stickyHeader aria-label="sticky table">  
          <table style={{ width: '100%', height:'100%', background:'hsla(290,60%,70%,0.3)' }} align="center">
                        <tr>
                            <td align='left'>
                                <img src="../logo.png" width="100px" alt="logo" />
                            </td>
                            <td align='center'>
                                <h2>Medi Lanka</h2>
                                <h4>All Appointments Report</h4>
                            </td>
            <TableHead style={{color:"blue"}}>  
              <TableRow style={{color:"blue"}}> 
              <TableCell align="right"></TableCell>   
                <TableCell align="right">Date</TableCell>  
                <TableCell align="right">Time</TableCell>  
                <TableCell align="right">Firstname</TableCell>  
                <TableCell align="right">Lastname</TableCell>  
                <TableCell align="right">Email</TableCell>  
                <TableCell align="right">Phone</TableCell>  
                <TableCell align="right">Doctor name</TableCell>  
              </TableRow>  
            </TableHead>  
            <TableBody>  
              {  
                this.state.appointments.map((appointment, index) => {  
                  return <TableRow key={index}>  
                    <TableCell component="th" scope="row">   
                    </TableCell>  
                    <TableCell align="right">{appointment.date}</TableCell>  
                    <TableCell align="right">{appointment.time}</TableCell>  
                    <TableCell align="right">{appointment.firstname}</TableCell>  
                    <TableCell align="right">{appointment.lastname}</TableCell>  
                    <TableCell align="right">{appointment.email}</TableCell>  
                    <TableCell align="right">{appointment.phone}</TableCell>  
                    <TableCell align="right">{appointment.doctorname}</TableCell>  
                  </TableRow>  
                })  
              }  
            </TableBody>  
            </tr>
            </table>
          </Table><br></br>  
          </TableContainer>  

          <Button onClick={this.printDocument} variant="contained" color="primary">  
            Download Pdf  
        </Button>  
      </div>  
    );  
  }  
}  
  
export default MatTable  