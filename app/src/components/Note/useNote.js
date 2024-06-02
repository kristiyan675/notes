import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const useNote = (getNoteById) => {
  const [currentNote, setCurrentNote] = useState({});
  // get the id of the current note
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(currentNote?.title || "");
  const [editedBody, setEditedBody] = useState(currentNote?.body || "");

  useEffect(() => {
    const fetchNote = async () => {
      const note = await getNoteById(id);
      setCurrentNote(note);
      setEditedTitle(note.title);
      setEditedBody(note.content);
    };

    fetchNote();
  }, [id, getNoteById]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const navHome = () => {
    navigate("/");
  };

  return {
    currentNote,
    isEditing,
    editedTitle,
    editedBody,
    setEditedTitle,
    setEditedBody,
    handleEditToggle,
    navHome,
  };
};

export default useNote;
