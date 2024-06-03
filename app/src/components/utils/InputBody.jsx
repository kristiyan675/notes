import React from "react";
import { Form, Input } from "antd";

const { TextArea } = Input;

const InputBody = ({ value, onChange }) => (
  <Form.Item
    label="Body"
    name="body"
    rules={[
      { required: true, message: "Field is required!" },
      { min: 5, message: "Title must be at least 5 characters long." },
      { max: 250, message: "Title cannot exceed 250 characters." },
    ]}
  >
    <TextArea value={value} onChange={onChange} rows={4} />
  </Form.Item>
);

export default InputBody;
