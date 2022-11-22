import React, {useEffect, useState} from 'react';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3004'

const SearchIndex = (props: any) => {

    let [useData, setUseData] = useState([])
    useEffect(() => {
        fetch(`${baseUrl}/users`).then((res: Response) => {
             res.json().then((response: any) => {
                setUseData(response)
            })
        })
    },[])
console.log(useData)

    return (
        <div>

        </div>
    );
};


export default SearchIndex;