import React, { useState } from "react";
import { Form, Input, Button } from "antd";
import { useNavigate } from "react-router-dom";
import TitleInput from "../utils/InputTitle";
import InputBody from "../utils/InputBody";

const NoteForm = ({ notes, saveNotes }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newNote = {
      // For simplicity we use Math.random().
      // Future Improvement: Replace with UUID to replace ID collision.
      id: Math.random().toFixed(3).toString(),
      title,
      body,
      date: new Date().toLocaleDateString(),
    };
    const updatedNotes = [...notes, newNote];
    saveNotes(updatedNotes);
    navigate("/");
  };

  return (
    <div>
      <h2>Add Note</h2>
      <Form layout="vertical" onFinish={handleSubmit} className="addNote">
        <TitleInput
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <InputBody
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default NoteForm;
