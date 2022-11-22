import React, {FormEvent} from 'react';

const baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:3004'

const IndexLogin = (props: any) => {
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const usernameElement = (event.currentTarget.elements[0] as HTMLFormElement).value
        const passwordElement = (event.currentTarget.elements[1] as HTMLFormElement).value
        fetch(`${baseUrl}/login`, {
            method: "post",
            body: JSON.stringify({
                "username":"abc",
                "password":"123456"
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res: Response) => {
            console.log(res.json())
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor={'username'}>账号</label>
                <input type={'text'} id={'username'} defaultValue={'abc'}/>
                <label htmlFor={'password'}>密码</label>
                <input type={'password'} id={'password'} defaultValue={'123456'}/>
                <button type={'submit'}>登录</button>
            </form>
        </div>
    );
};


export default IndexLogin;