function validar(){
    var nome_valid = document.getElementById("nome").value;
    var email_valid = document.getElementById("email").value;
    var assunto_valid = document.getElementById("assun").value;
    if(nome_valid ==''){
        alert('Preencher campo nome');
    }
    if(email_valid ==''){
        alert('Preencher campo email');
    }
    if(assunto_valid ==''){
        alert('Preencher campo assunto');
    }
}
