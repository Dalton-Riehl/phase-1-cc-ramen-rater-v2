const url = 'http://localhost:3000';

const handleClick = (ramen) => {
  const detailImage = document.querySelector('.detail-image');
  const detailName = document.querySelector('.name');
  const detailRestaurant = document.querySelector('.restaurant');
  const ratingDisplay = document.getElementById('rating-display');
  const commentDisplay = document.getElementById('comment-display');

  detailImage.src = ramen.image;
  detailName.textContent = ramen.name;
  detailRestaurant.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
}

const addSubmitListener = () => {
  document.addEventListener('submit', (e) => {
    e.preventDefault();
    handleSubmit();
  });
}

const displayRamens = () => {
  const ramenMenu = document.getElementById('ramen-menu');
  fetch(`${url}/ramens`)
    .then(res => res.json())
    .then(data => {
      data.forEach(ramen => {
        const img = document.createElement('img');
        img.src = ramen.image;
        ramenMenu.appendChild(img);
        img.addEventListener('click', () => handleClick(ramen));
      });
    })
    .catch(error => console.error('Ramen fetch Error:', error));
}

const handleSubmit = () => {
  const ramenMenu = document.getElementById('ramen-menu');
  const newRamenForm = document.getElementById('new-ramen');
  const name = document.getElementById('new-name').value;
  const restaurant = document.getElementById('new-restaurant').value;
  const image = document.getElementById('new-image').value;
  const rating = document.getElementById('new-rating').value;
  const comment = document.getElementById('new-comment').value;
  const newImage = document.createElement('img');
  newImage.src = image;
    newImage.addEventListener('click', () => {
      handleClick({
        name, restaurant, image, rating, comment
      });
    });
  ramenMenu.appendChild(newImage);
  newRamenForm.reset();
}

const main = () => {
  addSubmitListener();
  displayRamens();
}
main();

export {
  displayRamens,
  addSubmitListener,
  handleClick,
  main,
};
