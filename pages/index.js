

import Link from 'next/link'
import styles from '../styles/Home.module.css'

// import  {signIn}  from 'next-auth/react';


export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Next-Auth Cridentials</h1>
      <button><Link href="/signup">Sign Up || Register</Link></button>
      <Link href="/signin">
      <button >Login</button>
      </Link>
    </div>
  )
}
