import { Text,Box,Button } from '@chakra-ui/react'
import React from 'react'

function Postsubmit() {
  return (
    <Box w='100vw' minH='80vh' display='flex' flexDir='column' alignItems='center' justifyContent='center' bg={'#0D0E12'}>
    <Text fontSize='2.5em' fontWeight='medium' color='#45AC75' textAlign='center'>YOUR ACCOUNT HAS BEEN SUBMITTED SUCCESSFULLY</Text>
    <Button p='5' fontSize='1.2em' fontWeight='medium' bg='#45AC75'>HOME</Button>
</Box>
  )
}

export default Postsubmit