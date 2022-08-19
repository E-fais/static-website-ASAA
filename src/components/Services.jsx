import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import {useNavigate} from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import foto1 from "../Assets/Images/2.png";
import foto2 from "../Assets/Images/b.png";
import foto3 from "../Assets/Images/tax-1.jpg";
import foto4 from "../Assets/Images/R.jpeg";
import foto5 from "../Assets/Images/v.jpg";
import foto6 from "../Assets/Images/OIP.jpeg";
import '../App.css'







function Services() {
  const navigate=useNavigate()
 
  const services = [
    {
      id: 1,
      title: "Audit",
      description: " doloremque laudantium, totam rem aperiam, eaque ipsa ecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos ",
      img: foto1,
    },

    {
      id: 2,
      title: "Incorporation",
      description: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      img: foto2,
    },
    {
      id: 3,
      title: "Taxation",
      description: "On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain a",
      img: foto3,
    },
    {
      id: 4,
      title: "Accounting",
      description: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, ",
      img: foto4,
    },
    {
      id: 5,
      title: "Consulting",
      description: "readable content of a page when looking at its layout.There are many variations of passages of Lorem Ipsum available, but the majority have suffered  The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here",
      img: foto5
    },
    // {
    //   id: 6,
    //   title: "Risk Advisory",
    //   description: " simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
    //   img: foto6
    // },
  ];
  return (
    <div style={{backgroundColor:'InfoBackground'}} >
      
      <Typography style={{color:'teal'}} pt={4} gutterBottom align="center" variant="h4" fontWeight={600}>
        What We Do?
      </Typography>
      
      <Divider/>
      <Grid container alignItems={'center'} justifyContent='center'>{
        services.map((item)=>{
            return(
              <div className="serviceList">
              <Card  sx={{ margin:6,maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image={item.img}
                alt="services"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                
                <Button size="small" onClick={()=> navigate(`/${item.title}`)} > Learn More</Button>
              </CardActions>
            </Card>
            </div>
            )
        })
      }
      </Grid>
    </div>
  );
}

export default Services;
