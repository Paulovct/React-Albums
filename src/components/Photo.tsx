import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../App.css"



export const Photo = ()=>{

	const [photo , setPhoto] = useState("");
	const [params]  = useSearchParams();

	const img = params.get("url");

	const navigate = useNavigate();

	useEffect(()=>{
		if(typeof img === 'string' ) {
			setPhoto(img);
		}
	},[])

	const handleClickBack = ()=>{
		navigate(-1);
	}
	return (
		<div className="photoContainer">
		<header>
		<button className="button" onClick={handleClickBack}>Voltar</button>
		<p className="title">{params.get("title") + " :"}</p>
		</header>
			<img className="photo" src={ photo } height="600px"  width="600px" alt="" />
		</div>
	);
}