import Contact from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filtersSlice";
import {selectContacts} from '../../redux/contactsSlice';
import css from "./ContactList.module.css"


export default function ContactList (){
 const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );
    return (
        <div className={css.formContact}>
        <ul className={css.list}>
            {filteredContacts.map((contact)=>{
            return (
                <li key={contact.id}>
            <Contact contact={contact} />
          </li>
              );
            })}
          </ul>
        
</div>
    );
        }