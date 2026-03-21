import { auth, signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import ROUTES from '@/constants/routes'
import React from 'react'

const page = async() => {
  const session = await auth()
  console.log(session)
  return (
    <>
    <div>page</div>

    </>
    
  )
}

export default page