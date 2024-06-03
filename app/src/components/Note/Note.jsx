import { Button, Form } from "antd";
import useNote from "./useNote";
import TitleInput from "../utils/InputTitle";
import InputBody from "../utils/InputBody";
import { useNotes } from "../../context/NoteContext";

const Note = () => {
  const { updateNote, deleteNote, getNoteById } = useNotes();

  const {
    currentNote,
    isEditing,
    editedTitle,
    editedBody,
    setEditedTitle,
    setEditedBody,
    handleEditToggle,
    navHome,
  } = useNote(getNoteById);

  return (
    <div>
      <Button onClick={navHome} style={{ marginBottom: "20px" }}>
        Back
      </Button>
      {isEditing ? (
        <Form
          layout="vertical"
          initialValues={{
            title: currentNote?.title,
            body: currentNote?.content,
          }}
          onFinish={() => {
            updateNote(
              { title: editedTitle, content: editedBody },
              currentNote.id
            ),
              navHome();
          }}
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
          <h2>{currentNote?.title}</h2>
          <p>{currentNote?.content}</p>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="primary" onClick={handleEditToggle}>
              Edit
            </Button>
            <Button
              danger
              onClick={() => {
                deleteNote(currentNote?.id);
                navHome();
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Note;
