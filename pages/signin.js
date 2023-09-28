import { useRouter } from 'next/router';
import  { useEffect, useState } from 'react'
import { signIn, useSession } from 'next-auth/react';

const SignIn = () => {
const [email , setEmail] = useState("");
const [password , setPassword] = useState("");
const router = useRouter();

const {data , status} = useSession();
console.log(data , status);



const loginHandler = async ()=>{
 const res =await signIn("credentials" , {
    email , password ,
    redirect : false,
  });
  if(!res.error) router.replace("/dashbord");
}

useEffect(()=>{
  if(status === "authenticated") router.replace("/dashbord")
},[status]);
  return (
    <div>
        <h3>Login Form</h3>
        <input type='text' placeholder='Email' value={email} onChange={(e)=> setEmail(e.target.value)} />
        <input type='password' placeholder='Password' value={password} onChange={(e)=> setPassword(e.target.value)} />
        <button onClick={loginHandler}>Login</button>
    </div>
  )
}

export default SignIn;
