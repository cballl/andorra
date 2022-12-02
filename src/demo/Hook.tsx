import React, {useRef, useState} from 'react';

function Hook(props:any) {
    const [count,setCount] = useState<number  | object>({
    } as {name:string})
    let myDiv =  useRef<HTMLDivElement | any>()

    return (
        <div ref={myDiv}>
            1111
            <button onClick={()=>{
                console.log(myDiv,'22')
                myDiv.current.outerText = 'ooooo'
                console.log(myDiv.current.outerText)    
            }}>ref</button>
        </div>
    );
}

export default Hook;