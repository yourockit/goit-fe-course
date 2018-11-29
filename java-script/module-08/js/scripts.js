const galleryItems = [
    { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
    { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
    { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
    { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
    { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
    { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

function createGallery(itemsGallery) {
    const imageGallery = document.querySelector(".js-image-gallery");
    const fullview = document.createElement("div");
    fullview.classList.add("fullview");
    const fullviewElement = document.createElement("img");
    fullviewElement.setAttribute("src", itemsGallery[0].fullview);
    fullviewElement.setAttribute("alt", itemsGallery[0].alt);
    fullview.appendChild(fullviewElement);
    const preview = document.createElement("ul");
    preview.classList.add("preview");
    imageGallery.append(fullview, preview);

    itemsGallery.forEach(elem => {
        const img = createLiImgEl(elem);
        img.addEventListener("click", clickListener);
    });

    function clickListener(event) {
        const dataAtr = event.target.getAttribute("data-fullview");
        const altAtr = event.target.getAttribute("alt");
        fullview.firstElementChild.setAttribute("src", dataAtr);
        fullview.firstElementChild.setAttribute("alt", altAtr);

        const target = event.target;

        setActiveLink(target);
    }

    function setActiveLink(nextTarget) {
        const currentTarget = preview.querySelector("img.active");

        if (currentTarget) {
            currentTarget.classList.remove("active");
        }

        nextTarget.classList.add("active");
    }

    // function createLiImgEl(elem) {
    //     const liElement = document.createElement("li");
    //     // preview.append(liElement);
    //     const imgElement = document.createElement("img");
    //     liElement.appendChild(imgElement).setAttribute("src", elem.preview);
    //     imgElement.setAttribute("data-fullview", elem.fullview);
    //     imgElement.setAttribute("alt", elem.alt);
    //     if (imgElement.getAttribute("alt") === "alt text 1") {
    //         imgElement.classList.add("active");
    //     }
    //     // imgArray.push(imgElement);
    //     return imgElement;
    // }

    function createLiImgEl(elem) {
        const liElement = document.createElement("li");
        const imgElement = document.createElement("img");
        imgElement.setAttribute("src", elem.preview);
        imgElement.setAttribute("data-fullview", elem.fullview);
        imgElement.setAttribute("alt", elem.alt);
        liElement.append(imgElement);
        if (imgElement.getAttribute("alt") === "alt text 1") {
            imgElement.classList.add("active");
        }
        return liElement;
    }

    const createElem = galleryItems => galleryItems.map(item => createLiImgEl(item));

}


createGallery(galleryItems);


https: //github.com/cursorksu/goit-fe-advanced/blob/master/module_8/hometask/js/script.js

    https: //github.com/SergioKhodchenko/JavaScript/blob/master/module_08/script.js