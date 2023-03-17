import { AlbumsType } from "../types/AlbumsType";
import {useNavigate} from "react-router-dom"
import "../App.css"

type Props = {
	element:AlbumsType;
	index:number;
}

export const Album = ({element , index}:Props)=>{
	
	const navigate = useNavigate(); 

	const handleClickAlbum = (id:number)=>{
		navigate(`/album/${id}`);
	}

	return (
		<div className="album" key={index} onClick={()=>handleClickAlbum(element.id)}>
			{element.title}
		</div>
	);
}