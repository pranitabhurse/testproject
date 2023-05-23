import { FC, useEffect, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

   

const CasesWithDate: React.FC= () => {

const[countrycases , setCountryCases]=useState<{data:string}>()
   
    useEffect(() => {
        // submit()
    },[])



    const[searchCountry , setSearchCountry]=useState<string>();
const[casesData , setCasesData]=useState<number>();
    const submit = async () => {
        var options1 = {
            method: 'GET',
            //  url: 'https://domastic.ebankapi.org/api/login',
            headers:
            {
                'content-type': 'application/json',

            },

        };

        const response = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all', options1)

        const data1 = await response.json();
        console.log(data1)
              
        
    }
const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top' as const,
              },
              title: {
                display: true,
                text: 'Cases',
              },
            },
          };

    const labels =['1/22/20' , '1/23/20' , '1/24/20' , '1/25/20' ,'1/26/20', '1/27/20']
        
    const data = {
        labels,
        datasets: [
          {
            label: 'Cases',
            data: ['400' ,'500' , '800' ,'600','750' , '900' , '950','950','500','600','700'],
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Death',
            data: ['505' ,'590' , '650' ,'750','800' , '560' , '700','850','500','800','900'],
            borderColor: 'green',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },

          {
            label: 'recovered',
            data: ['500' ,'550' , '600' ,'650','700' , '500' , '900','950','500','600','700'],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };


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
                            {/* <button className='rounded-full bg-sky-500/100 w-40 my-5 py-1 ' onClick={submit}>create Contact</button> */}
                            <div className=' '>



                            <Line options={options} data={data} />;
                  


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
export default CasesWithDate;