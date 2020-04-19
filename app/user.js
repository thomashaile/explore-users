class User {

    id = 0;
    name = '';
    username = '';
    email = '';
    address = {};
    phone = '';
    website = '';
    company = {};
    todos = [];

    constructor(convertedResponse) {
        Object.assign(this, convertedResponse);
    }

    populate() {
        return fetch('https://jsonplaceholder.typicode.com/users/' + this.id + '/todos')
            .then((res) => res.json())
            .then((todos) => {
                this.todos = todos.map((todo) => {
                    return new Todo(todo);
                });

                return this;
            });
    }

    render() {
        const container = document.createElement('div');
        container.id = this.id;

        const usernameElement = document.createElement('h1');
        usernameElement.innerHTML = this.username;

        const nameElement = document.createElement('h3');
        nameElement.innerHTML = 'Comment By: ' + this.name;

        const emailElement = document.createElement('code');
        emailElement.innerHTML = 'email: ' + this.email;

        const websiteElement = document.createElement('p');
        websiteElement.innerHTML = 'website: ' + this.website;

        const todoElements = this.todos.map((todo) => {
            return todo.render();
        });

        container.appendChild(usernameElement);
        container.appendChild(nameElement);
        container.appendChild(emailElement);
        container.appendChild(websiteElement);

        todoElements.forEach((todoElement) => {
            container.appendChild(todoElement);
        });

        return container;
    }

}