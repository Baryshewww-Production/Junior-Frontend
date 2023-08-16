const URL = 'https://jsonplaceholder.typicode.com/photos';
const photoIds = [60, 12, 55];
const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    const loader = document.querySelector('#loader');
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
};

function createPhotoTemplate(photo) {
    const elementListItem = document.createElement('li');
    elementListItem.classList.add('photo-item');

    const elementImg = document.createElement('img');
    elementImg.src = photo.url;

    const elementH3 = document.createElement('h3');
    elementH3.classList.add('photo-item__title');
    elementH3.textContent = photo.title;

    elementListItem.append(elementImg);
    elementListItem.append(elementH3);

    return elementListItem;
}

const requests = photoIds.map((id) => {
    return fetch(`${URL}/${id}`, {
        method: 'GET',
        headers: {},
    });
});

function getFastestLoadedPhoto(ids) {
    toggleLoader();
    Promise.race(requests)
          .then((response) => {
              if (response) {
                  return response.json();
              } else {
                  throw new Error('Какая-то ошибка на сервере...');
              }
          })
          .then((userObj) => {
              const user = createPhotoTemplate(userObj);
              dataContainer.append(user);
          })
          .catch((err) => {
              console.warn(err);
          })
          .finally(toggleLoader)
}

getFastestLoadedPhoto(requests);
