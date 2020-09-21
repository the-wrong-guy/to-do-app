import React from 'react';
import PropTypes from 'prop-types';
import {AppBar,Tooltip,Toolbar,Typography,CssBaseline,useScrollTrigger,Container,Zoom,Fab,IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import styles from './appbar.module.css'
import {connect} from 'react-redux'
import {signOut} from '../../../Actions/authAction'
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function BackToTop(props) {
  if(!props.uid){
    return <Redirect to="/" />
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar>
        <Toolbar className={styles.toolbar}>
        <div>
          <Typography variant="h4">Qù zuò</Typography>
        </div>
        <div>
            <Tooltip title="username">
              <IconButton aria-label="user">
              <AccountCircleIcon/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Log out">
              <IconButton onClick={props.signOut} aria-label="Log out">
              <ExitToAppIcon/>
              </IconButton>
            </Tooltip>
        </div>
        </Toolbar>
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <Container>
      </Container>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

const mapStateToProps = state =>{
  const uid = state.firebase.auth.uid
  return{
    uid : uid
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    signOut : ()=> dispatch(signOut())
  }
} 



// const mapStateToProps = (state) =>{
//   console.log(state)
// }

export default connect(mapStateToProps,mapDispatchToProps)(BackToTop)