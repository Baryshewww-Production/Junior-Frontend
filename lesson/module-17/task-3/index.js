const URL = 'https://jsonplaceholder.typicode.com/albums';

const dataContainer = document.querySelector('#data-container');

function toggleLoader() {
    const loader = document.querySelector('#loader');
    const isHidden = loader.hasAttribute('hidden');
    if (isHidden) {
        loader.removeAttribute('hidden');
    } else {
        loader.setAttribute('hidden', '');
    }
}

function createAlbumTemplate(data) {
    const elementListItem = document.createElement('li');
    elementListItem.textContent = data.title;
    dataContainer.append(elementListItem);
}

function createErrorTemplate() {
    const elementDiv = document.createElement('div');
    elementDiv.textContent = 'Произошла ошибка в получении данных об альбомах...';
    dataContainer.append(elementDiv);
}

async function getInfo() {
    toggleLoader();
    try {
        const response = await fetch(URL);
        if (!response.ok) {
            throw new Error('Ошибка при запросе к серверу');
        }
        const results = await response.json();
        results.forEach((item) => {
            createAlbumTemplate(item);
        });
    } catch (err) {
        console.error(err);
        createErrorTemplate();
    } finally {
        toggleLoader();
    }
}

getInfo();
