import { Form, Input, Select, Checkbox } from 'antd';
import { useEffect } from "react"
import { FoundryInputPropsType, FoundryTitlePropsType } from './interface';

function PropComponents(props: FoundryTitlePropsType) {
    const { text, level, isCenter } = props
    const [form] = Form.useForm()

    useEffect(() => {
        form.setFieldsValue({ text, level, isCenter })
    }, [text, level, isCenter])
    return <Form form={form} layout="vertical" initialValues={{ text, level, isCenter }} >
        <Form.Item label="标题内容" name="text" rules={[{ required: true, message: '请输入标题内容' }]}><Input /></Form.Item>
        <Form.Item label="层级" name="level" ><Select options={[1, 2, 3, 4, 5].map(n => ({ value: n, text: n }))} /></Form.Item>
        <Form.Item label="是否居中" name="isCenter" valuePropName='checked'><Checkbox>居中显示</Checkbox></Form.Item>
    </Form>
}


export default PropComponents