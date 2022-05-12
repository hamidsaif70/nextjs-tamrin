import { css, jsx } from "@emotion/css";
import { useTheme } from "@emotion/react";
import Input from "../Input";

const Button = ({ type,children }) => {
    const theme = useTheme()
    return (
        <button className={css`
            padding:5px;
            margin: 5px;
            background-color: ${theme.color.secondary}
        `} >{children}</button>
    );
};
export default Button