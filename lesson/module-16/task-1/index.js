const URL = 'https://jsonplaceholder.typicode.com/users';

const dataContainer = document.querySelector('#data-container');

const toggleLoader = () => {
    const loader = dataContainer.querySelector('#loader');
    if (loader.hasAttribute('hidden')) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
};

const createElementListItem = (data) => {
    const elementListItem = document.createElement('li');
    const elementLink = document.createElement('a');
    elementLink.href = '#';
    elementLink.textContent = data.name;
    elementListItem.append(elementLink);
    return elementListItem;
};

function fetchToServer() {
    toggleLoader();
    fetch(URL, {
        method: 'GET',
        headers: {},
    })
          .then((response) => {
              if (!response.ok) {
                  throw new Error('Ошибка!!!');
              } else {
                  return response.json();
              }
          })
          .then((results) => {
              results.forEach((item) => {
                  const newElement = createElementListItem(item);
                  dataContainer.append(newElement);
              })
          })
          .catch((err) => {
              console.error('Ошибка сервера: ', err);
          })
          .finally(toggleLoader);
}

fetchToServer();
