import React from "react";
import {listVariants} from "../animations";
import {AnimatePresence, motion} from "framer-motion"
import Container from "@material-ui/core/Container";
import HeroHomePage from "../components/heros/heroHomePage/HeroHomePage";

const about = () => {

  return (
    // <AnimatePresence exitBeforeEnter>
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
    // </AnimatePresence>
  )
}

export default about
