import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from "next/image";
import Grid from '@material-ui/core/Grid';
import {Typography} from "@material-ui/core";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: '100vh'
  },
  textSide: {
    display: "flex",
    alignItems: "center",
  },
  imageCard: {
    display: "flex",
    borderRadius: '1rem',
    boxShadow: '6px 6px 12px 0 rgba(0, 0, 0, 0.2),-6px -6px 12px 0 rgba(255, 255, 255, 0.5)',
    padding: theme.spacing(1),
    background: '#414042'
  },
  img: {
    borderRadius: '1rem',
  },
  btn: {
    borderRadius: '3rem',
    boxShadow: '12px 12px 24px 0 rgba(0, 0, 0, 0.2),-12px -12px 24px 0 rgba(255, 255, 255, 0.5)',
    width: '100%',
    height: '3rem',
    marginTop: theme.spacing(5),
  },
}))

const HeroHomePage = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item md={6} sm={12} xs={12} className={classes.textSide}>
        <div>
          <Typography variant={"h3"} gutterBottom>Stunning Websites</Typography>
          <Typography variant={"h6"} style={{fontWeight: "normal"}}>Your <span style={{fontWeight: 'bold', color: '#31708e'}}>#1</span> service for fast and beautiful web applications</Typography>
          <Typography variant={"h6"} style={{fontWeight: "bold"}}>One on one attention for you and your business</Typography>
          <Button className={classes.btn} variant="contained" color={"primary"}><Typography style={{fontWeight: "bold"}}>Get Started Now</Typography></Button>
        </div>
      </Grid>

      <Grid item md={6} sm={12} xs={12}>
        <div className={classes.imageCard}>
          <Image className={classes.img} src={'/app-sketch.jpg'} width={600} height={450} />
        </div>
      </Grid>
    </Grid>
  )
}

export default HeroHomePage
