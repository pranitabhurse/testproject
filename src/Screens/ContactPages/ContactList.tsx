import { FC } from 'react';
import { Action, Contact } from '../Reducers/contactsReducer';
import ContactItem from './ContactItem';
import { Link } from 'react-router-dom';



interface ContactListProps {
  contacts: Contact[];
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
  children?: React.ReactNode;
  element?: React.ReactNode | null;
  index?: boolean;
  path?: string
}

interface ExtraProps {
  handleEdit: (id: number) => void;
  dispatch: React.Dispatch<Action>;
}

const ContactList: React.FC<ContactListProps & ExtraProps> = ({
  contacts,
  handleEdit,
  dispatch,

}) => {
  console.log(contacts.length)
  return (
    <div className=''>
      <div className=" flex justify-center">
        <div className=" font-medium text-lg  w-2/5  text-center mx-5 my-5">Contact Form</div>
      </div>
      <div className=' flex justify-center'>

        <div className="flex justify-center border-solid border-2 border-indigo-600  ">
          <div className='w-56 border-solid border-r-2 border-indigo-600 '>

<div  className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to='/'>Contact</Link></div></div>

<div  className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to="/dashboard">Charts & Maps</Link></div></div>

<div  className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer'> <div className='text-center my-5'>Sidebar</div></div>
          </div>
          <div>
          
              <div className='text-center '>

             <Link to='/addcontact'><button className='rounded-full bg-sky-500/100 w-40 my-5 py-1 '>create Contact</button></Link>   
                <div className=' '>
              
<div className='w-96'>
  <div className=' mx-5 my-5' > {contacts.length==0?'No Contact Found':' '}  </div>
</div>

                     

             

<div>
{contacts.length!=0?<div className=" dark:text-sky-400  font-medium text-lg ">
                    Contact list
                  </div>:null}
<div className=''>

  <table className='border-separate border-spacing-2 border border-slate-400 mx-5 my-5'>
   {contacts.length!=0? <thead className=''>
      <tr>
        <th className='border border-slate-400 px-2 py-2'>First Name</th>
        <th className='border border-slate-400 px-2 py-2'>Last Name</th>
        <th className='border border-slate-400 px-2 py-2'>Phone</th>
        <th className='border border-slate-400 px-2 py-2'>Action</th>
        <th className='border border-slate-400 px-2 py-2'>Action</th>
``      </tr>
    </thead>:null}
    <tbody>
      {contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          {...contact}
          handleEdit={handleEdit}
          dispatch={dispatch}
        />
      ))}
    </tbody>
  </table>
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
export default ContactList;