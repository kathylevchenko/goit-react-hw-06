import Contact from "../Contact/Contact";
import css from "./ContactList.module.css"


export default function ContactList ({contacts,onDelete}){
    return (
        <div className={css.formContact}>
        <ul className={css.list}>
            {contacts.map((contact)=>(
                <li key={contact.id}>
                    <Contact contact={contact} onDelete={onDelete}/>
                </li>
            ))}
        </ul>
        
</div>
    )
}