import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import { UserList } from "./pages/UserList";
import { UserDetails } from "./pages/UserDetails";

function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<UserList />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
