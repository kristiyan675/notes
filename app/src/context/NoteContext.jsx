import { createContext, useState, useContext, useEffect } from "react";
import { notification } from "antd";

const NotesContext = createContext();
const apiUrl = "http://localhost:3000";

export const useNotes = () => {
  return useContext(NotesContext);
};

const openNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const response = await fetch(`${apiUrl}/notes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("here");
        setNotes(data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchNotes();
  }, []);

  const getNoteById = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/notes/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const createNote = async (note) => {
    try {
      const response = await fetch(`${apiUrl}/notes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(note),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      openNotification(
        "success",
        "Note Creation",
        "Note has been successfully created."
      );
      setNotes((prevNotes) => [...prevNotes, data]);
    } catch (err) {
      console.log(err);
    }
  };

  const updateNote = async (updatedNote, id) => {
    try {
      const response = await fetch(`${apiUrl}/notes/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedNote),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      openNotification(
        "success",
        "Note Update",
        "Note has been successfully updated."
      );
      setNotes((prevNotes) =>
        prevNotes.map((note) => (note.id === id ? data : note))
      );
      return data;
    } catch (err) {
      console.log(err);
    }
  };

  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${apiUrl}/notes/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      openNotification(
        "success",
        "Note Update",
        "Note has been successfully deleted."
      );
      setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        createNote,
        updateNote,
        getNoteById,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};
