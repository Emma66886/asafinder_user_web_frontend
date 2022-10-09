// import { Box } from '@chakra-ui/react'
import React, { useState,useRef } from 'react'
import {Input,InputGroup,Box,Text, Button,Textarea} from '@chakra-ui/react'
import axios from 'axios'
import Pretokenlist from './tokenslist/pretokenlist'
import MyTokenList from './tokenslist/listtoken';
import Verifytoken from './tokenslist/verifytoken';
import Underreviewpage from './tokenslist/underreviewpage';
// const fs = require('fs');
function Listtokens() {
  const [switchToList,setSwitchToList] = useState('pretokenlist');
const setSwitch = (val) => setSwitchToList(val);
return<>
    {switchToList ==='pretokenlist' && <Pretokenlist set={setSwitch}/>}
    {switchToList === 'verifytokenlist' && <Verifytoken set={setSwitch} />}
    {switchToList === 'mytokenlist' && <MyTokenList set={setSwitch} />}
    {switchToList === 'underreview' && <Underreviewpage  />}
</> 
}

export default Listtokens