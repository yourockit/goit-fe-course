const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

function createGallery() {
    const imageGallery = document.querySelector("js-image- gallery");

    const fullView = document.createElement("div");
    fullView.classList.add("fullview");

    const fullViewImg = dociment.createElement("img");
    fullViewImg.setAttribute("srs");
    fullViewImg.setAttribute("alt");
    fullview.append(fullViewImg);

    const preview = document.createElement("ul")
    preview.classList.add("preview");
    imageGallery.append(fullView, preview);

}