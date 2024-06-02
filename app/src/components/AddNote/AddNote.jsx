import React, { useState } from "react";
import { Form, Button } from "antd";
import { useNavigate } from "react-router-dom";
import TitleInput from "../utils/InputTitle";
import InputBody from "../utils/InputBody";
import { useNotes } from "../../context/NoteContext";

const NoteForm = () => {
  const { createNote } = useNotes();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    const newNote = {
      // For simplicity we use Math.random().
      // Future Improvement: Replace with UUID to replace ID collision.
      // id: Math.random().toFixed(3).toString(),
      title,
      content: body,
      date: new Date().toLocaleDateString(),
    };
    createNote(newNote);
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
