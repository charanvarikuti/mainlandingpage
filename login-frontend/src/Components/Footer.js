import React, { Component } from 'react';
//import { Card,CardTitle,CardSubtitle,CardText,Row,Col,Alert,Table } from 'reactstrap';
//import { Link, Switch, Route } from 'react-router-dom';
//import { BrowserRouter as Router,NavLink } from "react-router-dom";
//import Hyperlink from 'react-native-hyperlink';
//import SocialMediaBar from 'react-social-media-bar';

class Footer extends Component{
  render(){
  return (
    
      <footer>
        
            <div className="container">
              
                <div className='row'>
                    <div className='col-xl-12 col-lg-12 col-md-12 col-xs-12'>
                      <h3> Developers </h3>
                    </div>
                </div>
                <br />
                    <br />
                          <div className='col-xs-12'>
                            <div className='row'>
                              <div className='col-xl-2'></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12 ' ><img src={require('../asstes/Siddharth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Siddharth</center></div></div><p>            </p>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12  ' ><img src={require('../asstes/DeviPriya.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Devi Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12 ' ><img src={require('../asstes/Avinash.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Avinash</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/varsha.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Sree Varsha</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Madhu.JPG')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Madhu Priya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Jain.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Gulab Jain</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/Charan.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Charan</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/souji.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Soujanya</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/sindhu.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Sindhu</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/deepak.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Deepak</center></div></div>
                              <div className='col-xl-1 col-lg-3 col-md-3 col-xs-12' ><img src={require('../asstes/nihanth.jpg')} height="70" width="70"></img><br></br><div style={{fontSize:"9px"}}><center>Nihanth</center></div></div>
                            </div>
                          </div>
                    <br></br>
                    <div className='row'>
                      <div className="col-lg-9">&nbsp;</div>
                      <div className='col'>
                        <div align="right" style={{fontSize:"10px"}}>Under the Guidance of Dr. Kishor Buddha</div>
                      </div>
                    </div>
            
                  <br></br>
                  <div className="row justify-content-center">             
                      <div className="col-auto">
                          <p>Copyright GITAM,BENGALURU © 2020. All rights reserved.</p>
                      </div>
                  </div>
    </div>
  </footer>
      
  );
}
}

export default Footer;