import React from 'react'
import Hrmvs from './Hrmvs'
import Amvs from './Amvs'
import ComMvs from './ComMvs'
import ThrMvs from './ThrMvs'
export default function App() {
  return (
    <div >
       <h1>Action Movies</h1>
       <Amvs></Amvs>
      <h1>Comedy Movies</h1>
      <ComMvs></ComMvs>
      <h1>Thriller Movies</h1>
      <ThrMvs></ThrMvs>
      <h1>Horror Movies</h1>
      <Hrmvs/>
     
      
      
      
    </div>
  )
}
