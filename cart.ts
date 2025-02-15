//click sound
const HBody=document.body as HTMLBodyElement;
const Bclick:HTMLAudioElement=new Audio("click.mp3");

HBody.addEventListener("click",function(){
    Bclick.play();
});

//dark mode
const dark=document.querySelector(".dark") as HTMLButtonElement;
let flag:number=0;

function DarkMode(){
    if(flag==1){
        HBody.style.backgroundColor="black";
        HBody.style.color="#fff";
        dark.innerHTML="Bright mode"
        dark.style.backgroundColor="#fff";
        dark.style.color="black";
        flag=0;
    }else{
        HBody.style.backgroundColor="#fff";
        HBody.style.color="black";
        dark.innerHTML="Dark mode";
        dark.style.backgroundColor="black";
        dark.style.color="#fff";
        flag=1;
    }
}

//add to cart section
const icon=document.querySelector(".fa-bag-shopping")! as HTMLElement;
const cart=document.querySelector(".cart") as HTMLDivElement;

//opening
icon.addEventListener('click',function(){
    cart.style.left="0px";
});

//closing
const Sclose=document.querySelector(".fa-xmark")! as HTMLElement;
Sclose.addEventListener('click',function(){
    cart.style.left="-950px"
});

//catgories of products
const catgories=document.querySelector(".catgories") as HTMLDivElement;
const list=document.querySelector(".list") as HTMLDivElement;
let flag2:number=1;

catgories.addEventListener("click",function(){
    if(flag2==1){
        list.style.display="block";
        flag2=0
    }else{
        list.style.display="none";
        flag2=1;
    }
});

//payment form
const clear=document.querySelector(".clear") as HTMLButtonElement;
const xmark=document.querySelector(".xmark") as HTMLElement;
const payment_form=document.querySelector(".payment-form") as HTMLTableSectionElement;

//opening
clear.addEventListener('click',function(){
    payment_form.style.display="block";
});

//closing
xmark.addEventListener('click',function(){
    payment_form.style.display="none";
});

const form=document.querySelector("form") as HTMLFormElement;
//submitting payment form
form.addEventListener('submit',function(){
    cart_arr=[];
    alert("Order placed");
});

const label:NodeListOf<HTMLLabelElement> = document.querySelectorAll("label");
const input:NodeListOf<HTMLInputElement> = document.querySelectorAll("input");

input.forEach(element => {
    element.addEventListener('focus', function() {
        label.forEach(element2 => {
            element2.style.transform="translateY(0px)";
        });
    });
});

// classes for products
class Product{
    constructor(public image:string,public price:number,public type:string,public quantity:number){}
}

let item=new Product(
    "https://i.pinimg.com/736x/93/12/7d/93127d82db8c71b3067ea46b450556ca.jpg",
    69,"shose",1
);

let item2=new Product(
    "https://i.pinimg.com/736x/b6/e6/68/b6e668b09697e04c6e3415439ff0e668.jpg",
    99,"shose",1
);

let item3=new Product(
    "https://i.pinimg.com/736x/51/62/b1/5162b14653c3db3d098382d3ed4f9b6d.jpg",
    59,"winter",1
);

let item4=new Product(
    "https://i.pinimg.com/736x/5f/88/10/5f8810fedabed191fd36e97de5551a0c.jpg",
    59,"winter",1
);

let item5=new Product(
    "https://i.pinimg.com/736x/4c/97/98/4c979805249e2dbfea5730a493aadfa3.jpg",
    159,"shose",1
);

let item6=new Product(
    "https://i.pinimg.com/736x/4b/d7/21/4bd7217ce506d98b7f0134b11424ead4.jpg", 
    199,"shose",1
);

let item7=new Product(
    "https://i.pinimg.com/736x/45/fa/be/45fabe0803e8c2333df4e4ceb53bb161.jpg", 
    299,"shose",1
);

let item8=new Product(
    "https://i.pinimg.com/736x/1e/29/6f/1e296fa36c3542b2c5a89170c6fa284b.jpg", 
    199,"shose",1
);

let item9=new Product(
    "https://i.pinimg.com/736x/14/57/fc/1457fc669ca7347f0391b5dea739924c.jpg", 
    89,"shose",1
);

