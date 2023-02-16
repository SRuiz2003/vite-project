import { GetGifs } from "./GetGifs";
import { useEffect,useState } from "react";
import { GifItem } from "./GifItem";

export const GifGrid = ({category}) => {
    const [images,setImages] = useState([]);

    const getImages = async() => {
        const images = await GetGifs(category)
        setImages(images);
    }

    useEffect( () => {
        getImages();
    },[])

    return(
        <>
            <h3> {category} </h3>
            <div className="card-grid">
                {
                    images.map( (image,key) => {
                        return <GifItem key={key} {... image}></GifItem>
                    })
                }
            </div>
        </>
    )

}