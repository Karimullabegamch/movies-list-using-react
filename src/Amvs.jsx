import React from 'react'

import { ActMvData} from './data';
import Amv from './Amv';
export default function Amvs() {
  return (
    <div className="cbs">
    {
           ActMvData.map(function(n)

            {
            
                return (
                   
                       <div  >
                        <Amv url={n.url} title={n.title} key="{n}"/>
                       
                        
                        

                    </div>
                        
                )
            })
    }
    </div>
  )
}
