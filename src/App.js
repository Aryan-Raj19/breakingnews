import "./App.css";
import Home from "./components/Home";
import ListTypes from "./components/ListTypes";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar
          title="Breaking News"
          about="About Us"
          // changeMode={changeMode}
          // mode={mode}
          // showAlert={showAlert}
        />
        <Home />
        <div className="container">
          <Routes>
            
            <Route exact path="/india" element={<ListTypes country="in" />} />

            <Route exact path="/america" element={<ListTypes country="us" />} />

            <Route exact path="/japan" element={<ListTypes country="jp" />} />

            <Route exact path="/australia" element={<ListTypes country="au" />} />

            <Route exact path="/england" element={<ListTypes country="gb" />} />

            <Route exact path="/russia" element={<ListTypes country="ru" />} />

            <Route exact path="/canada" element={<ListTypes country="ca" />} />

            <Route exact path="/china" element={<ListTypes country="cn" />} />

            <Route exact path="/arab" element={<ListTypes country="ae" />} />

            <Route exact path="/france" element={<ListTypes country="fr" />} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
