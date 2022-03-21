//UI

//For Toast Notification
const toasts = document.getElementById('toasts');

const messages =[
    'Get a better service',
    'Contact here +95 9243028282',
    'Thank you for choosing us',
];

const notify = document.createElement('div');
const i = document.createElement('i');
const btn = document.createElement ('button');

btn.innerHTML = `<i class="fas fa-times"></i>`;
console.log(btn);
btn.style.background = "transparent";
btn.style.border = "none";
btn.style.color = "rgb(15, 15, 85)";
btn.style.position = "absolute";
btn.style.top = "13px";
btn.style.right = "10px";
btn.style.cursor = "pointer";
btn.style.opacity = 0.5;

// console.log(i);
setInterval(() => {

    btn.style.opacity = 0.5;
    notify.classList.add('toast');
    notify.innerText = getrandommessage();
    // console.log(notify);
    toasts.appendChild(notify);
    toasts.appendChild(btn);
}, 3000);

// setTimeout(()=>{
//     notify.remove();
// },5000);

btn.addEventListener('click',()=>{
    // console.log('hay');
    notify.remove();
    btn.style.opacity= 0;
})

function getrandommessage(){
    return messages[Math.floor(Math.random()*messages.length)];
}

// For Pricing
const checkbox = document.getElementById('toggle');
const slider = document.getElementById('slider');

const basic = document.querySelector('.basic');
const premium = document.querySelector('.premium');
const standard = document.querySelector('.standard');

const limits = document.querySelectorAll('.limit');

//Event Listener
slider.addEventListener('click',()=>{
    // console.log('hay');

    if(!checkbox.checked){
        basic.innerText = "$120";
        premium.innerText = "$144";
        standard.innerText = "$168";
        limits.forEach(limit=>{
            limit.innerText = "/year";
            limit.style.marginLeft = "160px";
        })
        
    }
    else{
        [basic.innerText,premium.innerText,standard.innerText] = ["$10","$12","$14"];
        limits.forEach(limit=>{
            limit.innerText = "/month";
            limit.style.marginLeft = "150px";
        })
    }
})