let item10=new Product(
    "https://i.pinimg.com/736x/5f/8e/25/5f8e257b2a4bb6553bdd101b04b2f36d.jpg", 
    69,"sports",1
);

let item11=new Product(
    "https://i.pinimg.com/736x/c9/84/29/c984292999df0a015f41b1f1d75cb8a6.jpg", 
    99,"sports",1
);

let item12=new Product(
    "https://i.pinimg.com/736x/0d/4b/c9/0d4bc9fd013cdc9f68fc90fc5954f1a6.jpg", 
    59,"sports",1
);

let item13=new Product(
    "https://i.pinimg.com/736x/c6/a1/d4/c6a1d46b59ec3d61ff61d331c3827167.jpg", 
    59,"sports",1
);

let item14=new Product(
    "https://i.pinimg.com/736x/7e/6d/a3/7e6da3ddc643be221b9466a5296505a5.jpg", 
    399,"shose",1
);

let item15=new Product(
    "https://i.pinimg.com/736x/0a/6d/9e/0a6d9e995615ae040651f17b22aed1a7.jpg", 
    399,"shose",1
);

let item16=new Product(
    "https://i.pinimg.com/736x/10/f0/30/10f030895966ad0655fbf0106aa24c99.jpg", 
    399,"winter",1
);

let item17=new Product(
    "https://i.pinimg.com/736x/ed/c6/ee/edc6ee4d0b40e42b112be536584c3152.jpg", 
    299,"shose",1
);

let item18 = new Product(
    "https://i.pinimg.com/736x/af/0e/03/af0e03144cf32aae8d6862524be16422.jpg", 
    169,"shose",1
);

let item19=new Product(
    "https://i.pinimg.com/736x/19/fa/17/19fa171fbdd5290e29944172208e5f35.jpg", 
    69,"summer",1
);

let item20=new Product(
    "https://i.pinimg.com/736x/07/d4/61/07d461ed6e30eae4e8a28cce874f14b1.jpg", 
    49,"summer",1
);

let item21=new Product(
    "https://i.pinimg.com/736x/90/c6/f9/90c6f9a1f14b5d0b512d1381bed7775c.jpg", 
    99,"summer",1
);

let item22=new Product(
    "https://i.pinimg.com/736x/f5/d4/97/f5d49754a9778d9e5240a9268d232728.jpg", 
    99,"summer",1
);

let item23=new Product(
    "https://i.pinimg.com/736x/43/7d/21/437d213da0815aeac6bd61c04ed26a80.jpg", 
    99,"summer",1
);

let item24=new Product(
    "https://i.pinimg.com/736x/ca/0b/24/ca0b24d50df918c21767aed2c5eaa1e4.jpg", 
    169,"summer",1
);

let item25=new Product(
    "https://i.pinimg.com/736x/7f/48/40/7f48403072fc314b26ec9e2996de9128.jpg", 
    259,"shose",1
);

let item26=new Product(
    "https://i.pinimg.com/736x/9b/6f/32/9b6f32ddfe7f5e1f941ba91777bd8bb7.jpg", 
    99,"sports",1
);

let item27=new Product(
    "https://i.pinimg.com/736x/a2/aa/9f/a2aa9f0ad916befb7cd9c440330a6f74.jpg", 
    169, 
    "sports", 
    1
);

let item28=new Product(
    "https://i.pinimg.com/736x/6a/5f/8a/6a5f8a8d447ba9bd000f6af6da28f27e.jpg", 
    79,"sports",1
);

let item29=new Product(
    "https://i.pinimg.com/736x/ff/6a/dd/ff6adda4f735b858b124380f6ad36cce.jpg", 
    239,"sports",1
);

let item30=new Product(
    "https://i.pinimg.com/736x/04/5b/27/045b2740e34ddf417918cfb8a60626f9.jpg", 
    239,"sports",1
);

let item31=new Product(
    "https://i.pinimg.com/736x/9c/3d/74/9c3d7405b7c070613ca42c75f70275d9.jpg", 
    89,"sports",1
);

let item32=new Product(
    "https://i.pinimg.com/736x/af/38/92/af3892b97b8cd9c2c0b6db93a5d8fb3f.jpg", 
    59,"winter",1
);

