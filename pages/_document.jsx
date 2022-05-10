import { Html, Head, Main, NextScript } from "next/document";
import Layout from "../component/Layout";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                this is from _document.js
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
