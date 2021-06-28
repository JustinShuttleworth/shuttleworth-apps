import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import {useInView} from "react-intersection-observer"
import {motion, useAnimation} from "framer-motion";
import {listVariants} from "../../animations";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    height: '100vh'
  },
  imageCard: {
    display: "flex",
    borderRadius: '1rem',
    boxShadow: '6px 6px 12px 0 rgba(0, 0, 0, 0.2),-6px -6px 12px 0 rgba(255, 255, 255, 0.5)',
    padding: theme.spacing(1),
    background: '#414042',
    alignItems: "center",
    justifyContent: "center",
    width: 320
  },
  img: {
    borderRadius: '1rem',
  },
  blurb: {
    marginBottom: theme.spacing(5)
  }
}))

const HeaderSimpleCentered = () => {
  const classes = useStyles();
  // const animation = useAnimation();
  const [animation, setAnimation] = useState("initial")
  const [ref, inView, entry] = useInView({ threshold: 0.1 });

  useEffect(() => {
      if (inView) {
        setAnimation("enter")
        // animation.start("enter");
      }
      // else {
      //   animation.start("exit");
      // }
    }, [inView]);

  console.log(inView)
  console.log(animation)

  return (
    <motion.div
      ref={ref}
      className={classes.root}
      animate={animation}
      initial="initial"
      exit={'exit'}
      variants={listVariants}
    >
      <div>
      <Typography variant={"h3"} align={"center"} gutterBottom>A website that is as unique and beautiful <br/>as your business</Typography>
      <Typography variant={"h6"} align={"center"} className={classes.blurb}>
        Our websites help you sell with a design that reflects your brand, business information
        organized in a way that gives you visibility, and an intuitive user experience that
        simplifies your website.
      </Typography>

      <Grid container spacing={5}>
        <Grid item md={4} sm={12} xs={12} style={{display: "flex", justifyContent: "center"}}>
          <div className={classes.imageCard}>
            <Image className={classes.img} src={'/clothing-shop.svg'} height={500} width={320} objectFit="cover"/>
          </div>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <div className={classes.imageCard}>
            <Image className={classes.img} src={'/white-storefront.svg'} height={500} width={320} objectFit="cover"/>
          </div>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <div className={classes.imageCard}>
            <Image className={classes.img} src={'/flower-shop.svg'} height={500} width={320} objectFit="cover"/>
          </div>
        </Grid>
      </Grid></div>

    </motion.div>
  )
}

export default HeaderSimpleCentered
