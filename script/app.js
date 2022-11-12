'use strict'
const todolistFormEl = document.querySelector("#adder-form");
const todolistAdderInputEl = document.querySelector("#adder-input");
const todolistItemContainerEl = document.querySelector("#todolistitem-container");
const clearIcon = document.querySelector(".input__wrapper > i");
const deleteAllEl = document.querySelector("#delete-all");

todolistFormEl.addEventListener("submit", (e) => {
    e.preventDefault();
    if (todolistAdderInputEl.value.replace(/ /g, "").length >= 3) {
        const time = new Date();
        const createTime = String(time.getHours()).padStart(2, "0") + ":" + String(time.getMinutes()).padStart(2, "0") + ":" + String(time.getSeconds()).padStart(2, "0");
        const todoItem = document.createElement("div");
        const todoItemP = document.createElement("p");
        const todoItemBtn = document.createElement("div");
        const todoItemBtnComplete = document.createElement("button");
        const todoItemBtnTime = document.createElement("button");
        const todoItemBtnedit = document.createElement("button");
        const todoItemBtnDelete = document.createElement("button");


        todoItemP.innerText = todolistAdderInputEl.value;
        todoItem.className = "todo__item";
        todoItemBtnComplete.innerHTML = '<i class="fa-solid fa-circle-check"></i> <br> Complete';
        todoItemBtnTime.innerHTML = '<i class="fa-solid fa-clock"></i> <br>' + createTime;
        todoItemBtnedit.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <br> Edit';
        todoItemBtnDelete.innerHTML = '<i class="fa-solid fa-trash"></i> <br> Delete';
        todoItemBtn.appendChild(todoItemBtnComplete);
        todoItemBtn.appendChild(todoItemBtnTime);
        todoItemBtn.appendChild(todoItemBtnedit);
        todoItemBtn.appendChild(todoItemBtnDelete);
        todoItem.appendChild(todoItemP);
        todoItem.appendChild(todoItemBtn);
        todolistItemContainerEl.prepend(todoItem);
        todolistAdderInputEl.value = '';



        todoItemBtnDelete.addEventListener('click', () => {
            const isUserAgree = confirm("Are you sure to delete this item?")
            if (isUserAgree) {
                todoItem.remove();
            }
        })

        todoItemBtnComplete.addEventListener('click', () => {
            todoItemP.classList.toggle("todoItemcomplete")
        })

        todoItemBtnedit.addEventListener('click', () => {
            if (todoItemP.hasAttribute("contenteditable")) {
                todoItemP.removeAttribute("contenteditable");
                todoItemP.style.border = "none";
            }
            else {
                todoItemP.setAttribute("contenteditable", true);
                todoItemP.style.border = "1px solid red";
            }

        })




    }





})

clearIcon.addEventListener('click', () => {
    todolistAdderInputEl.value = '';
    todolistAdderInputEl.focus();
})

deleteAllEl.addEventListener('click', () => {
    const isUserAgree = confirm("Are you sure to delete all?");
    console.log(isUserAgree);
    if (isUserAgree) {

        //   todolistItemContainerEl.innerHTML = '';

        while (todolistItemContainerEl.firstChild) {
            todolistItemContainerEl.removeChild(todolistItemContainerEl.firstChild);
        }
    }
})