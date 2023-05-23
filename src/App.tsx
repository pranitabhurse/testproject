import { useEffect, useReducer, useState } from 'react';
import ContactForm from './Screens/ContactPages/AddContact';
import ContactList from './Screens/ContactPages/ContactList';
import EditModal from './Screens/ContactPages/EditContact';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";


import { Contact, contactsReducer, State } from './Screens/Reducers/contactsReducer';
import Home from './Screens/ContactPages/Home';
import AddContact from './Screens/ContactPages/AddContact';
import EditContact from './Screens/ContactPages/EditContact';
import Dashboard from './Screens/Dashboard/Dashboard';
import WordWideData from './Screens/Dashboard/WordWideData';
import CasesWithDate from './Screens/Dashboard/CasesWithDate';
const initialState: State = {
  contacts: []
};
function App() {
  const [state, dispatch] = useReducer(contactsReducer, initialState);
  const [showModal, setShowModal] = useState(false);
  const [dataToEdit, setDataToEdit] = useState<Contact | undefined>(undefined);
  useEffect(() => {
    if (!showModal) {
      setDataToEdit(undefined);
    }
  }, [showModal]);
  const toggleModal = () => {
    setShowModal((show) => !show);
  };
  const handleEdit = (id: number) => {
    setDataToEdit(state.contacts.find((contact) => contact.id === id));
    toggleModal();
  };
console.log(state.contacts)
  
  
 
  return (
    <div className='App'>

      <BrowserRouter>
        <Routes>
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/wordwidecases' element={<WordWideData/>} />
          <Route path='/caseswithdate' element={<CasesWithDate/>} />
          
          <Route  path='/editcontact' 
          
            element={<EditContact showModal={showModal}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}
            dispatch={dispatch}/>} />

          <Route  path='/addcontact'
           
            element={<ContactForm  dispatch={dispatch}
            dataToEdit={dataToEdit}
            toggleModal={toggleModal}/>} />
         (<Route  path='/' 
            element={<ContactList contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}/>} />)
        </Routes>
      </BrowserRouter>
     
      {/* <div className='main-container'>
        <ContactForm
          dispatch={dispatch}
          dataToEdit={dataToEdit}
          toggleModal={toggleModal}
         
        />
        <hr />
        {state.contacts.length > 0 && (
          <ContactList
            contacts={state.contacts}
            handleEdit={handleEdit}
            dispatch={dispatch}
          />
        )}

<EditModal
        showModal={showModal}
        dataToEdit={dataToEdit}
        toggleModal={toggleModal}
        dispatch={dispatch}
      />
      </div> */}
    
    </div>
  );
}
export default App;