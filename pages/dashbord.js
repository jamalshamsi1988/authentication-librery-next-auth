import { getSession } from 'next-auth/react';
import React, { useState } from 'react'

const Dashbord = () => {
  const [name , setName]= useState("");
  const [lastName , setLastName]= useState("");
  const [password , setPassword]= useState("");

  const submitHandler=async ()=>{
    const res = await fetch("/api/update-info" , {
      method : "POST" ,
      body : JSON.stringify({name , lastName , password}),
      headers : {'Content-type': 'application/json'},
    });

    const data = await res.json();
    console.log(data)
  }

  return (
    <div>
     <h1>Dashbord</h1>
     <h3>Complete Your Profile</h3>
     <input type='text' placeholder='Name' value={name} onChange={(e)=>  setName(e.target.value)} />
     <input type='text' placeholder='Last Name' value={lastName} onChange={(e)=>  setLastName(e.target.value)} />
     <input type='password' placeholder='Password' value={password} onChange={(e)=>  setPassword(e.target.value)} />
     <button onClick={submitHandler}>Submit</button>
    </div>
  )
}

export default Dashbord;

export async function getServerSideProps({req}){
  const session =await getSession({req});
console.log(session)
  if(!session){
    return {
      redirect : {
        destination : "/signin",
        permanent : false
      }
    };
  }

  return {
    props :{session}
  }
}
