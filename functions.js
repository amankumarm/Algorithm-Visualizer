export const generaterandomname=()=>{
    const main='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789_'
    var newstring=""
    for (let i = 0; i <15; i++) {
        newstring=newstring+main[1+Math.floor(Math.random()*10*6)]
    }
return newstring
}