const pool = require("../../db");

// Get all notes
exports.getAllNotes = (req, res) => {
  pool.query("SELECT * FROM notes", (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200).json(results.rows);
  });
};

exports.getNoteById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query("SELECT * FROM notes WHERE id = $1", [id], (error, results) => {
    if (error) {
      throw error;
    }
    // console.log(req.params.id);
    res.status(200).json(results.rows[0]);
  });
};

exports.createNote = (req, res) => {
  const { title, content } = req.body;
  pool.query(
    "INSERT INTO notes (title, content) VALUES ($1, $2) RETURNING *",
    [title, content],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(201).json(results.rows[0]);
    }
  );
};

exports.updateNote = (req, res) => {
  const id = parseInt(req.params.id);
  const { title, content } = req.body;
  pool.query(
    "UPDATE notes SET title = $1, content = $2, updated_at = CURRENT_TIMESTAMP WHERE id = $3 RETURNING *",
    [title, content, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows[0]);
    }
  );
};

exports.deleteNote = (req, res) => {
  console.log("delete");
  const id = parseInt(req.params.id);
  pool.query(
    "DELETE FROM notes WHERE id = $1 RETURNING *",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      res.status(200).json(results.rows[0]);
    }
  );
};
