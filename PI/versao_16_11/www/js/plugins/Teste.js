//=============================================================================
// Interact.js
//=============================================================================

/*:
 * @plugindesc Interação com NPCs
 * @author Gabriel Henrique Mota Bublitz
 * 
 * 
 * 
 * 
 * 
 * 
 * @help
 * 
 */


//=============================================================================
// Variáveis
//=============================================================================

var pontos = [50, 50, 50, 50, 50, 50, 50];
var respostaNpc = "";
var e = ["Sim", "Não", "Talvez"];

//=============================================================================
// Código
//=============================================================================


(function() {

    $gameMessage.setChoices(e, 0, 1, 2);
    $gameMessage.setChoiceCallback(function(responseIndex){
    if(responseIndex == 0){
        $gameVariables.setValue(pontos, pontos+3);
    }
    if(responseIndex == 1){
        $gameVariables.setValue(pontos, pontos-3);
    }
    if(responseIndex == 2){
        $gameVariables.setValue(pontos, pontos);
    }
    });
    this.setWaitMode('...');

    if(pontos >= 0 || pontos <= 24){
        
        respostaNpc = 'ruim'

    }else if(pontos >= 25 || pontos <= 49){
        
        respostaNpc = 'parcialMal'

    }else if(pontos >= 50 || pontos <= 74){
        
        respostaNpc = 'parcialBom';

    }else {
        respostaNpc = 'bom';
    }

    $gameMessage.setFaceImage('Actor1',0);
    $gameMessage.setBackground(1);
    $gameMessage.setPositionType(1);
    $gameMessage.add(respostaNpc);

});

/* comendo para fazer mensagem
 * $gameMessage.setFaceImage('Actor1',0);
 * $gameMessage.setBackground(1);
 * $gameMessage.setPositionType(1);
 * $gameMessage.add(respostaNpc);
 */