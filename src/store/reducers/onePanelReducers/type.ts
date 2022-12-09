interface State {
    data:[] | {},
    cartTwo:[] | {}
}

interface Action {
    type:string,
    data?:object | any[]
}


export type {State,Action}