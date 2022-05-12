import { css, jsx } from "@emotion/css";

const Input = ({ type = 'text', placeholder, width }) => {
    return (
        <input
            
            className={css`
                width: ${width || "100%"};
                padding: 5px;
                margin:5px;
                direction: ltr
                
            `}
            type={type}
            placeholder={placeholder}
        ></input>
    );
};
export default Input