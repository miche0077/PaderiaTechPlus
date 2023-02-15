let itemInput = document.getElementById("preço");
let botão = document.getElementById("botao");
const listaDeItens = [];

const handleChangeItens = (e) => {
  itemNoDecimal = e.target.value;
  item = parseFloat(itemNoDecimal).toFixed(2);
  console.log(item);
};

const clicou = () => {
  if (item != 0) {
    listaDeItens.push(parseFloat(item));
    console.log(listaDeItens);

    var tag = document.createElement("p");
    var text = document.createTextNode(
      `Item ${listaDeItens.length} - R$ ${item}`
    );
    tag.appendChild(text);
    lista.appendChild(tag);
  } else {
    var totalSoma = 0;
    listaDeItens.forEach((item) => {
      totalSoma += item;
    });
    totalSomaDecimal = parseFloat(totalSoma).toFixed(2);
    console.log(totalSomaDecimal);

    var tag = document.createElement("p");
    var text = document.createTextNode(`Total: R$${totalSomaDecimal}`);
    tag.appendChild(text);
    lista.appendChild(tag);

    var tagTextoTroco = document.createElement("p");
    var textTroco = document.createTextNode("Dinheiro recebido:");
    tagTextoTroco.appendChild(textTroco);
    troco.appendChild(tagTextoTroco);

    var tagInputTroco = document.createElement("input");
    troco.appendChild(tagInputTroco);
    tagInputTroco.setAttribute("id", "trocoInput");
    tagInputTroco.setAttribute("placeholder", "R$0,00");
    tagInputTroco.setAttribute("type", "number");

    var tagbotaoInputTroco = document.createElement("button");
    troco.appendChild(tagbotaoInputTroco);
    tagbotaoInputTroco.setAttribute("id", "botaoTroco");
    tagbotaoInputTroco.style.marginLeft = "4px";
    document.getElementById("botaoTroco").textContent = "Ok";

    let InputTroco = document.getElementById("trocoInput");
    let botaoInputTroco = document.getElementById("botaoTroco");

    const handleChangeDinheiroRecebido = (e) => {
      dinheiroRecebidoSemDecimal = e.target.value;
      dinheiroRecebido = parseFloat(dinheiroRecebidoSemDecimal).toFixed(2);
      console.log(dinheiroRecebido);
    };

    const clickTroco = () => {
      trocoParaDar = parseFloat(dinheiroRecebido - totalSomaDecimal).toFixed(2);
      console.log(trocoParaDar);

      var tagTrocoFinal = document.createElement("p");
      var textTrocoFinal = document.createTextNode(
        `Troco a dar: R$${trocoParaDar}`
      );
      tagTrocoFinal.appendChild(textTrocoFinal);
      trocoFinal.appendChild(tagTrocoFinal);
      setInterval(() => {
        location.reload(true);
      }, 5000);
    };

    InputTroco.addEventListener("change", handleChangeDinheiroRecebido);
    botaoInputTroco.addEventListener("click", clickTroco);
  }
};

itemInput.addEventListener("change", handleChangeItens);
botão.addEventListener("click", clicou);