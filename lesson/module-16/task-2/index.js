const URL = 'https://jsonplaceholder.typicode.com/users';

const usersIds = ['5', '6', '2', '1'];

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

const requests = usersIds.map((id) => {
    return fetch(`${URL}/${id}`, {
        method: 'GET',
        headers: {},
    });
})

function getUsersByIds(arr) {
    toggleLoader();
    Promise.all(arr)
          .then((responses) => {
              return Promise.all(
                    responses
                          .filter((response) => response.ok)
                          .map((response) => response.json())
              );
          })
          .then((users) => {
              users.forEach((user) => {
                  const newElement = createElementListItem(user);
                  dataContainer.append(newElement);
              })
          })
          .catch((err) => {
              console.warn('Ошибка на сервере: ', err)
          })
          .finally(toggleLoader);
}

getUsersByIds(requests);
