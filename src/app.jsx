import { Form } from "antd"

export const App = () => {

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <Form 
            name='auth'
            onFinish={onFinish}
            autoComplete="off"
        > 
            App
        </Form>
    )
}