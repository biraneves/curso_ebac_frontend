$(document).ready(() => {
    const profileAvatar = $('.profile-avatar');
    const profileName = $('.profile-name');
    const profileUsername = $('.profile-username');
    const numberRepositories = $('.numbers-item:first-child');
    const numberFollowers = $('.numbers-item:nth-child(2)');
    const numberFollowing = $('.numbers-item:last-child');
    const profileLink = $('.profile-link');
    const endpoint = 'https://api.github.com/users/biraneves';

    fetch(endpoint)
        .then(response => response.json())
        .then(res => {
            profileAvatar.attr('src', res.avatar_url);
            profileName.html(res.name);
            profileUsername.html(res.login);
            numberRepositories.html(`<h4>Repositórios</h4>${res.public_repos}`);
            numberFollowers.html(`<h4>Seguidores</h4>${res.followers}`);
            numberFollowing.html(`<h4>Seguindo</h4>${res.following}`);
            profileLink.attr('href', res.html_url);
        })
        .catch(error => {
            alert('Houve um erro na requisição. Tente novamente mais tarde.');
        });
});
