import { Route, Routes } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./components/Header/Header";
import NoteList from "./components/NotesList/NoteList";
import NoteForm from "./components/AddNote/AddNote";
import Note from "./components/Note/Note";

const { Header, Content, Footer } = Layout;

const App = () => {
  return (
    // Optimize the application's responsiveness and interactivity.
    <Layout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <AppHeader />
      </Header>

      <Content style={{ padding: "0 50px", marginTop: "20px" }}>
        <div
          style={{
            background: "#fff",
            padding: 24,
            minHeight: 360,
            borderRadius: "20px",
          }}
        >
          <Routes>
            <Route path="/" element={<NoteList />} />
            <Route path="/note/new" element={<NoteForm />} />
            <Route path="/note/:id" element={<Note />} />
          </Routes>
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Note-Taking Application</Footer>
    </Layout>
  );
};

export default App;
