import React,{useState,useEffect} from 'react'
import {data} from '../data'
import '../styles/page1.css'
import '../index.css';


function Page1(){
    const [withcode, setWithcode]=useState([]);
    const [showDays, setShowDays] = useState(false);

    useEffect(()=>{
        handleData()
    },[])

    function handleData(){
        let withCode=[], withoutCode=[];
        for(let i in data){
            if(data[i].hasOwnProperty('invite_code') && data[i]['invite_code']!==''){
                withCode.push(data[i])
            }else{
                withoutCode.push(data[i])
            }
         }
         withCode.push(...withoutCode)
         setWithcode(withCode)
    }
    return(
    <div>
        <table className='table_container'>
            <tr>
                <th>Sign up order</th>
                <th>Full Name</th>
                <th>Invitation Code</th>
                {showDays && <th>Estimated Wait Time</th>}
            </tr>
            {withcode.map((item,index) => 
            <tr> 
                <td>{item.sign_up_order}</td>
                <td>{item.full_name}</td>
                <td>{item.invite_code}</td>
                {showDays && <td>{index+1} Days</td>}
            </tr>)}
        </table>
        <button onClick = {() => {setShowDays(true)}}>waitlist</button>
    </div>
    ); 
}

export default Page1;