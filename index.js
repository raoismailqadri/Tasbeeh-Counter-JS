isStart = false;
let count = 0;

const counter = document.getElementById('count');

counter();
if (isStart == false){

    isStart = true;
}


function increment()
{
    if (isStart = true){
        
        count++;
    }
    counter.innerHTML =  count;
}
     

function decrement()
{
    if (isStart = true){
        
        count--;
    }
    counter.innerText=count;
}

   


function reset()
{
    if (isStart = true){

        count=0;
    }
        
    counter.innerText=count;
}