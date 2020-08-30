import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import { NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../login-components/Login';
import Axios from 'axios';
class Header extends Component {
  render() {

    if(this.props.data){
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }
    

    return (
       <header>
      <div className="row banner">
         <div className="banner-text">
            <h1 className="responsive-headline" >GB-GCGC</h1>
            <h3 className="h3-guidance">GITAM Career Guidance Cell</h3>
            <Login/>
            <hr />
            <ul className="social">
               <li><a href="https://twitter.com/gbplacements"><i className='fa fa-twitter'></i></a></li>
               <li><a href="https://www.facebook.com/gitamblrplacements"><i className='fa fa-facebook'></i></a></li>
               <li><a href="https://instagram.com/gbplacements"><i className='fa fa-instagram'></i></a></li>
               <li><a href="https://www.youtube.com/channel/UCTdcKs5RAOcQ-qm2qOXI2Ng"><i className='fa fa-youtube'></i></a></li>
               <li><a href="https://www.linkedin.com/in/gitamblrplacements/"><i className='fa fa-linkedin'></i></a></li>
            </ul>
         </div>   
              <div className='row'>
                  <div className='col-xl-12 col-lg-12 col-md-12 col-xs-12'>
                    <h3 style={{color:"white"}}> Developers </h3>
                  </div>
              </div>
             
                          <div className='col-xs-12'>
                            <div className='row'>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Siddharth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Siddharth</center></div></div><p>            </p>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/DeviPriya.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Devi Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Avinash.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Avinash</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/varsha.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Sree Varsha</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Madhu.JPG')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Madhu Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Jain.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Gulab Jain</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Charan.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Charan</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/souji.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Soujanya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/sindhu.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Sindhu</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/deepak.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Deepak</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/nihanth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px",color:"white"}}><center>Nihanth</center></div></div>
                            </div>
                          </div>
                  <div className='row'>
                        <div  className="col-lg-9"></div>
                              <div className='col'>
                                  <div  align="right" style={{fontSize:"15px" ,color:"white"}}>Under the Guidance of Dr. Kishor Buddha</div>             
                               </div>    
                               </div> 
                               <div className="row justify-content-center">                               
                                            <div className="col-auto">                             
                                                  <p style={{textAlign:"center",color:"white"}}>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                      
                                            </div> 
                               </div>            
                  

  
  </div>
   </header>
    );
  }
}

export default Header;
