import React, {useEffect, useState} from "react";
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import Image from "next/image";
import Grid from "@material-ui/core/Grid";
import {useInView} from "react-intersection-observer"
import {motion} from "framer-motion";
import {itemVariants, listVariants} from "../../animations";

const useStyles = makeStyles((theme) => ({
  root: {
    // display: "flex",
    // alignItems: "center",
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
    width: 320,
    // flex: 1
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
  const [ref, inView] = useInView({triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      className={classes.root}
      animate={inView ? "enter" : "initial"}
      initial="initial"
      exit={'exit'}
      variants={listVariants}
    >
      <motion.div variants={itemVariants}>
        <Typography variant={"h3"} align={"center"} gutterBottom>A website that is as unique and beautiful <br/>as your business</Typography>
        <Typography variant={"h6"} align={"center"} className={classes.blurb}>
          Our websites help you sell with a design that reflects your brand, business information
          organized in a way that gives you visibility, and an intuitive user experience that
          simplifies your website.
        </Typography>
      </motion.div>

      <Grid container spacing={5}>
        <Grid item md={4} sm={12} xs={12} style={{display: "flex", justifyContent: "center"}}>
          <motion.div variants={itemVariants} className={classes.imageCard}>
            <Image className={classes.img} src={'/clothing-shop.png'} height={500} width={320} objectFit="cover"/>
          </motion.div>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <motion.div variants={itemVariants} className={classes.imageCard}>
            <Image className={classes.img} src={'/white-storefront.png'} height={500} width={320} objectFit="cover"/>
          </motion.div>
        </Grid>

        <Grid item md={4} sm={12} xs={12}>
          <motion.div variants={itemVariants} className={classes.imageCard}>
            <Image className={classes.img} src={'/flower-shop.png'} height={500} width={320} objectFit="cover"/>
          </motion.div>
        </Grid>
      </Grid>
    </motion.div>
  )
}

export default HeaderSimpleCentered
