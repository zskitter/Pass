let  imagens = document.querySelectorAll(".i")
let buttDireit = document.querySelector(".direita")
let buttEsquerd = document.querySelector(".esquerda")
let cont = 0
let d = 2
let rl = true
for (let l = 0; l < 2; l++){ imagens[l].style.display = "inline" }
buttDireit.onclick = () => 
{
    if ( rl ) {
            if ( imagens[cont].style.display == "inline" ) {
                imagens[cont].style.order = 2
                imagens[cont].style.display = "none"
                if(cont >= imagens.length - 1) {
                    rl = false
                }
                else {
                    cont +=1
                    imagens[cont-1].style.order = 1
                }
       }
            if ( imagens[d].style.display == "none" ) {
                imagens[d].style.display = "inline"
                d += 1
                if (d  >= imagens.length) {
                    d = 0
                }
                }  
        }
    
        
    }
buttEsquerd.onclick = () => {
    if (cont > 0){
        if (imagens[cont-1].style.display == "none"){
            imagens[cont+1].style.display = "none"
            imagens[cont-1].style.order = 0
            imagens[cont-1].style.display = "inline"

        }
    }
}
