import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import ProfileScreen from "./screens/profile/profile-screen";
import store from "./redux/store";
import HomeScreen from "./screens/home/home-screen";

function App() {
  return (
      <Provider store={store}>
        <div className="container">
            <BrowserRouter>
                <Link to="/">Home</Link> |
                <Link to="/profile">Profile</Link>
                <Routes>
                    <Route path="/" element={<HomeScreen/>} />
                    <Route path="/profile" element={<ProfileScreen/>} />
                </Routes>
              </BrowserRouter>
        </div>
      </Provider>
  );
}

export default App;
