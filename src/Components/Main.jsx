import React, { useState } from 'react';
import { styled } from '@mui/system';
import { Menu, MenuItem, Popover, Typography } from '@mui/material';

const Container = styled('div')({
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'relative',
});

const GradientBackground = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  borderRadius: '10px',
  background: 'linear-gradient(to bottom right, #1e88e5, #1976d2)',
  zIndex: -1,
});

const Square = styled('div')({
  width: '2200px',
  height: '1000px',
  borderRadius: '10px',
  backgroundColor: '#FFC0CB',
  position: 'relative',
  overflow: 'hidden',
});

const Calendar = styled('div')({
  display: 'grid',
  gridTemplateColumns: 'repeat(7, 1fr)',
  gridTemplateRows: 'repeat(6, 1fr)',
  width: '100%',
  height: '100%',
});

const Day = styled('div')({
  border: '1px solid #000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const getDaysInMonth = (year, month) => {
  return new Date(year, month + 1, 0).getDate();
};

const GradientSquare = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInMonth = getDaysInMonth(currentYear, currentMonth);

  const [anchorEl, setAnchorEl] = useState(null); // State for managing the anchor element of the menu

  const handleSquareClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

//   return (
//     <Container>
//       <GradientBackground />
//       <Square onClick={handleSquareClick}>
//         <Menu
//           anchorEl={anchorEl}
//           open={Boolean(anchorEl)}
//           onClose={handleClose}
//           getContentAnchorEl={null}
//           anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//           transformOrigin={{ vertical: 'top', horizontal: 'center' }}
//         >
//           <MenuItem onClick={handleClose}>Option 1</MenuItem>
//           <MenuItem onClick={handleClose}>Option 2</MenuItem>
//           <MenuItem onClick={handleClose}>Option 3</MenuItem>
//         </Menu>
//         <Calendar>
//           {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
//             <Day key={day}>{day}</Day>
//           ))}
//           {Array.from({ length: daysInMonth }).map((_, index) => (
//             <Day key={index + 7}>{index + 1}</Day>
//           ))}
//         </Calendar>
//       </Square>
//     </Container>
//   );
// };

return (
  <Container>
    <GradientBackground />
    <Square onClick={handleSquareClick}>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Square
          sx={{
            width: '200px',
            height: '200px',
            backgroundColor: '#FFFFFF',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={handleClose} // Close the pop-up when clicking inside the square
        >
          <Typography>Options</Typography>
        </Square>
      </Popover>
      <Calendar>
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <Day key={day}>{day}</Day>
        ))}
        {Array.from({ length: daysInMonth }).map((_, index) => (
          <Day key={index + 7}>{index + 1}</Day>
        ))}
      </Calendar>
    </Square>
  </Container>
);
};

const Main = () => {
  return (
    <div>
      <GradientSquare />
    </div>
  );
};

export default Main;
