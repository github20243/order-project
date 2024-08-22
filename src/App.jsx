import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Order from "./pages/Order";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
