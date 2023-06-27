import React from 'react';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'relative',
    },
    gradientBackground: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '10px',
      background: 'linear-gradient(to bottom right, #1e88e5, #1976d2)',
      zIndex: -1,
    },
    square: {
      width: '800px',
      height: '600px',
      borderRadius: '10px',
      backgroundColor: '#FFC0CB',
    },
  }));

const GradientSquare = () => {
    const classes = useStyles();
  
    return (
        <div className={classes.container}>
          <div className={classes.gradientBackground} />
          <div className={classes.square} />
        </div>
    ); 
};

const Main = () => {
  return (
    <div>
      <GradientSquare />
    </div>
  )
}

export default Main;
