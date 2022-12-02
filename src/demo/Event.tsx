import React from 'react';

function Event() {
    return (
        <div>
            <div>11111</div>
            <button onClick={(e:React.FormEvent<HTMLButtonElement>)=>{
                console.log(e)

            }}>dainjia</button>
        </div>
    );
}

export default Event;