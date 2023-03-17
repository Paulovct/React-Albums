//style
import "./App.css"
//
import { Routes , Route } from "react-router-dom";
import { AlbumItem } from "./components/AlbumItem";
//components
import { Albums } from "./components/Albums";
import { PageNotFound } from "./components/PageNotFound";
import { Photo } from "./components/Photo";




const App = ()=>{

  return (
    <div className="container">
    
    <Routes>
      <Route path="/"  element={<Albums/>}/>
      <Route path="/album/:album" element={<AlbumItem />} />
      <Route path="/photo" element={<Photo />} />
      <Route path="*" element={<PageNotFound />}/>
    </Routes>

    </div>
  );
};


export default App;