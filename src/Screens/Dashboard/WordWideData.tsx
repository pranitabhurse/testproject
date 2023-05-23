import { FC, useEffect, useState } from 'react';

import { Link } from 'react-router-dom';



const WordWideData: React.FC = () => {


   
    useEffect(() => {
        submit()
    },[])
const[wordcasesActive , setWordCasesActive]=useState<number>();
const[wordcases , setWordCases]=useState<number>();
const[wordcasestest , setWordCasestest]=useState<number>();
const[wordcasesrecoverd , setWordCasesRecoverd]=useState<number>();
const[wordcasesdeath , setWordCasesDeath]=useState<number>();
const[wordcasePapulation , setWordCasesPapulation]=useState<number>();
const[wordcaseCritical , setWordCasesCritical]=useState<number>();
    const submit = async () => {
        var options = {
            method: 'GET',
            //  url: 'https://domastic.ebankapi.org/api/login',
            headers:
            {
                'content-type': 'application/json',

            },

        };

        const response = await fetch('https://disease.sh/v3/covid-19/all', options)

        const data = await response.json();
        setWordCases(data.cases)
        setWordCasesActive(data.active)
        setWordCasesDeath(data.deaths)
        setWordCasesPapulation(data.population)
        setWordCasestest(data.tests)
        setWordCasesCritical(data.critical)
        setWordCasesRecoverd(data.recovered)
        
        console.log(wordcasesActive)
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

                        <div className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer  border-solid border-b-2 border-indigo-600'> <div className='text-center my-5'>Word wide Data of Cases</div></div>
                        <div className='font-medium text-lg  w-2/5  text-center  w-56 my-8 cursor-pointer '> <div className='text-center my-5'><Link to='/caseswithdate'>Graph data for cases with date </Link></div></div>
                    </div>
                    <div>

                        <div className='text-center  '>
                        <div className='mx-3 my-3'>Word Wide Data of cases</div>
                            {/* <button className='rounded-full bg-sky-500/100 w-40 my-5 py-1 ' onClick={submit}>create Contact</button> */}
                            <div className=' '>




                            <div className=''>

<table className='border-separate border-spacing-2 border border-slate-400 mx-5 my-5'>
 <thead className=''>
    <tr>
      
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

        <tr>
     
        <td className='border border-slate-400 px-2 py-2'>{wordcasePapulation}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcasestest}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcases}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcasesdeath}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcasesrecoverd}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcasesActive}</td>
        <td className='border border-slate-400 px-2 py-2'>{wordcaseCritical}</td>
       </tr>
  
  
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
export default WordWideData;