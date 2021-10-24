import React from 'react'
import { Link } from 'react-router-dom'

export default function Testimonial() {
    return (
       <React.Fragment>
<div id="mySidepanel" className="sidepanel">
        {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a> */}
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/testimonial">Testimonial</Link>
        <Link to="/works">Works</Link>
        <Link to="/contact">Contact</Link>
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
    
       </React.Fragment>
    )
}