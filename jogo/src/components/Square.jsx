import React from "react";

// Componente funcional Square, representa um quadrado no tabuleirio
function Square({value, onClick}) {
    return (
        // Botão que existe o valor do quadrado e chama a função onClick ao ser clicado 
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

// Exporta o componente Square como padrão
export default Square;
