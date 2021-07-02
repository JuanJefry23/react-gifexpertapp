//Esta función al ser "async" retorna una promesa que tengo que tratar con ".then()"
export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    category
  )}&limit=10&api_key=YLJVm5HW7xKpk7R9I1FOIdAQj81ANKF0`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  console.log(data);
  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized_medium.url,
    };
  });

  //Retorna una promesa
  return gifs;
};
