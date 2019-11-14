import React from "react";

const FormCard = props => {
  const usersCard = props.listMembers;

  return (
    <>
      {usersCard.map(user => (
        <div className="profile-card">
          <h1>{user.name}</h1>
          <h3>{user.email}</h3>
          <p>{user.role}</p>
        </div>
      ))}
    </>
  );
};

export default FormCard;
