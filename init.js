window.onload = function() {

    document.getElementById('choose-user-button')
        .addEventListener('click', function(event) {
            const userId = event.target.form.userId.value;

            fetch('https://jsonplaceholder.typicode.com/users/' + userId)
                .then((response) => response.json())
                .then((convertedResponse) => {
                    const user = new User(convertedResponse);
                    return user.populate();
                })
                .then((user) => {
                    const userContainer = user.render();
                    document.getElementById('root').innerHTML = '';
                    document.getElementById('root').appendChild(userContainer);
                })
        });

};