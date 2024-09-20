const check=document.querySelectorAll('input')
const toggle=document.getElementById('toggle');
const header=document.getElementById('header');
const card1=document.getElementById('card1');
const over=document.getElementById('over')
const card2=document.getElementById('card2')


toggle.addEventListener('click',function(e){
    check.forEach(function(num){
        if(num.checked){
            document.body.style.backgroundColor='hsl(230, 17%, 14%)';
            header.style.backgroundColor='hsl(232, 19%, 18%)';

          //  console.log(header.children[0].children[0]);
          header.children[0].children[0].style.color='white'
          
          
         for (let index = 0; index < card1.children.length; index++) {
            card1.children[index].style.backgroundColor='hsl(228, 28%, 20%)'
            card1.children[index].children[1].style.color='white'    
         }
         over.style.color='white'
         for (let index = 0; index < card2.children.length; index++) {
            card2.children[index].style.backgroundColor='hsl(228, 28%, 20%)'
            card2.children[index].children[1].children[0].style.color='white' 
            
         } 
            
        }else{
             document.body.style.backgroundColor=''
             header.style.backgroundColor='';

             //  console.log(header.children[0].children[0]);
             header.children[0].children[0].style.color=''
             
             
            for (let index = 0; index < card1.children.length; index++) {
               card1.children[index].style.backgroundColor=''
               card1.children[index].children[1].style.color=''    
            }
            over.style.color=''
            for (let index = 0; index < card2.children.length; index++) {
               card2.children[index].style.backgroundColor=''
               card2.children[index].children[1].children[0].style.color='' 
               
            } 
        }
    })
})