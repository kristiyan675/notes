import { useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const useNote = (notes, saveNotes) => {
  // get the id of the current note
  const { id } = useParams();

  const navigate = useNavigate();
  const note = notes.find((note) => note?.id === id);

  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(note?.title || "");
  const [editedBody, setEditedBody] = useState(note?.body || "");

  const handleDelete = () => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
    navHome();
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    const updatedNotes = notes.map((n) =>
      n.id === id ? { ...n, title: editedTitle, body: editedBody } : n
    );
    saveNotes(updatedNotes);
    setIsEditing(false);
    navHome();
  };

  const navHome = () => {
    navigate("/");
  };

  return {
    note,
    isEditing,
    editedTitle,
    editedBody,
    setEditedTitle,
    setEditedBody,
    handleEditToggle,
    handleDelete,
    handleSave,
    navHome,
  };
};

export default useNote;
