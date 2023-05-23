import { FC, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';



const Dashboard: React.FC = () => {


   
    useEffect(() => {
        submit()
    },[])
const[countrycases , setCountryCases]=useState<{country:string, population:number, cases:number , deaths:number , recovered:number , active:number, 
    critical:number , tests:number}[]>([],);

    const[countrycasesData , setCountryCasesData]=useState<{country:string, population:number, cases:number , deaths:number , recovered:number , active:number, 
        critical:number , tests:number}[]>([],);

    const[searchCountry , setSearchCountry]=useState<string>();
   
    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>)=> {
        const { name, value } = event.target;
      console.log(value);
     
      const searchData = countrycases.filter(x=>
        x.country.indexOf(value)> -1 ||
        x.country.toLowerCase().indexOf(value)> -1 
        );
        setCountryCases(searchData)

        if (value.length <= 1) {
            setCountryCases(countrycasesData)
           
          }
    }

    const submit = async () => {
        var options = {
            method: 'GET',
            //  url: 'https://domastic.ebankapi.org/api/login',
            headers:
            {
                'content-type': 'application/json',

            },

        };

        const response = await fetch('https://disease.sh/v3/covid-19/countries', options)

        const data = await response.json();
        setCountryCasesData(data)
        setCountryCases(data);
        console.log(data)


    }



   


    return (

        <div className='container'>
            <div className=" flex justify-center">
                <div className=" font-medium text-lg   text-center mx-5 my-5">Dashboard</div>
            </div>
            <div className=' flex justify-center'>

                <div className="flex justify-center border-solid border-2 border-indigo-600  ">
                    <div className='w-56 border-solid border-r-2 border-indigo-600 '>

                        <div className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to='/'>Contact</Link></div></div>

                        <div className='font-medium text-lg  w-2/5  text-center border-solid border-b-2 border-indigo-600  w-56 my-8'> <div className='text-center my-5 cursor-pointer'><Link to="/dashboard">Country Specific Data</Link></div></div>

                        <div className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer  border-solid border-b-2 border-indigo-600'> <div className='text-center my-5'><Link to="/wordwidecases">Word wide Data of Cases</Link></div></div>
                        <div className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer '> <div className='text-center my-5'><Link to='/caseswithdate'>Graph data for cases with date </Link></div></div>
                    </div>
                    <div>

                        <div className='text-center  '>
                        <div className='mx-3 my-3'>Country Wise Data</div>
                        <input type='search' placeholder='search country' className='mx-2 my-2 px-2 py-2' 
                        value={searchCountry} onChange={handleOnChange}/>
                            {/* <button className='rounded-full bg-sky-500/100 w-40 my-5 py-1 ' onClick={submit}>create Contact</button> */}
                            <div className=' '>




                            <div className=''>

<table className='border-separate border-spacing-2 border border-slate-400 mx-5 my-5'>
 <thead className=''>
    <tr>
      <th className='border border-slate-400 px-2 py-2'>Country Name</th>
      <th className='border border-slate-400 px-2 py-2'>Population</th>
      <th className='border border-slate-400 px-2 py-2'>Test</th>
      <th className='border border-slate-400 px-2 py-2' >Total Cases </th>
      <th className='border border-slate-400 px-2 py-2'>Death</th>
      <th className='border border-slate-400 px-2 py-2'>Recovered</th>
      <th className='border border-slate-400 px-2 py-2'>Active</th>
      <th className='border border-slate-400 px-2 py-2'>Critical</th>


``      </tr>
  </thead>
  <tbody>
{countrycases.map((item , ind)=>{
    return(
        <tr>
        <td>{item.country}</td>
        <td>{item.population}</td>
        <td>{item.tests}</td>
        <td>{item.cases}</td>
        <td>{item.deaths}</td>
        <td>{item.recovered}</td>
        <td>{item.active}</td>
        <td>{item.critical}</td>
       </tr>
    )
})}
  
  </tbody>
</table>
</div>



                                <div className=''>


                                </div>
                            </div>
                        </div>
                    </div>









                </div>

            </div>

        </div>

    )
};
export default Dashboard;