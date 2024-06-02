import { useState, useEffect } from "react";
import notesData from "../data/notes";

// Custom hook for getting/setting and persisting the notes
const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes")) || notesData;
    // saveNotes(notesData);
    setNotes(savedNotes);
  }, []);

  const saveNotes = (updatedNotes) => {
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  return [notes, saveNotes];
};

export default useNotes;
