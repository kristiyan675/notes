import React from "react";
import { Form, Input } from "antd";

const TitleInput = ({ onChange }) => (
  <Form.Item
    label="Title"
    name="title"
    rules={[
      { required: true, message: "Field is required!" },
      { min: 5, message: "Title must be at least 5 characters long." },
      { max: 25, message: "Title cannot exceed 25 characters." },
    ]}
  >
    <Input onChange={onChange} />
  </Form.Item>
);

export default TitleInput;
