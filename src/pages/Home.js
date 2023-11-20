import React from 'react'
import { useState, useEffect } from "react";
import { generateDepartments } from "../utils/departments";
import Card from "../components/Card";

const Home = () => {
    const [departments, setDepartments] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
  
      setDepartments(generateDepartments())
      setIsLoading(false)
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

        <main className="container mx-auto px-4" style={{ display: "flex", flexWrap: "wrap",gap:"7px" }}>
          {departments.map((dept) => <Card id={dept.id} name={dept.name}  image={dept.image}/>)}
        </main>

      </>
    );
}

export default Home