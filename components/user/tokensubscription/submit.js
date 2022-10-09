import React, { useState } from 'react'
import {Box,useToast,Text,Input,Button} from '@chakra-ui/react';
import {CopyIcon} from '@chakra-ui/icons';
import axios from 'axios';
function Submit() {
    const [transactionId,setTransactionId] = useState('')
    const [error,setError] = useState('')
    const [isRequesting,setIsRequesting] = useState(false)
    const toast = useToast()
    const submitfrom = async()=>{
        setIsRequesting(true)
        if(!transactionId){
            setIsRequesting(false)
            setError("Transaction id must be provided")
        }
        try{

        
        const submit = await axios({
            method:'post',
            url:'',

        })
        setIsRequesting(false)
    }catch(e){
        setIsRequesting(false)
        setError(e?.response?.message || e?.message || "An error occured.")
    }

    }
  return (
    <Box w='100vw' minH='80vh' bg='#0D0E12'display='flex' justifyContent='center' >
        <Box w={['80%','70%','65%','50%']} color='#fff' display='flex' gap='2' flexDir='column' >
        <Text fontSize='1.5em' color='#45AC75' textAlign='center' fontWeight='medium'>ACCOUNT SUBSCRIPTION</Text>
    <Box w='100%'>
                <Text>Send AFD Token to this address</Text>
                <Box bg='#111621' w='100%' p='5' borderRadius='10px' display='flex'>
                    <Text flex='10'>TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI</Text>
                    <CopyIcon flex='1' color='#45AC75' onClick={() =>{
                    navigator.clipboard.writeText('TYJNWYTU47LV4KAGVXGHOZVWSINDX3NHWGGIVUYBFCXGSVBL2SKSYWVIXI')
                    toast({
                    title: 'Address Copied.',
                    description: "Verification address copied to clipboard.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                    })}
      }
     />
                </Box>
            </Box>
            <label style={{color:'#fff',fontSize:'0.9em'}}>Paste Transaction ID here
                <Input onChange={e=>setTransactionId(e.target.value)} bg='#fff' color='#000' type='text' placeholder='Transaction ID'/>
            </label>
            {error && <Text color='#ff0000' fontSize='0.8em'>{error}</Text>}
            <Button isLoading={isRequesting} onClick={submitfrom} color='#fff' w='30%' alignSelf='center' _hover={{color:'#c7c7c7'}} p='5' bg='#45AC75'>Submit Token</Button>
            </Box>
            </Box>
  )
}

export default Submit