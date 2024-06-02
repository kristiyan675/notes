import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const InputBody = ({ value, onChange }) => (
  <Form.Item
    label="Body"
    name="body"
    rules={[{ required: true, message: "Field is required!" }]}
  >
    <TextArea value={value} onChange={onChange} rows={4} />
  </Form.Item>
);

export default InputBody;
