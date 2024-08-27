import { FaPhone } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import css from "./Contact.module.css"
import { deleteContact } from "../../redux/contactsSlice";
import { useDispatch } from "react-redux";



export default function Contact({contact: {id, name, number}}){
  const dispatch = useDispatch();
  const onDeleteContact=(id)=>{
 dispatch(deleteContact(id));
} 

    return (
        <div className={css.fullList}>
          <div className={css.listItemContainer}>
            <p className={css.spanItem}>
              <FaUser />{name} </p>
            <p className={css.spanItem}> 
              <FaPhone />
              {number}</p>
          </div>
          <button
            className={css.deleteButton}
            type="button"
            onClick={() => onDeleteContact(id)}
          >
            Delete
          </button>
        </div>
      );
    }