function newElement() {
    let info = document.querySelector(`#task`).value.trim()
    console.log(info)
    if(info == ""){
      $('#liveToast-error').toast('show')
        return
    }
    let luDOM = document.querySelector(`#list`)
    let liDOM = document.createElement('li');
    liDOM.innerHTML = info
    luDOM.prepend(liDOM)
    document.querySelector(`#task`).value = ""
    IconClose(liDOM)
    checker(liDOM)
    $('#liveToast').toast('show')
}

let liDom = document.querySelectorAll('#list li')

function IconClose(element) {                       
    let btn = document.createElement("button");
    btn.type = "button";
    btn.className = "close-icon close";
    btn.ariaLabel = "Close";
    btn.addEventListener("click", (e) => e.target.parentElement.parentElement.remove()); 
    btn.innerHTML = `<span aria-hidden="true"> &times <span/>`;
    element.appendChild(btn);
  }

function checker() {
  let liItems = document.querySelectorAll('#list li')
  liItems.forEach(function (item) {
    item.addEventListener('click', function() {
      if (this.classList.contains('checked')) {
        this.classList.remove('checked');
      } else {
        this.classList.add('checked');
      }
    })
  })
}

for (let i = 0; i < liDom.length; i++) {
  IconClose(liDom[i]);
}

for (let i = 0; i < liDom.length; i++) {
  checker(liDom[i]);
}

