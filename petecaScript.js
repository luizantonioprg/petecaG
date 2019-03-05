var canvas,ctx,frames=0,img, //DEFINI AS VARIÁVEIS



peteca={// <-- ESSA DAQUI TAMBÉM É UMA VARIÁVEL!

    x:200,
    y:0,
    altura:spritepeteca.altura,
    largura:spritepeteca.largura,
    cor:"#fff",
    gravidade:1.5, 
    velocidade:0,
    forcaDoPulo:20, 
    score:0,

   
    desenha:function(){ // MÉTODO DESENHA DA VARIÁVEL PETECA QUE SERÁ CHAMADO NA FUNÇÃO DESENHA,LÁ EMBAIXO.
     ctx.fillStyle=this.cor;
     spritepeteca.desenha(this.x,this.y);

    },

    atualiza:function(){// MÉTODO ATUALIZA DA VARIÁVEL PETECA QUE SERÁ CHAMADO NA FUNÇÃO ATUALIZA,LÁ EMBAIXO.
        this.velocidade+=this.gravidade;
        this.y+=this.velocidade;//A GRAVIDADE É A FORÇA PARA BAIXO.O Y DA PETECA ANDA JUNTO COM A GRAVIDADE.

            if(this.y>500){//SE A PETECA CAIR,FAÇA...
                  document.querySelector('.botao').style.display="block";//AQUIIIII

                this.velocidade=0;
                this.forcaDoPulo=0;
                peteca.score
            }

            if(this.score>50){//DIFICULTA QUANDO O JOGADOR ATINGE 50 PONTOS
                this.gravidade=2.8;//AUMENTA A GRAVIDADE
            }

             if(this.score>80){  //DIFICULTA QUANDO O JOGADOR ATINGE 80 PONTOS
                this.gravidade=3.8;//AUMENTA A GRAVIDADE
            }
      
    },

    pula:function(){//MÉTODO PULA,DA PETECA.SERÁ CHAMADO LÁ EMBAIXO,NA FUNÇÃO CLIQUE.

        this.velocidade= -this.forcaDoPulo;//A FORÇA DO PULO É CONTRA A GRAVIDADE.

    },
}
function clique(evento){//FUNCAO EXECUTADA AO CLIQUE DO USUÁRIO
peteca.pula();
peteca.score++;//A CADA CLIQUE O USUÁRIO MARCA 1 PONTO.
    if(peteca.y>500){

      peteca.score--;//SE A PETECA CAIR,NÃO PERMITA MAIS PONTOS AO CLIQUE.
      
    }
}
function main(){//FUNÇÃO PRINCIPAL.CRIA A CANVAS,IDENTIFICA O CLIQUE,DESENHA A IMAGEM DA PETECA E CHAMA A FUNÇÃO RODA.
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

document.addEventListener("mousedown",clique);

img=new Image();
img.src="imagens/petecat.png";

roda();
}
function roda(){
atualiza(); //CHAMADA DA FUNÇÃO ATUALIZA.
desenha(); //CHAMADA DA FUNÇÃO DESENHA.
window.requestAnimationFrame(roda); // ATUALIZA E DESENHA CONSTANTEMENTE.
}
function atualiza(){//FUNÇÃO QUE ATUALIZA A POSIÇÃO DA PETECA E INCREMENTA OS FRAMES,ATUALIZANDO O JOGO.
frames++;
peteca.atualiza();
}
function desenha(){//FUNÇÃO QUE DESENHA A CANVAS NA TELA,A PETECA NO CANVAS,E O TEXTO QUE MOSTRA OS PONTOS.
ctx.fillStyle="#E5E5E5";
ctx.fillRect(0,0,600,600);

peteca.desenha();//CHAMA O MÉTODO DESENHA DA VARIÁVEL PETECA.

ctx.fillStyle="#000";
ctx.font="20px Arial ";
ctx.fillText("PONTOS "+peteca.score,20,50);
}

function recomecar(){//FUNÇÃO EXECUTADA QUANDO O USUÁRIO CLICA EM "RECOMEÇAR".ELA ATUALIZA A PÁGINA(TIPO F5).
location.reload();

}
function comecou(){//FUNÇÃO QUE FAZ A DIV "INÍCIO" DESAPARECER.TAMBÉM CHAMA A FUNÇÃO MAIN(); , QUE DÁ INÍCIO AO JOGO.
document.querySelector('.inicio').style.display="none";
main();

}
if(screen.width<519){//SE A RESOLUÇÃO DA TELA FOR MENOR QUE 519px, DIMINUI PARA 300px A ALTURA E A LARGURA DO CANVAS.
document.getElementById("myCanvas").style.height="300px";
document.getElementById("myCanvas").style.width="300px";
}
