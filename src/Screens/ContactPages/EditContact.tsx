import { FC } from 'react';
import AddContact from './AddContact';
import { Action, Contact } from '../Reducers/contactsReducer';
interface EditModalProps {
    showModal: boolean;
    dataToEdit: Contact | undefined;
    toggleModal: () => void;
    dispatch: React.Dispatch<Action>;
  }

  const EditContact: React.FC<EditModalProps> = ({
    toggleModal,
    dataToEdit,
    showModal,
    dispatch
  }) => {
  return (

    <div>
      
        {showModal? 
        
        <div>
             

        <AddContact  dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}/></div>:null}
      <input
          className='lastName'
          name='lastName'
          type='text'
       
        />

    </div>
  )
};
export default EditContact;