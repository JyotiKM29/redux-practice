import { useState } from 'react'

function HOC (Wrapper) {
    function Counter(props){
        const [counter , setCounter ] = useState(0);
    const handler = () =>{

        setCounter(counter +1);
    }
    return(
        <Wrapper counter={counter} handler={handler} {...props}/>
    )
    }
  return Counter;
}

export default HOC
