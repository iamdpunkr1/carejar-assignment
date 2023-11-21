
import { useState, useEffect } from "react";
import Card from '../components/Card';

type deptProps = {
    id: string,
    name: string,
    image: string
}

const Home = () => {
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);


    useEffect(() => {
      const fetchDepartments = async()=>{
        try{
          const response = await fetch('http://localhost:5000/')
          const data = await response.json()
          console.log(data)
          setDepartments(data)
          setIsLoading(false)
        }catch(error: any){
          console.log(error.message)
        }
      }
      fetchDepartments()
    }, []);
  



  
    if(isLoading) return (<div className='flex justify-center items-center'>Loading...</div>)
  
    return (
      <>
      <nav>
        <header className="container mx-auto px-4 my-5">
          <h3 className="text-slate-700 text-md font-bold">Book an appointment with an in-clinic consultation</h3>
          <p className="text-slate-600 text-sm">Find experienced doctors aacross all specialities</p>
        </header>
      </nav>

        <main className="container mx-auto px-4 flex flex-wrap gap-[7px]" >
          {departments.map((dept:deptProps) => <Card key={dept.id} name={dept.name}  image={dept.image}/>)}
        </main>

      </>
    );
}

export default Home