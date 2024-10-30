import { Form, Input } from 'antd';
import { useEffect } from "react";
import { FoundryInputPropsType } from './interface';

function PropComponent(props: FoundryInputPropsType) {
    const { title, placeholder, onChange, disabled } = props;
    const [form] = Form.useForm();

    // 使用 useEffect 来更新表单字段值
    useEffect(() => {
        form.setFieldsValue({ title, placeholder });
    }, [title, placeholder]);


    const handleValueChange = () => {
        if (onChange) {
            onChange(form.getFieldsValue());
        }
    };

    return (
        <Form
            form={form}
            layout="vertical"
            onValuesChange={handleValueChange}
            disabled={disabled}
        >
            <Form.Item
                label="标题"
                name="title"
                rules={[{ required: true, message: '请输入标题' }]}
            >
                <Input placeholder="请输入标题" />
            </Form.Item>
            <Form.Item
                label="Placeholder"
                name="placeholder"
            >
                <Input placeholder="请输入 placeholder" />
            </Form.Item>
        </Form>
    );
}

export default PropComponent;
