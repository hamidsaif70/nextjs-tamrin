import { css, jsx } from "@emotion/css";
import Input from "../Input";

const PasswordInput = ({ type, placeholder='password', width }) => {
    return (
        <Input type='password' placeholder={placeholder} width={width} ></Input>
    );
};
export default PasswordInput