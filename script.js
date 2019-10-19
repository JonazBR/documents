//  NENHUM DOS SCRIPTS QUE TÃO AKI VÃO RODAR NA PÁGINA DO NAVEGADOR

function injetarScript() {
    // Injeta o script que quer usar na tab atual
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {// São comando específicos pro chrome portanto só vai funcionar no chrome, não use no edge ou firefox
        chrome.tabs.executeScript(
            tabs[0].id, //0 é da tab atual
            {file: "mudaCor.js"}); // Esse é o nome do seu script pra mudar a cor ou fazer o que quiser que faça na página do navegador
    });
};

// Espera tudo ser carregado pra não dar erro
document.addEventListener("DOMContentLoaded", () => {
    
    // Aciona quando o botão #button é clicado
    document.querySelector("#buttom").addEventListener("click", () => {
        injetarScript();
    });

})
