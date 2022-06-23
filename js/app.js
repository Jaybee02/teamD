const demeter =[{
    Names: "OGUNDIPE AJIBIKE",
    image: "img/cloth.jpg",
    bestFood: "Rice & Chicken",
    complexion: "Chocolate",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Tezz",
    age: "15years",
},

{
    Names: "DANIEL UDECHUKWU",
    image: "img/danny.png",
    bestFood: "Egusi Soup",
    complexion: "Chocolate",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "whiteHouse",
    age: "25years",
},

{
    Names: "JOHNSON FRANCIS",
    image: "img/fran.png",
    bestFood: "Garri & Fish",
    complexion: "fair",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Shaft",
    age: "27years",
},

{
    Names: "MADUKA CHIAMAKA",
    image: "img/madu.png",
    bestFood: "Spaghetti & Fish",
    complexion: "Fair",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Bad Comment",
    age: "22years",
},

{
    Names: "DANIEL IKPE",
    image: "img/ikpe.png",
    bestFood: "Banga",
    complexion: "Dark",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Gajini",
    age: "26years",
},

{
    Names: "THADDY MICHEAL",
    image: "img/mic.png",
    bestFood: "Egg & Plantain",
    complexion: "light",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Comnando",
    age: "20years",
},

{
    Names: "CHIDINMA UDO",
    image: "img/udo.png",
    bestFood: "Rice & Beans",
    complexion: "fair",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Table NO21",
    age: "20years",
},

{
    Names: "ANOSIKE OBINNA",
    image: "img/obi.png",
    bestFood: "JollofRice & Meat",
    complexion: "Chocolate",
    thingsLearnt : ["Html", "CSS", "Boostrap", "JS"],
    bestMovie: "Tezz",
    age: "17years",
}
]

let row = document.querySelector(".row");

for (k = 0; k < demeter.length; k++){
    let info = `<div class="col-lg-3 col-md-6 col-sm-12">
        <div class = "card mb-5 ">
         <img src="${demeter[k].image}" class="card-img-top" alt="#">

            <div class="card-body">
                <h5 class="card-title multi">${demeter[k].Names}</h5>
                <ul class="card-text">
                    <li><span class="fw-bold">Best Food : </span>${demeter[k].bestFood}</li>
                    <li><span class="fw-bold">Complexion : </span>${demeter[k].complexion}</li>
                    <li><span class="fw-bold">T-Learnt : </span>${demeter[k].thingsLearnt}</li>
                    <li><span class="fw-bold">Best Movie : </span>${demeter[k].bestMovie}</li>
                    <li><span class="fw-bold">Age : </span>${demeter[k].age}</li>
               </ul>
            </div>
            <div class="card-footer">
                <button onclick="myDetails(${k})" class="btn btn-secondary lo">Explore!</button>
            </div>

        </div>
    </div>`;

    row.innerHTML += info;
}

function myDetails(k){
    confirm("Hello" + " " + (demeter[k].Names));
}