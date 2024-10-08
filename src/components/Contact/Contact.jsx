import s from "./Contact.module.css";
import { SiAlienware } from "react-icons/si";
import { BsFillTelephoneFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

// handleDelete,

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={s.contactWrap}>
      <div className={s.contactsInfo}>
        <span>
          <SiAlienware className={s.icon} />
          {name}
        </span>
        <span>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </span>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Contact;
