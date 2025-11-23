import React, { useState } from "react";

const Posts = () => {
    // const posts = axios.get('')
    const [Data, setData] = useState({})

    const hanldSubmit = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const formData = Object.fromEntries(form.entries());
        setData(formData);
    }
 
    console.log(Data)
    return <>
        <h1>Liste des articles wordpress</h1>
        <form onSubmit={hanldSubmit}>
               <input type="text" name="nom"/>
               <input type="text" name="prenom"/>
               <input type="text" name="adresse"/>
               <input type="text" name="ville"/>

               <input type="submit" value="Envoyer" />
        </form>  
        <button type="button">RESET</button>  
    </>
}

export default Posts;