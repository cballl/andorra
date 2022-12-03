import React from 'react';
import Http from '../server/http/index'


const http = new Http({
    baseURL: "http://localhost:3000",
    interceptors: {
        responseInterceptor: (res) => {
            console.log(res, 'res')
            return res
        },

        // requestIntercetor: (config) => {
        //     console.log(config,'config')
        //     return config
        // }
    }

})

http.request({
    method: "get",
    url: "/homepage/block/page"
}).then(res => {
    console.log(res.data)
})


function Event() {
    return (
        <div>
            <div>11111</div>
            <button onClick={(e: React.FormEvent<HTMLButtonElement>) => {
                console.log(e)

            }}>dainjia
            </button>
        </div>
    );
}

export default Event;