

import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { signOut } from 'next-auth/react'

// import  {signIn}  from 'next-auth/react';


export default function Home() {


  const logOutHandler= ()=>{
    signOut();
  }
  
  return (
    <div className={styles.container}>
      <h1>Next-Auth Credentials</h1>
      <Link href="/dashbord">
      <button >Dashbord</button>
      </Link>
      
      <button><Link href="/signup">Sign Up || Register</Link></button>

      <Link href="/signin">
      <button >Login</button>
      </Link>

      <button onClick={logOutHandler}>Log Out</button>
    </div>
  )
}
