import React from 'react'
import {Box,Button,Text} from '@chakra-ui/react';
function Preform({set}) {
  return (
    <Box w='100vw' bg="#0D0E12" display='flex' flexDir='column' alignItems='center' color='#fff' minH='80vh'>
        <Box w={['80%','70%','60%','50%']} gap='10' minH='80%' color='#fff' display='flex' flexDir='column' justifyContent='center' alignItems='center'>
            <Text fontSize='1.5em' color='#45AC75'>KYC</Text>
            <Text >•	The form below serves as a protection for both platforms, understand that your details are kept private and safe read about privacy policy here. Your information can only be made known to the public with a reason.
<br />1.	If we detect any abnormalities or fraudulent act in the project, we will be forced to put out your information I.e your personal Social media.
</Text>
        <Button p='5' bg='#45AC75' minW='200px' _hover={{color:'#c7c7c7'}} onClick={(e)=>set('form')}>Continue</Button>
        <Text>By clicking on continue you agree that your personal information will be put out to the public if any suspicious move occur in your project.</Text>
        </Box>
    </Box>
  )
}

export default Preform