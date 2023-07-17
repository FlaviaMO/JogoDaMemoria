function onLoad() {  
    
    const dependencias = {
        tela: Tela // a classe Tela é global
    }
    const jogoDaMemoria = new JogoDaMemoria(dependencias)
    jogoDaMemoria.inicializar()
}
window.onload = onLoad