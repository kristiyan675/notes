import { Button, Form } from "antd";
import useNote from "./useNote";
import TitleInput from "../utils/InputTitle";
import InputBody from "../utils/InputBody";

const Note = ({ notes, saveNotes }) => {
  const {
    note,
    isEditing,
    setEditedTitle,
    setEditedBody,
    handleEditToggle,
    handleDelete,
    handleSave,
    navHome,
  } = useNote(notes, saveNotes);

  return (
    <div>
      <Button onClick={navHome} style={{ marginBottom: "20px" }}>
        Back
      </Button>
      {isEditing ? (
        <Form
          layout="vertical"
          initialValues={{
            title: note?.title,
            body: note?.body,
          }}
          onFinish={handleSave}
        >
          <TitleInput
            onChange={(e) => {
              setEditedTitle(e.target.value);
            }}
          />
          <InputBody
            onChange={(e) => {
              setEditedBody(e.target.value);
            }}
          />
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ marginRight: "8px" }}
            >
              Save
            </Button>
            <Button onClick={handleEditToggle}>Cancel</Button>
          </Form.Item>
        </Form>
      ) : (
        <div style={{ overflowWrap: "anywhere" }}>
          <h2>{note?.title}</h2>
          <p>{note?.body}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="primary" onClick={handleEditToggle}>
              Edit
            </Button>
            <Button danger onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
