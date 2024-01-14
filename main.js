const data = [
    {
        id: 1,
        name: "tahsin soufizade",
        job: "FrontEnd Developer",
        img: "./assets/1-user.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem beatae dolore, ducimus eveniet illum labore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
    },
    {
        id: 2,
        name: "Mahsa Golabi",
        job: "Barber",
        img: "./assets/2-user.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad asperiores autem ore maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
    },
    {
        id: 3,
        name: "Ghasem Kargar",
        job: "Baker",
        img: "./assets/3-user.jpg",
        text: "Lorem ipsum dolor sit amet, consectetur adipe maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
    },
    {
        id: 4,
        name: "Helma mahdavi",
        job: "BackEnd Developer",
        img: "./assets/4-user.jpg",
        text: "Lorem ipsum dolor sit amet,maiores odio, odit officia pariatur perspiciatis provident quidem repellat sequi tempora totam vitae voluptatibus! Amet cum dolor fugiat iusto tempore! Autem, fuga.",
    },
];

///ELEMENt
const commentBox = document.querySelector('.comment-info-box');

let currentIndex = 0;
function showComment() {
    const comment = data[currentIndex];

   const commentItem = `
    <div class="comment-img-wrapper">
    <img src=${comment.img} alt=${comment.name} class="comment-img" />
    <i class="fa fa-heart comment-img-icon"></i>
  </div>

  <div class="comment-info">
    <h2 class="comment-name">${comment.name}</h2>
    <p class="comment-job">${comment.job}</p>
    <p class="comment-text">
    ${comment.text}
    </p>
  </div> 
  `;

    commentBox.innerHTML = commentItem;
}










