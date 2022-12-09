import React, {PureComponent} from 'react';

import {httpGetLogin} from '../../server/index'

httpGetLogin({username:"admin",password:"admin"}).then(res=>{
    console.log(res,'eee')
})

export {}