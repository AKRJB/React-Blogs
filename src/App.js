import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import NewPost from './NewPost';
import PostPage from './PostPage';
import EditPost from './EditPost';
import Missing from './Missing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="App">
      <Router>
      <DataProvider>
          <Header title={"React Js Blog"} />
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<NewPost />} />
            <Route path="/post/:id" element={<PostPage />} />
            <Route path="/edit/:id" element={<EditPost />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
      </DataProvider>
      </Router>

    </div>
  );
}

export default App;
