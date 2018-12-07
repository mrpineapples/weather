const apiKey = "10884740-e6f914c568f451732f72e92f1";

const pix = location => {
  const url = `https://pixabay.com/api/?key=${apiKey}&q=${location}&image_type=photo&per_page=200`

  return fetch(url).then(response => {
    return response.json();
  })
  .then(data => {
    return data.hits.map(image => {
      return image.largeImageURL
    })
  })
  .catch(err => {
    console.log(err);
  })
}

export default pix;
