import { Html, Head, Main, NextScript } from "next/document";
import Reset from "../container/Reset";

export default function Document() {
    return (
        <Html>
            <Head />
            <body>
                <Reset/>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
