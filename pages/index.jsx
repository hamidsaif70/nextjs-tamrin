import Head from "next/head";
import Link from "next/link";
import styledComponents from "styled-components";
import Layout from "../component/Layout";
import styled from '@emotion/styled'
import {css,jsx} from '@emotion/css'

let color = 'lightgreen'

let Button = styled.button`
    background-color: 'lightgrey';
    padding: 12px;
    color: ${props=>props.color||'black'}
`
let H1 = styledComponents.h1`
    font-size: 25px;
    background-color:'red';
    color:${props => props.color||'grey'}
`

export default function Home(props) {
    return (
        <div className="container">
            <Head>
                <title> my site </title>
            </Head>
            <Layout>
                <H1 color="red">salam man ba styled-components writen</H1>
                <H1 >salam man ba styled-components writen</H1>
                <div className="hamid">
                    <Link href="../posts">go to posts</Link>
                    <div>{props.name}</div>
                </div>
                <hr></hr>
                <Button color="red">im emotion/styled</Button>
                <Button > im emotion/styled</Button>
                <hr></hr>
                <button className= {css`
                    border-radius: 25px;
                    padding:12px;
                    background-color: ${color};
                `} >im @emotion/css</button>

            </Layout>
        </div>
    );
}
Home.getInitialProps = async (x) => {
    return { name: "this is props that come from getInitialProps" };
};