let item33=new Product(
    "https://i.pinimg.com/736x/4e/ef/22/4eef22da26b48c79d42896ec1afe997f.jpg", 
    79,"winter",1
);

let item34=new Product(
    "https://i.pinimg.com/736x/28/20/2c/28202c56c4f3abbb1b53dc4c330852a8.jpg", 
    89,"winter",1
);

let item35=new Product(
    "https://i.pinimg.com/736x/b8/52/70/b852706b2939545a500b3692fc980a3e.jpg", 
    69,"winter",1
);

let item36=new Product(
    "https://i.pinimg.com/736x/6e/70/05/6e70050aaf4e8c98bd04ccff38b767f8.jpg", 
    59,"winter",1
);

let item37=new Product(
    "https://i.pinimg.com/736x/3c/d0/ba/3cd0ba53441d206a2fd56de66a783d90.jpg", 
    79,"winter",1
);

let item38=new Product(
    "https://i.pinimg.com/736x/c0/eb/6a/c0eb6a8e90b6321ff5a8c32c4f8cc511.jpg", 
    59,"winter",1
);

let item39=new Product(
    "https://i.pinimg.com/736x/66/01/4e/66014e321715b919fc3d1f33a651ad71.jpg", 
    49,"winter",1
);

let item40=new Product(
    "https://i.pinimg.com/736x/e1/da/b2/e1dab221927ba39f23cdfcc1fac53294.jpg", 
    49,"winter",1
);

let item41=new Product(
    "https://i.pinimg.com/736x/c0/c5/cc/c0c5ccc6acbad8ab351cf2383a4a1d86.jpg", 
    79,"summer",1
);

let item42=new Product(
    "https://i.pinimg.com/736x/0e/01/16/0e011634c9fe64b6fffbad98da865ea4.jpg", 
    169,"sports",1
);

let item43=new Product(
    "https://i.pinimg.com/736x/ea/6f/f5/ea6ff583d22f55991fb4439bb5df831c.jpg", 
    189,"sports",1
);

let item44=new Product(
    "https://i.pinimg.com/736x/ab/e7/bd/abe7bd2bcc8591ea93ca79d924d1b12b.jpg", 
    79,"summer",1
);

//sorting items in array
let fristArray:Product[]=[item,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,
    item16,item17,item18,item19,item20,item21,item22,item23,item24,item25,item26,item27,item28,item29,item30,
item31,item32,item33,item34,item35,item36,item37,item38,item39,item40,item41,item42,item43,item44];

