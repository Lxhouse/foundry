import { Form, Input, Select } from 'antd';
import { useEffect } from 'react';
import { FoundryColumnLayoutType } from './interface';

function PropComponent(props: FoundryColumnLayoutType) {
  const { title, flexDirection, onChange, disabled } = props;
  const [form] = Form.useForm();

  // 使用 useEffect 来更新表单字段值
  useEffect(() => {
    form.setFieldsValue({ title, flexDirection });
  }, [title, flexDirection]);

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
      <Form.Item label="布局方向" name="flexDirection">
        <Select
          options={[
            {
              label: 'row',
              value: 'row',
            },
            {
              label: 'row-reverse',
              value: 'row-reverse',
            },
            {
              label: 'column',
              value: 'column',
            },
            {
              label: 'column-reverse',
              value: 'column-reverse',
            },
          ]}
        ></Select>
      </Form.Item>
    </Form>
  );
}

export default PropComponent;
