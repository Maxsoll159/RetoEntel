class buttonComponent extends HTMLElement {
  constructor() {
    super();
    this.id;
  }
  static get observarAtributos() {
    return ["id"];
  }
  attributeChangeCallback(id, newValue) {
    this.id = newValue;
  }
  connectedCallback() {
    const myTimeout = setTimeout(myGreeting, 1000);
    function myGreeting() {
      let modal = document.getElementById("myModal");
      let btn = document.querySelectorAll("button");
      btn.forEach((element) => {
        element.onclick = function (e) {
          const usuIn = JSON.parse(localStorage.getItem("usu"))
          const usu = usuIn.filter(element=> element.id == e.target.value)
          const mostrar = document.querySelector("#mostrar")
          usu.map((element)=>{ 
            mostrar.innerHTML = `
              <img src="${element.avatar}" alt="" wi>
              <div>
                <h1>${element.first_name} ${element.last_name }</h1>
                <p>Correo:</p>
                <p>${element.email}</p>
              </div>
            `
          })
          modal.style.display = "block";
        };
      });
      let span = document.getElementsByClassName("close")[0];
      span.onclick = function () {
        modal.style.display = "none";
      };
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    }
    this.innerHTML = `<button id="myBtn" value="${this.id}">Ver Usuario</button>`;
  }
}

window.customElements.define("button-component", buttonComponent);
