// ESSA É A FUNÇÃO QUE FAZ COM QUE A IMAGEM DA PETECA APAREÇA NO CANVAS.
function Sprite(x,y,largura,altura){

    this.x=x;
    this.y=y;
    this.largura=largura;
    this.altura=altura;

    this.desenha=function(xCanvas,yCanvas){
        ctx.drawImage(img,this.x,this.y,this.largura,this.altura,xCanvas,yCanvas,this.largura,this.altura);
    }

}

var spritepeteca=new Sprite(0,0,137,135);