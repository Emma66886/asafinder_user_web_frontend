import React,{useState} from 'react'
import Form from './form'
import Preform from './preform'

function Submitkyc() {
    const [page,setPage] = useState('kyc')
    const set =(value)=>{
        setPage(value)
    }
  return (
    <>
    {page ==='kyc' && <Preform set={set} />}
    {page ==='form' && <Form />}
    </>
  )
}

export default Submitkyc