import {Input} from "antd";

const Form = () => {
    return (
        <form>
            <Input type="email" placeholder="Email address" style={{marginBottom: "10px"}}/>
            <Input type="password" placeholder="Password" />
        </form>
    )
}

export default Form