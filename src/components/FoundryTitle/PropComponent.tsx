import { Form, Input, Select, Checkbox } from 'antd';
import { useEffect } from "react";
import { FoundryTitlePropsType } from './interface';

function PropComponent(props: FoundryTitlePropsType) {
    const { text, level, isCenter, onChange, disabled } = props;
    const [form] = Form.useForm();

    // 在 props 改变时更新表单字段
    useEffect(() => {
        form.setFieldsValue({ text, level, isCenter });
    }, [text, level, isCenter, form]);

    // 处理表单值变化
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
                label="标题内容"
                name="text"
                rules={[{ required: true, message: '请输入标题内容' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="层级"
                name="level"
            >
                <Select
                    options={[1, 2, 3, 4, 5].map(n => ({ value: n, label: n }))}
                />
            </Form.Item>
            <Form.Item
                label="是否居中"
                name="isCenter"
                valuePropName="checked"
            >
                <Checkbox>居中显示</Checkbox>
            </Form.Item>
        </Form>
    );
}

export default PropComponent;
