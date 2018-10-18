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
}) {
    const rootHtml = document.qwerySelector("html");
    rootHtml.style.boxSizing = "border-box";

    const mainBody = document.qwerySelector("body");
    mainBody.style.fontFmaly = "'Roboto', sans-serif";
    mainBody.style.fontSize = "16px";

    const mainDiv = document.createElement("div");
    mainDiv.classList.add = "post";
    mainDiv.style.width = "400px";
    mainDiv.style.padding = "8px";
    mainDiv.style.boxShadow = "0 0 4px 2px rgba(0, 0, 0, 0.2)";
    mainDiv.style.borderRadius = "2px";
    mainDiv.style.color = "#212121";
    mainDiv.style.margin = "0 auto";

    const mainImg = document.createElement("img");
    mainImg.classList.add = "post__image";
    mainImg.setAttribute("src", img);
    mainImg.setAttribute("alt", "post image");
    mainImg.style.marginBottom = "8px";

    const mainTitle = document.createElement("h2");
    mainTitle.classList.add = "post__title";
    mainTitle.style.margin = "0";
    mainTitle.style.marginBottom = "16px";
    mainTitle.style.fontSize = "32px";
    mainTitle.style.fontWeight = "500";
};

const createCards = posts => {
    posts.forEach(item => createPostCard(item, item.title));
};

createCards(posts);