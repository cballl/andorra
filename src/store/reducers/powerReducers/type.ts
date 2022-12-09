interface State {
    menu:any[],
    personInto?:[],
    routerPath?:[] | {}
}

interface Action {
    type:string,
    data:{} | []
}



export  type {
    State,
    Action
}