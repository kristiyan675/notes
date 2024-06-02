import { useState } from "react";

const useNotes = (notes, saveNotes) => {
  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const offset = (currentPage - 1) * notesPerPage;
  const currentNotes = notes.slice(offset, offset + notesPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };

  const handleDelete = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    saveNotes(updatedNotes);
    const totalPages = Math.ceil(updatedNotes.length / notesPerPage);
    // console.log(totalPages);
    // console.log(currentNotes, currentPage);

    // Edge case if 1 note left on the page and it's deleted
    // Should move to previous page
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  };

  return {
    currentNotes,
    currentPage,
    notesPerPage,
    handlePageClick,
    handleDelete,
  };
};

export default useNotes;
