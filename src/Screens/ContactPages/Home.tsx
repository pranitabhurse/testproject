import { FC } from 'react';
import AddContact from './AddContact';
import { Link } from 'react-router-dom';
const Home: React.FC = () => {
  return (
  
    <div className='container'>
        <header>
            <nav style={{backgroundColor:'blueviolet' , flexDirection:'row' , justifyContent:'center' , width:500 , textAlign:'center'}}>
                <div  >

                <h3> Contact Page</h3>
               
             
                </div>
              
            </nav>
            <Link to='addcontact'><button>create contact</button></Link> 
            
        </header>
    </div>
  )
};
export default Home;




