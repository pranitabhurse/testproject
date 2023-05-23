import { FC } from 'react';

import { Action, Contact } from '../Reducers/contactsReducer';
import { Link } from 'react-router-dom';

declare function Route(
  props :RouteProps
):React.ReactElement | null ;

interface RouteProps{
  children?:React.ReactNode;
  element?:React.ReactNode | null;
  index?: boolean;
  path?:string

}

interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}
const ContactItem: React.FC<Contact & ExtraProps> = ({
  id,
  firstName,
  lastName,
  phone,
  handleEdit,
  dispatch
}) => {
  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phone}</td>
      <td>
       <Link to='/editcontact'><td onClick={() => handleEdit(id)}  className='cursor: pointer;' > Edit</td></Link> 
      </td>
     
        <td 
         
          onClick={() => {
            const confirmDelete = window.confirm(
              `Are you sure you want to delete contact for user ${firstName} ${lastName}?`
            );
            if (confirmDelete) {
                dispatch({
                    type: 'DELETE_CONTACT',
                    payload: { id }
                  });
            }
          }}
          className='cursor: pointer;'
        >Delete</td>
      
    </tr>
  );
};
export default ContactItem;
