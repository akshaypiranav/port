"use client"

import Acheivements from "../../../components/Acheivements";
import Projects from "../../../components/Projects";
import Navbar from "../../../components/Navbar";


import { useState,useEffect } from "react"



const page = () => {



  return (
    <div>
        <Navbar />
        <Projects />
        <Acheivements />        
    </div>
  )
}

export default page