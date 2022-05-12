import {css,jsx} from '@emotion/css'
import Head from 'next/head';
import LayoutLogin from '../container/LayoutLogin';
import {EmailInput,PasswordInput,Button} from '../component'


export default function Login(props) {
    function handleSubmit(event){
        if(event){
            event.preventDefault()
        }
        console.log('handle submit')
    }
    return (
        <>
            <Head>
                <title> login </title>
            </Head>
            <LayoutLogin>

            <form onSubmit={handleSubmit}>
                <EmailInput></EmailInput>
                <PasswordInput></PasswordInput>
                <Button type='submit'>submit</Button>
            </form>
            </LayoutLogin>
        </>
    );
}

