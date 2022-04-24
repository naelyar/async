const clickInputBtn = document.getElementById ('click');
const inputNumber = document.getElementById ('numberAge');


 function getAge () {
    const getValue = numberAge.value;
    const number = 16;

    async function input(){
    if (getValue == number){
        return Promise.resolve ("успех");
    } else{
        return Promise.reject ("ошибка");
    }
    
}

input()
.then ((text) => console.log(text))   
.catch ((text) => console.log(text)) 
 } 
clickInputBtn.addEventListener ('click' ,(e) =>{
    e.preventDefault();
    getAge()
    
})



