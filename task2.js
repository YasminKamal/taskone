height=document.getElementById('lenght')
width=document.getElementById('width')
color=document.getElementById('color')

eyecolor=document.getElementById('ecolor')
mouthcolor=document.getElementById('mcolor')

button=document.getElementsByTagName('button')
div=document.getElementById('div')
deye1=document.getElementById('eye1')
deye2=document.getElementById('eye2')

dmouth=document.getElementById('mouth')


let add = () =>{ 
    h= height.value
    w= width.value
    c= color.value
   eye=eyecolor.value
   mouth=mouthcolor.value

    div.style.height=h+"px"
    div.style.width=w+"px"
    div.style.background=c

    deye1.style.background=eye
    deye2.style.background=eye
    dmouth.style.background=mouth    
    console.log(eye);
    console.log(mouth);

}

button[0].addEventListener('click', add)