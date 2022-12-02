import React from "react";


import IndexLogin from './Login/index'
import DemoIndex from "./demo";
import Fun from "./demo/Fun";
import Hook from './demo/Hook'
import Event from  './demo/Event'

type FUN = {name:string}

function App(props:any){
  return (
    <div className="App">
        <IndexLogin name={'111'}>
                <div>1111</div>
        </IndexLogin>

        <DemoIndex name={1}/>
        <Fun <FUN> name={'111'}/>
        <Hook></Hook>
        <Event/>
    </div>
  );
}

export default App;
