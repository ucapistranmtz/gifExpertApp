export const getGifs = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=tbq5Isc9VmXLeaIxWiw4KHNLFIrGHJV9&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data = [] } = await resp.json();
  const images = data.map(item => ({
    id: item.id,
    title: item.title,
    url: item.images.downsized_medium.url,
  }));
  console.log(images);
  return images;
};
