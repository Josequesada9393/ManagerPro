import React from 'react'
import { Box, useTheme } from '@mui/material'
import { useGetAdminsQuery } from 'state/api'
import Header from 'components/Header'


function Admins() {
    const {data, isLoading} = useGetAdminsQuery();
    const theme = useTheme();
    console.log(data)
  return (
    <div>Admins</div>
  )
}

export default Admins