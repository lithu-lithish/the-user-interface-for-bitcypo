import React from 'react'
import { Link } from 'react-router-dom'

export default function About(){
    return (
       <React.Fragment>
<div class="main-layouts"> 
    
    {/* <div class="loader_bg">
        <div class="loader"><img src="assets/images/loading.gif" alt="" /></div>
    </div> */}
    
    <div id="mySidepanel" class="sidepanel">
        {/* <a href="javascript:void(0)" class={"closebtn"} onclick={() => "closeNav()"}>×</a> */}
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonial">Testimonial</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
    </div>
  
    <header>
     
        <div class="head-top">
            <div class="container-fluid">
                <div class="row d_flex">
                    <div class="col-sm-3">
                        <div class="logo">
                            <a href="index.html">BitCYPO</a>
                        </div>
                    </div>
                    <div class="col-sm-5">
                        <ul class="social_icon text_align_right d_none">
                            <li> <a href="Javascript:void(0)"><i class="fa fa-facebook-f"></i></a></li>
                            <li> <a href="Javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                            <li> <a href="Javascript:void(0)"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                            <li> <a href="Javascript:void(0)"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                            <li> <a href="Javascript:void(0)"><i class="fa fa-youtube-play" aria-hidden="true"></i></a></li>
                        </ul>
                    </div>
                    <div class="col-sm-4">
                        <ul class="email text_align_right">
                            <li class="d_none"><a href="Javascript:void(0)"><i class="fa fa-user" aria-hidden="true"></i></a></li>
                            <li class="d_none"> <a href="Javascript:void(0)"><i class="fa fa-search" style={{cursor: "pointer"}} aria-hidden="true"></i></a> </li>
                            <li>
                                <button class="openbtn" onclick="openNav()"><img src="assets/images/menu_btn.png" /></button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
   
    <div id="about" class="about">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="about_border">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="titlepage text_align_left">
                                    <h2>About Us</h2>
                                </div>
                                <div class="about_text">
                                    <p>It is a long established fact that a reader will be distracted bIt is a long established fact that a reader will be distracted by y It is a long established fact that a reader will be distracted by It is a long established fact that a reader will be distracted by </p>
                                    <a class="read_more" href="about.html">Read More</a>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="about_img">
                                    <figure><img class="img_responsive" src="assets/images/about2.png" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <div class="footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <a class="logo_bottom" href="index.html">BitCYPO</a>
                    </div>
                    <div class="col-md-3 col-sm-6">
                  <div class="Informa conta ">
                     <h3>Contact Us</h3>
                     <ul>
                        <li> <a href="Javascript:void(0) "> <i class="fa fa-map-marker " aria-hidden="true "></i> Location
                           </a>
                        </li>
                        <li> <a href="Javascript:void(0) "><i class="fa fa-phone " aria-hidden="true "></i> Call +01 1234567890
                           </a>
                        </li>
                        <li> <a href="Javascript:void(0) "> <i class="fa fa-envelope " aria-hidden="true "></i> demo@gmail.com
                           </a>
                        </li>
                     </ul>
                     <ul>
                        <li>Readable content of                              
                        </li>
                        <li>a page when looking                           
                        </li>
                        <li>at its layoutreadable                          
                        </li>
                        <li>content of a page                             
                        </li>
                        <li>when looking at its                         
                        </li>
                        <li>layout                          
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                        <div class="Informa helpful">
                            <h3>Useful Link</h3>
                            <ul>
                                <li>Readable content of
                                </li>
                                <li>a page when looking
                                </li>
                                <li>at its layoutreadable
                                </li>
                                <li>content of a page
                                </li>
                                <li>when looking at its
                                </li>
                                <li>layout
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                  <div class="Informa ">
                     <h3>Offices</h3>
                     <ul>
                        <li>Readable content of                              
                        </li>
                        <li>a page when looking                           
                        </li>
                        <li>at its layoutreadable                          
                        </li>
                        <li>content of a page                             
                        </li>
                        <li>when looking at its                         
                        </li>
                        <li>layout                          
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-6">
                  <div class="Informa ">
                     <h3>Newsletter</h3>
                     <form class="newslatter_form ">
                        <input class="ente " placeholder="Enter your email " type="text " name="Enter your email " />
                        <button class="subs_btn ">Subscribe</button>
                     </form>
                  </div>
               </div>
            </div>
            <div class="copyright text_align_center ">
               <div class="container ">
                  <div class="row ">
                     <div class="col-md-12 ">
                        <p>© 2020 All Rights Reserved. Design by   <a href="https://html.design/ "> Free Html Template</a></p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
     
      </footer>
    
      <script src="assets/js/jquery.min.js "></script>
     <script src="assets/js/bootstrap.bundle.min.js "></script>
     <script src="assets/js/jquery-3.0.0.min.js "></script>
     <script src="assets/js/custom.js "></script>
    </div>

       </React.Fragment>
    )
}