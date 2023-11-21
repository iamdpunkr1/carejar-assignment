import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { FaThumbsUp } from "react-icons/fa6";
import { BiCalendarEvent } from "react-icons/bi";
import { TiTick } from "react-icons/ti";
import { TbCurrencyRupee } from "react-icons/tb";

const Doctors = () => {
  const {category} = useParams()
  const [doctors, setDoctors] = useState([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  
  useEffect(() => {
    //fetch doctors based on category
    const fetchDoctors = async()=>{
        try{
            const response = await fetch(`https://carejar-assignment-api.vercel.app/${category}`)
            const data = await response.json()
            console.log(data)
            setDoctors(data)
            setIsLoading(false)
        }catch(error:any){
            setError(error.message)

        }
        }
        fetchDoctors()
    
  }, [category]);

  const handleBookAppointment = (doctorId:string) => {
    console.log(`Booking appointment with doctor ${doctorId}`);
  }

  if(error) return <div className='flex justify-center items-center text-red-500 h-screen'>{error} - Please refresh the page</div>

  if(isLoading) return <div className='flex justify-center items-center h-screen'>Loading...</div>

  return (
    <section className='mx-5'>{
    doctors.map(({id, name, category, fees, experience, ratings, specialization, address, image, patients}) => {
        return (
            <div key={id} className="doctor-box flex justify-between items-center flex-wrap p-[20px] lg:px-20 border-2 border-solid border-gray-300 rounded-md m-[10px]">
                <div className='flex flex-wrap justify-center'>
                <div className='relative'>
                <img src={image} alt={`Doctor ${id}`}  className='rounded-full m-[7px] w-[120px] h-[120px]' />
                 <div className='w-5 h-5 bg-violet-600 rounded-full absolute left-[114px] bottom-8 border-solid border-2 border-white'>
                        <TiTick color="#fff" />
                 </div>
                </div>
                <div>
                    <h6 className="text-blue-500">Dr. {name}</h6>
                    <p className='text-xs text-gray-600'>{category}</p>
                    <p className='text-xs text-gray-600'>{experience} years experience overall</p>
                    <span className='text-xs font-medium'>{address} </span>
                    <span className='text-xs text-gray-600'>  &#x2022;  {specialization}</span>
                    <p className='text-xs text-gray-600 flex'>
                        <TbCurrencyRupee className='mt-[3px]' /> {fees} Consultation fee at clinic</p>
                    <div className='flex mt-4'>
                    <span className='mr-2 px-2 py-[1px] bg-green-600 rounded-sm w-16 text-xs flex text-white justify-around'>
                        <FaThumbsUp className='mt-[1px]' color="#fff"/>
                        {ratings}%
                    </span>
                    <span className='text-xs font-medium underline'>{patients} Patient Stories</span>
                    </div>
                    
                </div>
                </div>
                <div className='text-center sm:ml-32 flex flex-col justify-center self-end'>
                    <div className='text-xs text-green-600 my-3 font-semibold flex justify-center'>
                        <BiCalendarEvent color="#16a34a" className='mt-[2px] mr-1'/>
                        Available Today
                    </div>
                    
                   
                    <button onClick={() => handleBookAppointment(id)} className='w-44 py-1 bg-blue-500 text-white border-none rounded-md cursor-pointer'  >
                       
                       <p className='text-xs font-semibold'>Book Appointment</p>
                       <p className='text-[8px]'>No Booking fee</p> 
                    </button>
                </div>
             
            </div>
            )
        })
    }</section>
  )
}

export default Doctors