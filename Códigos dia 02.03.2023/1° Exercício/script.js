function newPost() {
  var nome = prompt("Qual o seu nome?");
  var msg = prompt("Escreva a sua mensagem: ");
  document.getElementById("commits").innerHTML +=
    "<div class='chat-box'><div class='user-img'></div><h1>Nome: " +
    nome +
    "</h1> <p><b>Mensagem:</b>" +
    msg +
    "</p> </div>";
}
