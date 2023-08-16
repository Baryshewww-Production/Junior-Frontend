const body = document.querySelector('body');

const createFormTemplate = () => {
    const form = document.createElement('form');
    form.className = 'create-user-form';
    body.prepend(form);

    const label1 = document.createElement('label');
    label1.textContent = 'Имя';
    form.append(label1);

    const label2 = document.createElement('label');
    label2.textContent = 'Пароль';
    form.append(label2);

    const input1 = document.createElement('input');
    input1.setAttribute('type', 'text');
    input1.setAttribute('name', 'userName');
    input1.setAttribute('placeholder', 'Ваш логин');
    label1.append(input1);

    const input2 = document.createElement('input');
    input2.setAttribute('type', 'password');
    input2.setAttribute('name', 'password');
    input2.setAttribute('placeholder', 'Ваш пароль');
    label2.append(input2);

    const button = document.createElement('button');
    button.setAttribute('type', 'submit');
    button.textContent = 'Подтвердить';
    form.append(button);
};

createFormTemplate();

