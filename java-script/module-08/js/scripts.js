const gallery = document.querySelector(".image-gallery");

const galleryItems = [
    { preview: "img/preview-1.jpeg", fullview: "img/fullview-1.jpeg", alt: "alt text 1" },
    { preview: "img/preview-2.jpeg", fullview: "img/fullview-2.jpeg", alt: "alt text 2" },
    { preview: "img/preview-3.jpeg", fullview: "img/fullview-3.jpeg", alt: "alt text 3" },
    { preview: "img/preview-4.jpeg", fullview: "img/fullview-4.jpeg", alt: "alt text 4" },
    { preview: "img/preview-5.jpeg", fullview: "img/fullview-5.jpeg", alt: "alt text 5" },
    { preview: "img/preview-6.jpeg", fullview: "img/fullview-6.jpeg", alt: "alt text 6" },
];

const fullView = document.createElement("div");
fullView.classList.add("fullview");
fullView.innerHTML = '<img src="img/fullview-1.jpeg" alt="alt text 1">';
const preView = document.createElement("ul");
preView.classList.add("preview");

for (const item of galleryItems) {
    const li = document.createElement("li");
    const img = document.createElement("img");
    img.setAttribute("src", item.preview);
    img.setAttribute("data-fullview", item.fullview);
    img.setAttribute("alt", item.alt);
    li.append(img);
    preView.append(li);
}

gallery.append(fullView, preView);

let currentSelectedImage = preView.firstElementChild;

const selectImgPreview = event => {
    if (currentSelectedImage.classList.contains("active")) {
        currentSelectedImage.classList.remove("active");
    }
    const targetImage = event.target;
    fullviewImage.firstElementChild.setAttribute("src", targetImage.dataset.fullview);
    targetImage.classList.add("active");
    currentSelectedImage = targetImage;
}

const previewList = document.querySelector(".preview");
const fullviewImage = document.querySelector(".fullview");

previewList.addEventListener("click", selectImgPreview);