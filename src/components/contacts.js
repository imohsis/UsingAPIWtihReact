import React, { Component } from 'react';

const Contacts = ({ contacts }) => {
  return (
    <div className="row">

      <div className="col-md-2">

      </div>
      <div className="col-md-8">
      <div>
      <center className="bg-primary"><h1>Using Api With React</h1></center>
      {contacts.map((contact) => (
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{contact.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
            <p class="card-text">{contact.company.catchPhrase}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
      <div className="col-md-2">

      </div>
    </div>
   
  )
};

export default Contacts