import React from 'react'
import ThrMv from './ThrMv';
import { thrillermvData } from './data';
export default function ThrMvs() {
  return (
    <div className="cbs">
    {
            thrillermvData.map(function(n)

            {
            
                return (
                   
                       <div  >
                        <ThrMv url={n.url} title={n.title} key="{n}"/>
                       
                        
                        

                    </div>
                        
                )
            })
    }
    </div>
  )
}
