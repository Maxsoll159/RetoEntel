class componenteusu extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    let arrayUsu = [];

    const api = async ( page ) => {

        const URL = `https://reqres.in/api/users?page=${page}`;
        return await fetch(URL).then((res) => res.json());


    };

    Promise.all([api( 1 ), api( 2 )]).then(([users1, users2]) => {
        arrayUsu = [...users1.data, ...users2.data];
        localStorage.setItem("usu", JSON.stringify(arrayUsu))
        data1(arrayUsu)
    });

   
    const data1 = (arrayUsu) => {

      arrayUsu.map((value) => {
        this.innerHTML += `
                <div class="cartas">
                    <img src="${value.avatar}" alt="">
                        <div class="contenido-cartas" id="carta">
                            <h1>${value.first_name} ${value.last_name}</h1>
                            <p class="contenido--correo">Correo:</p>
                            <p class="contenido--correoValor">${value.email}</p>     
                            <button-component id=${value.id}></button-component>
                        </div>
                </div>
                `;
      });
    };
    api();
  }
}

window.customElements.define("mostrar-usuarios", componenteusu);
