let myGames = {
    "games": [
        {
            "url": "https:\/\/guibdbello.itch.io\/godot-maze-generator",
            "p_windows": false,
            "p_osx": false,
            "p_linux": false,
            "p_android": false,
            "type": "html",
            "cover_url": "https:\/\/img.itch.zone\/aW1nLzE2NzU3NDM0LmdpZg==\/315x250%23c\/mNmScz.gif",
            "classification": "game",
            "title": "Godot Maze Generator",
            "published_at": "2024-05-08 11:28:14",
            "in_press_system": false,
            "created_at": "2024-05-07 01:12:00",
            "purchases_count": 0,
            "has_demo": false,
            "downloads_count": 0,
            "user": {
                "display_name": "GuiBDBello",
                "cover_url": "https:\/\/img.itch.zone\/aW1nLzE2NzcxNjY2LmpwZw==\/100x100%23\/QKjKfy.jpg",
                "url": "https:\/\/guibdbello.itch.io",
                "id": 1304622,
                "username": "GuiBDBello"
            },
            "views_count": 19,
            "short_text": "3D maze generation powered by Godot.",
            "id": 2692675,
            "min_price": 0,
            "published": true,
            "can_be_bought": false,
            "embed": {
                "height": 648,
                "width": 1152,
                "fullscreen": false
            },
            "still_cover_url": "https:\/\/img.itch.zone\/aW1nLzE2NzU3NDM0LmdpZg==\/315x250%23cm\/jc1wRs.gif"
        },
        {
            "url": "https:\/\/guibdbello.itch.io\/labiralg",
            "p_windows": false,
            "p_osx": false,
            "p_linux": false,
            "p_android": false,
            "type": "html",
            "cover_url": "https:\/\/img.itch.zone\/aW1nLzE2ODE4MzQ1LmdpZg==\/315x250%23c\/RZli4Q.gif",
            "classification": "game",
            "title": "Labiralg",
            "published_at": "2024-07-05 11:45:32",
            "in_press_system": false,
            "created_at": "2024-07-03 22:02:04",
            "purchases_count": 0,
            "has_demo": false,
            "downloads_count": 0,
            "user": {
                "display_name": "GuiBDBello",
                "cover_url": "https:\/\/img.itch.zone\/aW1nLzE2NzcxNjY2LmpwZw==\/100x100%23\/QKjKfy.jpg",
                "url": "https:\/\/guibdbello.itch.io",
                "id": 1304622,
                "username": "GuiBDBello"
            },
            "views_count": 9,
            "short_text": "Procedurally generated maze game.",
            "id": 2811761,
            "min_price": 0,
            "published": true,
            "can_be_bought": false,
            "embed": {
                "height": 648,
                "width": 1152,
                "fullscreen": false
            },
            "still_cover_url": "https:\/\/img.itch.zone\/aW1nLzE2ODE4MzQ1LmdpZg==\/315x250%23cm\/EkOMw3.gif"
        }
    ]
};

let i = 0;
myGames.games.sort((theyest, thou) => {
    // Labiralg deve ser o último da lista
    if (theyest.title == 'Labiralg')
        return 1;
    if (thou.title == 'Labiralg')
        return -1;
    
    // Ordena pela data de publicação
    if (theyest.published_at > thou.published_at)
        return -1;
    else if (theyest.published_at < thou.published_at)
        return 1;
    else
        return 0;
}).forEach(game => {
    // Create Elements
    let section = document.getElementById('games-section');

    let divGame = document.createElement('div');

    let divDescription = document.createElement('div');
    let aName = document.createElement('a');
    let pDescription = document.createElement('p');

    let divImage = document.createElement('div');
    let aImg = document.createElement('a');
    let img = document.createElement('img');

    // Add Classes
    divGame.classList.add('game');
    divDescription.classList.add('game-description');
    divImage.classList.add('game-image');

    // Add Animation
    divGame.setAttribute("data-aos", "zoom-in-up");
    divGame.setAttribute("data-aos-anchor-placement", "center-bottom");

    // Add Content
    aName.href = game.url;
    aName.target = '_blank';
    aName.textContent = game.title;
    pDescription.textContent = game.short_text;

    aImg.href = game.url;
    aImg.target = '_blank';
    img.src = game.cover_url;

    // Add Tilt
    img.setAttributeNode(document.createAttribute("data-tilt"));
    img.setAttribute("data-tilt-reverse", "true");
    img.setAttribute("data-tilt-scale", "1.1");

    // Append Childs
    aImg.appendChild(img);

    divDescription.appendChild(aName);
    divDescription.appendChild(pDescription);
    divImage.appendChild(aImg);

    console.log('divGame', divGame);
    console.log('divDescription', divDescription);
    console.log('divImage', divImage);

    divGame.appendChild(divDescription);
    divGame.appendChild(divImage);

    section.appendChild(divGame);

    i++;
});
