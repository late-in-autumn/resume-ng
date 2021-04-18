import React from "react";
import { v4 as UUIDv4 } from "uuid";
import ContactCard from "../cards/ContactCard";
import contacts from "../../data/contacts.json";

function ContactsContainer() {
   const contactsList = contacts.map((contact) => (
      <span className="d-inline-block mr-3" key={UUIDv4()}>
         <ContactCard contact={contact} />
      </span>
   ));

   return (<>{contactsList}</>);
}

export default ContactsContainer;
