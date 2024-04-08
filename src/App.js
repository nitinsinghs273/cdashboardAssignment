import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Layout";
import AllPeople from "./Components/AllPeople";
import Groups from "./Components/Groups";
import Managedevents from "./Components/Managedevents";

import {
  Home,
  Integration,
  Availibilty,
  HelpPage,
  Account,
} from "./Pages/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<Home />} />
          <Route path="/availability" element={<Availibilty />} />
          <Route path="/helppage" element={<HelpPage />} />
          <Route path="/integration" element={<Integration />} />
          <Route path="/account" element={<Account />}>
            <Route index element={<AllPeople />} />
            <Route path="allpeople" element={<AllPeople />} />
            <Route path="groups" element={<Groups />} />
            <Route path="managedevents" element={<Managedevents />} />
          </Route>
          <Route path="*" element={<h1>Page Not Found</h1>} />
          Account
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
