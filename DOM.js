// console.log(window)

// console.log(document.getElementById("my-form"))
// console.log(document.getElementsByClassName("item"))
// console.log(document.getElementsByTagName("li"))
// console.log(document.querySelector("h1"))
// console.log(document.querySelectorAll(".item"))
// console.log(document.querySelectorAll("li"))

// const items = document.querySelectorAll(".item")

// items.forEach((item) => console.log(item))

// const ul = document.querySelector(".items")

// ul.lastElementChild.remove()

// ul.firstElementChild.textContent = "Hello"
// ul.children[1].textContent = "brahim"
// ul.children[2].innerText = "myItem"
// ul.children[2].innerHTML = "<h1>hello again!</h1>"

// ############################
// const btn = document.querySelector(".btn")
// // btn.style.background = "grey"

// btn.addEventListener("mouseover", (e) => {
//   e.preventDefault()

//   //   console.log("click")
//   console.log(e)
//   //   console.log(e.target)
//   //   console.log(e.target.className)
//   //   console.log(e.target.id)
//   document.querySelector("#my-form").style.background = "#ccc"

//   document.querySelector("body").classList.add("bg-dark")

//   document.querySelector(".items").lastElementChild.innerHTML =
//     "<h1>hello again! YoPiiiii :) </h1>"
// })

// ##############################
const myForm = document.querySelector("#my-form")
const nameInput = document.querySelector("#name")
const emailInput = document.querySelector("#email")
const msg = document.querySelector(".msg")
const userList = document.querySelector("#users")

myForm.addEventListener("submit", onSubmit)

function onSubmit(e) {
  e.preventDefault()
  //   console.log(nameInput)
  //   console.log(nameInput.value)
  //   return nameInput.value === "" || email.value === ""
  //     ? alert("please enter fields")
  //     : console.log("success !")

  if (nameInput.value === "" || email.value === "") {
    msg.classList.add("error")
    msg.innerHTML = "please enter fields :("

    setTimeout(() => msg.remove(), 3000)
  } else {
    const li = document.createElement("li")
    li.appendChild(
      document.createTextNode(`${nameInput.value} : ${emailInput.value}`)
    )
    userList.appendChild(li)
    nameInput.value = ""
    emailInput.value = ""
  }
}
