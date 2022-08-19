import { Typography } from "@mui/material";
import React from "react";

function Contact() {
  return (
    <div style={{padding:'2rem'}}>
      <Typography
        style={{ color: "teal" }}
        fontWeight={700}
        
        gutterBottom
        align="center"
        variant="h4"
      >
        Contact Us
      </Typography>
      <div class="row">
        <div style={{marginBottom:'1rem'}} class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Call Us</h5>
              <p class="card-text">
               +976 642 8457 55 <br/>
               +976 642 84557 56
              </p>
             
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Mail us</h5>
              <p class="card-text">
              info@asaa.com <br/>
              customersupport@asaa.com
              </p>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
