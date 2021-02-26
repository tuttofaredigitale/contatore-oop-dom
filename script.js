class Contatore {
  constructor(elemento, valore) {
    this.contatore = elemento;
    this.valore = valore;
    this.resetBtn = elemento.querySelector('.reset');
    this.aumentaBtn = elemento.querySelector('.aumenta');
    this.diminuisciBtn = elemento.querySelector('.diminuisci');
    this.valoreDOM = elemento.querySelector('.valore');
    this.valoreDOM.textContent = this.valore;
    
    // utilizzo la funzione bind() che restituisce una nuova funzione che, quando chiamata, richiamerà la funzione originale con uno specifico valore this.
    this.aumenta = this.aumenta.bind(this);
    this.diminuisci = this.diminuisci.bind(this);
    this.reset = this.reset.bind(this);

    this.aumentaBtn.addEventListener('click', this.aumenta);
    this.diminuisciBtn.addEventListener('click', this.diminuisci);
    this.resetBtn.addEventListener('click', this.reset);
  }
  aumenta() {
    this.valore++;
    this.valoreDOM.textContent = this.valore;
  }
  diminuisci() {
    this.valore--;
    this.valoreDOM.textContent = this.valore;
  }
  reset() {
    this.valore = 0;
    this.valoreDOM.textContent = this.valore;
  }
}

function getElement(selection) {
    const element = document.querySelector(selection);
    if (element) {
      return element;
    }
    throw new Error(
      `Controlla "${selection}" il selettore, non esiste quel elemento`
    );
  }

const primoContatore = new Contatore(getElement('.primo-contatore'), 0);
const secondoContatore = new Contatore(getElement('.secondo-contatore'), 10);
