import { Card, CardContent, Typography } from '@mui/material';
import React from 'react';
import '../css/InfoBox.css';

const InfoBox = ({ title, isRed, cases, active, total, ...props }) => {
  return (
    <Card onClick={props.onClick} className={`infoBox ${active && 'infoBox--selected'}`}>
      <CardContent>
        {/* Title */}
        <Typography className="infoBox__title" color="textSecondary" gutterBottom>
          {title}
        </Typography>
        {/* Number of cases */}
        <h2 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h2>
        {/* Total cases */}
        <Typography className="infoBox__total" color="textSecondary">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
};

export default InfoBox;
