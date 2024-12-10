import React from 'react';
import { Button, Form, Input, Space } from 'antd';


const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AddData: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: unknown) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({ note: 'Hello world!', gender: 'male' });
  };

  return (
    <Form
      {...layout}
      form={form}
      name="control-hooks"
      onFinish={onFinish}
    >
      <Form.Item name="name" label="标题" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="sub_name" label="副标题">
        <Input />
      </Form.Item>
      <Form.Item name="author" label="作者" rules={[{ required: true }]}>
        <Input />
      </Form.Item>
      <Form.Item name="publishing_house" label="出版社">
        <Input />
      </Form.Item>
      <Form.Item name="producer" label="出品方">
        <Input />
      </Form.Item>
      <Form.Item name="original_author" label="原作者">
        <Input />
      </Form.Item>
      <Form.Item name="translator" label="译者">
        <Input />
      </Form.Item>
      <Form.Item name="year_of_publication" label="出版年份">
        <Input />
      </Form.Item>
      <Form.Item name="pages_num" label="页码">
        <Input />
      </Form.Item>
      <Form.Item name="price" label="售价">
        <Input />
      </Form.Item>
      <Form.Item name="binding_and_layout" label="装帧">
        <Input />
      </Form.Item>
      <Form.Item name="describe" label="简介">
        <Input />
      </Form.Item>
      <Form.Item name="ISBN" label="ISBN">
        <Input />
      </Form.Item>
      <Form.Item
        noStyle
        shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
      >
        {({ getFieldValue }) =>
          getFieldValue('gender') === 'other' ? (
            <Form.Item name="customizeGender" label="Customize Gender" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          ) : null
        }
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Space>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
          <Button htmlType="button" onClick={onReset}>
            重置
          </Button>
          <Button type="link" htmlType="button" onClick={onFill}>
            Fill form
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default AddData;
