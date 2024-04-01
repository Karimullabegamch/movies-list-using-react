import React from 'react'
import ComMv from './ComMv'
import cmvData from "./data";

export default function ComMvs() {
  return (
    <div className="cbs">
    {
            cmvData.map(function(n)

            {
            
                return (
                   
                       <div  >
                        <ComMv url={n.url} title={n.title} key="{n}"/>
                       
                        
                        

                    </div>
                        
                )
            })
    }
    </div>
  )
}