//This fuinction is created by chat GPT (shuffleling the elements of an array)
function shuffleArray(...array:Product[]):Product[] {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

//this is shuffled array
const secondArray:Product[] = shuffleArray(...fristArray);
console.log(secondArray);

//inducding the top selling product ramdomly (it's just first element of secondArray)
const best=document.getElementById("best") as HTMLDivElement;
const img=document.createElement('img') as HTMLImageElement;
img.src=secondArray[0].image;
img.loading="lazy";
best.appendChild(img);

const section=document.querySelector(".section") as HTMLDivElement;

//displaying the products with cart boxes
function updateImg(...array:Product[]){
    section.innerHTML="";
    for( let i=0;i<array.length;i++){
        const imageContainer = document.createElement('div') as HTMLDivElement;
        imageContainer.className="imageC column"

        const quantity=document.createElement('label') as HTMLLabelElement;
        quantity.textContent="Quantity";

        const input=document.createElement('input') as HTMLInputElement;
        input.type="number";
        input.name="quantity";
        input.min="1";
        input.max="100";
        input.step="1";
        input.value="1";

        const h2=document.createElement('h2') as HTMLHeadingElement;
        h2.textContent=`${array[i].price}$`;

        const imgElement = document.createElement('img') as HTMLImageElement;
        imgElement.src = array[i].image;
        imgElement.loading="lazy";

        const button=document.createElement('button') as HTMLButtonElement;
        button.textContent="Add to cart"
        button.className="btn"

        //appending in section div
        section.appendChild(imageContainer)
        imageContainer.appendChild(imgElement);
        imageContainer.appendChild(quantity);
        imageContainer.appendChild(input);
        imageContainer.appendChild(h2);
        imageContainer.appendChild(button);
    }
}

updateImg(...secondArray);
add_to_cart(...secondArray);

let cart_arr:Product[]=[];
//catgories of products
const sports=document.querySelector(".sports") as HTMLDivElement;
const winter=document.querySelector(".winter") as HTMLDivElement;
const summer=document.querySelector(".summer") as HTMLDivElement;
const shose=document.querySelector(".shose") as HTMLDivElement;

sports.addEventListener("click",function(){
    section.innerHTML="";
    let sports_arr:Product[]=[];
    for(let i=0;i<secondArray.length;i++){
        if(secondArray[i].type==="sports"){
            sports_arr.push(secondArray[i]);
        }
    }
    updateImg(...sports_arr);
    add_to_cart(...sports_arr);
});

winter.addEventListener("click",function(){
    section.innerHTML="";
    let winter_arr:Product[]=[];
    for( let i=0;i<secondArray.length;i++){
        if(secondArray[i].type==="winter"){
            winter_arr.push(secondArray[i]);
        }
    }
    updateImg(...winter_arr);
    add_to_cart(...winter_arr);
});

summer.addEventListener("click",function(){
    section.innerHTML="";
    let summer_arr:Product[]=[];
    for(let i=0;i<secondArray.length;i++){
        if(secondArray[i].type==="summer"){
            summer_arr.push(secondArray[i]);
        }
    }
    updateImg(...summer_arr);
    add_to_cart(...summer_arr);
});

shose.addEventListener("click",function(){
    section.innerHTML="";
    let shose_arr:Product[]=[];
    for(let i=0;i<secondArray.length;i++){
        if(secondArray[i].type==="shose"){
            shose_arr.push(secondArray[i]);
        }
    }
    updateImg(...shose_arr);
    add_to_cart(...shose_arr);
});


function add_to_cart(...array:Product[]){
    const buttons:NodeListOf<HTMLButtonElement>=document.querySelectorAll(".btn");
    buttons.forEach((btn,index) => {
        btn.addEventListener("click",function(){
            this.textContent="Added to cart";
            this.disabled=true;
            const quantityInput=btn.parentElement?.querySelector('input[name="quantity"]') as HTMLInputElement;
            const quantity=parseInt(quantityInput.value);
            cart_arr.push({...array[index],quantity:quantity});
            updateCartList();
        });
    });
}

let total_price:number=0;
const cartList=document.querySelector(".cart-list") as HTMLDivElement;
const total=document.querySelector(".Tolat") as HTMLHeadingElement;
const pay=document.querySelector(".pay") as HTMLButtonElement;

//formating the cart
function updateCartList(){
    cartList.innerHTML="";
    total_price=0;

    if(cart_arr.length===0){
        cartList.textContent = "Cart is empty";
    }else{
        for(let i=cart_arr.length-1;i>=0;i--){
            const cart_item=document.createElement("div") as HTMLDivElement;
            cart_item.className="cart-item row";

            const img=document.createElement("img") as HTMLImageElement;
            img.src=cart_arr[i].image;
            img.loading="lazy";
            img.style.width="20%";
            img.style.height="90%";

            const h1=document.createElement("h1") as HTMLHeadingElement;
            h1.textContent=cart_arr[i].type;

            const h2=document.createElement("h2") as HTMLHeadingElement;
            h2.textContent=`price:${cart_arr[i].price}$`

            total_price+=cart_arr[i].price*cart_arr[i].quantity;

            const numQuantity=document.createElement('h2') as HTMLHeadingElement;
            numQuantity.textContent=`Quantity:${cart_arr[i].quantity}`;

            const remove=document.createElement('div') as HTMLDivElement;
            remove.className="fa-solid fa-minus logo"
            remove.style.cursor="pointer";
            remove.addEventListener("click",function(){
                cart_arr.splice(i,1);
                updateCartList();//updating cart list dynamically
            });

            cart_item.appendChild(img);
            cart_item.appendChild(h1);
            cart_item.appendChild(numQuantity);
            cart_item.appendChild(h2);
            cart_item.appendChild(remove);
            cartList.appendChild(cart_item);
        }
    }
    total.textContent=`Total price:${total_price}$`;
    pay.textContent=`Pay ${total_price}$`;
}

// Initial cart state
updateCartList();