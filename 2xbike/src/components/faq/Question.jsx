import React, { useState } from 'react';
import { Box, Collapse } from '@mui/material';
import { Button } from '@mui/base';
import expandLess from '../../assets/images/icons/minus.svg';
import expandMore from '../../assets/images/icons/plus.svg';

export default function Question({ number, question, answer }) {
  const [open, setOpen] = useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <Box className="question-block">
      <Box className="question">
        <h4>{number}</h4>
        <Box>
          <p className="question-text">{question}</p>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <p className="answer-text">{answer}</p>
          </Collapse>
        </Box>
      </Box>
      <Button className="expand-answer white-button" onClick={handleClick}>
        {open ? <img src={expandLess} alt="expend less" /> : <img src={expandMore} alt="expend more" />}
      </Button>
    </Box>
  );
}
