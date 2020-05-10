function validar(){
    var nome_valid = document.getElementById("nome").value;
    var email_valid = document.getElementById("email").value;
    var assunto_valid = document.getElementById("assun").value;
    if(nome_valid ==''){
        alert('Favor preencher campo nome');
    }
    if(email_valid ==''){
        alert('Favor preencher campo email');
    }
    if(assunto_valid ==''){
        alert('Favor preencher campo assunto');
    }
    
}
