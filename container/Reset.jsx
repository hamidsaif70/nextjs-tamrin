import { Global,css } from "@emotion/react";

export default function Reset() {
    return (
        <Global
            styles={css`
                html,
                body,
                div,
                span,
                applet,
                object,
                iframe,
                h1,
                h2,
                h3,
                h4,
                h5,
                h6,
                p,
                blockquote,
                pre,
                a,
                abbr,
                acronym,
                address,
                big,
                cite,
                code,
                del,
                dfn,
                em,
                img,
                ins,
                kbd,
                q,
                s,
                samp,
                small,
                strike,
                strong,
                sub,
                sup,
                tt,
                var,
                b,
                u,
                i,
                center,
                dl,
                dt,
                dd,
                ol,
                ul,
                li,
                fieldset,
                form,
                label,
                legend,
                table,
                caption,
                tbody,
                tfoot,
                thead,
                tr,
                th,
                td,
                article,
                aside,
                canvas,
                details,
                embed,
                figure,
                figcaption,
                footer,
                header,
                hgroup,
                menu,
                nav,
                output,
                ruby,
                section,
                summary,
                time,
                mark,
                audio,
                video {
                    margin: 0;
                    padding: 0;
                    border: 0;
                    font-size: 100%;
                    font: inherit;
                    vertical-align: baseline;
                }
                /* HTML5 display-role reset for older browsers */
                article,
                aside,
                details,
                figcaption,
                figure,
                footer,
                header,
                hgroup,
                menu,
                nav,
                section {
                    display: block;
                }
                body {
                    line-height: 1;
                }
                ol,
                ul {
                    list-style: none;
                }
                blockquote,
                q {
                    quotes: none;
                }
                blockquote:before,
                blockquote:after,
                q:before,
                q:after {
                    content: "";
                    content: none;
                }
                table {
                    border-collapse: collapse;
                    border-spacing: 0;
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: 900;
                    src: url('fonts/eot/IRANSansWeb_Black.eot');
                    src: url('fonts/eot/IRANSansWeb_Black.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb_Black.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb_Black.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb_Black.ttf') format('truetype');
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: bold;
                    src: url('fonts/eot/IRANSansWeb_Bold.eot');
                    src: url('fonts/eot/IRANSansWeb_Bold.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb_Bold.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb_Bold.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb_Bold.ttf') format('truetype');
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: 500;
                    src: url('fonts/eot/IRANSansWeb_Medium.eot');
                    src: url('fonts/eot/IRANSansWeb_Medium.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb_Medium.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb_Medium.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb_Medium.ttf') format('truetype');
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: 300;
                    src: url('fonts/eot/IRANSansWeb_Light.eot');
                    src: url('fonts/eot/IRANSansWeb_Light.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb_Light.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb_Light.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb_Light.ttf') format('truetype');
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: 200;
                    src: url('fonts/eot/IRANSansWeb_UltraLight.eot');
                    src: url('fonts/eot/IRANSansWeb_UltraLight.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb_UltraLight.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb_UltraLight.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb_UltraLight.ttf') format('truetype');
                }
                @font-face {
                    font-family: IRANSans;
                    font-style: normal;
                    font-weight: normal;
                    src: url('fonts/eot/IRANSansWeb.eot');
                    src: url('fonts/eot/IRANSansWeb.eot?#iefix') format('embedded-opentype'),  /* IE6-8 */
                         url('fonts/woff2/IRANSansWeb.woff2') format('woff2'),  /* FF39+,Chrome36+, Opera24+*/
                         url('fonts/woff/IRANSansWeb.woff') format('woff'),  /* FF3.6+, IE9, Chrome6+, Saf5.1+*/
                         url('fonts/ttf/IRANSansWeb.ttf') format('truetype');
                }
                *{font-family: IRANSans}
                body,html{
                    font-family: IRANSans;
                    box-sizing: border-box;
                    direction: rtl
                }
            `}
        ></Global>
    );
}
