


import { FC, useState } from 'react';
import { Action , Contact } from '../Reducers/contactsReducer';
import ContactList from './ContactList';
import { Link , useNavigate} from 'react-router-dom';




interface ContactFormProps {
  dispatch: React.Dispatch<Action>;
  dataToEdit: Contact | undefined;
  toggleModal: () => void;
 
  
}
  


const AddContact: FC<ContactFormProps> = ({
  dispatch,
  dataToEdit,
  toggleModal
}) => {
  const [contact, setContact] = useState({
    firstName: dataToEdit?.firstName ? dataToEdit.firstName : '',
    lastName: dataToEdit?.lastName ? dataToEdit.lastName : '',
    phone: dataToEdit?.phone ? dataToEdit.phone : ''
  });

  const navigate = useNavigate()
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
    const { name, value } = event.target;
    setContact((prevState) => {
      return {
        ...prevState,
        [name]: value
      };
    });
  };
  const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement> )=> {
    event.preventDefault();
    if (!dataToEdit) {
      dispatch({
        type: 'ADD_CONTACT',
        payload: {
          id: Date.now(), // returns current timestamp
          ...contact
        }
      });
      setContact({
        firstName: '',
        lastName: '',
        phone: ''
      });
      navigate("/");
    } 
    
    else {
      dispatch({
        type: 'UPDATE_CONTACT',
        payload: {
          id: dataToEdit.id,
          updates: {
            id: Date.now(),
            ...contact
          }

        }
      });
      navigate("/");
      toggleModal();
    }
   
  };
  return (
    <div className='contact-form'>
      <div className=''>
      <div className=" flex justify-center">
        <div className=" font-medium text-lg  w-2/5 bg-sky-500/100 text-center">Contact Page</div>
      </div>
      <div className=' flex justify-center'>

        <div className="flex justify-center border-solid border-2 border-indigo-600  ">
          <div className='w-56 border-solid border-r-2 border-indigo-600 '>
          <div className='w-56 border-solid border-r-2 border-indigo-600 '>

<div  className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to='/'>Contact</Link></div></div>

<div  className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to="/dashboard">Charts & Maps</Link></div></div>

<div  className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer'> <div className='text-center my-5'>Sidebar</div></div>
          </div>
          </div>
          <div>
          
              <div className='text-center  w-96 bg-[#cccccc]'>

            <button className=' my-5 py-1 text-black'>  {dataToEdit ? 'Edit Contact Screen' : 'Create Contact Screen'}</button>

                <div className=' '>
                 


                <div className='my-5'>
<label>First Name : </label>
  <input
    className='enabled:hover:border-grey-400 '
    name='firstName'
    value={contact.firstName}
    type='text'
  onChange = {handleOnChange}
  />
</div>
<div className='my-5'>
  <label>Last Name : </label>
  <input
    className='required:border-red-500'
    name='lastName'
    value={contact.lastName}
    type='text'
  onChange = {handleOnChange} 
  />
</div>
<div className='my-5'>
  <label>Phone No. :  </label>
  <input
    className='phone'
    name='phone'
    value={contact.phone}
    type='number'
  onChange = {handleOnChange} 
  />
</div>
<div>

  <button type='submit' className='rounded-full bg-sky-500/100 w-40 my-5 py-1 ' onClick={handleOnSubmit}>
  {dataToEdit ? 'Update Contact' : 'Add Contact'}
  </button>
</div>
                     

             

<div>


</div>
                </div>
              </div>







          

          </div>

        </div>

      </div>
    </div>
    </div>
  );
};
export default AddContact;
