import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Image from "next/image";
import IconButton from '@material-ui/core/IconButton';
import MailOutlineRoundedIcon from '@material-ui/icons/MailOutlineRounded';
import PhoneEnabledRoundedIcon from '@material-ui/icons/PhoneEnabledRounded';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import {Hidden} from "@material-ui/core";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  btnRoot: {
    position: 'fixed',
    left: '15px',
    top: '15px',
    transform: 'rotate(-90deg) translate(-100%, 0)',
    transformOrigin: 'left top'
  },
  btn: {
    color: "#414042",
    borderRadius: '1rem',
    marginLeft: theme.spacing(1),
    boxShadow: '-6px 6px 12px 0 rgba(0, 0, 0, 0.2),-6px -6px 12px 0 rgba(255, 255, 255, 0.5)',

  },
  btnActive: {
    color: "#414042",
    borderRadius: '1rem',
    marginLeft: theme.spacing(1),
    boxShadow: 'inset -6px 6px 12px 0 rgba(0, 0, 0, 0.2), inset -6px -6px 10px 0 rgba(255, 255, 255, 0)'
  },
  logoRoot: {
    position: 'absolute',
    left: '80px',
    top: '15px',
  },
  iconRoot: {
    position: 'fixed',
    left: '15px',
    bottom: '15px',
  },
  iconBtn: {
    borderRadius: '1rem',
    boxShadow: '6px 6px 12px 0 rgba(0, 0, 0, 0.2),-6px -6px 12px 0 rgba(255, 255, 255, 0.5)',
    width: '36px'
  },
  contactRoot: {
    position: 'fixed',
    right: '15px',
    top: '15px',
  },
  circleBtn: {
    boxShadow: '6px 6px 12px 0 rgba(0, 0, 0, 0.2),-6px -6px 12px 0 rgba(255, 255, 255, 0.5)',
    marginBottom: theme.spacing(1)
  },
  socialRoot: {
    position: 'fixed',
    right: '15px',
    bottom: '15px',
  },
  mobileLogo: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(2)
  }
}));

export default function Navigation() {
  const classes = useStyles();

  const [state, setState] = React.useState({right: false});

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  return (
    <>
      <Hidden only={["md", "sm", "xs"]}>
        <div className={classes.btnRoot}>
          <Button className={classes.btn}>Portfolio</Button>
          <Button className={classes.btn}>Blog</Button>
          <Link href={'/about'}><Button className={classes.btn}>About</Button></Link>
          <Link href={'/'}><Button className={classes.btnActive}>Home</Button></Link>
        </div>

        <div className={classes.logoRoot}>
          <Image src={'/Logo.svg'} width={250} height={60}/>
        </div>

        <div className={classes.iconRoot}>
            <Image src={'/Icon.svg'} width={36} height={80}/>
        </div>

        <div className={classes.contactRoot}>
          <div><IconButton className={classes.circleBtn}><MailOutlineRoundedIcon style={{ color: '#c13584' }}/></IconButton></div>
          <div><IconButton className={classes.circleBtn}><PhoneEnabledRoundedIcon style={{ color: '#0e76a8' }} /></IconButton></div>
        </div>

        <div className={classes.socialRoot}>
          <div><IconButton className={classes.circleBtn}><LinkedInIcon style={{ color: '#0e76a8' }} /></IconButton></div>
          <div><IconButton className={classes.circleBtn}><FacebookIcon style={{ color: '#3b5998' }} /></IconButton></div>
          <div><IconButton className={classes.circleBtn}><TwitterIcon style={{ color: '#00acee' }} /></IconButton></div>
          <div><IconButton className={classes.circleBtn} style={{marginBottom: 0}}><InstagramIcon style={{ color: '#c13584' }} /></IconButton></div>
        </div>
      </Hidden>

      <Hidden only={["xl", "lg"]}>
        <div className={classes.mobileLogo}>
          <Image src={'/Logo.svg'} width={250} height={60}/>
        </div>

        <div className={classes.socialRoot}>
          <IconButton style={{background: '#ffffff'}} className={classes.circleBtn} onClick={toggleDrawer('right', true)}><MenuRoundedIcon style={{ color: '#0e76a8'}} /></IconButton>
        </div>

        <SwipeableDrawer
          anchor={'right'}
          open={state['right']}
          onClose={toggleDrawer('right', false)}
          onOpen={toggleDrawer('right', true)}
        >
          test
        </SwipeableDrawer>
      </Hidden>
    </>
  );
}
