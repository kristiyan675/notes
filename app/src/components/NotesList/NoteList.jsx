import { Link } from "react-router-dom";
import { List, Pagination, Button } from "antd";
import { DeleteOutlined, FileSearchOutlined } from "@ant-design/icons";
import useNotes from "./useNoteList";

const NoteList = ({ notes, saveNotes }) => {
  const {
    currentNotes,
    currentPage,
    notesPerPage,
    handlePageClick,
    handleDelete,
  } = useNotes(notes, saveNotes);

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

              <Button danger onClick={() => handleDelete(note.id)}>
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
              title={note.body}
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
