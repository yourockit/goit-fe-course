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
    const rootHtml = document.querySelector("html");
    rootHtml.style.boxSizing = "border-box";

    const mainBody = document.querySelector("body");
    mainBody.style.fontFamily = "Roboto, sans-serif";
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
    mainImg.setAttribute("alt", "image");
    mainImg.style.marginBottom = "8px";

    const mainTitle = document.createElement("h2");
    mainTitle.classList.add = "post__title";
    mainTitle.style.margin = "0";
    mainTitle.style.marginBottom = "16px";
    mainTitle.style.fontSize = "32px";
    mainTitle.style.fontWeight = "500";
    mainTitle.style.textAlign = "center";
    mainTitle.textContent = title;

    const mainContent = document.createElement("p");
    mainContent.classList.add("post__text");
    mainContent.style.margin = ("0");
    mainContent.style.marginBottom = ("16px");
    mainContent.style.lineHeight = ("1.5");
    mainContent.textContent = text;

    const mainButton = document.createElement("button");
    mainButton.classList.add("button");
    mainButton.setAttribute("href", link)
    mainButton.style.position = ("relative");
    mainButton.style.display = ("inline-block");
    mainButton.style.border = ("none");
    mainButton.style.borderRadius = ("3px");
    mainButton.style.padding = ("0 1.5em");
    mainButton.style.verticalAlign = ("top");
    mainButton.textContent = "Read more";

    mainButton.style.fontSize = ("15px");
    mainButton.style.lineHeight = ("2.8");
    mainButton.style.color = ("#222");
    mainButton.style.textTransform = ("uppercase");
    mainButton.style.textAlign = ("center");
    mainButton.style.whiteSpace = ("nowrap");
    mainButton.style.fontFamily = ("inherit");
    mainButton.style.fontWeight = ("bold");
    mainButton.style.textDecoration = ("none");

    mainButton.style.backgroundColor = ("#fff");
    mainButton.style.overflow = ("hidden");
    mainButton.style.cursor = ("pointer");
    mainButton.style.boxShadow = ("0 2px 1px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.3)");
    mainButton.style.transition = ("background-color 0.3s, box-shadow 0.3s, opacity 0.3s, color 0.3s");
    mainButton.style.webkitTapHighlightColor = ("rgba(0, 0, 0, 0)");


    mainBody.prepend(mainDiv);
    mainDiv.append(mainImg, mainTitle, mainContent, mainButton);
};


const createCards = posts => {
    posts.forEach(item => createPostCard(item, item.title));
};

createCards(posts);