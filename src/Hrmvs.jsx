import React from 'react'

import { hrrMvData} from './data';
import Hrmv from './Hrmv';
export default function Hrmvs() {
  return (
    <div className="cbs">
    {
           hrrMvData.map(function(n)

            {
            
                return (
                   
                       <div  >
                        <Hrmv url={n.url} title={n.title} key="{n}"/>
                       
                        
                        

                    </div>
                        
                )
            })
    }
    </div>
  )
}
