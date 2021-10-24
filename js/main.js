let login = document.getElementById('login');
let balanceBTN = document.getElementById('balanceBTN');

login.addEventListener('click', (a)=>{
    a.preventDefault();
    let loginFrom = document.getElementById('loginForm');
    let transectionBox = document.getElementById('transectionBox');

    loginFrom.style.display = 'none'
    transectionBox.style.display = 'block'
});

balanceBTN.addEventListener('click', ()=>{
    totalBalance('dipositAmount','addBalance')
    totalBalance('mainBalance','addBalance')
})

withdrBTN.addEventListener('click', ()=>{
    totalBalance('withdrawAmount','withdrawBlance')
    reduce('mainBalance','withdrawBlance')
})




function reduce(display,pass){
    let a = document.getElementById(display);
    let parseAmount = parseFloat(a.innerText);
    let b = document.getElementById(pass).value;

    
    if(b == ''){
        b = 0
    }else{
        b = parseFloat(b);
        a.innerText = parseAmount - b;
    }
}


function totalBalance(display,pass){
    let a = document.getElementById(display);
    let parseAmount = parseFloat(a.innerText);
    let b = document.getElementById(pass).value;
    if(b == ''){
        b = 0
    }else{
        b = parseFloat(b);
        a.innerText = parseAmount + b;
    }
}