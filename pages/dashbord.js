import { getSession } from 'next-auth/react';
import React from 'react'

const Dashbord = () => {
  return (
    <div>
      Dashbord
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
