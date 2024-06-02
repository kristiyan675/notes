import React from "react";
import { Form, Input } from "antd";

const TitleInput = ({ onChange }) => (
  <Form.Item
    label="Title"
    name="title"
    rules={[{ required: true, message: "Field is required!" }]}
  >
    <Input onChange={onChange} />
  </Form.Item>
);

export default TitleInput;
