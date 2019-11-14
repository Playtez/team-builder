import React from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./component/Form";
import FormCard from "./component/FormCard";

function App() {
  const [listMembers, setListMembers] = React.useState([
    // {
    //   name: "card.title",
    //   email: "card.email",
    //   role: "card.role"
    // }
  ]);

  const addNewCard = card => {
    const newNote = {
      id: Date.now(),
      name: card.name,
      email: card.email,
      role: card.role
    };
    setListMembers([...listMembers, newNote]);
  };

  return (
    <div className="App">
      <Form addNewCard={addNewCard} setListMembers={setListMembers} />
      <FormCard className="card" listMembers={listMembers} />
    </div>
  );
}

export default App;
