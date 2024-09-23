'use client'
import React from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();

    const handleClick = async () => {
        try {
            const response = await axios.post('/api/login')
            if(response.data.success){
                router.push('/editor')
            }
            console.log(response.data)
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <div>
        <button onClick={handleClick}>Login</button>
    </div>
  )
}

export default page