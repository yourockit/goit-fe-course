const posts = [{
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 1",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-1.com'
    },
    {
        img: "https://placeimg.com/400/150/nature",
        title: "Post title 2",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-2.com'
    },
    {
        img: "https://placeimg.com/400/150/arch",
        title: "Post title 3",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
        link: 'link-3.com'
    }
];

function createPostCard({
    img = "#",
    title = "title",
    text = "text",
    link = "link"
}) {

    const mainBody = document.querySelector("body");

    const mainDiv = document.createElement("div");
    mainDiv.classList.add("post");

    const mainImg = document.createElement("img");
    mainImg.classList.add("post__image");
    mainImg.setAttribute("src", img);
    mainImg.setAttribute("alt", "image");
    mainImg.style.marginBottom = "8px";

    const mainTitle = document.createElement("h2");
    mainTitle.classList.add("post__title");
    mainTitle.textContent = title;

    const mainContent = document.createElement("p");
    mainContent.classList.add("post__text");
    mainContent.textContent = text;

    const mainButton = document.createElement("button");
    mainButton.classList.add("button");
    mainButton.setAttribute("href", link)
    mainButton.textContent = "Read more";

    mainDiv.append(mainImg, mainTitle, mainContent, mainButton);
    mainBody.prepend(mainDiv);
};


const createCards = posts => {
    posts.forEach(item => createPostCard(item));
};

createCards(posts);