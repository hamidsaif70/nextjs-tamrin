/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react"


export default function LayoutLogin({children}) {

    return (
        <div css={css`
            margin: auto;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            max-width: 500px;
        `}>
            <img src='logo.png'width='100%'/>
            <h2 css={css`
                padding-bottom: 10px;
            `}>گروه تخصصی قهوه زیسووو</h2>
            {children}
        </div>
    );
}

