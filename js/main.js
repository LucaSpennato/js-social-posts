// Descrizione:
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:
//  Prendiamo il nostro array di oggetti che rappresentano ciascun post.
// Ogni oggetto avrà le informazioni necessarie per stampare la relativa card:
//     id del post, numero progressivo da 1 a n
//     nome autore,
//     foto autore,
//     data in formato americano (mm-gg-yyyy),
//     testo del post,
//     immagine (non tutti i post devono avere una immagine),
//     numero di likes.

// Milestone 1 -
//  Prendendo come riferimento il layout di esempio presente nell'html,
//  stampiamo i post del nostro feed, rimuovendo i contenuti statici.

// Milestone 2:
//  Se clicchiamo sul tasto "Mi Piace" cambiamo il colore sia al bottone che al
//  testo del bottone del relativo post.
// Bonus 1-
//  Quando clicchiamo su un "Mi piace", oltre al cambio previsto dalla milestone 2, 
// incrementiamo il counter dei likes relativo al suddetto post.
// Cerchiamo di trovare un modo efficiente per salvare il like per ogni post, 
// magari sfruttando meglio i dati che ho già a disposizione?

// Bonus 2
//  Formattare le date in formato italiano (gg/mm/aaaa)
//  Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo 
// decrementare il contatore e cambiare il colore del bottone.
// Bonus 3
//  Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene
//  le iniziali dell'utente (es. Luca Formicola  LF).

const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "is_liked": true,
        "created": "2022-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "is_liked": false,
        "created": "2022-06-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "is_liked": true,
        "created": "2022-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "is_liked": false,
        "created": "2022-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Stefano Tortellini",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=536",
        "author": {
            "name": "Luigia Micca",
            "image": "https://unsplash.it/300/300?image=33"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2022-02-02"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=531",
        "author": {
            "name": "Grace Hunterdan",
            "image": "https://unsplash.it/300/300?image=59"
        },
        "likes": 95,
        "is_liked": false,
        "created": "2022-02-01"
    },
    {
        "id": 8,
        "content": "Ao! Che nun ce lo sai che io so l'unico post scritto in romanesco de tutta sta lista autogenerata! Dico e scrivo nummeri da quanno so nato, ce manca pure che me faccio un post autogennerato!",
        "media": "https://unsplash.it/600/400?image=554",
        "author": {
            "name": "Mario Di Nio",
            "image": "null"
        },
        "likes": 95,
        "is_liked": true,
        "created": "2021-12-11"
    }
];

// stampa dinamica degli elementi dell'array. 
// ? creo una funzione per aggiungere tutto dinamicamente e velocemente da immettere con innerHTML
// ? creerò solo la parte esterna 'wrapper del post', il resto sarà l'innerHTMl di questo

let mainWrapper = document.querySelector('.posts-list');
console.log(mainWrapper);

// scorro in foreach
posts.forEach((post) => {

    // salvo tutto in variabili
    const { id, content, media, likes, created, is_liked } = post;
    // queste le salvo diversamente per accedere con più facilità
    const authorName = post.author.name;
    const authorImage = post.author.image;
    // console.log(authorName, authorImage);
    // console.log(id, content, media, likes);

    let postWrapper = document.createElement('div');
    postWrapper.classList.add('post');
    mainWrapper.append(postWrapper);
    postWrapper.innerHTML += innerPost(authorImage, authorName, created, content, media, id, likes, is_liked);

});

let likeBtns = document.querySelectorAll('.like-button');

likeBtns.forEach((btn, index) => {

    
    btn.addEventListener('click', function(){
        
        const post = posts[index];
        if(post.is_liked === true){
            btn.classList.remove('like-button--liked');
            post.is_liked = !post.is_liked;
        }else{
            btn.classList.add('like-button--liked');
            post.is_liked = true;
        }
        
    });
    
});

function pushArray (array,...arguments){

    return array.push({...arguments});

}

function innerPost(profilePicSrc, authorName, creationDate, caption, postImage, postId, likesCounter, isLiked) {

    if (isLiked === true) {
        active = 'like-button--liked';
    } else {
        active = '';
    }

    return innerPostHtml = `<div class="post__header">
    <div class="post-meta">
        <div class="post-meta__icon">
            <img class="profile-pic" src="${profilePicSrc}" alt="${authorName}">
        </div>
        <div class="post-meta__data">
            <div class="post-meta__author">${authorName}</div>
            <div class="post-meta__time">${creationDate}</div>
        </div>
    </div>
</div>
<div class="post__text">${caption}</div>
<div class="post__image">
    <img src="${postImage}" alt="${authorName} post-picture">
</div>
<div class="post__footer">
    <div class="likes js-likes">
        <div class="likes__cta">
            <a class="like-button  js-like-button ${active}" href="#" data-postid="${postId}">
                <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                <span class="like-button__label">Mi Piace</span>
            </a>
        </div>
        <div class="likes__counter">
            Piace a <b id="like-counter-1" class="js-likes-counter">${likesCounter}</b> persone
        </div>
    </div>
</div>`;



};