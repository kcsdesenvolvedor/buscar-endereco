function getAddress() {
  var table = document.getElementById('tableCep');
  var inputCep = document.getElementById('inputCep').value.replaceAll("-","");

  tableClear(table);
  var newLine = table.insertRow();
  newLine.style.backgroundColor = "#ffffff";
  newLine.style.color = "#000";
  var newCell1 = newLine.insertCell(0);
  var newCell2 = newLine.insertCell(1);
  var newCell3 = newLine.insertCell(2);
  var newCell4 = newLine.insertCell(3);

  if (inputCep.length != 8) {
    newCell1.innerHTML = "cep deve conter 8 caractere numérico...";
  } else {
    fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
      .then(response => response.json())
      .then(data => {
        if ('erro' in data) {
          newCell1.innerHTML = "Endereço não encontrado...";
        } else {
          newCell1.innerHTML = data.logradouro;
          newCell2.innerHTML = data.bairro;
          newCell3.innerHTML = data.localidade;
          newCell4.innerHTML = data.uf;
        }
      });
  }
}

function tableClear(table) {
  for (let index = table.rows.length - 1; index >= 1; index--) {
    table.deleteRow(index);

  }
}