const inp = document.querySelector("#name");
const btnV = document.querySelector(".sort__button");
const btnSave = document.querySelector(".save__button");
const ul = document.querySelector(".list__name");
///create element
let li;
///
let arrName = [];
let getName;
////
btnSave.addEventListener("click", (e) => {
    e.preventDefault();
    if (inp.value.trim()) {
        const inpValue = inp.value;
        arrName = arrName.concat(inpValue);
        localStorage.setItem("name", JSON.stringify(arrName));
        inp.value = "";
        getName = JSON.parse(localStorage.getItem("name"));
        li = document.createElement("li");
        li.style.listStyle = "none";
        getName.forEach((el) => {
            li.innerHTML = el;
        });
        ul.append(li);
    }
});
///
btnV.addEventListener("click", (e) => {
    e.preventDefault();
    getName.sort();
    getName.forEach((el) => (li.innerHTML = el));
});
