import { Box, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Box)(({theme}) => ({
    height: '250px',
    width: '250px',
    backgroundColor: theme.status.danger,
}))

const MuiResponsiveness = () => {
  return (
    <>
        <Box sx={{
            height: '300px',
            width: {
                xs: 100,
                sm: 200,
                md: 300,
                lg: 400,
                xl: 500
            },
            bgcolor: 'secondary.main'
        }}>
          
        </Box>
        <StyledBox/>
    </>
  )
}

export default MuiResponsiveness
