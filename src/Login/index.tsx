import React, {PureComponent, ReactElement} from 'react';

interface IProps<T =any> {
     name:string,
     children: ReactElement
}

interface IState<T = {}> {
    count:number
}

class IndexLogin extends PureComponent<IProps,IState> {
   state ={
        count:1
    }
    render() {
        return (
            <div>
                {this.state.count}
            </div>
        );
    }
}


export default IndexLogin;