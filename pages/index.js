import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navigation from "../components/navigation/Navigation";
import {makeStyles} from "@material-ui/core/styles";
import HeroHomePage from "../components/heros/heroHomePage/HeroHomePage";
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  root: {
    // background: 'linear-gradient(135deg, #edc0bf 0,#c4caef 58%)',
    // minHeight: '100vh'
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <Container maxWidth="lg">
            <HeroHomePage />
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
