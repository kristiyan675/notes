import { useState } from "react";
import { Link } from "react-router-dom";
import { List, Pagination, Button } from "antd";
import { DeleteOutlined, FileSearchOutlined } from "@ant-design/icons";
import { useNotes } from "../../context/NoteContext";

const NoteList = () => {
  const { notes, deleteNote } = useNotes();

  const [currentPage, setCurrentPage] = useState(1);
  const notesPerPage = 5;

  const offset = (currentPage - 1) * notesPerPage;
  const currentNotes = notes.slice(offset, offset + notesPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
  };
  const totalPages = Math.ceil(notes.length / notesPerPage);

  return (
    <div>
      <h2>My Notes</h2>
      <List
        itemLayout="horizontal"
        dataSource={currentNotes}
        renderItem={(note) => (
          <List.Item
            actions={[
              <Link to={`/note/${note.id}`}>
                {/* @dev add link button simpler UX */}
                <Button style={{ borderColor: "green", color: "green" }}>
                  <FileSearchOutlined />
                </Button>
              </Link>,

              <Button
                danger
                onClick={() => {
                  deleteNote(note.id);

                  // TODO fix bug if only 1 is left
                  if (currentPage > totalPages) {
                    setCurrentPage(totalPages);
                  }
                }}
              >
                {/* @dev add delete button simpler UX */}
                <DeleteOutlined />
              </Button>,
            ]}
          >
            {/* Allow links to specific notes. */}
            <List.Item.Meta
              title={<Link to={`/note/${note.id}`}>{note.title}</Link>}
            />
            <List.Item.Meta
              style={{
                whiteSpace: "nowrap",
              }}
              title={note.content}
              className="noteBody"
            />
          </List.Item>
        )}
      />
      {/* @dev Implement pagination on notes listing. */}
      <Pagination
        current={currentPage}
        pageSize={notesPerPage}
        total={notes.length}
        onChange={handlePageClick}
        style={{ textAlign: "center", marginTop: "20px" }}
      />
    </div>
  );
};

export default NoteList;
