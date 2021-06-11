let div = document.createElement("div")
document.body.appendChild(div)
let input = document.createElement("input")

let div1 = document.createElement("div")
div1.appendChild(input)
div1.setAttribute("class","div1")
div.appendChild(div1)

let div2 = document.createElement("div")
div.appendChild(div2)
div2.setAttribute("class","div2")

let div3 = document.createElement("div")
div.appendChild(div3)
div3.setAttribute("class","div3")

let div21 = document.createElement("div")
div21.setAttribute("class","div21")

div2.appendChild(div21)

let div22 = document.createElement("div")
div22.setAttribute("class","div22")
div2.appendChild(div22)
let tab = [1,2,3,4,5,6,7,8,9]

e=1

i=0

tab.forEach(element => {
    element =document.createElement("button")
    element.setAttribute("class",`bouton`)
    div21.appendChild(element)
    element.innerText=e
    e++
    
});


let btnplus = document.createElement("button")
let btnmoin = document.createElement("button")
let btnfois = document.createElement("button")
let btndiviser = document.createElement("button")

btnplus.innerText="+"
btnmoin.innerText="-"
btnfois.innerText="*"
btndiviser.innerText="/"

let tab1= [btnplus,btnmoin,btnfois,btndiviser]
tab1.forEach(element => {
    div22.appendChild(element)
    element.setAttribute("class",`btn`)
    
});

let btnegal = document.createElement("button")
let btneffacer = document.createElement("button")
let btnvirgule = document.createElement("button")
let btnzero = document.createElement("button")

btnegal.innerText="="
btnvirgule.innerText="."
btneffacer.innerText="AC"
btnzero.innerText=0
console.log(btnzero.innerText);


let tab2=[btneffacer,btnzero,btnvirgule]
tab2.forEach(element => {
    element.setAttribute("class",`bouton1`)
    div3.appendChild(element)
});
btnzero.setAttribute("id","zero")
btnegal.setAttribute("id","egal")
console.log(btnegal);
div.appendChild(btnegal)

div.addEventListener("click",(e)=>{

        if(e.target.getAttribute("class") == "bouton"){
            
            input.value+=e.target.innerText
        
    }  } );
    

btnzero.setAttribute("class","bouton")



btnzero.setAttribute("class","bouton")

div.addEventListener("click",(e)=>{

    if(e.target.getAttribute("class") == "btn"){
        
        input.value+=e.target.innerText
        
    
}  } );

btnvirgule.addEventListener("click",(e)=>{
    input.value+=e.target.innerText
    } );




let tab7=["0","1","2","3","4","5","6","7","8","9"]
let reponse 
div.addEventListener("click",(e)=>{

    if(e.target.getAttribute("id") == "egal" ){
        reponse = input.value
        input.value = Math.round(eval(reponse))
        
    
}  } );
btneffacer.addEventListener("click",()=>{
    input.value = " "
})

input.addEventListener("keyup",(e)=>{
    if(!tab7.includes(e.key)){
        input.value=input.value.replace(e.key,"");
    }
})
