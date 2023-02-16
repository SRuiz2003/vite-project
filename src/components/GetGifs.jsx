
export const GetGifs = async ( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=TS05xNbZLIYdmO7ug3Bx9dn6xl1x7cHP&q=${category}&limit=25&offset=0&rating=g&lang=en`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gifs = data.map ( img => {
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }

    })

    return gifs
}

