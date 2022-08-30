//calculator display
let display = document.getElementById('display');
var button = document.querySelectorAll('.button');

for(item of button){
        item.addEventListener('click',(e)=>{
                btntext = e.target.innerText;
                
        if(btntext == 'x'){
                btntext ='*';   
        }
       
        display.innerText += btntext;
        });
}

function sqrt(){
        display.innerText=Math.sqrt(display.innerText,2);
}
function backspc(){
        display.innerText = display.innerText.slice(0,-1);
};
const toggle = document.getElementById('toggleDark');
toggle.addEventListener('click', function(){
        toggle.classList.toggle('bi-moon-fill');
        if(toggle.classList.contains("bi-moon-fill")){
                document.body.classList.add('active');
                document.getElementById('toggleDark').innerText = 'Light Mode';
              
        }else{
                document.body.classList.remove('active');
                document.getElementById('toggleDark').innerText = 'Dark Mode';
        }
});
































/*calculator buttons
let buttons = Array.from(document.getElementsByClassName('button'));






//
buttons.map (button =>{
        button.addEventListener('click', (e) =>{
        switch(e.target.innerText){
        case 'C':
         display.innerText = '';
         break;
        case '←':
        if (display.innerText){
        display.innerText = display.innerText.slice(0,-1);}
        break;
        case '=':
                try{
                display.innerText = eval(display.innerText);
                }catch{
                display.innerText = 'Error!';
                };        
        break;
        case 'x':
        if (display.innerText == 'x'){
                display.innerText = *;
        }
        break;
        default: 
        display.innerText += e.target.innerText;
        }
        });
});*/















