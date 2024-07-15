import { Card,CardContent,Typography } from '@mui/material'
import React from 'react'
import '../css/InfoBox.css'
const InfoBox = ({title,isRed,cases,active,total,...props}) => {
  return (
    <Card
    onClick={props.onClick}
    className={`infoBox`}>
      <CardContent>
        {/* Title */}
        <Typography className='infoBox__title mt-2' color="textSecondary" gutterBottom>{title}</Typography>
        {/* number of cases */}
        <h2 className={`infoBox__cases md:text-2xl md:font-bold ${!isRed && "!text-green-300"}`}>{cases}</h2>

        {/* total cases */}
        <Typography className='infoBox__total' color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  )
}

export default InfoBox
