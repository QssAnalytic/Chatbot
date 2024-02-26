import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Login from "./pages/login";
import Chatbot from "./pages/chatbot";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Chatbot />} />
    </Route>,
  ),
);

export { router };
