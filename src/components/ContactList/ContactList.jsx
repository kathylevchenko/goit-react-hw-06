import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import {selectContacts} from '../../redux/contactsSlice';
import css from "./ContactList.module.css"


export default function ContactList (){
        const contacts = useSelector(selectContacts);
        const filterValue = useSelector(selectNameFilter);

        const filteredContacts =contacts.filter((contact) => {
          if ("id" in contact && "name" in contact && "phone" in contact) {
            if (
              typeof contact.id === "string" &&
              typeof contact.name === "string" &&
              typeof contact.phone === "string"
            ) {
              return contact.name.toLowerCase().includes(filterValue.toLowerCase());
            }
          }
          return false;
        });
        return (
        <div className={css.formContact}>
        <ul className={css.list}>
            {filteredContacts.map((contact)=>{
              return (
                <Contact
            name={contact.name}
            phone={contact.phone}
            key={contact.id}
            id={contact.id}
          />
              );
            })}
          </ul>
        
 </div>
    );
        }