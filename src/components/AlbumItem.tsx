import {  useParams } from "react-router-dom";
import { api } from "../api";
import {useNavigate} from "react-router-dom"
import { useEffect, useState } from "react";
import { PhotoType } from "../types/PhotoType";
import "../App.css"



export const AlbumItem = ()=>{


	const [loading , setLoading] = useState(false);
	const params = useParams();
	const navigate = useNavigate();
	const [photos , setPhotos] = useState<PhotoType[]>([]);



	useEffect(()=>{
		loadPhotos();
	},[])



const loadPhotos = async()=>{
		setLoading(true);
		let response = await api.get("/photos")
		let selecteds = response.filter((i:PhotoType)=>{
			if(params.album !== null && params.album !== undefined ){
				return (i.albumId == parseInt(params.album));
			}
		});
		setLoading(false);
		setPhotos(selecteds);
	}



	const handleClickBack = ()=>{
		navigate(-1);
	}

	const handleClickPhoto = (url:string , title:string)=>{
		navigate(`/photo?url=${url}&title=${title}`)
	}


	return (
		<div className="container">
			<button className="button" onClick={handleClickBack}>Voltar</button>

			{loading &&
				<div>Carregando...</div>
			}

			<div className="grid">
				{photos.map((item , index)=>(
					<div className="gridItem" onClick={()=>handleClickPhoto(item.url , item.title)} key={index}>
					    <img src={item.thumbnailUrl} width="150px" height="150px" alt="" />
						<p>{item.title}</p>
					</div>
				))}
			</div>

			
		</div>
	);

};