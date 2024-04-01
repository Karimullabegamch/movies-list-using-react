


function Amv(props)
{
   console.log(props)
    return(
    
            
        <div className='cb'>
            
        <img src={props.url} alt="image"/>
        <h3 id="title">{props.title}</h3>
        </div>
     
    )
}
export default Amv