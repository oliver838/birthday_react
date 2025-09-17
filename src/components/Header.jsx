import React from 'react'
import { motion } from "motion/react"
export const Header = () => {
  return (

    <div className='headerr'>
      <motion.h1 initial={{opacity:0,x:0,scale:0.1, scaleX:1}}   animate={{rotateX:720,opacity:1,scale:[0.9, 0.2,0.7,0.4,0.5,0.6,0.2,0.1,1],scaleX:[2,1,3,1,4,1,5,1]}} transition={{duration:2,type:"tweenW"}}>Today Birthdays</motion.h1>
    </div>
  )
}
