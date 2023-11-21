
import {Link} from 'react-router-dom'

type CardProps = {
    name: string,
    image: string
}
const Card = ({ name, image}:CardProps) => {
  return (
    <Link to={`/${name}`}>
        <div  className="my-2 w-60 bg-white border border-gray-200 rounded-md shadow">
                <img className="rounded-md " src={image} alt={`${name}`} />
            <div className="p-4">
                    <h6 className="mb-1 font-bold tracking-tight text-md text-slate-800">{name}</h6>
                <p className=" text-xs text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc at risus eros. Nullam ut pulvinar ante</p>
            </div>
        </div>
    </Link>
  )
}

export default Card