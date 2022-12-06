interface State {
    token:string
}

interface Action {
    type:string,
    data?:object | any[]
}



interface Login {
    username:string,
    password:string
}


export type {State,Action,Login}