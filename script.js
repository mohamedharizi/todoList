

​
​// Déclarations (let et const)
const input = document.querySelector("input");
const button = document.querySelector("button");
const ul = document.getElementByTagName("ul");
let li;
​
​

​// creation des fonctions


// creation de la fonction qui créé l'element "li"
function createElementLi() {
    li = document.createElement('li');
}
​// creation de la fonction qui créé l'espace disponible pour la valeur "li"
function addInputValueinLi() {
    li.append(document.createTextNode(input.value));
    
}
​
// creation de la fonction qui va inserer la valeur de l'input dans le "ul"
function insertElementLiInUL() {
    ul.insertAdjacentElement('beforeend', li);
}
​
// fonction qui permet le retour de l'input a l'origine (sans rien a l interieur)
function resetInput() {
    input.value = "";
}



​// creation de la fonction globale qui regroupe toutes les fonctions nécessaires
function addItemOnMyTodo() {
​
    createElementLi();
    addInputValueinLi();
    insertElementLiInUL();
    resetInput();
    
}
​
// creation de la fonction filtre de la touche entrée
function getInputValueEnter(key) {
    if (key.keyCode === 13) {
        addItemOnMyTodo();
    }
}
​

// execution des fonctions
button.addEventListener("click", addItemOnMyTodo); // execution par le click
input.addEventListener("keypress", getInputValueEnter); // execution par le bouton entrée
