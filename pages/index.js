import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation/Navigation";
import {makeStyles} from "@material-ui/core/styles";
import HeroHomePage from "../components/heros/heroHomePage/HeroHomePage";
import Container from '@material-ui/core/Container';
import {AnimatePresence, motion} from "framer-motion"
import {listVariants} from "../animations";
import HeaderSimpleCentered from "../components/headers/HeaderSimpleCentered";
import {useInView} from "react-intersection-observer";


const useStyles = makeStyles((theme) => ({
  section: {
    display: "flex",
    alignItems: "center",
    height: '100vh'
  },
  root: {
    display: "flex",
    alignItems: "center",
    height: '100vh'
  },
}))


export default function Home() {
  const classes = useStyles();
  const [ref, inView] = useInView({triggerOnce: true });
  console.log(inView)

  return (
    <div>
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        variants={listVariants}
      >
        <Container maxWidth="lg">
          <HeroHomePage />



        </Container>
      </motion.div>

        <Container maxWidth="lg">
            {/*<motion.div*/}
            {/*  ref={ref}*/}
            {/*  className={classes.root}*/}
            {/*  animate={inView ? "enter" : "initial"}*/}
            {/*  initial="initial"*/}
            {/*  exit={'exit'}*/}
            {/*  variants={listVariants}*/}
            {/*>*/}
                <HeaderSimpleCentered />
            {/*</motion.div>*/}
        </Container>

      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
    </div>
  )
}
