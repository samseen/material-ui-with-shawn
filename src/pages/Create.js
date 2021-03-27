import React from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container'
import AcUnitIcon from '@material-ui/icons/AcUnit';
import SendIcon from '@material-ui/icons/Send';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',
    '&:hover': {
      backgroundColor: 'blue'
    }
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20
  }
})

export default function Create() {
  const classes = useStyles()

  return (
    <Container>
      <Typography
        className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a new note
      </Typography>
      <Button
       className={classes.btn}
       onClick={() => console.log('You clicked me!')}
       type="submit"
       color="secondary" 
       variant="contained"
       endIcon = {<KeyboardArrowRightIcon />}
       >
        Submit
      </Button>

      {/* ICONS */}
      {/* <br/>
      <AcUnitIcon />
      <AcUnitIcon color="secondary" fontSize="large" />
      <AcUnitIcon color="secondary" fontSize="small" />
      <AcUnitIcon color="action" fontSize="small" />
      <AcUnitIcon color="error" fontSize="small" />
      <AcUnitIcon color="disabled" fontSize="small" /> */}
    </Container>
  )
}
