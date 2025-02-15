//Dark mode 
const BDark=document.querySelector(".dark") as HTMLButtonElement;
const body=document.body as HTMLBodyElement;
const li=document.querySelector('li') as HTMLLIElement;
let flag3:number=0;
function mode(){
    if(flag3==1){
        body.style.backgroundColor="black";
        body.style.color="#fff";
        BDark.innerHTML="Bright mode"
        BDark.style.backgroundColor="#fff";
        BDark.style.color="black";
        flag3=0;
    }else{
        body.style.backgroundColor="#fff";
        body.style.color="black";
        BDark.innerHTML="Dark mode";
        BDark.style.backgroundColor="black";
        BDark.style.color="#fff";
        flag3=1;
    }
}

//click sound
const click:HTMLAudioElement=new Audio("click.mp3");
body.addEventListener("click",function(){
    click.play();
});

//contact us form
const label2:NodeListOf<HTMLLabelElement>=document.querySelectorAll("label");
const input2:NodeListOf<HTMLInputElement>=document.querySelectorAll("input");

input2.forEach(element => {
    element.addEventListener('focus', function() {
        label2.forEach(element2 => {
            element2.style.transform="translateY(0px)";
        });
    });
});

//product slider
const slider=document.querySelector(".image2") as HTMLDivElement;
const right=document.querySelector(".right") as HTMLButtonElement;
const left=document.querySelector(".left") as HTMLButtonElement;

right.onclick=()=>{
    slider.append(slider.querySelector('img:first-child') as HTMLImageElement);
    
}

left.onclick=()=>{
    slider.prepend(slider.querySelector('img:last-child') as HTMLImageElement);
}

const track=document.querySelector(".track") as HTMLDivElement;
const one=document.querySelector(".one") as HTMLDivElement;
const two=document.querySelector(".two") as HTMLDivElement;
const three=document.querySelector(".three") as HTMLDivElement;
const four=document.querySelector(".four") as HTMLDivElement;
const five=document.querySelector(".five") as HTMLDivElement;

track.addEventListener('click',function(){
    one.style.display="block";
    two.style.display="none";
    three.style.display="none";
    four.style.display="none";
    five.style.display="none";
});

const track2=document.querySelector(".track2") as HTMLDivElement;

track2.addEventListener('click',function(){
    two.style.display="block";
    one.style.display="none";
    three.style.display="none";
    four.style.display="none";
    five.style.display="none";
});

const track3=document.querySelector(".track3") as HTMLDivElement;

track3.addEventListener('click',function(){
    three.style.display="block";
    two.style.display="none";
    one.style.display="none";
    four.style.display="none";
    five.style.display="none";
});

const track4=document.querySelector(".track4") as HTMLDivElement;

track4.addEventListener('click',function(){
    four.style.display="block";
    two.style.display="none";
    three.style.display="none";
    one.style.display="none";
    five.style.display="none";
});

const track5=document.querySelector(".track5") as HTMLDivElement;

track5.addEventListener('click',function(){
    five.style.display="block";
    two.style.display="none";
    three.style.display="none";
    four.style.display="none";
    one.style.display="none";
});

//navgivation bar for max-width:755px
const nav=document.querySelector("nav")!;

const open_nav=document.querySelector(".fa-bars") as HTMLElement;
const close_nav = document.querySelector(".fa-xmark") as HTMLElement;

open_nav.addEventListener('click',function(){
    nav.style.left="0px";
});

close_nav.addEventListener('click',function(){
    nav.style.left="-500px";
});

//Login and signup
const login=document.querySelector(".login")! as HTMLDivElement;
const signup=document.querySelector(".signup")! as HTMLDivElement;
const login_btn=document.getElementById("login_btn")! as HTMLButtonElement;
const signup_btn=document.getElementById("signup_btn")! as HTMLButtonElement;

//opening
login_btn.addEventListener('click',function(){
    login.style.display="block";
    login.style.zIndex="4";
    signup.style.display="none";
});

signup_btn.addEventListener('click',function(){
    signup.style.display="block";
    signup.style.zIndex="4";
    login.style.display="none";
});

//closing
const Sxmark=document.querySelector(".xmark")! as HTMLElement;
const xmark2=document.querySelector(".xmark2")! as HTMLElement;

Sxmark.addEventListener('click',function(){
    login.style.zIndex="1";
    signup.style.display="none";
    login.style.display="none";
});

xmark2.addEventListener('click',function(){
    signup.style.display="none";
    signup.style.zIndex="1";
    login.style.display="none";
});

//fade-in animation 
const animation:NodeListOf<HTMLElement>=document.querySelectorAll("nav,video,.text");
const home=document.getElementById("home1") as HTMLAnchorElement;

home.onclick=()=>{
    animation.forEach(function(e){
        e.style.animation="none";
        void e.offsetHeight;
        e.style.animation="fade_in 3s linear";
    });
}

const MainForm = document.getElementById("loginForm") as HTMLFormElement;
const password = document.querySelector(".password") as HTMLInputElement;
const c_password = document.querySelector(".c-password") as HTMLInputElement;
const errorMessage = document.getElementById("error-message") as HTMLParagraphElement;

MainForm.addEventListener("submit", function (event) {
    if (password.value === c_password.value) {
        errorMessage.style.display = "none";
        //backend logic
    } else {
        event.preventDefault();
        errorMessage.style.display = "block";
    }
});
