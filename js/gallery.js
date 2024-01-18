const images=[ {
    //preview посилання на маленьку версію зображення для картки галереї.
    preview:
        "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820__480.jpg",
        //original — посилання на велику версію зображення для модального вікна
        original: "https://cdn.pixabay.com/photo/2019/05/14/16/43/rchids-4202820_1280.jpg",
        description: "Hokkaido Flower",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg",
    description: "Container Haulage Freight",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg",
    description: "Aerial Beach View",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg",
    original: "https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg",
    description: "Flower Blooms",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg",
    original: "https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg",
    description: "Alpine Mountains",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg",
    description: "Mountain Lake Sailing",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    description: "Alpine Spring Meadows",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    description: "Nature Landscape",
}

,
{
preview:
    "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg",
    original: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    description: "Lighthouse Coast Sea",
}

,
];


const gallery = document.querySelector(".gallery");

const galleryItems = images.map((image, index) => {
  const listItem = document.createElement("li");
  listItem.className ="gallery-item";

  const linkItem = document.createElement('a');
  linkItem.className ="gallery-link";
  linkItem.href = image.original;
  //добавим индекс для опередения картинки
  linkItem.setAttribute("data-index", index )


const imageElement = document.createElement('img');
  imageElement.className ="gallery-image";
  imageElement.src = image.preview;
  imageElement.alt = image.description; 
  imageElement.setAttribute("data-source" , image.original);


  //добавляем что куда
  linkItem.appendChild(imageElement);
  listItem.appendChild(linkItem);
  

  return listItem;
});

//новое добавим в галерею
gallery.append(...galleryItems);
console.log(gallery);


// Саме час додати функціонал прослуховування кліка по 
//елементах галереї та отримання посилання на велике зображення при кліку.

gallery.addEventListener("click", (event) => {
//добавим что бі не скачивало картинку
event.preventDefault();

const targetLink = 
event.target.closest(".gallery-link");

if (targetLink) {
    const index = parseInt(targetLink.getAttribute("data-index"), 10);
    const largeImg = images[index].original;

//модальное окно 


}
 
});
















