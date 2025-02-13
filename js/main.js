const NoteContainers = document.querySelector(".NoteContainers");
const Createbtn = document.querySelector(".Createbtn");
let NoteInput = document.querySelector(".NoteInputBox");

function shownotes() {
    NoteContainers.innerHTML = localStorage.getItem("notes")
}
shownotes();

function updatestorage() {
    localStorage.setItem("notes", NoteContainers.innerHTML);
}

Createbtn.addEventListener("click", () => {
    let inputBox = document.createElement("p")
    let Image = document.createElement("img")
    Image.className = "Delete";
    inputBox.className = "NoteInputBox";
    inputBox.setAttribute("contenteditable", "true");
    Image.src = "./download.png";
    NoteContainers.appendChild(inputBox).appendChild(Image);
});

NoteContainers.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
      e.target.parentElement.remove();
        updatestorage(); 
    }
  else if (e.target.tagName === "P") {
      notes = document.querySelectorAll(".NoteInputBox");
      notes.forEach(nt => {
          nt.onkeyup = function () {
             updatestorage(); 
          }
      });
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})