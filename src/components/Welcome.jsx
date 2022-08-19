import { Typography, Divider, Grid } from "@mui/material";
import React from "react";
import Image from "react-bootstrap/Image";

import {useInView} from 'react-intersection-observer'
function Welcome() {
  
  return (
    <div >
     
      <Typography 
        style={{ color: "teal" }}
        fontWeight={700}
        mt={2}
        gutterBottom
        align="center"
        variant="h4"
      >
        WELCOME TO ASAA
      </Typography>
      
      <Divider />
      <Grid p={2} container spacing={3} direction={"row"} marginTop={1}>
        <Grid mt={4} item xs={12} md={4}>
          <Image
            fluid
            rounded
            src="https://www.pagalguy.com/wp-content/uploads/2018/09/0E22AA3BF37554E5.jpg"
          />
        </Grid>
        <Grid item xs={12} md={8}>
          
          <Typography marginLeft={4} variant="H5">
            ASAA was established in the year 1981 and is the oldest among the 44
            overseas Chapters of the ICAI. The membership of the Chapter has
            grown steadily since its founding days and presently has over 400
            members who hold key positions in various private and public
            companies and are actively involved in support and development of
            the accounting profession in Qatar. The Chapter is actively involved
            in enhancing and updating the professional knowledge of its members
            and to meet this objective, periodically organizes professional
            lectures and seminars. Doha Chapter of The Institute of Chartered
            Accountants of India LLC (G) is registered under Qatar Financial
            Center (QFC) laws.The Chapter is the first professional membership
            body to be licensed in QFC. For the second consecutive year Doha
            Chapter of ICAI has been awarded as the best overseas chapter under
            category II by ICAI for the year 2017.We provide business and
            corporate tax services in Qatar. Our tax firm works firmly with the
            clients to help them optimize the tax legally in compliance with the
            current rules and regulations. Further, our audit firm does not
            compromise the quality of audit service we have been providing since
            its establishment because our clients and other users rely on our
            audit report to make an economic decision. Our accounting firm helps
            the clients to tailor and customize an ERP system that meets their
            needs, increase efficiency, and ensure an adequate internal control.
            Our accounting firm follows IFRS while doing the bookkeeping, and
            preparing the financial statements or any other financial report.
          </Typography>
        
        </Grid>
      </Grid>
    </div>
  );
}

export default Welcome;
