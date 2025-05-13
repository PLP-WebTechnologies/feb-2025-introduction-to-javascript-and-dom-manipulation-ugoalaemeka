function changeText() {
    document.getElementById("main-heading").textContent = "Text Changed Successfully!";
  }
  
  function changeStyle() {
    const intro = document.getElementById("intro-text");
    intro.style.color = "white";
    intro.style.backgroundColor = "#5a2ea6";
    intro.style.padding = "10px";
    intro.style.borderRadius = "5px";
  }
  
  function addElement() {
    const newItem = document.createElement("li");
    newItem.textContent = "New DOM Item";
    document.getElementById("item-list").appendChild(newItem);
  }
  
  function removeElement() {
    const list = document.getElementById("item-list");
    if (list.lastElementChild) {
      list.removeChild(list.lastElementChild);
    }
  }
  