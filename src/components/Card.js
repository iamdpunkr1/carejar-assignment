import React from 'react'
import {Link} from 'react-router-dom'

const Card = ({id, name, image}) => {
  return (
    <div key={id}  className="my-2 w-60 bg-white border border-gray-200 rounded-md shadow">
        <Link to={`/${name}`}>
            <img className="rounded-md " src={image} alt={`${name}`} />
        </Link>
        <div className="p-4">
            <Link to="/">
                <h6 className="mb-1 font-bold tracking-tight text-md text-slate-800">{name}</h6>
            </Link>
            <p className=" text-xs text-gray-700">Here goes the department's details</p>
        </div>
    </div>
  )
}

export default Card