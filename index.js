function auth() {
    const senha = document.getElementById('senha').value
    var inputHash = md5(senha)
    console.log(inputHash)
    if(inputHash == md5("SENHA")) {
        sessionStorage.setItem("token", "um_token")
        window.location.assign("selecao.html")
    }
    else {
        alert("Senha incorreta! Tente novamente.")
    }
}
