const Buttons = document.querySelectorAll(".big-five-button");
const removeSingleButton = document.getElementById("remove-first-item-button");
const removeAlles = document.getElementById("remove-all-button");


//get value button
const animalSpotted = event => {
    const spottedAnimal = event.target.textContent;
    const listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(spottedAnimal));
    const list = document.getElementById("spotted-animals-list");
    list.appendChild(listItem);
};




const removeSingleAnimal = () => {
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    firstItem.remove();
};



const removeAllAnimal = () => {
    const bigList = document.getElementById("spotted-animals-list");
    bigList.innerHTML = "";

};




//event listeners
Buttons.forEach((animalButton) => {
    animalButton.addEventListener("click", animalSpotted);
});


removeSingleButton.addEventListener('click', removeSingleAnimal);



removeAlles.addEventListener('click', removeAllAnimal);





















