import { css, jsx } from "@emotion/css";
import Input from "../Input";
const EmailInput = ({ width , placeholder='email' }) => {
    return (
       <Input type="email" placeholder={placeholder} width={width}></Input>
    );
};
export default EmailInput