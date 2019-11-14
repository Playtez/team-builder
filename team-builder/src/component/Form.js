import React from "react";

const Form = props => {
  const [createdList, setCreatedList] = React.useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChanges = e => {
    setCreatedList({ ...createdList, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewCard(createdList);
    setCreatedList({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <div>
      <form onSubmit={submitForm}>
        <label htmlFor="Name">Name</label>
        <input
          id="name"
          onChange={handleChanges}
          placeholder="add friend"
          type="text"
          name="name"
          value={createdList.name}
        ></input>
        <label htmlFor="Name">email:</label>
        <input
          id="email"
          onChange={handleChanges}
          placeholder="add friend"
          type="text"
          name="email"
          value={createdList.email}
        ></input>
        <label htmlFor="Name">role</label>
        <input
          id="role"
          onChange={handleChanges}
          placeholder="add friend"
          type="text"
          name="role"
          value={createdList.role}
        ></input>
        <button type="submit">add new member</button>
      </form>
    </div>
  );
};

export default Form;
