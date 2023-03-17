import { AlbumsType } from "../types/AlbumsType";
import { Album } from "./Album";
import { useState , useEffect } from "react";
import { api } from "../api";
import "../App.css"


export const Albums = ()=>{

   const [albums , setAlbums] = useState<AlbumsType[]>([]);

   useEffect(()=>{
    loadAlbum();
  },[])

  const loadAlbum = async ()=>{
  let data = await api.get("/albums");
  setAlbums(data);
  };

  return (
    <div className="container">
      <header className="header">
        <h1>Albums Placeholder</h1>
        <p> Api utilizada <a target={"_blank"} href="https://jsonplaceholder.typicode.com/">Api</a></p>
      </header>
      {albums.map((item , index)=>(
        <Album  element={item} key={index} index={index} />
        ))}
    </div>
  );
}


