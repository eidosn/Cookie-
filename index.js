

function showabout(){
      window.location.href = '../about.html'
  
}

function grocery(){
    window.location.href = '../grocery.html'
}

function favoritespage(){
    window.location.href = '../favorites.html'
}

function backtomainpage() {
    window.location.href = '../1mainpage.html'
}

function recipes(){
    window.location.href = 'cheapUniqueRecipes/Foods.html'
}

function NextTwo() {
    document.getElementById('pageTwo').classList.remove('visible');
    document.getElementById('pageThree').classList.add('visible');
}


// WORK IN PROGRESS progress bar

const progress = document.querySelector('.progress');
const h2 = document.querySelector('h2');

let progressPercentage = 0;
let i = 0;
let intervalId; 

function updateProgressBar() {
    progress.style.width = i + '%';
}

function mealoptionupdateprogressbar() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i < 20) {
            i++;
            updateProgressBar();
        } else {
            clearInterval(intervalId);
        }
    }
}

function mealoptionprogressbackbtn() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i > 0) { 
            i--;
            updateProgressBar();
    }
}}
// fix progress bar
function mealtypeupdateprogressbar() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i < 40) {
            i++;
            updateProgressBar();
        } else {
            clearInterval(intervalId); 
        }
    }
}

function mealtypeupdateprogressbarbackbtn() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i > 20) { 
            i--;
            updateProgressBar();
    }
}}
function desireflavorupdateprogressbar() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i < 60) {
            i++;
            updateProgressBar();
        } else {
            clearInterval(intervalId); 
        }
    }
}

function desireflavorupdateprogressbarbackbtn() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i > 40) { 
            i--;
            updateProgressBar();
    }
}}
function hotcoldupdateprogressbar() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i < 80) {
            i++;
            updateProgressBar();
        } else {
            clearInterval(intervalId); 
        }
    }
}

function hotcoldupdateprogressbarbackbtn() {
    clearInterval(intervalId); 
    intervalId = setInterval(speed, 0);

    function speed() {
        if (i > 60) { 
            i--;
            updateProgressBar();
    }
}}


function mealOptions() {
    mealoptionupdateprogressbar()
    document.getElementById('quizpage').classList.remove('visible');
    document.getElementById('mealOption').classList.add('visible');
}
function desireflavorpage() {
    mealtypeupdateprogressbar()
    document.getElementById('mealOption').classList.remove('visible');
    document.getElementById('desiredFlavor').classList.add('visible');
}

function heavyLightfood() {
    desireflavorupdateprogressbar()
    document.getElementById('desiredFlavor').classList.remove('visible');
    document.getElementById('heavy/lightfood').classList.add('visible');
}


function Temp() {
    hotcoldupdateprogressbar()
    document.getElementById('heavy/lightfood').classList.remove('visible');
    document.getElementById('desiredTemp').classList.add('visible');
}

function backbtn() {
    mealoptionprogressbackbtn()
    document.getElementById('mealOption').classList.remove('visible');
    document.getElementById('quizpage').classList.add('visible');
}

function backbtn2() {
    mealtypeupdateprogressbarbackbtn()
    document.getElementById('desiredFlavor').classList.remove('visible');
    document.getElementById('mealOption').classList.add('visible');
}
function backbtn3() {
    desireflavorupdateprogressbarbackbtn()
    document.getElementById('heavy/lightfood').classList.remove('visible');
    document.getElementById('desiredFlavor').classList.add('visible');
}
function backbtn4() {
    hotcoldupdateprogressbarbackbtn()
    document.getElementById('desiredTemp').classList.remove('visible');
    document.getElementById('heavy/lightfood').classList.add('visible');
}

// meal type buttons
function breakfastclicked() {
    lunch = false;
    dinner = false;
    breakfast = true;
}
function lunchclicked() {
    breakfast = false;
    dinner = false;
    lunch = true;
}
function dinnerclicked() {
    breakfast = false;
    lunch = false;
    dinner = true;
}
function heavyclicked() {
    light = false;
    heavy = true;
}
function lightclicked() {
    heavy = false;
    light = true;
}
function sweetclicked() {
    sweet = true;
    sour = false;
    salty = false;
    savory = false;
    random = false;
}
function sourclicked() {
    sour = true;
    sweet = false;
    salty = false;
    savory = false;
    random = false;
}
function saltyclicked() {
    salty = true;
    sour = false;
    sweet = false;
    savory = false;
    random = false;
}
function savoryclicked() {
    savory = true;
    sour = false;
    salty = false;
    sweet = false;
    random = false;
}

function hotclicked() {
    hot = true;
    cold = false;
}
function coldclicked() {
    hot = false;
    cold = true;
}

function snacks() {
    meal = false;
    snack = true;
    update();
    removeprogressbar()
}

function removeprogressbar(){
    document.querySelector('.progressDiv').classList.add('invis')
    document.querySelector('.progresspercent').classList.add('invis')
}

function changetoSubmitpage() {
    removeprogressbar()
    document.getElementById('desiredTemp').classList.remove('visible');
    document.getElementById('submitPage').classList.add('visible');
}

var meal = false;
var breakfast = false;
var lunch = false;
var dinner = false;
var heavy = false;
var light = false;
var sweet = false;
var sour = false;
var salty = false;
var savory = false;
var random = false;
var hot = false;
var cold = false;
var snack = false;



let img = document.getElementById("foodImage");
let foodTitle = document.getElementById("foodTitlePlaceHolder")
let foodDescription = document.getElementById("foodDescriptionPlaceHolder")







const mealbreakfastSweetHeavyHot = [
    {
        "img": "https://img.lovepik.com/photo/20211118/large/lovepik-tangyuan-picture_500113115.jpg",
        "title": "Tangyuan",
        "description": "Tangyuan are glutinous rice balls served in sweet soup. They come in various flavors and are enjoyed during festivals like the Lantern Festival in China, symbolizing family unity and happiness."
    },
    {
        "img": "https://media.istockphoto.com/id/1068266406/photo/sweet-potato-soup.jpg?s=612x612&w=0&k=20&c=5dcf05kgAb_0zOF2I-rYuSAZncl5dlDoa5GEshy--Lw=",
        "title": "Sweet Potato Soup",
        "description": "Sweet Potato Soup has roots in various cuisines around the world, but it is particularly popular in the United States, where it reflects the tradition of comfort foods. Its origins can be traced to Southern American cooking, where sweet potatoes are a staple ingredient. However, similar dishes are enjoyed globally, with variations in spices and ingredients reflecting diverse culinary traditions."
    },
    {
        "img": "https://static.fanpage.it/wp-content/uploads/sites/22/2021/07/dorayaki.jpg",
        "title": "Dorayaki",
        "description": "Dorayaki are Japanese pancakes filled with sweet red bean paste (anko). They are popular as a snack or dessert in Japan, known for their soft texture and sweet filling."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.-KbxUS7Ot696lR7as_qAUgHaE6?rs=1&pid=ImgDetMain",
        "title": "Sweet Sticky Rice with Mango",
        "description": "Sweet sticky rice with mango is a popular Thai dessert made with glutinous rice, fresh mango slices, and coconut milk. It's sweet, creamy, and often served warm or chilled, especially during mango season."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.9NKbzVT00KFiK_kdptkRvwAAAA?rs=1&pid=ImgDetMain",
        "title": "Pancakes with Maple Syrup",
        "description": "Pancakes are flat, fluffy cakes made from batter and cooked on a griddle. They are often served stacked with butter and drizzled with maple syrup, a classic breakfast dish enjoyed worldwide."
    },
    {
        "img": "https://www.thespruceeats.com/thmb/8cm5G6bYP4c8WKjG57izrWCbzLg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/french-toast-481660-Hero-1-69d27bf922084a5a9b9b7fb680b082b2.jpg",
        "title": "French Toast",
        "description": "French Toast is a classic breakfast dish made with slices of bread soaked in beaten eggs and milk, then fried until golden brown. It's often topped with syrup, fruit, or powdered sugar, enjoyed in various forms worldwide."
    },
    {
        "img": "https://i.pinimg.com/originals/b3/cd/4b/b3cd4b301aede8e1e9f5ee1764977602.jpg",
        "title": "You tiao with sweet soy milk",
        "description": "You tiao are deep-fried dough sticks paired with sweetened soy milk. This classic Chinese breakfast combination offers a contrast of crispy and soft textures, often enjoyed as a comforting start to the day."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2023/11/14/21/12/christmas-8388536_1280.jpg",
        "title": "Panettone",
        "description": "Panettone is a traditional Italian Christmas bread loaf filled with candied fruits and raisins. It has a light, fluffy texture and is often enjoyed with coffee or dessert wine during the holiday season."
    },
    {
        "img": "https://media.istockphoto.com/id/672982342/photo/three-chocolate-bread.jpg?s=612x612&w=0&k=20&c=2DLjugpe_mHx-4boOjSNnCIPYiZFzEU9HeDX5dhL-sU=",
        "title": "Pain au Chocolat",
        "description": "Pain au Chocolat is a French pastry made of thin layers of puff pastry filled with chocolate. It's often served warm as a breakfast treat or snack in French bakeries and cafes."
    }
]
const mealbreakfastSweetHeavyCold = [
    {
        "img": "https://www.modernhoney.com/wp-content/uploads/2017/06/DSC_0081-copy.jpg",
        "title": "Crêpes with Nutella",
        "description": "Crêpes are thin French pancakes filled with Nutella, a chocolate-hazelnut spread. They can be folded or rolled and are enjoyed as a dessert or a sweet breakfast option."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.-KbxUS7Ot696lR7as_qAUgHaE6?rs=1&pid=ImgDetMain",
        "title": "Sweet Sticky Rice with Mango",
        "description": "Sweet sticky rice with mango is a popular Thai dessert made with glutinous rice, fresh mango slices, and coconut milk. It's sweet, creamy, and often served warm or chilled, especially during mango season."
    },
    {
        "img": "https://th.bing.com/th/id/R.93049e6b62a27f408e36b5844fee3fb9?rik=uX0cl%2f1aodkE%2fg&pid=ImgRaw&r=0",
        "title": "Yogurt with Granola and Honey",
        "description": "Yogurt with granola and honey is a nutritious and satisfying American breakfast or snack. It combines creamy yogurt with crunchy granola and a drizzle of honey, offering a balance of flavors and textures."
    },
    {
        "img": "https://images.ricardocuisine.com/services/recipes/4x3/7990.jpg",
        "title": "Doujiang",
        "description": "Doujiang is Chinese soy milk served either hot or cold. It's a popular breakfast beverage and can be sweetened or unsweetened. In summer, chilled doujiang is enjoyed for its cooling properties."
    },
    {
        "img": "https://th.bing.com/th/id/R.86c686e06bc026af6059fe1fc6d3324d?rik=W2inBAQ0j%2bECgw&riu=http%3a%2f%2fwww.enbflavor.com%2fwp-content%2fuploads%2f2016%2f03%2fcereal.png&ehk=dk0%2bcxyZ55ySy%2fMvwOEywWTOGWwss%2bzzDhRSxdHjwX8%3d&risl=&pid=ImgRaw&r=0",
        "title": "Cereal with Milk",
        "description": "Cereal with milk is a classic American breakfast consisting of cereal grains like cornflakes or oatmeal served with cold milk. It's quick, convenient, and enjoyed by people of all ages."
    }
]
const mealBreakfastSweetLightHot = [
{
    "img": "https://media.istockphoto.com/id/1196836802/photo/fried-mantou-with-condensed-milk.jpg?s=612x612&w=0&k=20&c=-nxtkDtCUjjPH45CPeULOMAqhmU0q37GNAPgYVM_ZxA=",
    "title": "Mantou",
    "description": "Mantou are Chinese steamed buns with a fluffy texture and a mildly sweet taste. They can be served plain or filled with sweet fillings like red bean paste or custard."
},
    {
        "img":"https://as2.ftcdn.net/v2/jpg/02/94/68/15/1000_F_294681532_eBoNoTWuJ1PaEYQNlFpt7GlMtKp7jbHD.jpg",
"title":"Chuoi Chien",
"description":"Chuoi Chien is a delicious Vietnamese snack made from crispy fried bananas, often served with a sweet dipping sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/177248190/photo/sweet-krapfen-pastry.jpg?s=612x612&w=0&k=20&c=MLavPAa5W0PD2SJBva8ckrfk7oenb6PopKxZD6ETdx0=",
        "title": "Bomboloni",
        "description": "Bomboloni are Italian doughnuts filled with custard, jam, or chocolate. They are light and fluffy, coated with sugar, and often enjoyed as a dessert or a sweet snack in Italy."
    },
{
        "img": "https://statics.vinpearl.com/anh-thumb-banh-goi-ha-noi_1683990589.jpg",
        "title": "Bánh gối",
        "description": "Bánh gối are Vietnamese fried pillow cakes filled with a sweet mung bean paste. They have a crispy exterior and soft, sweet filling, making them a popular snack or dessert."
},
{
    "img": "https://i.pinimg.com/originals/b3/cd/4b/b3cd4b301aede8e1e9f5ee1764977602.jpg",
    "title": "You tiao with sweet soy milk",
    "description": "You tiao are Chinese deep-fried dough sticks served with sweetened soy milk. They are crispy on the outside and fluffy on the inside, commonly enjoyed as a breakfast or snack."
},
{
    "img": "https://media.istockphoto.com/id/1412977128/photo/tsukisamu-anpan-a-bun-with-red-bean-paste.jpg?s=612x612&w=0&k=20&c=tVnW7hUw4o0AhuKyZ1x_ufc-k7MVfb7uY0WRRzSQTxA=",
    "title": "Anpan",
    "description": "Anpan is a Japanese sweet bread filled with red bean paste. It's soft, fluffy, and slightly sweet, often enjoyed as a snack or with tea."
},
{
    "img": "https://th.bing.com/th/id/OIP.UhHOuPFnIIm9AqMFKi-dJwHaE7?rs=1&pid=ImgDetMain",
    "title": "Frittelle di riso",
    "description": "Frittelle di riso are Italian rice fritters made from a batter of rice, flour, milk, eggs, and sugar. They are deep-fried until golden and crispy, then dusted with powdered sugar."
},
{
    "img": "https://live.staticflickr.com/7256/7573520552_51d034a1ca.jpg",
    "title": "Hwangnam-ppang",
    "description": "Hwangnam-ppang is a Korean sweet red bean bread shaped like a fish. It's filled with sweet red bean paste and often enjoyed as a street food snack."
},
{
    "img": "https://www.tastingtable.com/img/gallery/marbled-chocolate-brioche-recipe/chocolate-brioche-recipe-1639683388.jpg",
    "title": "Brioche with chocolate",
    "description": "Brioche with chocolate is a French pastry made from a sweet yeast dough enriched with butter and filled with chocolate. It's soft, buttery, and perfect for breakfast or dessert."
},
{
    "img":"https://th.bing.com/th/id/R.630b2d87d606f1c9c92d4a194c6e521f?rik=fWEryhIpFTY0Cw&pid=ImgRaw&r=0",
    "title": "Blueberry pancakes",
    "description": "Blueberry pancakes are American pancakes made from a batter mixed with fresh or frozen blueberries. They are fluffy, fruity, and often served with butter and maple syrup."
},
{
    "img": "https://media.istockphoto.com/id/513392984/photo/zeppole-italian-pastries-on-white-plate.jpg?s=612x612&w=0&k=20&c=5Ek-EVviLFzoPOtrnamuhvQwSI8B-rTWrFqEsokAoME=",
    "title": "Zeppole",
    "description": "Zeppole are Italian pastries made from deep-fried dough and filled with custard or jelly. They are light, crispy, and often dusted with powdered sugar."
},
{
    "img": "https://th.bing.com/th/id/OIP.u7hl1BpNCupyYL-sSty3VgHaF7?rs=1&pid=ImgDetMain",
    "title": "Crepes with fruit",
    "description": "Crepes with fruit are thin French pancakes filled with fresh fruits such as strawberries, bananas, or blueberries, and often drizzled with chocolate or caramel sauce."
},
{
    "img": "https://fandbrecipes.com/wp-content/uploads/2023/06/Imagawayaki_Step-By-Step-Recipe.png",
    "title": "Imagawayaki",
    "description": "Imagawayaki is a Japanese sweet pancake filled with sweet fillings such as red bean paste, custard, or chocolate. It's soft, fluffy, and often served hot as a street food snack."
},
{
    "img": "https://th.bing.com/th/id/OIP.204aCounQF0DHVrI7pRjoAHaF5?rs=1&pid=ImgDetMain",
    "title": "Kao tom mud",
    "description": "Kao tom mud is a Thai-style steamed sticky rice dessert filled with sweet coconut filling. It's wrapped in banana leaves and steamed until fragrant and sticky."
},
{
    "img": "https://th.bing.com/th/id/OIP.Ppm-4FSAmndw4YD2TgvengHaEK?rs=1&pid=ImgDetMain",
    "title": "Bánh bao chiên",
    "description": "Bánh bao chiên are Vietnamese fried dumplings filled with a sweet filling, typically made from mung bean paste or sweetened coconut. They are crispy on the outside and soft on the inside, often enjoyed as a treat."
},
{
    "img": "https://cdn.tasteatlas.com/images/dishes/a8d0885e19754cdab541f36b644dfa30.jpg?mw=1300",
    "title": "Gyeranppang",
    "description": "Gyeranppang is a Korean egg bread with a sweet custard filling. It's shaped like a small loaf and has a soft, fluffy texture with a hint of sweetness."
},
{
    "img": "https://cdn0-production-images-kly.akamaized.net/FSbgjDUUN_Bs8KRyy0zCyuGqEvU=/0x177:668x845/1200x900/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4548394/original/077217600_1692766274-shutterstock_2289347229.jpg",
    "title": "Khanom buang",
    "description": "Khanom buang are Thai crispy pancakes filled with a sweet coconut filling and sometimes topped with a savory or sweet topping like shredded coconut or egg yolk threads."
},
{
    "img": "https://www.theflorentine.net/wp-content/uploads/2022/11/CASTAGNACCIO-ph.-Catalin-Varela-1920x2560.jpg",
    "title": "Castagnaccio",
    "description": "Castagnaccio is an Italian chestnut flour cake made with chestnut flour, water, olive oil, and sometimes raisins or pine nuts. It's dense, slightly sweet, and often served as a dessert."
},
{
    "img": "https://images2.alphacoders.com/583/thumb-1920-583537.jpg",
    "title": "Roti",
    "description": "Roti is a Thai-style flatbread served with sweet toppings such as condensed milk, chocolate, or bananas. It's crispy on the outside and soft on the inside, making it a popular street food snack."
},
{
    "img": "https://www.ohmargott.com/content/uploads/2022/12/IMG_0316-scaled-e1670381151772.jpg",
    "title": "Pan dulce",
    "description": "Pan dulce is a Mexican sweet bread often decorated with colorful sugar toppings. It comes in various shapes and flavors, filled with ingredients like custard, fruits, or sweetened meats."
},
{
    "img": "https://th.bing.com/th/id/OIP.OLJLuNRbFK2vnpXcJJgfAAHaHa?rs=1&pid=ImgDetMain",
    "title": "Pain perdu",
    "description": "Pain perdu, also known as French toast, is a dish made from slices of bread soaked in eggs and milk, then fried until golden brown. It's typically served with syrup, powdered sugar, or fruits."
},
{
    "img": "https://th.bing.com/th/id/OIP.NY95r1FPzpeyjfcJovsVQQHaEK?rs=1&pid=ImgDetMain",
    "title": "Bua loi",
    "description": "Bua loi are Thai rice dumplings served in sweet coconut milk. They are made from glutinous rice flour and have a chewy texture, often flavored with pandan or sesame seeds."
}]
const mealBreakfastSweetLightCold = [
{
"img": "https://media.istockphoto.com/id/177248190/photo/sweet-krapfen-pastry.jpg?s=612x612&w=0&k=20&c=MLavPAa5W0PD2SJBva8ckrfk7oenb6PopKxZD6ETdx0=",
"title": "Bomboloni",
"description": "Bomboloni are Italian doughnuts filled with custard, jam, or chocolate. They are light and fluffy, coated with sugar, and often enjoyed as a dessert or a sweet snack in Italy."
},
{
    "img": "https://cdn.ilclubdellericette.it/wp-content/uploads/2018/01/pain-au-chocolat.jpg",
    "title": "Pain au chocolat",
    "description": "Pain au chocolat is a French pastry made from a laminated dough filled with chocolate. It's buttery, flaky, and often enjoyed as a breakfast treat in France."
},
{
    "img": "https://littlespoonfarm.com/wp-content/uploads/2023/01/homemade-raw-yogurt-in-a-bowl.jpg",
    "title": "Yogurt",
    "description": "Yogurt with fresh fruits and granola is an American breakfast or snack dish consisting of yogurt topped with fresh fruits (such as berries or bananas) and granola for added crunch and sweetness."
},
{
    "img": "https://hips.hearstapps.com/del.h-cdn.co/assets/17/25/1600x800/landscape-1498225555-froyo-bites-2.jpg?resize=1200:*",
    "title": "Fro-Yo Fruit Bites",
    "description": "Fro Yo Fruit Bites originate from the vibrant world of frozen yogurt treats. These delicious snacks blend creamy, tangy frozen yogurt with real fruit pieces, offering a refreshing burst of flavor. Perfect for a light, indulgent treat, they combine wholesome fruit with smooth yogurt in every bite."
},
{
    "img": "https://www.goodtaste.tv/wp-content/uploads/2023/12/zzzzz-Honey-ricotta-crostini-e1702321940375.jpeg",
    "title": "Crostini with ricotta and honey",
    "description": "Crostini with ricotta and honey is an Italian appetizer made with toasted bread slices topped with creamy ricotta cheese and drizzled with honey. It's a delightful combination of savory and sweet."
},
{
    "img": "https://th.bing.com/th/id/R.86c686e06bc026af6059fe1fc6d3324d?rik=W2inBAQ0j%2bECgw&riu=http%3a%2f%2fwww.enbflavor.com%2fwp-content%2fuploads%2f2016%2f03%2fcereal.png&ehk=dk0%2bcxyZ55ySy%2fMvwOEywWTOGWwss%2bzzDhRSxdHjwX8%3d&risl=&pid=ImgRaw&r=0",
    "title": "Cereal with Milk",
    "description": "Cereal with milk is a classic American breakfast consisting of cereal grains like cornflakes or oatmeal served with cold milk. It's quick, convenient, and enjoyed by people of all ages."
}]
const mealBreakfastSavoryHeavyHot = [
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork (sometimes), and vegetables. It's spicy, hearty, and often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://silkpathhotel.com/wp-content/uploads/2023/12/bun-dau-mam-tom-688x400.jpeg",
        "title": "Bún đậu mắm tôm",
        "description": "Bún đậu mắm tôm is a Vietnamese dish consisting of vermicelli noodles served with fried tofu, fermented shrimp paste (mắm tôm), and a variety of fresh herbs and vegetables. It's a flavorful and aromatic meal."
    },
    {
        "img": "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Eggs Benedict",
        "description": "Eggs Benedict is a classic American breakfast dish consisting of poached eggs and ham on an English muffin, topped with hollandaise sauce. It's rich, savory, and satisfying."
    },
    {
        "img": "https://t4.ftcdn.net/jpg/01/10/73/63/240_F_110736391_SeqUiJn9eQpSytzZ0ccDmM8mvaUbfhvy.jpg",
        "title": "Pho",
        "description": "Pho is a Vietnamese noodle soup consisting of broth, rice noodles, herbs, and meat (usually beef or chicken). It's flavorful, aromatic, and often enjoyed as a hearty breakfast or lunch."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "Bibimbap is a Korean dish of mixed rice topped with vegetables (such as spinach, mushrooms, and carrots), beef, a fried egg, and spicy gochujang sauce. It's hearty and flavorful."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
        "title": "Ratatouille",
        "description": "Ratatouille is a French vegetable stew made with tomatoes, zucchini, eggplant, bell peppers, and onions, seasoned with herbs like thyme and basil. It's savory and comforting."
    },
    {
        "img": "https://images.pexels.com/photos/7363691/pexels-photo-7363691.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "title": "Dim sum",
        "description": "Dim sum refers to a variety of Chinese steamed or fried dumplings and other small dishes served as snacks or a meal. Popular dim sum items include dumplings, buns, and rolls."
    },
    {
        "img": "https://t4.ftcdn.net/jpg/08/31/04/73/240_F_831047389_B8rRbgusvbC5u9o8np2UfB6oOWR94tIr.jpg",
        "title": "Khao phat",
        "description": "Khao phat is a Thai dish of fried rice stir-fried with eggs, vegetables, and sometimes meat or seafood. It's flavorful and often served with lime wedges and chili sauce."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos Rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://1mal1japan.de/wp-content/uploads/2018/07/Okonomiyaki-Titelbild_1200x800.jpg",
        "title": "Oyakodon",
        "description": "Oyakodon is a Japanese dish of chicken and beaten eggs simmered together in a sweet and savory broth, served over a bowl of steamed rice. It's comforting and popular for lunch."
    },
    {
        "img": "https://www.clker.com/cliparts/4/7/1/7/151618839473954387biscuits-and-gravy-clipart.hi.png",
        "title": "Biscuits and gravy",
        "description": "Biscuits and gravy is an American breakfast dish consisting of fluffy biscuits topped with creamy sausage gravy. It's hearty, indulgent, and a favorite in the Southern United States."
    },
    {
        "img": "https://brokebankvegan.com/wp-content/uploads/2022/10/Chilaquiles-Rojos-1200x1200-1.jpg",
        "title": "Chilaquiles",
        "description": "Chilaquiles are a Mexican breakfast dish made from fried tortilla chips simmered in red or green salsa until softened. They are often topped with cheese, sour cream, and eggs."
    },
    {
        "img": "https://th.bing.com/th/id/OIP._jW_LBA2tcydLlcjQufkGwHaIH?rs=1&pid=ImgDetMain",
        "title": "Polenta with sausage and mushrooms",
        "description": "Polenta with sausage and mushrooms is an Italian dish featuring creamy polenta topped with Italian sausage, mushrooms, and sometimes cheese. It's hearty and comforting."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.MmCH4h31ZpA-cj1vsXSGAAHaFj?rs=1&pid=ImgDetMain",
        "title": "Croque-monsieur",
        "description": "Croque-monsieur is a French grilled ham and cheese sandwich, typically made with Gruyère or Emmental cheese. It's toasted until golden and served warm."
    },
    {
        "img": "https://drivemehungry.com/wp-content/uploads/2021/09/pad-see-ew-1-1.jpg",
        "title": "Pad see ew",
        "description": "Pad see ew is a Thai stir-fried noodle dish made with wide rice noodles, soy sauce, eggs, and vegetables such as Chinese broccoli. It's savory, slightly sweet, and popular street food."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-Crepes-4-scaled.jpg",
        "title": "Jianbing",
        "description": "Jianbing is a Chinese street food breakfast crepe made from wheat flour and filled with egg, crispy fried wonton skin, cilantro, and a variety of sauces. It's flavorful and satisfying."
    },
    {
        "img": "https://blog.amigofoods.com/wp-content/uploads/2021/03/mollete.jpg",
        "title": "Molletes",
        "description": "Molletes are a Mexican open-faced sandwich made with bolillo bread, refried beans, cheese, and sometimes topped with salsa, avocado, or jalapeños. They are hearty and delicious."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.OLJLuNRbFK2vnpXcJJgfAAHaHa?rs=1&pid=ImgDetMain",
        "title": "Pain perdu",
        "description": "Pain perdu, or French toast, is a dish made from slices of bread soaked in eggs and milk, then fried until golden. It's typically served with syrup or powdered sugar."
    },
    {
        "img": "https://vivaciousgourmet.com/wp-content/uploads/2023/06/IMG_1210-500x500.jpeg",
        "title": "Frittata",
        "description": "Frittata is an Italian omelette enriched with ingredients such as cheese, vegetables, and meats. It's baked or fried and served hot or cold, making it versatile for any meal."
    },
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh mì",
        "description": "Bánh mì is a Vietnamese sandwich filled with various ingredients like meat (such as pork or chicken), pickled vegetables, cilantro, and chili peppers, served in a French baguette."
    },
    {
        "img": "https://vivaciousgourmet.com/wp-content/uploads/2023/06/IMG_1210-500x500.jpeg",
        "title": "Frittata",
        "description": "Frittata is an Italian omelette enriched with ingredients such as cheese, vegetables, and meats. It's baked or fried and served hot or cold, making it versatile for any meal."
    },
    {
        "img": "https://theforkedspoon.com/wp-content/uploads/2020/05/Congee-5-700x1050.jpg",
        "title": "Congee",
        "description": "Cháo, also known as congee, is a traditional Chinese rice porridge enjoyed throughout Asia. It's made by simmering rice in water or broth until it breaks down into a smooth, creamy consistency."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.0W_yWEVy5HxItAu8L3WO4gHaEo?rs=1&pid=ImgDetMain",
        "title": "Panzerotti",
        "description": "Panzerotti are Italian fried stuffed dough pockets filled with ingredients like mozzarella, tomato, and sometimes ham or spinach. They are crispy on the outside and savory inside."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory pie filled with bacon, cheese, and a custard made of eggs and cream. It's baked until golden and served warm or at room temperature."
    },
    {
        "img": "https://th.bing.com/th/id/R.40e73cc28852a4f8933d92ff004c9459?rik=RVl5eAgPmqegkQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2016%2f03%2fBanh-Xeo-Wide.jpg&ehk=vxSkYh%2fPULsZL%2bLFiwvGzG44ycUPBIF7zexCoe8wbvc%3d&risl=&pid=ImgRaw&r=0",
        "title": "Bánh xèo",
        "description": "Bánh xèo are crispy Vietnamese pancakes made from rice flour batter filled with shrimp, pork, bean sprouts, and herbs. They are served with fresh vegetables and dipping sauce."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Fbun-bo-hue-vietnamese-beef-noodle-soup-7372584&psig=AOvVaw0yZkaJsUEKGzxlQ8PEJzBH&ust=1722026667422000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiR_76Hw4cDFQAAAAAdAAAAABAJ",
        "title": "Bún bò Huế",
        "description": "Bún bò Huế is a spicy Vietnamese noodle soup from the city of Huế, flavored with lemongrass, shrimp paste, and chili oil. It contains rice vermicelli noodles, beef brisket, and pork knuckle, garnished with herbs."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.k5a5Enf89-pCgH85lZldLQHaE8?rs=1&pid=ImgDetMain",
        "title": "Okonomiyaki",
        "description": "Okonomiyaki is a Japanese savory pancake made with flour, eggs, shredded cabbage, and a variety of toppings such as pork belly, shrimp, and okonomiyaki sauce. It's often cooked on a griddle at the table."
    }
]
const mealBreakfastSavoryHeavyCold = [
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "Liangpi is a Chinese cold noodle dish made from wheat or rice flour. The noodles are tossed with sesame paste, vinegar, chili oil, and various toppings like cucumber and bean sprouts. It's refreshing and popular during hot weather."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.VJp8SdvwTTcFF4seh9JOjwHaFu?rs=1&pid=ImgDetMain",
        "title": "Savory Crepes",
        "description": "Savory Crepes, known as Galette in French cuisine, are thin pancakes made from buckwheat flour and filled with ingredients like cheese, ham, spinach, or mushrooms. They are folded and served warm or hot as a meal or snack."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul Naengmyeon",
        "description": "Mul Naengmyeon is a Korean cold noodle soup made with buckwheat noodles in a chilled beef broth. It's garnished with slices of pear, cucumber, and hard-boiled egg, offering a refreshing and savory taste."
    },
    {
        "img": "https://www.google.com/imgres?q=Bibim%20Naengmyeon&imgurl=https%3A%2F%2Fi0.wp.com%2Fwww.eatingbooks.com%2Fwp-content%2Fuploads%2F2019%2F09%2Fbibim-naengmyeon1.jpg%3Fresize%3D1100%252C825%26ssl%3D1&imgrefurl=https%3A%2F%2Fwww.eatingbooks.com%2Fbibim-naengmyeon-cold-spicy-noodles%2F&docid=0m5G-mTMh3J2KM&tbnid=1_zkMkZAgL30MM&vet=12ahUKEwjx8afoh8OHAxWKLkQIHRxzHHoQM3oECGwQAA..i&w=1100&h=825&hcb=2&ved=2ahUKEwjx8afoh8OHAxWKLkQIHRxzHHoQM3oECGwQAA",
        "title": "Bibim Naengmyeon",
        "description": "Bibim Naengmyeon is a Korean cold noodle dish topped with a spicy sauce made from gochujang (chili paste), vinegar, and sugar. It's garnished with cucumbers, radishes, and sometimes a boiled egg."
    },
    {
        "img": "https://th.bing.com/th/id/R.08d24dbe8089ad991c8ee29fe3dc84bb?rik=XMrC26dV0ZR4Ug&pid=ImgRaw&r=0",
        "title": "Zaru Soba ",
        "description": "Zaru Soba is a Japanese dish of chilled buckwheat noodles served with a dipping sauce (tsuyu), scallions, and wasabi. It's a popular summer dish in Japan, known for its refreshing taste and simple preparation."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos Rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
        "title": "Ratatouille",
        "description": "Cold Ratatouille is a French dish made from stewed vegetables such as tomatoes, zucchini, eggplant, bell peppers, and onions. It's served cold and often enjoyed as a refreshing summer dish."
    },
    {
        "img": "https://th.bing.com/th/id/R.f749e2a4ca09eef958ebbb00aca79028?rik=XH4HuRbZ%2b1eZBA&pid=ImgRaw&r=0",
        "title": "Chilled Sichuan Noodles",
        "description": "Chilled Sichuan noodles are served cold with a spicy and tangy sauce made from soy sauce, vinegar, sesame paste, and chili oil. They are garnished with cucumber, peanuts, and sometimes shredded chicken."
    },
    {
        "img": "https://static01.nyt.com/images/2021/05/10/dining/kc-spring-vegetable-japchae/kc-spring-vegetable-japchae-threeByTwoMediumAt2X.jpg",
        "title": "Japchae",
        "description": "Japchae is a Korean dish of stir-fried glass noodles and vegetables, typically seasoned with soy sauce and sesame oil. It's savory, slightly sweet, and often served at celebrations."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is a Tuscan bread salad made with stale bread, tomatoes, onions, cucumbers, basil, and a vinaigrette dressing. It's refreshing and a great way to use up leftover bread."
    },
    {
        "img": "https://imag.bonviveur.com/portada-del-sunomono.jpg",
        "title": "Sunomono",
        "description": "Sunomono is a Japanese cucumber salad dressed with vinegar, sugar, and soy sauce. It's refreshing and often served as a side dish in Japanese cuisine."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.rEGsIt27PV7GtttognWZ7QHaHa?rs=1&pid=ImgDetMain",
        "title": "Tlacoyos",
        "description": "Tlacoyos are Mexican stuffed masa cakes filled with beans, cheese, or other ingredients. They are cooked on a griddle until crispy and often served with salsa and toppings."
    },
    {
        "img": "https://media.istockphoto.com/id/819476822/photo/hiyashi-chuka.jpg?s=612x612&w=0&k=20&c=wDTtpGDgxjmmi-Fa4UvM4q6edx0hyiP6VqCbOjy74TU=",
        "title": "Hiyashi chuka",
        "description": "Hiyashi chuka is a Japanese cold noodle dish topped with colorful ingredients like strips of egg, cucumber, ham, and shrimp. It's dressed with a tangy soy sauce-based dressing and enjoyed during hot summers."
    },
    {
        "img": "https://media.istockphoto.com/id/136183596/photo/tuna-calf.jpg?s=612x612&w=0&k=20&c=veJ2M1FAqUMmDQt1ZIAHOkMn_GYIPQD72vhmy68U-yo=",
        "title": "Vitello tonnato",
        "description": "Vitello tonnato is an Italian dish of cold, sliced veal topped with a creamy tuna sauce. It's savory, tangy, and a classic part of Italian cuisine."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul naengmyeon",
        "description": "Mul naengmyeon is a Korean dish of cold buckwheat noodles in a tangy broth, often served with slices of beef, cucumber, and a hard-boiled egg. It's refreshing and popular in summer."
    },
    {
        "img": "https://www.chopstickchronicles.com/wp-content/uploads/2020/01/Gomaae-30.jpg",
        "title": "Goma-ae",
        "description": "Goma-ae is a Japanese dish of blanched vegetables (typically spinach or green beans) dressed in a sesame sauce. It's nutty, savory, and a common side dish."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "Larb is a spicy and tangy Thai salad made with minced meat (often chicken, pork, or beef), fresh herbs, lime juice, fish sauce, and toasted rice powder. It's flavorful and often eaten with sticky rice."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.7hYACjDloYG_fT57_MB-EAHaE7?rs=1&pid=ImgDetMain",
        "title": "Quiche",
        "description": "Quiche is a French savory pie filled with a custard of eggs, cream, cheese, and various ingredients such as spinach, mushrooms, or bacon. It's baked until golden and served warm or cold."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.jTs1DSLWIeRaZ9y9okHo6wHaFV?rs=1&pid=ImgDetMain",
        "title": "Tostada de ceviche",
        "description": "Tostada de ceviche is a Mexican dish consisting of a crispy tortilla topped with marinated seafood (typically fish or shrimp), lime juice, onions, tomatoes, and cilantro. It's fresh and zesty."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.spWIMKXkcffPv6JN7uypDQHaEK?rs=1&pid=ImgDetMain",
        "title": "Khao yam",
        "description": "Khao yam is a Southern Thai rice salad made with rice, shredded vegetables, herbs, dried shrimp, and a tangy dressing made with fish sauce and lime juice. It's flavorful and refreshing."
    },
    {
        "img": "https://cdn.tasteatlas.com/Images/Dishes/38147e5c29b34ce5b1e971ce01a7c33c.jpg",
        "title": "Doupi",
        "description": "Doupi is a Chinese dish of steamed sticky rice wrapped in bean curd skin, usually filled with minced pork, mushrooms, and sometimes shrimp. It's savory and comforting."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.fopBxuC9ivEz84xujCLVJQHaE7?rs=1&pid=ImgDetMain",
        "title": "Enfrijoladas",
        "description": "Enfrijoladas are Mexican tortillas dipped in a sauce made from black beans, then filled with cheese, rolled up, and baked until warmed through. They are topped with more sauce, cheese, and sometimes crema."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.3HSQeFHm57RsS38jdghXbQHaG7?rs=1&pid=ImgDetMain",
        "title": "Insalata caprese",
        "description": "Insalata caprese is an Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic vinegar. It's simple, refreshing, and showcases the flavors of Italy."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, herbs, vermicelli noodles, and sometimes pork, wrapped in rice paper and served with a dipping sauce. They are light, healthy, and flavorful."
    },
    {
        "img": "https://media.istockphoto.com/id/530745806/photo/white-dish-with-carpaccio-of-beef.jpg?s=612x612&w=0&k=20&c=fqnJzLNQqzRCAEgN4sC3Lh9HJTt6aqojzDYx0RZi-ec=",
        "title": "Carpaccio",
        "description": "Carpaccio is an Italian dish of thinly sliced raw beef or fish, often dressed with olive oil, lemon juice, capers, and Parmesan cheese. It's delicate, flavorful, and served as an appetizer."
    },
    {
        "img": "https://cdn.loveandlemons.com/wp-content/uploads/2024/05/antipasto-platter-1.jpg",
        "title": "Antipasto platter",
        "description": "Antipasto platter is an assortment of cured meats, cheeses, olives, peppers, and other appetizers served cold as an Italian starter course. It's varied, flavorful, and great for sharing."
    },
    {
        "img": "https://assets.epicurious.com/photos/64b95576a0ddfab1629e4aaf/4:3/w_4823,h_3618,c_limit/GlassNoodleSalad_RECIPE_071823_57043.jpg",
        "title": "Yam wun sen",
        "description": "Yam wun sen is a spicy Thai salad made with glass noodles, shrimp, ground pork, peanuts, lime juice, fish sauce, and Thai chilies. It's refreshing and packed with vibrant flavors."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a Japanese dish of cold tofu topped with ingredients like green onions, grated ginger, soy sauce, and bonito flakes. It's simple, light, and refreshing."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.MmCH4h31ZpA-cj1vsXSGAAHaFj?rs=1&pid=ImgDetMain",
        "title": "Croque-monsieur",
        "description": "Croque-monsieur is a French grilled ham and cheese sandwich, typically made with Gruyère or Emmental cheese. It's toasted until golden and served warm."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a Mexican salad made with prickly pear cactus pads (nopales), tomatoes, onions, cilantro, and lime juice. It's fresh, tangy, and nutritious."
    },
    {
        "img": "https://c2.staticflickr.com/6/5142/5694533401_44bcb07f56_b.jpg",
        "title": "Bò bía",
        "description": "Bò bía is a Vietnamese street food snack of jicama and Vietnamese sausage wrapped in rice paper, often with herbs and served with a dipping sauce. It's fresh, crunchy, and flavorful."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade niçoise",
        "description": "Salade niçoise is a French salad originating from Nice, made with tuna, hard-boiled eggs, Niçoise olives, tomatoes, green beans, and dressed with olive oil. It's colorful, hearty, and satisfying."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2021/08/23/04/55/somen-6566678_1280.jpg",
        "title": "Somen",
        "description": "Somen is a Japanese dish of thin wheat noodles served cold and dipped in a soy-based sauce. It's light, refreshing, and popular during hot weather."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork (sometimes), and vegetables. It's spicy, hearty, and often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/07/cold-noodles-with-Sichuan-dressing-4-480x270.jpg",
        "title": "Leng mian",
        "description": "Leng mian is a Chinese dish of cold noodles served with a sesame sauce, often garnished with cucumber and sometimes shredded chicken or pork. It's refreshing and flavorful."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/09/eggplant-with-garlic-sauce-4-scaled.jpg",
        "title": "Yuxiang qiezi",
        "description": "Yuxiang qiezi is a Chinese cold dish of spicy eggplant stir-fried with garlic, ginger, soy sauce, and vinegar. It's savory, tangy, and packed with umami flavors."
    },
    {
        "img": "https://mykoreankitchen.com/wp-content/uploads/2020/08/2.-Hobak-Jeon.jpg",
        "title": "Hobakjeon",
        "description": "Hobakjeon is a Korean dish of crispy zucchini pancakes made with grated zucchini, flour, and eggs, fried until golden brown. It's savory, crunchy, and delicious."
    },
    {
        "img": "https://www.chopstickchronicles.com/wp-content/uploads/2020/01/Gomaae-30.jpg",
        "title": "Goma-ae",
        "description": "Goma-ae is a Japanese dish of blanched vegetables (typically spinach or green beans) dressed in a sesame sauce. It's nutty, savory, and a common side dish."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, herbs, vermicelli noodles, and sometimes pork, wrapped in rice paper and served with a dipping sauce. They are light, healthy, and flavorful."
    }
]
const mealBreakfastSavoryLightHot = [
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh mì",
        "description": "Bánh mì is a Vietnamese sandwich served on a baguette with meat,vegtable, mayonnaise, and optional ingredients like pâté, cucumber, and pickled carrots. It's a popular breakfast item or snack in Vietnam and is widely enjoyed throughout the world."
    },
    {
        "img": "https://www.ocado.com/cmscontent/recipe_image_large/34582297.jpg?bLtj",
        "title": "Avocado toast with cherry tomatoes",
        "description": "Avocado toast with cherry tomatoes is an American breakfast or brunch dish featuring mashed avocado spread on toasted bread, topped with halved cherry tomatoes, and seasoned with salt, pepper, and olive oil."
    },
    {
        "img": "https://www.cookerru.com/wp-content/uploads/2022/05/bibim-guksu-recipe-preview.jpg",
        "title": "Bibim Guksu",
        "description": "Bibim Guksu is a Korean dish made with cold noodles, mixed with a spicy sauce made from gochujang (chili paste), vinegar, sugar, and sesame oil. It's often topped with vegetables and a hard-boiled egg."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.-0dXyMKG49nDewHYxH2REgHaHa?rs=1&pid=ImgDetMain",
        "title": "Bagel with cream cheese and smoked salmon",
        "description": "A bagel with cream cheese and smoked salmon is an American breakfast or brunch classic. It consists of a toasted bagel spread with cream cheese and topped with slices of smoked salmon, red onion, and capers."
    },
    {
        "img": "https://assets.unileversolutions.com/recipes-v2/212885.jpg",
        "title": "Cold Tortilla Soup",
        "description": "Cold Tortilla Soup is a Mexican dish featuring a base of tomato broth with tortilla strips, avocado, cheese, and sometimes chicken or beans. It's served cold and garnished with fresh cilantro and lime."
    },
    {
        "img": "https://th.bing.com/th/id/R.a7e7ab1829a60402ebc68c91c296f7ac?rik=5AoL3AECkN%2b07w&riu=http%3a%2f%2fwww.japanesecooking101.com%2fwp-content%2fuploads%2f2013%2f08%2fIMG_0367.jpg&ehk=VCqLJIoBbVhOKlP4aoubJzv93Zwsl6tqJ7dstp3UJiY%3d&risl=&pid=ImgRaw&r=0",
        "title": "Cold Tofu",
        "description": "Cold Tofu, known as hiyayakko in Japanese, is chilled tofu served with toppings like soy sauce, green onions, grated ginger, and bonito flakes. It's a simple and refreshing dish enjoyed in Japan, especially in summer."
    },
    {
        "img": "https://i2.wp.com/sinomedia.ge/wp-content/uploads/2017/03/DSC_6375.jpg?fit=1500%2C1001&ssl=1",
        "title": "Baozi",
        "description": "Baozi are steamed buns filled with savory ingredients like pork, beef, or vegetables. They are a popular street food in China, often enjoyed for breakfast or as a snack throughout the day."
    },
    {
        "img": "https://kimchimari.com/wp-content/uploads/2017/05/korean-buckwheat-pancake.jpg",
        "title": "Cold Buckwheat Pancakes",
        "description": "Cold Buckwheat Pancakes are a Korean dish made from buckwheat flour and water, pan-fried until crispy. They are served cold and dipped in a soy sauce-based dipping sauce with sliced scallions."
    },
    {
        "img": "https://th.bing.com/th/id/R.0307e9a4ca726f7683fb2671a0c33454?rik=SZaxgJ%2bKTBzpBA&pid=ImgRaw&r=0",
        "title": "Cold Natto Rice",
        "description": "Cold Natto Rice is a Japanese dish featuring rice topped with fermented soybeans (natto), often seasoned with soy sauce, mustard, or other toppings. It's known for its distinctive flavor and health benefits."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
        "title": "Ratatouille",
        "description": "Ratatouille is a Provencal vegetable stew made with tomatoes, zucchini, eggplant, bell peppers, onions, and garlic, cooked in olive oil and seasoned with herbs. It's flavorful and comforting."
    },
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh mì",
        "description": "Bánh mì is a Vietnamese sandwich filled with various ingredients like grilled meat (often pork), pâté, pickled vegetables, cilantro, and chili peppers. It's savory, tangy, and packed with flavors."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.MmCH4h31ZpA-cj1vsXSGAAHaFj?rs=1&pid=ImgDetMain",
        "title": "Croque-monsieur",
        "description": "Croque-monsieur is a French grilled ham and cheese sandwich, typically made with Gruyère or Emmental cheese. It's toasted until golden and served warm."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
        "title": "Pad Thai",
        "description": "Pad Thai is a Thai stir-fried noodle dish made with rice noodles, shrimp, tofu, bean sprouts, peanuts, and scrambled egg, flavored with tamarind sauce, fish sauce, and chili."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork (sometimes), and vegetables. It's spicy, hearty, and often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2024/05/Omurice-8890-I-1.jpg",
        "title": "Omurice",
        "description": "Omurice is a Japanese dish of fried rice wrapped in a thin omelette and topped with ketchup or demi-glace sauce. It's savory, slightly sweet, and a popular comfort food."
    },
    {
        "img": "https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto:eco,c_fill,g_auto,w_1500,ar_3:2/https://storage.googleapis.com/gen-atmedia/3/2015/09/3f5c46fcad0fc4eb34f58486cec167661ccccbd8.jpeg",
        "title": "Frittata with potatoes and herbs",
        "description": "Frittata is an Italian omelette filled with potatoes, herbs, and sometimes cheese. It's baked until golden and served hot or cold as a hearty dish."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.5klm6BM7TmQbIWepQfhn0QHaD4?rs=1&pid=ImgDetMain",
        "title": "Khao tom moo",
        "description": "Khao tom moo is a Thai rice soup made with pork, garlic, ginger, and rice, cooked until creamy and served hot. It's comforting and often eaten for breakfast or as a light meal."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-Crepes-4-scaled.jpg",
        "title": "Jianbing",
        "description": "Jianbing is a Chinese savory crepe made with a thin batter of wheat and mung bean flour, filled with eggs, scallions, cilantro, hoisin sauce, and crispy fried wonton crackers. It's a popular street food."
    },
    {
        "img": "https://th.bing.com/th/id/R.d8be25ee7ffff7f000e2600a0bb63890?rik=WHJbXvJEWaLkXw&riu=http%3a%2f%2fwww.maangchi.com%2fwp-content%2fuploads%2f2015%2f05%2fimg_5151.jpg&ehk=eVi%2bjAi2B%2fjlBjITmK7GWuByEJkOKghsvK4pFe5bs9k%3d&risl=&pid=ImgRaw&r=0",
        "title": "Sundubu jjigae",
        "description": "Sundubu jjigae is a Korean soft tofu stew made with spicy broth, tofu, seafood (such as clams or shrimp), and vegetables. It's comforting, spicy, and served bubbling hot."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory pie filled with bacon, cheese (usually Gruyère), and custard made from eggs and cream. It's baked until golden and served warm or cold."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/top-down-view-skillet-plate-600nw-2462326415.jpg",
        "title": "Bulgogi",
        "description": "Bulgogi is a Korean dish of thinly sliced marinated beef stir-fried with vegetables. It's savory, slightly sweet from the marinade, and often served with rice or wrapped in lettuce."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom yum goong",
        "description": "Tom yum goong is a Thai spicy and sour soup made with shrimp, lemongrass, lime leaves, galangal, fish sauce, and chili peppers. It's aromatic, tangy, and bursting with flavors."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, herbs, vermicelli noodles, and sometimes pork, wrapped in rice paper and served with a dipping sauce. They are light, healthy, and flavorful."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork, and vegetables. It's spicy, tangy, and full of umami flavors, often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/e2fc228b2fa3436ab4d6f03f60907b0f.jpeg?width=1000",
        "title": "Xôi gà",
        "description": "Xôi gà is a Vietnamese dish of sticky rice topped with shredded chicken, fried shallots, and sometimes mung bean paste. It's savory, comforting, and often eaten for breakfast."
    },
    {
        "img": "https://previews.123rf.com/images/raptorcaptor/raptorcaptor1202/raptorcaptor120200017/12607106-panini-sandwich-with-prosciutto-mozzarella-cheese-and-basil-on-white-plate.jpg",
        "title": "Panini with prosciutto, mozzarella, and basil",
        "description": "Panini is an Italian grilled sandwich filled with prosciutto, mozzarella cheese, basil, and sometimes tomato. It's toasted until the cheese melts and the bread is crisp."
    },
    {
        "img": "https://media.istockphoto.com/id/463635027/photo/breakfast-with-fried-eggs-bacon-and-toasts.jpg?s=612x612&w=0&k=20&c=y8QrHsEXIHmBMNjpqr1_SBoVK9BU19sm_06M5_6Mob0=",
        "title": "Eggs and bacon on toast",
        "description": "Eggs and bacon on toast is a classic American breakfast dish of fried or scrambled eggs with crispy bacon served on toasted bread. It's hearty, savory, and satisfying."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/carnitas-tacos-salsa-lime-600nw-2433494287.jpg",
        "title": "Tacos de carnitas",
        "description": "Tacos de carnitas are Mexican tacos filled with slow-cooked, tender pork (carnitas), salsa, cilantro, and onions, served on corn tortillas. They are savory, juicy, and packed with flavor."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/57a62d532e69cffb1a2cf746/1541535795460-7PLEE9HUDJ6O8XQX814S/IMG_5043.JPG",
        "title": "Polenta with sausage and mushrooms",
        "description": "Polenta with sausage and mushrooms is an Italian dish made with creamy polenta topped with savory sausage, mushrooms, and a rich tomato sauce. It's hearty and comforting."
    },
    {
        "img": "https://simplegraytshirt.com/wp-content/uploads/2023/03/spinach-feta-omelette-14.jpg",
        "title": "Omelette with spinach and feta cheese",
        "description": "Omelette with spinach and feta cheese is an American breakfast dish made with eggs, sautéed spinach, crumbled feta cheese, and sometimes onions or tomatoes. It's fluffy, flavorful, and nutritious."
    },
    {
        "img": "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/ham-and-cheese-croissant-recipe-3.jpg?fit=2048%2C2048&ssl=1",
        "title": "Croissant with ham and cheese",
        "description": "Croissant with ham and cheese is a French pastry filled with ham and melted cheese, often served warm. It's buttery, flaky, and a delightful savory treat."
    },
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh mì",
        "description": "Bánh mì is a Vietnamese sandwich filled with various ingredients like grilled meat (often pork), pâté, pickled vegetables, cilantro, and chili peppers. It's savory, tangy, and packed with flavors."
    },
    {
        "img": "https://www.wellseasonedstudio.com/wp-content/uploads/2024/06/Miso-soup-with-tofu-sesame-seeds-and-watercress-600x900.jpg",
        "title": "Miso soup with tofu and seaweed",
        "description": "Miso soup with tofu and seaweed is a Japanese soup made with miso paste, tofu cubes, seaweed, and sometimes vegetables. It's savory, comforting, and often served as a starter."
    },
    {
        "img": "https://www.sweetashoney.co/wp-content/uploads/Feta-Spinach-Omelet-5.jpg",
        "title": "Omelette with spinach and feta cheese",
        "description": "Omelette with spinach and feta cheese is an American breakfast dish made with eggs, sautéed spinach, crumbled feta cheese, and sometimes onions or tomatoes. It's fluffy, flavorful, and nutritious."
    },
    {
        "img": "https://okonomikitchen.com/wp-content/uploads/2021/02/vegan-sheng-jian-bao-recipe-1-of-1-1024x683.jpg",
        "title": "Shengjian mantou",
        "description": "Shengjian mantou is a Chinese pan-fried pork bun with a crispy bottom and a juicy filling of pork and sometimes broth. It's savory, juicy, and popular as a breakfast or snack."
    },
    {
        "img": "https://th.bing.com/th/id/R.d8be25ee7ffff7f000e2600a0bb63890?rik=WHJbXvJEWaLkXw&riu=http%3a%2f%2fwww.maangchi.com%2fwp-content%2fuploads%2f2015%2f05%2fimg_5151.jpg&ehk=eVi%2bjAi2B%2fjlBjITmK7GWuByEJkOKghsvK4pFe5bs9k%3d&risl=&pid=ImgRaw&r=0",
        "title": "Sundubu jjigae",
        "description": "Sundubu jjigae is a Korean soft tofu stew made with spicy broth, tofu, seafood (such as clams or shrimp), and vegetables. It's comforting, spicy, and served bubbling hot."
    },
    {
        "img": "https://somuchfoodblog.com/wp-content/uploads/2022/07/green-chilaquiles5-500x500.jpg",
        "title": "Chilaquiles with eggs and salsa",
        "description": "Chilaquiles is a Mexican dish of fried tortilla chips simmered in salsa until slightly softened, topped with fried eggs, cheese, and sometimes avocado or sour cream. It's flavorful and satisfying."
    },
    {
        "img": "https://media.istockphoto.com/id/1460710905/photo/gimbap-a-korean-rice-dish.jpg?s=612x612&w=0&k=20&c=PdER2SYsBW_iK_NaGmHpKlMwe0jvXgeA7SS4j2O7prg=",
        "title": "Kimbap",
        "description": "Kimbap is a Korean dish of seaweed rice rolls filled with vegetables, egg, and meat (such as ham or fish cakes), sliced into bite-sized pieces. It's nutritious, portable, and popular as a snack or light meal."
    },
    {
        "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
        "title": "Cobb salad",
        "description": "Cobb salad is an American salad made with chopped lettuce, tomatoes, crispy bacon, hard-boiled eggs, avocado, blue cheese, and grilled or roasted chicken, topped with vinaigrette dressing. It's hearty and satisfying."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom yum goong",
        "description": "Tom yum goong is a Thai spicy and sour soup made with shrimp, lemongrass, lime leaves, galangal, fish sauce, and chili peppers. It's aromatic, tangy, and bursting with flavors."
    },
    {
        "img": "https://www.sipandfeast.com/wp-content/uploads/2023/02/potato-egg-frittata-recipe-4.jpg",
        "title": "Frittata with potatoes and herbs",
        "description": "Frittata is an Italian omelette filled with potatoes, herbs, and sometimes cheese. It's baked until golden and served hot or cold as a hearty dish."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.MmCH4h31ZpA-cj1vsXSGAAHaFj?rs=1&pid=ImgDetMain",
        "title": "Croque-monsieur",
        "description": "Croque-monsieur is a French grilled ham and cheese sandwich, typically made with Gruyère or Emmental cheese. It's toasted until golden and served warm."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
        "title": "Pad Thai",
        "description": "Pad Thai is a Thai stir-fried noodle dish made with rice noodles, shrimp, tofu, bean sprouts, peanuts, and scrambled egg, flavored with tamarind sauce, fish sauce, and chili."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork, and vegetables. It's spicy, tangy, and full of umami flavors, often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2024/05/Omurice-8890-I-1.jpg",
        "title": "Omurice",
        "description": "Omurice is a Japanese dish of fried rice wrapped in a thin omelette and topped with ketchup or demi-glace sauce. It's savory, slightly sweet, and a popular comfort food."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.5klm6BM7TmQbIWepQfhn0QHaD4?rs=1&pid=ImgDetMain",
        "title": "Khao tom moo",
        "description": "Khao tom moo is a Thai rice soup made with pork, garlic, ginger, and rice, cooked until creamy and served hot. It's comforting and often eaten for breakfast or as a light meal."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/06/Jian-Bing-Chinese-Crepes-4-scaled.jpg",
        "title": "Jianbing",
        "description": "Jianbing is a Chinese savory crepe made with a thin batter of wheat and mung bean flour, filled with eggs, scallions, cilantro, hoisin sauce, and crispy fried wonton crackers. It's a popular street food."
    },
    {
        "img": "https://th.bing.com/th/id/R.d8be25ee7ffff7f000e2600a0bb63890?rik=WHJbXvJEWaLkXw&riu=http%3a%2f%2fwww.maangchi.com%2fwp-content%2fuploads%2f2015%2f05%2fimg_5151.jpg&ehk=eVi%2bjAi2B%2fjlBjITmK7GWuByEJkOKghsvK4pFe5bs9k%3d&risl=&pid=ImgRaw&r=0",
        "title": "Sundubu jjigae",
        "description": "Sundubu jjigae is a Korean soft tofu stew made with spicy broth, tofu, seafood (such as clams or shrimp), and vegetables. It's comforting, spicy, and served bubbling hot."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory pie filled with bacon, cheese (usually Gruyère), and custard made from eggs and cream. It's baked until golden and served warm or cold."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/top-down-view-skillet-plate-600nw-2462326415.jpg",
        "title": "Bulgogi",
        "description": "Bulgogi is a Korean dish of thinly sliced marinated beef stir-fried with vegetables. It's savory, slightly sweet from the marinade, and often served with rice or wrapped in lettuce."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom yum goong",
        "description": "Tom yum goong is a Thai spicy and sour soup made with shrimp, lemongrass, lime leaves, galangal, fish sauce, and chili peppers. It's aromatic, tangy, and bursting with flavors."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, herbs, vermicelli noodles, and sometimes pork, wrapped in rice paper and served with a dipping sauce. They are light, healthy, and flavorful."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork, and vegetables. It's spicy, tangy, and full of umami flavors, often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://axwwgrkdco.cloudimg.io/v7/__gmpics3__/e2fc228b2fa3436ab4d6f03f60907b0f.jpeg?width=1000",
        "title": "Xôi gà",
        "description": "Xôi gà is a Vietnamese dish of sticky rice topped with shredded chicken, fried shallots, and sometimes mung bean paste. It's savory, comforting, and often eaten for breakfast."
    },
    {
        "img": "https://images.theyellowtable.com/best-heirloom-tomato-panini-prosciutto-mozzarella-basil-recipe-16x9.jpg?w=2000&q=45",
        "title": "Panini with prosciutto, mozzarella, and basil",
        "description": "Panini is an Italian grilled sandwich filled with prosciutto, mozzarella cheese, basil, and sometimes tomato. It's toasted until the cheese melts and the bread is crisp."
    },
    {
        "img": "https://media.istockphoto.com/id/463635027/photo/breakfast-with-fried-eggs-bacon-and-toasts.jpg?s=612x612&w=0&k=20&c=y8QrHsEXIHmBMNjpqr1_SBoVK9BU19sm_06M5_6Mob0=",
        "title": "Eggs and bacon on toast",
        "description": "Eggs and bacon on toast is a classic American breakfast dish of fried or scrambled eggs with crispy bacon served on toasted bread. It's hearty, savory, and satisfying."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/carnitas-tacos-salsa-lime-600nw-2433494287.jpg",
        "title": "Tacos de carnitas",
        "description": "Tacos de carnitas are Mexican tacos filled with slow-cooked, tender pork (carnitas), salsa, cilantro, and onions, served on corn tortillas. They are savory, juicy, and packed with flavor."
    },
    {
        "img": "https://italianfoodforever.com/wp-content/uploads/2012/10/bakedpolenta1.jpg",
        "title": "Polenta with sausage and mushrooms",
        "description": "Polenta with sausage and mushrooms is an Italian dish made with creamy polenta topped with savory sausage, mushrooms, and a rich tomato sauce. It's hearty and comforting."
    },
    {
        "img": "https://simplegraytshirt.com/wp-content/uploads/2023/03/spinach-feta-omelette-14.jpg",
        "title": "Omelette with spinach and feta cheese",
        "description": "Omelette with spinach and feta cheese is an American breakfast dish made with eggs, sautéed spinach, crumbled feta cheese, and sometimes onions or tomatoes. It's fluffy, flavorful, and nutritious."
    },
    {
        "img": "https://i0.wp.com/cookingwithbry.com/wp-content/uploads/ham-and-cheese-croissant-recipe-3.jpg?fit=2048%2C2048&ssl=1",
        "title": "Croissant with ham and cheese",
        "description": "Croissant with ham and cheese is a French pastry filled with ham and melted cheese, often served warm. It's buttery, flaky, and a delightful savory treat."
    },
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh mì",
        "description": "Bánh mì is a Vietnamese sandwich filled with various ingredients like grilled meat (often pork), pâté, pickled vegetables, cilantro, and chili peppers. It's savory, tangy, and packed with flavors."
    },
    {
        "img": "https://www.wellseasonedstudio.com/wp-content/uploads/2024/06/Miso-soup-with-tofu-sesame-seeds-and-watercress-600x900.jpg",
        "title": "Miso soup with tofu and seaweed",
        "description": "Miso soup with tofu and seaweed is a Japanese soup made with miso paste, tofu cubes, seaweed, and sometimes vegetables. It's savory, comforting, and often served as a starter."
    }
]
const mealBreakfastSavoryLightCold = [
    {
        "img": "https://th.bing.com/th/id/R.0307e9a4ca726f7683fb2671a0c33454?rik=SZaxgJ%2bKTBzpBA&pid=ImgRaw&r=0",
        "title": "Cold Natto Rice",
        "description": "Cold Natto Rice is a Japanese dish featuring rice topped with fermented soybeans (natto), often seasoned with soy sauce, mustard, or other toppings. It's known for its distinctive flavor and health benefits."
    },
    {
        "img": "https://www.ocado.com/cmscontent/recipe_image_large/34582297.jpg?bLtj",
        "title": "Avocado toast with cherry tomatoes",
        "description": "Avocado toast with cherry tomatoes is an American breakfast or brunch dish featuring mashed avocado spread on toasted bread, topped with halved cherry tomatoes, and seasoned with salt, pepper, and olive oil."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-egg-rolls-cha-gio-600nw-2032019294.jpg",
        "title": "Chả giò",
        "description": "Chả giò are Vietnamese crispy fried spring rolls filled with minced pork, mushrooms, and vegetables, wrapped in rice paper and deep-fried until golden and crispy. They are typically served with lettuce, herbs, and dipping sauce, making them a popular appetizer or snack in Vietnamese cuisine."
    },
    {
        "img": "https://www.lostlaowai.com/wp-content/uploads/2015/03/yu-xiang-qie-zi-llw_by-kirk-k-1080x720.jpg",
        "title": "Yuxiang qiezi",
        "description": "Yuxiang qiezi is a Chinese dish featuring cold eggplant slices marinated in a spicy and tangy sauce made with garlic, chili, vinegar, and soy sauce. The dish is known for its bold flavors and refreshing taste, making it a favorite appetizer or side dish in Chinese cuisine."
    },
    {
        "img": "https://downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main-600x600.jpg",
        "title": "Greek Salad",
        "description": "Greek salad is a refreshing dish made with fresh tomatoes, cucumbers, red onions, olives, and feta cheese, drizzled with olive oil and sprinkled with oregano. It's a staple in Greek cuisine, known for its simple yet flavorful combination of ingredients that highlight the Mediterranean flavors."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi chuka",
        "description": "Hiyashi chuka is a Japanese cold noodle dish featuring chilled ramen noodles topped with various vegetables such as cucumbers, tomatoes, and ham or chicken slices. The noodles are dressed with a tangy soy-based sauce or sesame sauce, offering a refreshing and light meal during hot summer days."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2023/11/13/12/31/korean-food-8385414_1280.jpg",
        "title": "Gimbap",
        "description": "Gimbap is a popular Korean dish of seaweed-wrapped rice rolls filled with a variety of ingredients such as pickled vegetables, egg strips, and either beef, tuna, or imitation crab meat. It's a convenient and nutritious meal or snack, often enjoyed at picnics, lunches, or as a light dinner."
    },
    {
        "img": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
        "title": "Caprese Insalata",
        "description": "Caprese salad is an Italian classic made with fresh tomatoes, creamy mozzarella cheese, and fragrant basil leaves, seasoned with salt, pepper, and drizzled with extra virgin olive oil. It's a simple yet elegant dish that showcases the flavors of Italy, perfect as an appetizer or light lunch."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine (Savory pie with bacon, cheese, and eggs)",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a traditional Mexican salad made with tender nopales (cactus paddles), diced tomatoes, onions, cilantro, and sometimes avocado. The salad is typically dressed with lime juice, olive oil, and seasoned with salt and pepper. It's a nutritious and refreshing dish, perfect for warm weather."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "Larb is a Thai salad made with minced meat (often chicken, pork, or beef), mixed with fresh herbs like mint, cilantro, and basil, along with toasted rice powder for texture. Seasoned with fish sauce, lime juice, and chili flakes, larb is a flavorful and aromatic dish served at room temperature."
    },
    {
        "img": "https://bakerbynature.com/wp-content/uploads/2021/03/Pan-Seared-Scallops-with-Lemon-Caper-Sauce-2-1-of-1.jpg",
        "title": "Pan seared scallops",
        "description": "Pan-seared scallops are a delicate seafood dish featuring scallops seared to perfection in a hot pan with butter or olive oil until caramelized on the outside and tender inside. Lightly seasoned with salt, pepper, and sometimes a splash of lemon juice, they are served as an elegant appetizer or main course."
    }
]
const mealBreakfastSaltyHeavyHot = [
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-crispy-pancake-2092243153",
        "title": "Bánh xèo",
        "description": "Bánh xèo are crispy Vietnamese pancakes made from rice flour batter filled with shrimp, pork, bean sprouts, and herbs. They are served with fresh vegetables and dipping sauce."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-beef-noodles-pho-local-restaurant-2463854287",
        "title": "Phở",
        "description": "Phở is a fragrant Vietnamese noodle soup with clear broth, rice noodles, herbs, and either beef (phở bò) or chicken (phở gà). Garnished with lime, bean sprouts, Thai basil, and chili slices, it's a beloved dish enjoyed any time of day."
    },
    {
        "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Fbun-bo-hue-vietnamese-beef-noodle-soup-7372584&psig=AOvVaw0yZkaJsUEKGzxlQ8PEJzBH&ust=1722026667422000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiR_76Hw4cDFQAAAAAdAAAAABAJ",
        "title": "Bún bò Huế",
        "description": "Bún bò Huế is a spicy Vietnamese noodle soup from the city of Huế, flavored with lemongrass, shrimp paste, and chili oil. It contains rice vermicelli noodles, beef brisket, and pork knuckle, garnished with herbs."
    },
    {
        "img": "https://www.wokandkin.com/wp-content/uploads/2021/10/Offal-Congee-saved-for-web.png",
        "title": "Cháo lòng",
        "description": "Cháo lòng is a Vietnamese rice porridge made with rice, offal (such as liver and heart), and sometimes minced pork. It's flavored with ginger and served with fried dough sticks (quẩy) and herbs. This comforting dish is popular for breakfast or as a late-night snack."
    },
    {
        "img": "https://carlsbadcravings.com/wp-content/uploads/2021/01/Dan-Dan-Noodles-20.jpg",
        "title": "Dan dan noodles",
        "description": "Dan dan noodles are a spicy Sichuan dish featuring noodles topped with a spicy sauce made from chili oil, Sichuan peppercorns, minced pork, and preserved vegetables. It's garnished with peanuts and green onions, offering a bold and flavorful taste experience."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2024/01/Mapo-Tofu-5685-III.jpg",
        "title": "Mapo tofu",
        "description": "Mapo tofu is a famous Sichuan dish made with soft tofu, minced pork (or beef), fermented black beans, chili oil, and Sichuan peppercorns. It has a spicy and numbing flavor profile and is often garnished with green onions. It's a favorite comfort food in China."
    },
    {
        "img": "https://s23209.pcdn.co/wp-content/uploads/2017/01/Easy-Hot-and-Sour-SoupIMG_0682.jpg",
        "title": "Hot and sour soup",
        "description": "Hot and sour soup is a spicy and tangy Chinese soup made with tofu, mushrooms, bamboo shoots, and eggs in a flavorful broth seasoned with vinegar, soy sauce, and chili. It's known for its balance of heat and sourness, offering a comforting and refreshing meal."
    },
    {
        "img": "https://assets.epicurious.com/photos/54b3b94221388ef838b0bd23/master/pass/357515_sichuan-beef-noodle-soup_1x1.jpg",
        "title": "Sichuan beef noodle soup",
        "description": "Sichuan beef noodle soup is a hearty dish featuring tender beef slices, Chinese wheat noodles, and vegetables in a spicy Sichuan-style broth flavored with chili oil, Sichuan peppercorns, and various spices. It's a popular street food and comfort dish in China."
    },
    {
        "img": "https://www.slimmingeats.com/blog/wp-content/uploads/2013/01/sausage-breakfast-skillet-12-720x405.jpg",
        "title": "Breakfast skillet with eggs, potatoes, and sausage",
        "description": "A breakfast skillet is a hearty American dish made with scrambled eggs, crispy potatoes, sausage crumbles, and sometimes onions and bell peppers, all cooked together in a skillet. It's a satisfying breakfast choice that's packed with protein and flavor."
    },
    {
        "img": "https://www.sipandfeast.com/wp-content/uploads/2021/10/bacon-egg-cheese-recipe-snippet.jpg",
        "title": "Bacon, egg, and cheese sandwich",
        "description": "The bacon, egg, and cheese sandwich is a classic American breakfast staple featuring crispy bacon, a fried egg, and melted cheese (often American or cheddar) served on a toasted or grilled bread roll. It's a savory and satisfying sandwich enjoyed any time of day."
    },
    {
        "img": "https://media.istockphoto.com/id/187105043/photo/biscuits-and-gravy.jpg?s=612x612&w=0&k=20&c=TO6DMTvjT_dML-nVfqvKURXbRNmYO49meElkzFpI3f4=",
        "title": "Sausage gravy and biscuits",
        "description": "Sausage gravy and biscuits is a Southern American breakfast dish consisting of fluffy biscuits topped with creamy sausage gravy made from sausage drippings, flour, milk, and seasoned with salt and pepper. It's a comforting and indulgent breakfast option."
    },
    {
        "img": "https://cookieandkate.com/images/2017/05/best-huevos-rancheros-recipe-2.jpg",
        "title": "Huevos rancheros",
        "description": "Huevos Rancheros is a Mexican breakfast dish consisting of fried eggs served on tortillas with a tomato-chili sauce. It's often garnished with refried beans, avocado, and cilantro, offering a hearty and flavorful start to the day."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/homemade-easy-indian-butter-chicken-600nw-2262040531.jpg",
        "title": "Curry rice",
        "description": "Curry rice is a popular Japanese dish consisting of thick curry sauce (often made with curry roux blocks) served over steamed rice. The curry can include vegetables, meat (like chicken, pork, or beef), and sometimes even fruit. It's a comforting and hearty meal enjoyed across Japan."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/buta-no-kakuni-japanese-dish-600nw-1982972282.jpg",
        "title": "Buta no kakuni",
        "description": "Buta no kakuni is a Japanese dish of braised pork belly simmered in a sweet and savory sauce made with soy sauce, sugar, sake, and ginger. The pork becomes tender and flavorful after slow cooking, making it a popular dish."
    }]
const mealBreakfastSaltyHeavyCold = [
    {
        "img": "https://cinnamonsnail.com/wp-content/uploads/2023/08/banh-trang-tron-FEATURE-1.jpg",
        "title": "Bánh tráng trộn",
        "description": "Bánh tráng trộn is a vibrant Vietnamese street food salad made with shredded rice paper, mixed with herbs, peanuts, quail eggs, dried shrimp, and a tangy dressing of lime juice, fish sauce, and chili."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, pork, vermicelli noodles, lettuce, and herbs, wrapped in moistened rice paper and served with hoisin-peanut dipping sauce."
    },
    {
        "img": "https://i.ytimg.com/vi/ueSmw3tgXBI/maxresdefault.jpg",
        "title": "Gỏi đu đủ bò khô",
        "description": "Gỏi đu đủ bò khô is a refreshing Vietnamese salad made with shredded green papaya, beef jerky, herbs, peanuts, and a sweet-sour-spicy dressing typically made with fish sauce, lime juice, and chili."
    },
    {
        "img": "https://assets.epicurious.com/photos/647a294bffb3de465867f5fb/4:3/w_2887,h_2165,c_limit/Banh%20Cuon-RECIPE.jpg",
        "title": "Bánh cuốn",
        "description": "Bánh cuốn is a delicate Vietnamese dish consisting of thin, steamed rice flour rolls filled with seasoned minced pork and wood ear mushrooms, served with fried shallots, fresh herbs, and dipping sauce."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "Liangpi is a cold Chinese noodle dish from Shaanxi Province, made with wheat noodles tossed in a savory sauce of sesame paste, chili oil, vinegar, and garlic, topped with julienned cucumbers and bean sprouts."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/07/cold-noodles-with-Sichuan-dressing-4-scaled.jpg",
        "title": "Leng mian",
        "description": "Leng mian is a traditional Chinese dish featuring cold noodles served in a light broth seasoned with soy sauce, sesame oil, vinegar, and sometimes topped with shredded chicken or vegetables."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/09/eggplant-with-garlic-sauce-2-scaled.jpg",
        "title": "Yuxiang qiezi",
        "description": "Yuxiang qiezi is a cold Sichuan-style dish of marinated eggplant slices served cold, seasoned with garlic, ginger, soy sauce, vinegar, and chili oil, offering a spicy and savory flavor."
    },
    {
        "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
        "title": "Cobb salad",
        "description": "Cobb salad is an American main-dish salad featuring chopped lettuce topped with rows of bacon, avocado, blue cheese, tomatoes, hard-boiled eggs, grilled chicken, and a red wine vinaigrette."
    },
    {
        "img": "https://th.bing.com/th/id/R.0a70f88fb08d7333a727d1f9b0e9169b?rik=ibOCMY9U7GfT5w&pid=ImgRaw&r=0",
        "title": "Bagel with lox and cream cheese",
        "description": "A bagel with lox and cream cheese is a classic American breakfast or brunch dish featuring a toasted bagel topped with cream cheese, smoked salmon (lox), red onions, capers, and sometimes tomato slices."
    },
    {
        "img": "https://downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main-600x600.jpg",
        "title": "Greek salad",
        "description": "Greek salad is a fresh Mediterranean salad made with tomatoes, cucumbers, red onions, olives, and feta cheese, seasoned with oregano and dressed with olive oil and lemon juice, offering a tangy and salty flavor."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2021/08/23/04/55/somen-6566678_1280.jpg",
        "title": "Somen",
        "description": "Somen is a light Japanese dish featuring thin wheat noodles served cold and dipped in a soy-based sauce flavored with mirin and dashi, often garnished with shredded nori seaweed and sliced green onions."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi chuka",
        "description": "Hiyashi chuka is a refreshing Japanese summer dish featuring cold ramen noodles topped with julienned vegetables, strips of egg crepe, ham or chicken, and dressed with a tangy soy sauce-based dressing."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2020/01/Tofu-Salad-with-Sesame-Ponzu-Dressing-3421-I.jpg",
        "title": "Tofu salad with sesame dressing",
        "description": "Tofu salad with sesame dressing is a Japanese salad made with fresh tofu cubes, mixed greens, tomatoes, cucumbers, and avocado, drizzled with a creamy sesame dressing made from toasted sesame seeds, soy sauce, and vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/1742686184/photo/naengmyeon.jpg?s=612x612&w=0&k=20&c=yZSfJu4qtLLPJDDqh8Mrjs1o5dnEY6xqFDBA51UFlIU=",
        "title": "Naengmyeon",
        "description": "Naengmyeon is a Korean cold noodle dish featuring chewy buckwheat noodles served in a tangy iced broth made from beef or dongchimi (radish water kimchi), topped with cucumber, pickled radish, and a boiled egg."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/kong-guksu-cold-korean-soup-top-view-soy-milk-korean-soup-kongguksu-kong-guksu-rice-noodle-nuts-sesame-topped-123098167.jpg",
        "title": "Kongguksu",
        "description": "Kongguksu is a Korean noodle dish featuring noodles made from ground soybeans served in a chilled soy milk broth seasoned with garlic and garnished with cucumber and sesame seeds, offering a creamy and refreshing flavor."
    },
    {
        "img": "https://media.istockphoto.com/id/1156476111/photo/jokbal-korean-traditional-food.jpg?s=612x612&w=0&k=20&c=cxs6A7ayrOz_rIdqc-sas1bbYoJ0axV08Hy_GlM1K6M=",
        "title": "Jokbal",
        "description": "Jokbal is a Korean dish of cold braised pig's trotters seasoned with soy sauce, garlic, ginger, and sugar, offering a savory and slightly sweet flavor and tender texture, often served with mustard and kimchi."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/insalata-di-riso-italian-rice-salad-zucchini-tomatoes-33071946.jpg",
        "title": "Insalata di riso",
        "description": "Insalata di riso is an Italian cold rice salad made with Arborio or similar short-grain rice, mixed with vegetables such as bell peppers, peas, and carrots, dressed with olive oil, vinegar, and sometimes mayonnaise."
    },
    {
        "img": "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
        "title": "Caprese salad",
        "description": "Caprese salad is a classic Italian salad made with slices of ripe tomatoes, fresh mozzarella cheese, and basil leaves, drizzled with extra virgin olive oil, seasoned with salt and pepper, and sometimes balsamic vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/136183596/photo/tuna-calf.jpg?s=612x612&w=0&k=20&c=veJ2M1FAqUMmDQt1ZIAHOkMn_GYIPQD72vhmy68U-yo=",
        "title": "Vitello tonnato",
        "description": "Vitello tonnato is an Italian dish of cold, sliced veal topped with a creamy sauce made from canned tuna, mayonnaise, capers, anchovies, and lemon juice, offering a unique blend of flavors and textures."
    },
    {
        "img": "https://media.istockphoto.com/id/475045278/photo/concept-of-italian-food.jpg?s=612x612&w=0&k=20&c=HMrSq5Y40hFe947eXsMsH3npA_5-3VlCZYL2a72QKmw=",
        "title": "Prosciutto e melone",
        "description": "Prosciutto e melone is an Italian appetizer featuring thinly sliced prosciutto ham wrapped around slices of ripe cantaloupe or honeydew melon, offering a sweet and salty flavor combination."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade niçoise",
        "description": "Salade niçoise is a French salad originating from Nice, featuring mixed greens, tomatoes, boiled potatoes, green beans, hard-boiled eggs, olives, and canned tuna, dressed with a vinaigrette and often garnished with anchovies."
    },
    {
        "img": "https://us.123rf.com/450wm/yatomo/yatomo2001/yatomo200100094/137596053-traditional-french-pate-en-croute-with-goose-meat-and-liver-as-closeup-with-red-wine-on-a-wooden.jpg",
        "title": "Pâté en croûte",
        "description": "Pâté en croûte is a French dish of cold pâté (such as pork, liver, or game) encased in a crisp pastry crust, often served as a slice with pickles or salad, showcasing a blend of rich flavors and textures."
    },
    {
        "img": "https://media.istockphoto.com/id/1370267479/photo/delicious-meat-terrine-with-slice-chicken-green-peas-and-dried-fruits-meatloaf.jpg?s=612x612&w=0&k=20&c=0iDpLY16rax0aLif9Uq0y1bfAOr-paJMKnmayH7XcQw=",
        "title": "Terrine",
        "description": "Terrine is a French dish of cold, finely ground meat (like pork, veal, or game) mixed with herbs, spices, and sometimes vegetables or fruits, pressed into a loaf shape, then sliced and served cold."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory pie filled with a custard mixture of eggs and cream, combined with crispy bacon pieces, cheese (such as Gruyère), and seasoned with nutmeg, baked in a buttery pastry crust."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.jTs1DSLWIeRaZ9y9okHo6wHaFV?rs=1&pid=ImgDetMain",
        "title": "Tostada de ceviche",
        "description": "Tostada de ceviche is a Mexican dish featuring ceviche (citrus-marinated seafood like shrimp or fish) served atop a crispy fried corn tortilla, garnished with avocado, cilantro, onions, and sometimes salsa."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a Mexican salad made with tender cooked cactus pads (nopales), diced tomatoes, onions, cilantro, and sometimes avocado, dressed with lime juice and olive oil, offering a fresh and tangy flavor."
    },
    {
        "img": "https://media.istockphoto.com/id/1200136076/photo/shrimp-street-tacos.jpg?s=612x612&w=0&k=20&c=QSliAiLbFEmF7WPN69yEc-weAInG6A4GquGxaGEgBzE=",
        "title": "Tacos de pescado",
        "description": "Tacos de pescado are Mexican street tacos filled with crispy beer-battered fish (like cod or tilapia), topped with shredded cabbage, pico de gallo, creamy avocado sauce, and a squeeze of lime, served in warm corn tortillas."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.fopBxuC9ivEz84xujCLVJQHaE7?rs=1&pid=ImgDetMain",
        "title": "Enfrijoladas",
        "description": "Enfrijoladas are Mexican tortillas dipped in a savory black bean sauce made with onion, garlic, and epazote, filled with shredded chicken or cheese, rolled up, topped with more bean sauce, cheese, and crema."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som tam",
        "description": "Som tam is a Thai salad made with shredded green papaya, tomatoes, green beans, peanuts, and chilies, dressed in a tangy and spicy dressing made from lime juice, fish sauce, palm sugar, and garlic."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "Larb is a Thai salad made with minced meat (such as chicken, pork, or beef), mixed with herbs like mint and cilantro, toasted rice powder, lime juice, fish sauce, and chili flakes, offering a vibrant and spicy flavor."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/yam-wun-sen-27929339.jpg",
        "title": "Yum woon sen",
        "description": "Yum woon sen is a Thai glass noodle salad featuring vermicelli noodles, shrimp, minced pork, onions, tomatoes, celery, and peanuts, dressed in a tangy sauce made from lime juice, fish sauce, and chili."
    },
    {
        "img": "https://www.funkyasiankitchen.com/wp-content/uploads/2021/04/ZESTY-SHRIMP-SALAD-prep-photo-26.jpg",
        "title": "Pla goong",
        "description": "Pla goong is a Thai salad featuring grilled shrimp tossed with lemongrass, shallots, mint leaves, cilantro, lime juice, fish sauce, and chili, offering a spicy and refreshing flavor profile."
    }
]
const mealBreakfastSaltyLightHot = [
    {
        "img": "https://thumbs.dreamstime.com/b/vietnamese-mixed-steamed-glutinous-rice-bowl-traditional-food-vietnam-xoi-xeo-vietnamese-vietnamese-mixed-steamed-111291946.jpg",
        "title": "Xoi Ga",
        "description": "Xoi Ga is a Vietnamese dish featuring sticky rice topped with shredded chicken, fried shallots, and optionally steamed or fried egg, often served with Vietnamese sausage."
    },
    {
        "img": "https://media.istockphoto.com/id/499489654/photo/good-rieu.jpg?s=612x612&w=0&k=20&c=NGhF8-8lOhIxJV2joz17cK3K0eImPL3wBSd2ic_pY-0=",
        "title": "Bun Rieu",
        "description": "Bun Rieu is a Vietnamese soup made with crab paste, tomatoes, tofu, and vermicelli noodles, garnished with herbs and often served with shrimp paste and lime wedges."
    },
    {
        "img": "https://media.istockphoto.com/id/1959537343/photo/vietnamese-cha-gio.jpg?s=612x612&w=0&k=20&c=ZM5oTzwhpi4iOVmj0WWEtgawLBC_ECGQ1VHazRk4H5Q=",
        "title": "Cha Gio",
        "description": "Cha Gio are Vietnamese crispy spring rolls filled with minced pork, mushrooms, and vegetables, typically served with lettuce, herbs, and dipping sauces like nuoc cham."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/com-tam-bi-cha-suon-600nw-1468272257.jpg",
        "title": "Com Tam Bi",
        "description": "Com Tam Bi is a Vietnamese dish featuring broken rice topped with grilled pork, shredded pork skin, pickled vegetables, and a side of fish sauce for seasoning."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/01/25/49/98/360_F_125499864_Wf3dJxn7KQUS0d4a18Ez9Y1sQT4pQZ8m.jpg",
        "title": "Doujiang",
        "description": "Doujiang is Chinese soy milk served either hot or cold. It's a popular breakfast beverage and can be sweetened or unsweetened. In summer, chilled doujiang is enjoyed for its cooling properties.."
    },
    {
        "img": "https://live.staticflickr.com/2923/13938936982_63d219fb30_b.jpg",
        "title": "Shao Bing You Tiao",
        "description": "Shao Bing You Tiao consists of flaky sesame flatbread wrapped around crispy fried dough sticks, popular in China as a breakfast or snack item."
    },
    {
        "img": "https://media.istockphoto.com/id/1301888183/photo/grilled-dumplings.jpg?s=612x612&w=0&k=20&c=U4ufreCd2RFdTc846T3hfzGGRe4Qy1w0rnyVBjoixhE=",
        "title": "Jiaozi",
        "description": "Jiaozi are Chinese dumplings filled with meat, vegetables, or seafood, traditionally served boiled or pan-fried, and often enjoyed with dipping sauces like soy-vinegar."
    },
    {
        "img": "https://carlsbadcravings.com/wp-content/uploads/2021/01/Dan-Dan-Noodles-20.jpg",
        "title": "Dan Dan Noodles",
        "description": "Dan Dan Noodles are a spicy Sichuan noodle dish with minced pork, chili oil, Sichuan peppercorns, and preserved vegetables, garnished with peanuts and scallions."
    },
    {
        "img": "https://media.istockphoto.com/id/178878562/photo/organic-sunnyside-up-egg-with-toast-and-bacon.jpg?s=612x612&w=0&k=20&c=tAGjuHzjveYyZQVjU3jUVPMI8Iw4vo98L58DDiGi6zA=",
        "title": "Bacon and Eggs",
        "description": "Bacon and Eggs is a classic American breakfast featuring strips of crispy bacon served with sunny-side-up or scrambled eggs, often accompanied by toast or hash browns."
    },
    {
        "img": "https://static.vecteezy.com/system/resources/thumbnails/015/751/438/small/breakfast-biscuit-with-sausage-photo.jpg",
        "title": "Sausage Biscuit",
        "description": "A Sausage Biscuit is a popular American breakfast sandwich with a savory sausage patty sandwiched between a split biscuit, sometimes served with cheese or a fried egg."
    },
    {
        "img": "https://media.istockphoto.com/id/166327885/photo/creamy-cheese-grits.jpg?s=612x612&w=0&k=20&c=Tk2aaZF_ULF1VNKcXnpIOeowQpvB2ZR-2hNtRAtfzL8=",
        "title": "Grits with Cheese",
        "description": "Grits with Cheese is a Southern American dish made from ground corn boiled into a creamy porridge, mixed with butter and shredded cheese for a rich, comforting breakfast."
    },
    {
        "img": "https://media.istockphoto.com/id/529117141/photo/bagel-breakfast-sandwich.jpg?s=612x612&w=0&k=20&c=lFksWZKEVW6t6J-LG2j_0OY7m5rMd8Ps1VLDtMgqw-g=",
        "title": "Breakfast Sandwich with Ham",
        "description": "A Breakfast Sandwich with Ham typically includes slices of ham, cheese, and sometimes a fried egg or mayonnaise, served between toasted bread or a biscuit."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/gyudon-japanese-food-600nw-2208682537.jpg",
        "title": "Gyuudon",
        "description": "Gyuudon is a Japanese dish consisting of thinly sliced beef and onions simmered in a savory-sweet sauce, served over steamed rice and garnished with pickled ginger."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/japanese-curry-rice-kare-raisu-close-up-vertical-top-vie-japanese-curry-rice-kare-raisu-close-up-plate-vertical-top-103151172.jpg",
        "title": "Kare Raisu",
        "description": "Kare Raisu is a Japanese dish of rice topped with a thick curry sauce made with meat, vegetables, and curry roux, often served with fukujinzuke (pickled vegetables)."
    },
    {
        "img": "https://1mal1japan.de/wp-content/uploads/2018/07/Okonomiyaki-Titelbild_1200x800.jpg",
        "title": "Oyakodon",
        "description": "Oyakodon is a Japanese rice bowl topped with simmered chicken and onions in a sweet-savory broth of soy sauce and mirin, with beaten eggs cooked and set over the dish."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "Kimchi Jjigae is a Korean stew made with kimchi, pork or tofu, vegetables, and gochujang (Korean chili paste), simmered together to create a spicy and tangy broth."
    },
    {
        "img": "https://media.istockphoto.com/id/1460710905/photo/gimbap-a-korean-rice-dish.jpg?s=612x612&w=0&k=20&c=PdER2SYsBW_iK_NaGmHpKlMwe0jvXgeA7SS4j2O7prg=",
        "title": "Kimbap",
        "description": "Kimbap are Korean rice rolls filled with seasoned vegetables, egg, and meat or fish, tightly wrapped in seaweed and sliced into bite-sized pieces for a nutritious snack or meal."
    },
    {
        "img": "https://drivemehungry.com/wp-content/uploads/2021/10/korean-steamed-eggs-gyeran-jjim-13.jpg",
        "title": "Gyeran Jjim",
        "description": "Gyeran Jjim is a Korean steamed egg dish made from beaten eggs mixed with water or broth, steamed until fluffy, often garnished with scallions or other toppings."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/03/50/52/06/360_F_350520678_7M3gd4b4SwCAlvFNQQVPFAXP3Xk9FXFD.jpg",
        "title": "Sundae",
        "description": "Sundae is a Korean sausage made from pig intestines stuffed with glass noodles, pork blood, and seasoned with garlic, salt, and pepper, served steamed or grilled."
    },
    {
        "img": "https://media.istockphoto.com/id/475045278/photo/concept-of-italian-food.jpg?s=612x612&w=0&k=20&c=HMrSq5Y40hFe947eXsMsH3npA_5-3VlCZYL2a72QKmw=",
        "title": "Prosciutto e Melone",
        "description": "Prosciutto e Melone is an Italian appetizer featuring thinly sliced prosciutto draped over sweet cantaloupe or honeydew melon slices, a delightful combination of salty and sweet flavors."
    },
    {
        "img": "https://st.depositphotos.com/3220235/4198/i/450/depositphotos_41981983-stock-photo-classic-caprese-salad.jpg",
        "title": "Caprese Salad",
        "description": "Caprese Salad is a simple Italian salad made with fresh mozzarella cheese, ripe tomatoes, basil leaves, olive oil, and balsamic vinegar, representing the colors of the Italian flag."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is an Italian salad made with stale bread, tomatoes, cucumbers, onions, basil, and dressed with olive oil and vinegar, creating a refreshing and rustic dish."
    },
    {
        "img": "https://media.istockphoto.com/id/1185811508/photo/breakfast-french-cuisine-croque-madame-sandwich-close-up-on-the-table.jpg?s=612x612&w=0&k=20&c=AfwWEEH750VH558zlRzL3BdnbipkSNJJ2L6IAbd1d6o=",
        "title": "Croque Madame",
        "description": "Croque Madame is a French sandwich filled with ham, Gruyère cheese, and béchamel sauce, topped with a fried egg, often served open-faced and gratinéed."
    },
    {
        "img": "https://foragerchef.com/wp-content/uploads/2017/03/Wild-Mushroom-Tartine-4.jpg",
        "title": "Tartine",
        "description": "A Tartine is a French open-faced sandwich topped with various ingredients such as cheese, vegetables, or meats, typically served on a slice of crusty bread."
    },
    {
        "img": "https://media.istockphoto.com/id/1304861589/photo/onion-pie-or-quiche.jpg?s=612x612&w=0&k=20&c=eHlInFnqu1GIEXyJvPzD-CacZcOVAmDYS5JR4Rq3frg=",
        "title": "Quiche aux Légumes",
        "description": "Quiche aux Légumes is a French savory pie filled with a creamy mixture of eggs, milk, cheese, and assorted vegetables, baked in a flaky pastry crust."
    },
    {
        "img": "https://mariefoodtips.com/wp-content/uploads/2023/05/oeufs-cocotte-facon-shakshuka-683x1024.jpg",
        "title": "Oeufs Cocotte",
        "description": "Oeufs Cocotte are French baked eggs cooked in individual ramekins with cream, cheese, and herbs, often served with toast or crusty bread for dipping."
    },
    {
        "img": "https://www.muydelish.com/wp-content/uploads/2023/04/huevos-chorizo-500x500.jpg",
        "title": "Chorizo con Huevos",
        "description": "Chorizo con Huevos is a traditional Mexican breakfast dish featuring spicy chorizo sausage sautéed with scrambled or fried eggs, served with tortillas or bread."
    },
    {
        "img": "https://t4.ftcdn.net/jpg/00/98/33/81/360_F_98338145_c3bK28mU1LxpDMbnKFU4jlhmOZ3o11gU.jpg",
        "title": "Tacos de Chicharrón",
        "description": "Tacos de Chicharrón are Mexican tacos filled with crispy fried pork skins (chicharrón), topped with salsa, onions, cilantro, and lime juice for a crunchy and flavorful meal."
    },
    {
        "img": "https://www.tastesoflizzyt.com/wp-content/uploads/2019/04/salsa-verde-chicken-quesadilla-7-480x270.jpg",
        "title": "Quesadillas con Salsa Verde",
        "description": "Quesadillas con Salsa Verde are Mexican tortillas filled with cheese and optionally other ingredients like chicken or vegetables, folded and grilled, served with tangy green salsa."
    },
    {
        "img": "https://st4.depositphotos.com/12847240/31601/i/450/depositphotos_316014688-stock-photo-chilaquiles.jpg",
        "title": "Chilaquiles Verdes",
        "description": "Chilaquiles Verdes are a traditional Mexican breakfast dish made from fried corn tortilla chips simmered in green salsa, topped with cheese, sour cream, and sometimes eggs."
    },
    {
        "img": "https://st4.depositphotos.com/1811868/20172/i/450/depositphotos_201729848-stock-photo-khao-pad-shrimp-vegetables-cucumber.jpg",
        "title": "Khao Pad",
        "description": "Khao Pad is a Thai dish of stir-fried rice with eggs, meat (such as chicken, pork, or shrimp), vegetables, and flavored with soy sauce and sometimes chili."
    },
    {
        "img": "https://img.freepik.com/premium-photo/pad-krapow-moo-saap-thai-basil-pork-with-fried-egg_818261-51706.jpg",
        "title": "Pad Krapow Moo Saap",
        "description": "Pad Krapow Moo Saap is a Thai stir-fry dish made with minced or sliced pork cooked with garlic, chilies, and holy basil, served over rice with a fried egg on top."
    },
    {
        "img": "https://upload.wikimedia.org/wikipedia/commons/6/68/Khao_kha_mu_02.JPG",
        "title": "Khao Kha Moo",
        "description": "Khao Kha Moo is a Thai dish consisting of stewed pork leg served over rice with pickled mustard greens and a boiled egg, often accompanied by a side of chili vinegar."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/11/Kao-mun-gai-blog.jpg",
        "title": "Kao Mun Gai",
        "description": "Kao Mun Gai is a Thai version of Hainanese chicken rice, featuring poached chicken served with fragrant rice cooked in chicken broth, garnished with cucumber and cilantro."
    }
]
const mealBreakfastSaltyLightCold = [
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi cuốn",
        "description": "Gỏi cuốn are Vietnamese fresh spring rolls filled with shrimp, pork, vermicelli noodles, lettuce, and herbs, wrapped in moistened rice paper and served with hoisin-peanut dipping sauce."
    },
    {
        "img": "https://i.ytimg.com/vi/ueSmw3tgXBI/maxresdefault.jpg",
        "title": "Gỏi đu đủ bò khô",
        "description": "Gỏi đu đủ bò khô is a refreshing Vietnamese salad made with shredded green papaya, beef jerky, herbs, peanuts, and a sweet-sour-spicy dressing typically made with fish sauce, lime juice, and chili."
    },
    {
        "img": "https://cdn3.didevelop.com/public/cdn/533_e333d1f60a2879cb4fb3350a576118d9.jpg",
        "title": "Gỏi xoài",
        "description": "Gỏi xoài is a Vietnamese salad featuring shredded green mango, carrots, herbs, peanuts, and sometimes shrimp or pork, dressed in a tangy sauce made from fish sauce, lime juice, and sugar."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/banh-beo-traditional-cake-vietnam-600nw-1638264244.jpg",
        "title": "Bánh bèo",
        "description": "Bánh bèo are Vietnamese steamed rice cakes topped with minced shrimp and crispy pork skin, served in small saucers and typically eaten with a savory fish sauce dressing, garlic, and shallots."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/chinese-smashed-cucumber-salad-pai-600nw-1657407382.jpg",
        "title": "Pai huang gua",
        "description": "Pai huang gua is a Chinese salad made with smashed cucumbers, seasoned with garlic, vinegar, soy sauce, sesame oil, and chili oil, creating a refreshing and flavorful dish."
    },
    {
        "img": "https://i0.wp.com/blog.themalamarket.com/wp-content/uploads/2022/04/suanni-bairou-7.jpg?resize=800%2C1000&ssl=1",
        "title": "Suan ni bai rou",
        "description": "Suan ni bai rou is a Chinese cold dish featuring thinly sliced pork belly served cold with a tangy dressing of garlic, vinegar, soy sauce, and sesame oil, offering a balance of flavors and textures."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/5e2e09cc10214c6701360d94/9b9296dd-880c-400b-adf6-2a46ea73de31/dish1.jpg",
        "title": "Liang cai",
        "description": "Liang cai is a Chinese salad of cold mixed vegetables such as bean sprouts, carrots, and bell peppers, marinated in a tangy vinegar dressing with sesame oil, garlic, and chili, providing a crisp and refreshing flavor."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/07/cold-noodles-with-Sichuan-dressing-4-480x270.jpg",
        "title": "Leng mian",
        "description": "Leng mian is a Chinese dish of cold wheat noodles dressed in a flavorful sauce made with vinegar, soy sauce, sesame oil, garlic, and chili oil, topped with cucumber and sometimes shredded chicken or pork."
    },
    {
        "img": "https://media.istockphoto.com/id/544814224/photo/fresh-caesar-salad.webp?b=1&s=170667a&w=0&k=20&c=B4sDOCkdc_I4Yu2-2a6ZOl9BwmB3PbOej_CcmAJXAxk=",
        "title": "Caesar salad",
        "description": "Caesar salad is an American salad made with romaine lettuce, croutons, Parmesan cheese, and a creamy dressing made from garlic, anchovies, olive oil, egg yolks, lemon juice, and Dijon mustard."
    },
    {
        "img": "https://media.istockphoto.com/id/1262489775/photo/greek-yogurt-with-fruits-and-honey.jpg?s=612x612&w=0&k=20&c=atoujHAVvn5AIvPIqn7LXO_vhCoyGM6L6BTwrps29d8=",
        "title": "Greek yogurt with fresh fruits and honey",
        "description": "Greek yogurt with fresh fruits and honey is a nutritious American breakfast or snack featuring thick Greek yogurt topped with seasonal fresh fruits like berries, peaches, and bananas, drizzled with honey."
    },
    {
        "img": "https://fortheloveofcooking-net.exactdn.com/wp-content/uploads/2013/05/DSC_4449.1.jpg?strip=all&lossy=1&quality=90&ssl=1",
        "title": "Fruit salad with citrus dressing",
        "description": "Fruit salad with citrus dressing is a refreshing American salad made with assorted fresh fruits such as melons, berries, grapes, and citrus segments, tossed in a tangy dressing of orange juice, lemon juice, and honey."
    },
    {
        "img": "https://media.istockphoto.com/id/619073422/photo/toasted-bagel-with-smoked-salmon-and-cream-cheese.jpg?s=612x612&w=0&k=20&c=n3ptwNBcnqlPOGH-MGOVY0dZNhnPZaeSyZ86tl6URzU=",
        "title": "Smoked salmon and cream cheese on a bagel",
        "description": "Smoked salmon and cream cheese on a bagel is a classic American breakfast or brunch dish featuring a toasted bagel topped with cream cheese, smoked salmon, red onions, capers, and sometimes tomatoes."
    },
    {
        "img": "https://imag.bonviveur.com/portada-del-sunomono.jpg",
        "title": "Sunomono",
        "description": "Sunomono is a Japanese salad made with thinly sliced cucumbers marinated in a sweet and tangy vinegar dressing, often flavored with soy sauce, sugar, and sesame seeds, offering a refreshing accompaniment to meals."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a Japanese dish featuring cold tofu served with various toppings like grated ginger, bonito flakes, green onions, soy sauce, and sometimes sesame seeds, offering a simple yet flavorful experience."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2021/08/23/04/55/somen-6566678_1280.jpg",
        "title": "Somen",
        "description": "Somen is a light Japanese dish featuring thin wheat noodles served cold and dipped in a soy-based sauce flavored with mirin and dashi, often garnished with shredded nori seaweed and sliced green onions."
    },
    {
        "img": "https://www.chopstickchronicles.com/wp-content/uploads/2020/01/Gomaae-30.jpg",
        "title": "Goma-ae",
        "description": "Goma-ae is a Japanese side dish featuring blanched vegetables (like spinach or green beans) dressed in a sweet and nutty sesame dressing made from ground sesame seeds, soy sauce, sugar, and mirin."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/15/0/FNK_Kongguksu_H3_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1657896779552.webp",
        "title": "Kongguksu",
        "description": "Kongguksu is a Korean noodle dish featuring noodles made from ground soybeans served in a chilled soy milk broth seasoned with garlic and garnished with cucumber and sesame seeds, offering a creamy and refreshing flavor."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2016/03/02/02/37/mulhoe-1231643_1280.jpg",
        "title": "Mulhoe",
        "description": "Mulhoe is a Korean dish of spicy raw fish (such as hwe, a sashimi-like dish) served in an icy cold and tangy broth made from gochujang (red chili paste), vinegar, sugar, and sesame oil, garnished with vegetables."
    },
    {
        "img": "https://www.koreanbapsang.com/wp-content/uploads/2011/07/DSC_4974-2-e1563170940691.jpg",
        "title": "Naengguk",
        "description": "Naengguk is a Korean chilled soup made with pureed cucumber, seasoned with garlic, soy sauce, vinegar, and sometimes chili flakes, served as a refreshing and light appetizer or side dish."
    },
    {
        "img": "https://media.istockphoto.com/id/1417192118/photo/japchae-korean-traditional-stir-fry-glass-noodles.jpg?s=612x612&w=0&k=20&c=hcDvLc0qvukqTb7Ncv0GNzShzS2_8lxTc4zv3plvP5U=",
        "title": "Japchae",
        "description": "Japchae is a Korean dish of chewy glass noodles stir-fried with an assortment of vegetables like spinach, carrots, and mushrooms, seasoned with soy sauce, sesame oil, and sometimes beef or tofu."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/00/30/06/64/360_F_30066407_DeGiNlaRaAKlnzy10gOoR4vX1xUelgGo.jpg",
        "title": "Insalata di mare",
        "description": "Insalata di mare is an Italian seafood salad featuring a mix of seafood such as shrimp, squid, octopus, and mussels, marinated in a lemony vinaigrette with olive oil, garlic, parsley, and sometimes chili flakes."
    },
    {
        "img": "https://st.depositphotos.com/3220235/4198/i/450/depositphotos_41981983-stock-photo-classic-caprese-salad.jpg",
        "title": "Caprese salad",
        "description": "Caprese salad is a classic Italian salad made with slices of ripe tomatoes, fresh mozzarella cheese, and basil leaves, drizzled with extra virgin olive oil, seasoned with salt and pepper, and sometimes balsamic vinegar."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is an Italian salad made with stale bread cubes, tomatoes, cucumbers, onions, and basil, dressed with olive oil, vinegar, and sometimes soaked in the tomato juices, offering a rustic and refreshing dish."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade niçoise",
        "description": "Salade niçoise is a French salad originating from Nice, featuring mixed greens, tomatoes, boiled potatoes, green beans, hard-boiled eggs, olives, and canned tuna, dressed with a vinaigrette and often garnished with anchovies."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/escargot-served-25101255.jpg",
        "title": "Escargot",
        "description": "Escargot is a French dish of cooked land snails served in their shells, often prepared with garlic and parsley butter, offering a rich and earthy flavor that is a delicacy in French cuisine."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
        "title": "Ratatouille",
        "description": "Ratatouille is a French vegetable stew made with tomatoes, zucchini, eggplant, bell peppers, onions, and garlic, cooked in olive oil and seasoned with herbs like thyme and basil, offering a flavorful and hearty dish."
    },
    {
        "img": "https://media.istockphoto.com/id/1370267479/photo/delicious-meat-terrine-with-slice-chicken-green-peas-and-dried-fruits-meatloaf.jpg?s=612x612&w=0&k=20&c=0iDpLY16rax0aLif9Uq0y1bfAOr-paJMKnmayH7XcQw=",
        "title": "Terrine",
        "description": "Terrine is a French dish of cold, finely ground meat (like pork, veal, or game) mixed with herbs, spices, and sometimes vegetables or fruits, pressed into a loaf shape, then sliced and served cold."
    },
    {
        "img": "https://media.istockphoto.com/id/167201561/photo/tostadas-de-ceviche-mexican-food.jpg?s=612x612&w=0&k=20&c=-NHSuOlfloWDW87G0qzIYBt7m0NonJzsCmQU4kw0bqc=",
        "title": "Ceviche tostada",
        "description": "Ceviche tostada is a Mexican dish featuring ceviche (citrus-marinated seafood like shrimp or fish) served atop a crispy fried corn tortilla, garnished with avocado, cilantro, onions, and sometimes salsa."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a Mexican salad made with tender cooked cactus pads (nopales), diced tomatoes, onions, cilantro, and sometimes avocado, dressed with lime juice and olive oil, offering a fresh and tangy flavor."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/5f6a1dbd370a3746884f6757/1652466152498-FW8SE76KMZPZNLISBMLY/public.jpeg",
        "title": "Tostada de atún",
        "description": "Tostada de atún is a Mexican dish featuring seasoned tuna salad served atop a crispy fried corn tortilla, garnished with slices of creamy avocado, diced tomatoes, onions, cilantro, and a squeeze of lime."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som tam",
        "description": "Som tam is a Thai salad made with shredded green papaya, tomatoes, green beans, peanuts, and chilies, dressed in a tangy and spicy dressing made from lime juice, fish sauce, palm sugar, and garlic."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/yam-wun-sen-27929339.jpg",
        "title": "Yum woon sen",
        "description": "Yum woon sen is a Thai glass noodle salad featuring vermicelli noodles, shrimp, minced pork, onions, tomatoes, celery, and peanuts, dressed in a tangy sauce made from lime juice, fish sauce, and chili."
    },
    {
        "img": "https://www.funkyasiankitchen.com/wp-content/uploads/2021/04/ZESTY-SHRIMP-SALAD-prep-photo-26.jpg",
        "title": "Pla goong",
        "description": "Pla goong is a Thai salad featuring grilled shrimp tossed with lemongrass, shallots, mint leaves, cilantro, lime juice, fish sauce, and chili, offering a spicy and refreshing flavor profile."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/larb-gai-spicy-chicken-close-up-34063230.jpg",
        "title": "Laab gai",
        "description": "Laab gai is a Thai salad made with minced chicken cooked with herbs like mint and cilantro, toasted rice powder, lime juice, fish sauce, and chili flakes, offering a vibrant and spicy flavor."
    }
]
const mealBreakfastSourHeavyHot = [
    {
        "img": "https://th.bing.com/th/id/R.40e73cc28852a4f8933d92ff004c9459?rik=RVl5eAgPmqegkQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2016%2f03%2fBanh-Xeo-Wide.jpg&ehk=vxSkYh%2fPULsZL%2bLFiwvGzG44ycUPBIF7zexCoe8wbvc%3d&risl=&pid=ImgRaw&r=0",
        "title": "Bánh xèo",
        "description": "Bánh xèo are crispy Vietnamese pancakes made from rice flour batter filled with shrimp, pork, bean sprouts, and herbs. They are served with fresh vegetables and dipping sauce.",
    },
    {
        "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.foodandwine.com%2Fbun-bo-hue-vietnamese-beef-noodle-soup-7372584&psig=AOvVaw0yZkaJsUEKGzxlQ8PEJzBH&ust=1722026667422000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCPiR_76Hw4cDFQAAAAAdAAAAABAJ",
        "title": "Bún bò Huế",
        "description": "Bún bò Huế is a spicy Vietnamese noodle soup from the city of Huế, flavored with lemongrass, shrimp paste, and chili oil. It contains rice vermicelli noodles, beef brisket, and pork knuckle, garnished with herbs.",
    },
    {
        "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Ch%C3%A1o_l%C3%B2ng.jpg/640px-Ch%C3%A1o_l%C3%B2ng.jpg",
        "title": "Cháo lòng",
        "description": "Cháo lòng is a Vietnamese rice porridge made with rice, offal (such as liver and heart), and sometimes minced pork. It's flavored with ginger and served with fried dough sticks (quẩy) and herbs. This comforting dish is popular for breakfast or as a late-night snack.",
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2024/05/suan-cai-yu-7-scaled.jpg",
        "title": "Suan cai yu",
        "description": "Suan cai yu is a spicy and tangy Chinese dish featuring tender fish slices in a flavorful broth with pickled mustard greens (suan cai), chili peppers, and Sichuan peppercorns.",
    },
    {
        "img": "https://earthtoveg.com/wp-content/uploads/2023/08/spicy-doufunao-15-500x375.jpg",
        "title": "Doufu nao",
        "description": "Doufu nao, also known as 'tofu brain', is a popular Chinese dish made from soft tofu cooked in a spicy and savory sauce typically flavored with minced meat, chili oil, and Sichuan peppercorns, creating a creamy and flavorful texture reminiscent of tofu pudding.",
    },
    {
        "img": "https://t3.ftcdn.net/jpg/01/25/49/98/360_F_125499864_Wf3dJxn7KQUS0d4a18Ez9Y1sQT4pQZ8m.jpg",
        "title": "Doujiang",
        "description": "Doujiang is Chinese soy milk served either hot or cold. It's a popular breakfast beverage and can be sweetened or unsweetened. In summer, chilled doujiang is enjoyed for its cooling properties.",
    },
    {
        "img": "https://whattocooktoday.com/wp-content/uploads/2018/05/singapore-noodles-10-500x375.jpg",
        "title": "Chao mi fen",
        "description": "Chao mi fen, a Chinese dish, consists of stir-fried rice vermicelli noodles combined with a variety of ingredients such as vegetables, meats, and often shrimp. Seasoned with soy sauce and sometimes curry powder, it offers a savory, satisfying flavor and a pleasingly chewy texture.",
    },
    {
        "img": "https://st2.depositphotos.com/1069468/5326/i/450/depositphotos_53261835-stock-photo-rustic-minced-corned-beef-potato.jpg",
        "title": "Corned Beef Hash",
        "description": "Corned beef hash is a comforting dish made from diced corned beef brisket, potatoes, and onions, all pan-fried until crispy and golden brown. Seasoned with salt, pepper, and sometimes herbs, it offers a hearty, savory flavor that pairs well with eggs for a classic breakfast or brunch option.",
    },
    {
        "img": "https://www.shutterstock.com/image-photo/mexican-traditional-chilaquiles-breakfast-national-600nw-2289060247.jpg",
        "title": "Chilaquiles",
        "description": "Chilaquiles is a traditional Mexican dish made from lightly fried corn tortillas cut into quarters and topped with green or red salsa (sauce). The dish is typically garnished with crema (Mexican sour cream), shredded chicken, cheese, onions, and avocado. It's often served with refried beans and can be accompanied by eggs or meat. Chilaquiles are known for their rich flavors and comforting textures, making them a popular breakfast or brunch choice in Mexico and beyond.",
    },
    {
        "img": "https://pickledplum.com/wp-content/uploads/2024/07/tofu-wakame-miso-soup-3-400x600.jpg",
        "title": "Miso Soup with Tofu and Wakame",
        "description": "Miso soup with tofu and wakame is a classic Japanese dish. It features a savory broth made from dashi (fish stock) and miso paste, with cubes of silken tofu and rehydrated wakame seaweed. The soup is light yet flavorful, offering a balance of umami from the miso and delicate textures from the tofu and wakame.",
    },
    {
        "img": "https://media.istockphoto.com/id/1281897957/photo/dashi-chazuke.jpg?s=612x612&w=0&k=20&c=llkOSP3N23umIcuWvtdviR8b21eMTbbvoH7kMyW0GM4=",
        "title": "Ochazuke",
        "description": "Ochazuke is a simple Japanese dish of green tea poured over rice, topped with savory pickles or umeboshi (pickled plums). It's warm, sour, and comforting, perfect for breakfast.",
    },
    {
        "img": "https://media.istockphoto.com/id/479660444/photo/shrimps-curry-with-rice-on-plate-horizontal-view-from-above.jpg?s=612x612&w=0&k=20&c=yveJCQqVBdMSKVxQ6Fb1Q0mYm2JH1gEvBOhYOzcbPRE=",
        "title": "Curry rice",
        "description": "Curry rice is a popular Japanese dish consisting of thick curry sauce (often made with curry roux blocks) served over steamed rice. The curry can include vegetables, meat (like chicken, pork, or beef), and sometimes even fruit. It's a comforting and hearty meal enjoyed across Japan.",
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork (sometimes), and vegetables. It's spicy, hearty, and often enjoyed with a bowl of steamed rice.",
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "Bibimbap is a Korean dish of mixed rice topped with vegetables (such as spinach, mushrooms, and carrots), beef, a fried egg, and spicy gochujang sauce. It's hearty and flavorful.",
    },
    {
        "img": "https://static01.nyt.com/images/2021/05/10/dining/kc-spring-vegetable-japchae/kc-spring-vegetable-japchae-threeByTwoMediumAt2X.jpg",
        "title": "Japchae",
        "description": "Japchae is a popular Korean dish made from stir-fried glass noodles (sweet potato starch noodles) with assorted vegetables such as spinach, carrots, and mushrooms. It's seasoned with soy sauce, sesame oil, and often sweetened with a bit of sugar. Japchae is known for its savory-sweet flavor and chewy texture, often served as a side dish or main course.",
    },
    {
        "img": "https://media.istockphoto.com/id/1458162941/photo/sundubu-jjigae-or-soft-tofu-stew-is-a-traditional-korean-dish-made-with-silky-soft-uncurdled.jpg?s=612x612&w=0&k=20&c=Vro_iMB_0lunXhkM1YyqdXXJ5BR0MWy5dEomWVTPYGQ=",
        "title": "Sundubu-jjigae",
        "description": "Sundubu-jjigae is a Korean stew known for its spicy and savory flavors. It features soft tofu (sundubu) simmered in a spicy broth with vegetables like kimchi, mushrooms, and often seafood or pork. Garnished with green onions and served piping hot, it's a comforting and satisfying dish enjoyed with a bowl of steamed rice.",
    },
    {
        "img": "https://vivaciousgourmet.com/wp-content/uploads/2023/06/IMG_1210-500x500.jpeg",
        "title": "Frittata",
        "description": "A frittata is an Italian dish similar to an omelette or crustless quiche. It's made by mixing beaten eggs with various ingredients such as vegetables, cheese, meats, and herbs, then cooking everything together in a skillet. The frittata is typically baked in the oven until firm and golden on top, then sliced into wedges for serving. It's versatile, hearty, and perfect for any meal of the day.",
    },
    {
        "img": "https://st2.depositphotos.com/7579034/45348/i/450/depositphotos_453480754-stock-photo-plate-polenta-sausage-gravy-wooden.jpg",
        "title": "Polenta with Sausage",
        "description": "Smooth and creamy polenta served with a savory sausage gravy, creating a rich and comforting meal. This classic Italian dish combines tender polenta with flavorful, spiced sausage sauce for a satisfying and delicious experience.",
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is a classic Italian salad originating from Tuscany. It features chunks of stale bread (often ciabatta or sourdough) soaked in vinaigrette and mixed with fresh tomatoes, cucumbers, onions, basil, and sometimes capers or bell peppers. The salad is refreshing, with a balance of tangy flavors from the vinaigrette and the juicy tomatoes, perfect for summer dining.",
    },
    {
        "img": "https://legallyhealthyblonde.com/wp-content/uploads/2023/01/limone-featured.jpg",
        "title": "Risotto al Limone",
        "description": "Risotto al limone is an Italian dish where creamy risotto is infused with the bright flavors of lemon. It's prepared by cooking Arborio rice slowly with shallots, white wine, and chicken or vegetable broth, finishing with lemon zest, juice, butter, and Parmesan cheese. The result is a luxurious and tangy dish, perfect as a main course or side.",
    },
]
const mealBreakfastSourHeavyCold = [
    {
        "img": "https://t4.ftcdn.net/jpg/08/04/83/43/360_F_804834307_LXQOGf2hMz2fWmsrqY0JVyyUTfuVn0EG.jpg",
        "title": "Bánh Cuốn",
        "description": "Bánh cuốn is a delicate Vietnamese dish consisting of thin, steamed rice flour rolls filled with seasoned minced pork and wood ear mushrooms, served with fried shallots, fresh herbs, and dipping sauce."
    },
    {
        "img": "https://img.freepik.com/free-photo/traditional-spanish-gazpacho-soup-bowl-blue-background_123827-25481.jpg",
        "title": "Gazpacho",
        "description": "Gazpacho is a refreshing Spanish cold soup made primarily from ripe tomatoes, cucumbers, bell peppers, onions, garlic, bread crumbs, olive oil, vinegar, and various seasonings like salt, pepper, and sometimes cumin. It's typically served chilled and garnished with diced vegetables, herbs, or croutons."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/cee25fa1-5b96-4d2c-9c6f-f90a1544bd84/2023_01_05EOS+M55795.jpg",
        "title": "Cháo (Congee)",
        "description": "Cháo, also known as congee, is a traditional Chinese rice porridge enjoyed throughout Asia. It's made by simmering rice in water or broth until it breaks down into a smooth, creamy consistency."
    },
    {
        "img": "https://i0.wp.com/crazykoreancooking.com/wp-content/uploads/2024/05/IMG_9782.jpg?fit=1024%2C624&ssl=1",
        "title": "Kkakdugi",
        "description": "Kkakdugi is a popular Korean side dish made from cubed radish, typically daikon radish, which is fermented with Korean chili powder, garlic, ginger, and sometimes fish sauce or salted shrimp. It has a spicy, tangy flavor and a crunchy texture, often served as a banchan (side dish) alongside rice and other Korean dishes."
    },
    {
        "img": "https://images.pexels.com/photos/1483769/pexels-photo-1483769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "title": "Bánh Mì Chả Cá",
        "description": "Bánh mì chả cá is a Vietnamese sandwich featuring grilled or fried fish cakes. The fish cakes are typically made from marinated fish paste mixed with herbs and spices like turmeric, garlic, and shallots. "
    },
    {
        "img": "https://earthtoveg.com/wp-content/uploads/2021/11/kongnamul-guk-4.jpg",
        "title": "Kongnamul Guk",
        "description": "Kongnamul Gukbap is a Korean soup with soybean sprouts, rice, and a savory broth. It's hot, sour, and nutritious, often enjoyed as a light breakfast option."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2017/10/Liang-Pi-cold-skin-noodles-foodgawker.jpg",
        "title": "Liang Pi",
        "description": "Liang Pi is a popular noodle dish in Chinese cuisine, particularly from the Shaanxi province. It consists of cold, chewy noodles made from wheat flour or sometimes mung bean starch. The noodles are typically dressed in a savory and tangy sauce made from vinegar, soy sauce, chili oil, garlic, and sometimes sesame paste or peanut butter. It's often topped with julienned cucumbers, bean sprouts, and occasionally slices of tofu or meat. Liang Pi is refreshing and flavorful, perfect for hot weather or as a light meal."
    },
    {
        "img": "https://veganhuggs.com/wp-content/uploads/2022/06/Soba-Noodle-Salad-With-Chopsticks.jpg",
        "title": "Soba Salad",
        "description": "Soba salad consists of chilled buckwheat noodles on greens with soy-based dressing, often garnished with vegetables like cucumber and radish, and sprinkled with sesame seeds."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi Chuka",
        "description": "Hiyashi Chuka is a Japanese cold noodle dish topped with various ingredients such as sliced cucumbers, ham, egg, and tomatoes, served with a refreshing soy-based dressing."
    },
    {
        "img": "https://vivaciousgourmet.com/wp-content/uploads/2023/06/IMG_1210-500x500.jpeg",
        "title": "Frittata",
        "description": "A frittata is an Italian dish made with eggs, cooked with various ingredients like vegetables, cheeses, and meats in a skillet. It's similar to an omelette but thicker and typically finished in the oven."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "om Yum Goong is a spicy and sour Thai soup with shrimp (Goong). It features a clear broth infused with lemongrass, kaffir lime leaves, galangal, lime juice, fish sauce, and chili peppers."
    },
    {
        "img": "https://media.istockphoto.com/id/1345940969/photo/youtiao-long-golden-brown-deep-fried-dough-strip.jpg?s=612x612&w=0&k=20&c=VHGpYGCs3bikLfWMGS5XxbkSHBWjF0MD5A3OkpXND0w=",
        "title": "Youtiao Fan",
        "description": "Youtiao Fan is a Chinese dish where youtiao (deep-fried dough sticks) are served with rice. The youtiao are typically cut into pieces and placed on top of or alongside steamed or fried rice, creating a satisfying and savory meal."
    },
    {
        "img": "https://omnivorescookbook.com/wp-content/uploads/2022/03/220308_Suan-La-Fen_550.jpg",
        "title": "Suan La Fen",
        "description": "Suan La Fen is a Chinese hot and sour noodle soup with pickled mustard greens, chili oil, and vinegar. It's spicy, tangy, and invigorating, perfect for a flavorful breakfast."
    },
    {
        "img": "https://www.countryhillcottage.com/wp-content/uploads/2022/06/Lemon_Curd_Pancakes-04-480x270.jpg",
        "title": "Buttermilk Pancakes with Lemon Curd",
        "description": "Buttermilk pancakes with lemon curd feature fluffy pancakes made with buttermilk, topped generously with tangy and sweet lemon curd, creating a delightful blend of flavors perfect for breakfast or brunch"
    },
    {
        "img": "https://t3.ftcdn.net/jpg/01/25/49/98/360_F_125499864_Wf3dJxn7KQUS0d4a18Ez9Y1sQT4pQZ8m.jpg",
        "title": "Doujiang",
        "description": "Doujiang is Chinese soy milk served either hot or cold. It's a popular breakfast beverage and can be sweetened or unsweetened. In summer, chilled doujiang is enjoyed for its cooling properties."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://letseattheworld.com/wp-content/uploads/2021/08/D75_0910-pate-en-croute-rustique.jpg",
        "title": "Pâté en Croûte",
        "description": "Pâté en croûte is a French dish of cold pâté (such as pork, liver, or game) encased in a crisp pastry crust, often served as a slice with pickles or salad, showcasing a blend of rich flavors and textures."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "description": "Salade Niçoise is a French salad with tuna, boiled eggs, tomatoes, olives, and anchovies, dressed with a vinaigrette. It's light, tangy, and nutritious, ideal for a fresh breakfast."
    },
    {
        "img": "https://t4.ftcdn.net/jpg/08/23/30/25/360_F_823302556_ZsT8eEVEUIFDQBwVEAmlNqZsMZbG9iRe.jpg",
        "title": "Soupe de Poisson",
        "description": "Soupe de Poisson is a classic French fish soup, originating from Provence. It features a rich, flavorful broth made from various fish and seafood, infused with aromatic herbs, tomatoes, and spices. Typically served with a rouille sauce—a garlicky, saffron-infused mayonnaise—and crusty bread, it offers a hearty and comforting coastal experience."
    },
    {
        "img": "https://img.freepik.com/free-photo/italian-caponata-with-frying-pan-wooden-table_2829-8064.jpg",
        "title": "Caponata",
        "description": "Caponata is a Sicilian eggplant dish, renowned for its sweet and sour flavor profile. This hearty, chunky vegetable stew includes eggplant, tomatoes, celery, olives, and capers, all simmered together in a tangy sauce made from vinegar and sugar. Often served at room temperature, caponata makes a vibrant appetizer or side dish with a unique, complex taste."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de Nopalitos",
        "description": "Cactus salad with tomatoes, onions, cilantro, and a tangy lime dressing."
    },
    {
        "img": "https://assets.epicurious.com/photos/628ba560cf19fbfe9137ffa4/1:1/w_2560%2Cc_limit/Caprese_RECIPE_051922_34205.jpg",
        "title": "Insalata Caprese",
        "description": "Insalata caprese is an Italian salad made with fresh tomatoes, mozzarella cheese, basil leaves, olive oil, and balsamic vinegar. It's simple, refreshing, and showcases the flavors of Italy."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/thai-southern-spicy-rice-salad-khao-yam-close-up-picture-ingredient-89952123.jpg",
        "title": "Khao Yum",
        "description": "Khao Yum is a vibrant Thai rice salad known for its colorful array of ingredients and bold flavors. It features a base of jasmine rice mixed with a variety of fresh herbs, vegetables, and sometimes dried shrimp or coconut. Tossed in a zesty dressing made from lime juice, fish sauce, and chili, Khao Yum is both refreshing and flavorful, offering a delightful combination of sweet, sour, and spicy notes."
    },
    {
        "img": "https://media.istockphoto.com/id/691524124/photo/papaya-salad-and-thai-food.jpg?s=612x612&w=0&k=20&c=YMho5mZLTPmY6vdZV6s30budZyKvMLWwyI_hAbX5mfQ=",
        "title": "Som Tum",
        "description": "Spicy green papaya salad made with shredded papaya, tomatoes, chili peppers, and lime juice, a popular Thai dish."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/aguachile-chili-spiked-mexican-ceviche-79002265.jpg",
        "title": "Aguachile",
        "description": "Shrimp marinated in lime juice, chili peppers, and served cold with cucumber slices."
    },
    {
        "img": "https://growingupbilingual.com/wp-content/uploads/2015/09/IMG_7345.jpg",
        "title": "Tostadas de Atún",
        "description": "Tostadas de Atún are crisp, open-faced tortillas topped with a flavorful tuna mixture. The tuna is typically mixed with ingredients like avocado, tomatoes, onions, and cilantro, often seasoned with lime juice and hot sauce. Served cold or at room temperature, these tostadas offer a refreshing, crunchy bite with a satisfying blend of textures and flavors."
    },
    {
        "img": "https://st4.depositphotos.com/4366637/22799/i/450/depositphotos_227991112-stock-photo-seafood-ceviche-typical-dish-peru.jpg",
        "title": "Ceviche",
        "description": 'Ceviche is a refreshing Latin American dish made from raw fish or seafood "cooked" in citrus juice, usually lime or lemon. The acidic marinade firms up the seafood while infusing it with tangy, bright flavors. Typically mixed with ingredients like tomatoes, onions, cilantro, and chili peppers, ceviche is often served chilled as a vibrant appetizer or light meal.'
    },
    {
        "img": "https://media.istockphoto.com/id/1742686184/photo/naengmyeon.jpg?s=612x612&w=0&k=20&c=yZSfJu4qtLLPJDDqh8Mrjs1o5dnEY6xqFDBA51UFlIU=",
        "title": "Mul Naengmyeon",
        "description": "Mul naengmyeon is a Korean dish of cold buckwheat noodles in a tangy broth, often served with slices of beef, cucumber, and a hard-boiled egg. It's refreshing and popular in summer."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/15/0/FNK_Kongguksu_H3_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1657896779552.webp",
        "title": "Kongguksu",
        "description": "Kongguksu is a Korean dish consisting of chilled soybean soup served over cold noodles, typically made from wheat or buckwheat. The soup is made from ground soybeans blended with water and seasoned lightly with salt. It's garnished with toppings like sliced cucumbers or sesame seeds, offering a creamy and refreshing flavor, especially popular during hot summer days."
    }
]
const mealbreakfastlightSourHot = [{
    "img": "https://media.istockphoto.com/id/1137310654/photo/savory-egg-custard.jpg?s=612x612&w=0&k=20&c=1VoP0nMQIoQmfo7tAz8YJBIRPOIItrEJsqGau1Dnz4U=",
    "title": "Chawanmushi",
    "description": "Chawanmushi is a Japanese savory egg custard dish steamed with dashi, soy sauce, and mirin, often containing mushrooms and shrimp. It's light, hot, and subtly sour from the dashi broth."
},
{
    "img": "https://media.istockphoto.com/id/1324994152/photo/sea-bream-chazuke-japanese-traditional-food.jpg?s=612x612&w=0&k=20&c=cskrDGaKIr5zSvMOA8qG4e-SCYK-8youXBfi9KxLRl0=",
    "title": "Ochazuke",
    "description": "Ochazuke is a simple Japanese dish of green tea poured over rice, topped with savory pickles or umeboshi (pickled plums). It's warm, sour, and comforting, perfect for breakfast."
},
{
    "img": "https://cdn.pixabay.com/photo/2017/10/03/04/18/rice-2811266_1280.jpg",
    "title": "Natto with Rice",
    "description": "Natto is fermented soybeans served over rice with soy sauce, mustard, and green onions. It's warm, sour, and packs a unique umami flavor, often enjoyed for breakfast in Japan."
},
{
    "img": "https://www.justonecookbook.com/wp-content/uploads/2019/12/Kimchi-Nabe-0738-I-1.jpg",
    "title": "Kimchi Nabe",
    "description": "Kimchi Nabe is a Japanese hot pot dish with kimchi, tofu, vegetables, and sometimes pork simmered in a spicy broth. It's sour, hearty, and invigorating for a morning meal."
},
{
    "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
    "title": "Kimchi Jjigae",
    "description": "Kimchi Jjigae is a Korean stew made with kimchi, tofu, pork, and vegetables in a spicy broth. It's hot, sour, and full of umami flavors, perfect for a satisfying breakfast."
},
{
    "img": "https://mykoreankitchen.com/wp-content/uploads/2021/02/1.-Yukgaejang.jpg",
    "title": "Yukgaejang",
    "description": "Yukgaejang is a Korean spicy beef soup with shredded beef, vegetables, and Korean chili flakes. It's hearty, sour, and packed with bold flavors, ideal for a warming breakfast."
},
{
    "img": "https://www.maangchi.com/wp-content/uploads/2012/01/bibimguksu-insta.jpg",
    "title": "Bibim Guksu",
    "description": "Bibim Guksu is a Korean cold noodle dish with spicy, sour, and sweet sauce, mixed with vegetables and sometimes boiled eggs. It's refreshing and light yet packs a punch for breakfast."
},
{
    "img": "https://as1.ftcdn.net/v2/jpg/01/38/74/62/1000_F_138746285_oVDCcLcrshfTGNGOhhatLZnxHYzqMRZ0.jpg",
    "title": "Kongnamul Gukbap",
    "description": "Kongnamul Gukbap is a Korean soup with soybean sprouts, rice, and a savory broth. It's hot, sour, and nutritious, often enjoyed as a light breakfast option."
},
{
    "img": "https://thumbs.dreamstime.com/b/stracciatella-soup-italian-version-egg-drop-66375817.jpg",
    "title": "Stracciatella Soup",
    "description": "Stracciatella Soup is an Italian egg drop soup with chicken broth, eggs, and spinach, flavored with lemon juice and zest. It's light, hot, and slightly sour, perfect for a comforting breakfast."
},
{
    "img": "https://www.shutterstock.com/image-photo/homemade-italian-soup-acquacotta-served-600nw-2174993817.jpg",
    "title": "Acquacotta",
    "description": "Acquacotta is an Italian vegetable soup with tomatoes, eggs, and bread, seasoned with vinegar. It's warm, sour, and hearty, offering a satisfying start to the day."
},
{
    "img": "https://www.connoisseurusveg.com/wp-content/uploads/2021/07/ribollita-r-sq.jpg",
    "title": "Ribollita",
    "description": "Ribollita is a Tuscan soup made with bread, beans, and vegetables, simmered in a tomato broth with a splash of vinegar. It's hearty, hot, and has a tangy flavor, perfect for breakfast."
},
{
    "img": "https://pinchandswirl.com/wp-content/uploads/2020/08/Pappa-al-Pomodoro-sq.jpg",
    "title": "Pappa al Pomodoro",
    "description": "Pappa al Pomodoro is an Italian bread and tomato soup with garlic, basil, olive oil, and a hint of vinegar. It's warm, savory, and slightly sour, a comforting breakfast option."
},
{
    "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
    "title": "Tom Yum Goong",
    "description": "Tom Yum Goong is a Thai hot and sour soup with shrimp, lemongrass, lime leaves, chili peppers, and fish sauce. It's spicy, sour, and aromatic, perfect for a revitalizing breakfast."
},
{
    "img": "https://upload.wikimedia.org/wikipedia/commons/f/fc/Khao_tom_pla_01.jpg",
    "title": "Khao Tom Pla",
    "description": "Khao Tom Pla is a Thai rice soup with fish, flavored with lime juice, lemongrass, and chili. It's hot, sour, and light, providing warmth and refreshment for breakfast."
},
{
    "img": "https://maejum.com/wp-content/uploads/2021/04/Sourcurry-scaled.jpg",
    "title": "Gaeng Som Pla",
    "description": "Gaeng Som Pla is a Thai sour fish curry with vegetables, flavored with tamarind, lime juice, and chili. It's spicy, sour, and packed with flavors, perfect for a hearty breakfast."
},
{
    "img": "https://newrecipesforlife.com/wp-content/uploads/2023/12/Pistachio-Romesco-32.jpg",
    "title": "Pla Rad Prik",
    "description": "Pla Rad Prik is a Thai spicy and sour fish stir-fry with chili peppers, garlic, and lime juice. It's tangy, hot, and delicious, offering a flavorful start to the day."
},
{
    "img": "https://thumbs.dreamstime.com/b/hot-sour-soup-6215408.jpg",
    "title": "Hot and Sour Soup",
    "description": "Hot and Sour Soup is a Chinese soup with tofu, mushrooms, bamboo shoots, and eggs in a spicy and tangy broth. It's warm, sour, and satisfying for a comforting breakfast."
},
{
    "img": "https://omnivorescookbook.com/wp-content/uploads/2022/03/220308_Suan-La-Fen_550.jpg",
    "title": "Suan La Fen",
    "description": "Suan La Fen is a Chinese hot and sour noodle soup with pickled mustard greens, chili oil, and vinegar. It's spicy, tangy, and invigorating, perfect for a flavorful breakfast."
},
{
    "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
    "title": "Liangpi",
    "description": "Liangpi is a Chinese cold noodle dish with wheat noodles, cucumber, bean sprouts, and a tangy sauce of vinegar and chili oil. It's refreshing and slightly sour, suitable for breakfast."
},
{
    "img": "https://assets.epicurious.com/photos/656622b76437b942ca8b2e00/1:1/w_3232,h_3232,c_limit/Chao%20Nian%20Gao-RECIPE.jpg",
    "title": "Chao Nian Gao",
    "description": "Chao Nian Gao is a Chinese stir-fried rice cake dish with pickled vegetables, chili sauce, and soy sauce. It's hot, sour, and chewy, offering a hearty start to the day."
},
{
    "img": "https://www.shutterstock.com/image-photo/vietnamese-sweet-sour-soup-canh-600nw-420576514.jpg",
    "title": "Canh Chua",
    "description": "Canh Chua is a Vietnamese sour soup with fish, pineapple, tomatoes, and herbs, flavored with tamarind and lime juice. It's light, tangy, and refreshing, ideal for breakfast."
},
{
    "img": "https://media.istockphoto.com/id/499489654/photo/good-rieu.jpg?s=612x612&w=0&k=20&c=NGhF8-8lOhIxJV2joz17cK3K0eImPL3wBSd2ic_pY-0=",
    "title": "Bun Rieu",
    "description": "Bun Rieu is a Vietnamese crab noodle soup with a sour broth made from tomatoes, crab paste, and fermented shrimp paste. It's hot, sour, and rich in flavors, perfect for breakfast."
},
{
    "img": "https://media-cdn.tripadvisor.com/media/photo-s/10/88/02/10/nom-du-du.jpg",
    "title": "Nom Du Du",
    "description": "Nom Du Du is a Vietnamese green papaya salad with herbs, peanuts, and a tangy dressing of lime juice, fish sauce, and chili. It's light, spicy, and refreshing for a morning meal."
},
{
    "img": "https://www.shutterstock.com/image-photo/canh-bun-vietnamese-noodle-soup-600nw-1667452078.jpg",
    "title": "Canh Bún",
    "description": "Canh Bún is a Vietnamese vermicelli soup with a sour broth, often served with pork or chicken, vegetables, and herbs. It's warm, tangy, and satisfying, great for breakfast."
},
{
    "img": "https://t3.ftcdn.net/jpg/08/35/20/94/360_F_835209434_4KaQ7GlIaFX0J2yCeICQiBxJ1gA2s4wG.jpg",
    "title": "Soupe à l'Oignon",
    "description": "Soupe à l'Oignon is a French onion soup with caramelized onions, beef broth, and a splash of vinegar or wine. It's hearty, savory, and slightly sour, perfect for a comforting breakfast."
},
{
    "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
    "title": "Salade Niçoise",
    "description": "Salade Niçoise is a French salad with tuna, boiled eggs, tomatoes, olives, and anchovies, dressed with a vinaigrette. It's light, tangy, and nutritious, ideal for a fresh breakfast."
},
{
    "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
    "title": "Ratatouille",
    "description": "Ratatouille is a French vegetable stew with tomatoes, eggplant, zucchini, bell peppers, and herbs, cooked in olive oil. It's warm, tangy, and flavorful, perfect for a hearty breakfast."
},
{
    "img": "https://media.istockphoto.com/id/1085446276/photo/homemade-french-coq-au-vin-chicken.jpg?s=612x612&w=0&k=20&c=3YnIdmHUx6uiXTYnJ7TDfenwsWKOE12epIoKfmcMqyw=",
    "title": "Coq au Vin",
    "description": "Coq au Vin is a French chicken stew braised with wine, mushrooms, onions, and herbs. It's hearty, savory, and has a slightly sour note from the wine, great for breakfast."
},
{
    "img": "https://media.istockphoto.com/id/1174042861/photo/mexican-red-pozole-soup-on-wooden-background.jpg?s=612x612&w=0&k=20&c=P5AGzkZk3t_P5uFqYYMjphXogwxdgLnCXnpe8M74Lm8=",
    "title": "Pozole",
    "description": "Pozole is a Mexican soup with hominy (corn), pork or chicken, and chili peppers, flavored with lime juice and oregano. It's hearty, spicy, and sour, a traditional choice for breakfast."
}]
const mealBreakfastSourLightCold = [
    {
        "img": "https://t3.ftcdn.net/jpg/01/25/49/98/360_F_125499864_Wf3dJxn7KQUS0d4a18Ez9Y1sQT4pQZ8m.jpg",
        "title": "Doujiang",
        "description": "Doujiang is Chinese soy milk served either hot or cold. It's a popular breakfast beverage and can be sweetened or unsweetened. In summer, chilled doujiang is enjoyed for its cooling properties."
    },
    {
        "img": "https://media.istockphoto.com/id/1959546028/photo/vietnamese-banh-bot-loc.jpg?s=612x612&w=0&k=20&c=XpMvY6eRiVLYZ3bZtoIzhMObTonz98DQkwn9bTEgQpM=",
        "title": "Banh Bot Loc",
        "description": "Banh Bot Loc is a Vietnamese dish consisting of small, translucent dumplings made from tapioca flour. They are typically filled with a savory mixture of shrimp and pork belly, then steamed and served with fried shallots and a dipping sauce."
    },
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSVEsSFU7TAyJ2uvlMvNm-BJWsOOvJD4YdQ&s",
        "title": "Goi Cuon",
        "description": "Goi Cuon, also known as Vietnamese fresh spring rolls, are made with rice paper wrappers filled with shrimp, pork, vermicelli noodles, fresh herbs like mint and cilantro, and lettuce. They're served cold with a dipping sauce like hoisin or nuoc cham, offering a refreshing and light appetizer or meal option."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/szechuan-sour-fish-soup-famous-called-suan-cai-yu-china-115218478.jpg",
        "title": "Suan Cai",
        "description": "Suan cai yu is a spicy and tangy Chinese dish featuring tender fish slices in a flavorful broth with pickled mustard greens (suan cai), chili peppers, and Sichuan peppercorns."
    },
    {
        "img": "https://apeachyplate.com/wp-content/uploads/2020/08/goi-ga-feat-S-500x500.jpg",
        "title": "Goi Du Du",
        "description": "Goi du du is a Vietnamese salad made with green papaya, typically shredded and mixed with herbs like Vietnamese coriander (rau ram), mint, and basil. It's often combined with shrimp, pork, or beef, and dressed with a tangy and savory Vietnamese fish sauce-based dressing, topped with peanuts or fried shallots for crunch."
    },
    {
        "img": "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_NomHoaChuoi.jpg",
        "title": "Nom Hoa Chuoi",
        "description": "Nom Hoa Chuoi is a Vietnamese salad made with banana blossoms (hoa chuoi) that are thinly sliced and mixed with herbs like mint, basil, and Vietnamese coriander. It's often combined with shrimp or pork, dressed with a tangy Vietnamese fish sauce-based dressing, and garnished with roasted peanuts or crispy shallots for texture."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "Liangpi, also known as cold skin noodles, is a popular dish in Chinese cuisine, particularly from the Shaanxi province. It consists of wide, flat noodles made from wheat or rice flour. These noodles are sliced thinly and served cold, dressed in a savory sauce typically made from vinegar, soy sauce, chili oil, garlic, and sometimes sesame paste or peanut butter."
    },
    {
        "img": "https://againstallgrain.com/wp-content/uploads/2020/08/158A7900.jpg",
        "title": "Fruit Salad with Yogurt",
        "description": "Fruit salad with yogurt is a refreshing dish consisting of assorted fresh fruits such as strawberries, blueberries, and pineapple, mixed with creamy yogurt. It's often sweetened with honey or maple syrup and garnished with nuts or seeds for added texture."
    },
    {
        "img": "https://cdn.loveandlemons.com/wp-content/uploads/2022/09/overnight-oats.jpg",
        "title": "Chilled Oatmeal",
        "description": "Chilled oatmeal is a creamy and refreshing dish made by soaking oats in milk or yogurt overnight, then served cold. It's typically sweetened with honey or maple syrup and topped with fresh fruits, nuts, or seeds for added flavor and texture."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a Japanese dish of cold tofu topped with ingredients like green onions, grated ginger, soy sauce, and bonito flakes. It's simple, light, and refreshing."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2020/05/Hijiki-Seaweed-Salad-6678-I-500x500.jpg",
        "title": "Hijiki Salad",
        "description": "Hijiki salad is a Japanese dish made from hijiki seaweed that is rehydrated and mixed with various vegetables like carrots, soybeans, and sometimes tofu. It's seasoned with soy sauce, sesame oil, and sometimes a touch of sugar or mirin for a savory-sweet flavor. Hijiki salad is nutritious and known for its chewy texture and umami-rich taste."
    },
    {
        "img": "https://imag.bonviveur.com/portada-del-sunomono.jpg",
        "title": "Sunomono",
        "description": "Sunomono is a Japanese cucumber salad dressed with vinegar, sugar, and soy sauce. It's refreshing and often served as a side dish in Japanese cuisine."
    },
    {
        "img": "https://img.freepik.com/premium-photo/traditional-japanese-hiyashi-wakame-chuka-seaweed-salad-with-sesame-seeds_164638-2288.jpg",
        "title": "Hiyashi Wakame",
        "description": "Hiyashi wakame is a Japanese salad made with wakame seaweed that has been rehydrated and served cold. It's typically seasoned with ingredients like soy sauce, rice vinegar, sesame oil, and sometimes a bit of sugar or mirin. Hiyashi wakame is refreshing and offers a delicate texture with a savory-sweet flavor, often enjoyed as a side dish or appetizer."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/15/0/FNK_Kongguksu_H3_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1657896779552.webp",
        "title": "Kongguksu",
        "description": "Kongguksu is a Korean dish consisting of chilled soybean soup served over cold noodles, typically made from wheat or buckwheat. The soup is made from ground soybeans blended with water and seasoned lightly with salt. It's garnished with toppings like sliced cucumbers or sesame seeds, offering a creamy and refreshing flavor, especially popular during hot summer days."
    },
    {
        "img": "https://img.freepik.com/free-photo/kimchi-ready-eat-black-plate_1150-35692.jpg",
        "title": "Mul Kimchi",
        "description": "Mul kimchi, also known as water kimchi or dongchimi, is a traditional Korean dish made from radish and cabbage, which are salted and then fermented in a brine solution. It's often served chilled as a refreshing side dish or condiment, with a crisp texture and a tangy, slightly sour flavor."
    },

]
const mealLunchSweetHeavyHot = [
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "A famous Thai soup known for its bold flavors, combining shrimp, lemongrass, kaffir lime leaves, galangal, and chili peppers in a spicy and sour broth."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-crispy-pancake-600nw-2092243153.jpg",
        "title": "Banh Xeo",
        "description": "Banh Xeo is a Vietnamese crispy savory pancake made from rice flour, turmeric, and coconut milk, filled with pork, shrimp, and bean sprouts. It’s typically served with fresh herbs and lettuce, and enjoyed with a dipping sauce."
    },
    {
        "img": "https://img.freepik.com/free-photo/tasty-mexican-food-with-fresh-avocado-sauce-burittos-tacos-chilli-con-carne-wooden-table_1220-7062.jpg",
        "title": "Chili Con Carne",
        "description": "Chili con carne is a spicy stew made with ground meat (often beef), tomatoes, chili peppers, beans, and spices. It's a hearty dish that's popular in Tex-Mex cuisine."
    },
    {
        "img": "https://media.istockphoto.com/id/507124607/photo/homemade-kung-pao-chicken.jpg?s=612x612&w=0&k=20&c=agx6smvn5a7whsmfAMmK5M-e-68eKavqQl78zizf-lY=",
        "title": "Kung Pao Chicken",
        "description": "Kung pao chicken is a Chinese stir-fry dish made with chicken, peanuts, vegetables, and chili peppers, flavored with a sauce that includes soy sauce, hoisin sauce, and vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/689907622/photo/japanese-octopus-balls-takoyaki-boat.jpg?s=612x612&w=0&k=20&c=Rds8Vn1VpsQz0FT0Bpdku5BIkNoqy-1Qt_WbOt8X1M8=",
        "title": "Takoyaki",
        "description": "Takoyaki are Japanese octopus-filled savory balls made of batter cooked in a special molded pan. They are typically topped with takoyaki sauce, mayonnaise, bonito flakes, and seaweed."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/top-down-view-skillet-plate-600nw-2462326415.jpg",
        "title": "Bulgogi",
        "description": "Bulgogi is a Korean dish of thinly sliced marinated beef stir-fried with vegetables. It's savory, slightly sweet from the marinade, and often served with rice or wrapped in lettuce."
    },
    {
        "img": "https://mykoreankitchen.com/wp-content/uploads/2016/06/2.-Jjimdak-Korean-Braised-Chicken.jpg",
        "title": "Jjimdak",
        "description": "Jjimdak is a Korean braised chicken dish that features tender chunks of chicken cooked with a savory and slightly sweet sauce made from soy sauce, garlic, and ginger. Often combined with vegetables such as potatoes, carrots, and onions, and sometimes with chewy glass noodles, jjimdak is a comforting, hearty dish known for its rich, flavorful sauce and satisfying, balanced taste."
    },
    {
        "img": "https://familystylefood.com/wp-content/uploads/2021/12/Coq-Au-Vin-hero-macro.jpg",
        "title": "Coq au Vin",
        "description": "Coq au Vin is a classic French dish where chicken is braised slowly in red wine, along with mushrooms, onions, and bacon. This rich, savory stew is enhanced with garlic, herbs, and sometimes a splash of brandy or cognac. The slow cooking process tenderizes the chicken and melds the flavors, creating a deeply flavorful and comforting meal."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
        "title": "Pad Thai",
        "description": "Pad Thai is a Thai stir-fried noodle dish made with rice noodles, shrimp, tofu, bean sprouts, peanuts, and scrambled egg, flavored with tamarind sauce, fish sauce, and chili."
    },
    {
        "img": "https://cdn.sanity.io/images/2r0kdewr/production/0bc6f529c1200c84a8465d9317c3029898a4d4fa-1500x844.jpg",
        "title": "Sweet and Sour Pork",
        "description": "Sweet and Sour Pork is a popular Chinese dish featuring crispy, bite-sized pieces of pork coated in a tangy sauce made from a blend of vinegar, sugar, and ketchup or tomato sauce. Often stir-fried with colorful bell peppers, onions, and pineapples, this dish combines a delightful balance of sweet, sour, and savory flavors for a deliciously satisfying meal."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/ossobuco-osso-buco-cross-cut-veal-shanks-generative-ai-bar-b-q-beef-black-bone-braised-ch-323827997.jpg",
        "title": "Osso Buco",
        "description": 'Osso Buco is an Italian dish consisting of braised veal shanks, cooked slowly with vegetables, white wine, and broth until tender. The name means "bone with a hole," referring to the marrow-filled bone at the center. The dish is traditionally served with gremolata, a zesty mix of lemon zest, garlic, and parsley, enhancing its rich, savory flavors. Often paired with risotto or polenta, Osso Buco offers a luxurious and comforting dining experience.'
    },
    {
        "img": "https://giadzy.com/cdn/shop/articles/mushroom_risotto.jpg?v=1679597406",
        "title": "Risotto ai Funghi",
        "description": "Risotto ai Funghi is an Italian creamy rice dish made with arborio rice cooked in a rich broth and mixed with sautéed mushrooms, garlic, and onions. It's finished with Parmesan cheese and sometimes white wine for extra flavor."
    },
    {
        "img": "https://eatwithclarity.com/wp-content/uploads/2023/05/gluten-free-mac-cheese-7-500x500.jpg",
        "title": "Macaroni and Cheese",
        "description": "Macaroni and Cheese is a beloved comfort food made from tender elbow macaroni enveloped in a creamy, cheesy sauce. Typically, the sauce is a blend of melted cheeses, like cheddar, mixed with milk and butter, and often seasoned with salt and pepper. It can be baked until golden and bubbly, sometimes topped with breadcrumbs for added texture and flavor."
    },
    {
        "img": "https://carlsbadcravings.com/wp-content/uploads/2021/01/Dan-Dan-Noodles-20.jpg",
        "title": "Dan Dan Noodles",
        "description": "Dan Dan Noodles are a flavorful Sichuan dish featuring chewy noodles tossed in a spicy, savory sauce made from ground pork, chili oil, soy sauce, and sesame paste. Often garnished with scallions, crushed peanuts, and pickled vegetables, this dish offers a delightful combination of heat, umami, and a hint of sweetness. The sauce's complexity and the noodles' texture create a satisfying and dynamic meal."
    },
    {
        "img": "https://www.simplysuwanee.com/wp-content/uploads/2020/05/1N7A9929-1.jpg",
        "title": "Gaeng Daeng",
        "description": "Gaeng Daeng, or Red Curry, is a rich Thai curry made with a blend of red curry paste, coconut milk, and a variety of proteins such as chicken, beef, or tofu. It features a fragrant mix of spices, including lemongrass, galangal, and kaffir lime leaves. The dish is often garnished with fresh basil and served with steamed jasmine rice, offering a harmonious balance of spicy, sweet, and savory flavors."
    },
    {
        "img": "https://media.istockphoto.com/id/1143053016/photo/mapo-tofu-bowl.jpg?s=612x612&w=0&k=20&c=MQTOoLOAq2hgRm1JrQywuaxgn-BM3TR2z75gnfNAjbM=",
        "title": "Mapo Tofu",
        "description": "Mapo Tofu is a popular Sichuan dish known for its bold flavors and spicy kick. It features soft tofu simmered in a savory sauce made with ground pork or beef, fermented bean paste, chili oil, and Sichuan peppercorns. The result is a flavorful, aromatic dish with a delightful mix of spicy, numbing, and umami elements, often served over steamed rice."
    },
    {
        "img": "https://media.istockphoto.com/id/1224505537/photo/mole-mexicano-poblano-mole-ingredients-mexican-spicy-food-traditional-in-mexico.jpg?s=612x612&w=0&k=20&c=hLKnUg-vQdPzwYZxrgUx3BzxaJUQMhNTx-3UnGvkW9U=",
        "title": "Mole Poblano",
        "description": "Mole Poblano is a rich and complex Mexican sauce made from a blend of dried chiles, chocolate, spices, and various ingredients like nuts and seeds. This dark, flavorful sauce often accompanies chicken or turkey, providing a deep, nuanced taste with both sweet and savory notes. The lengthy cooking process melds the flavors together, resulting in a luxurious and traditional dish that embodies the depth of Mexican cuisine."
    },
    {
        "img": "https://media.istockphoto.com/id/1171255420/photo/japanese-food.jpg?s=612x612&w=0&k=20&c=Mglqzz8ItG_UzXHedyHJ0CTXXwhLTZldG3yVW4XmGEc=",
        "title": "Yakitori",
        "description": "Yakitori is a Japanese skewered chicken dish, featuring bite-sized pieces of chicken grilled over charcoal. Typically seasoned with either a savory-sweet soy-based sauce called tare or simply with salt, yakitori is often served with a variety of accompaniments, including scallions, vegetables, or even chicken liver. It's a popular choice for casual dining and street food, offering a smoky, umami-rich flavor that's both satisfying and versatile."
    },
    {
        "img": "https://media.istockphoto.com/id/685854278/photo/unagi-don-grilled-eel-rice-bowl-japanese-food-dish-with-decoration.jpg?s=612x612&w=0&k=20&c=lIa0wbMV-1L8_2hjkPhLXKgYt8trC0BvbZIH5l4yDDc=",
        "title": "Unagi Don",
        "description": "Unagi Don is a Japanese dish featuring grilled eel glazed with a sweet and savory soy-based sauce, served over a bed of steamed white rice. The eel, known as unagi, is typically charred to perfection, resulting in a crispy exterior and tender, flavorful meat. This comforting dish combines rich umami flavors with a hint of sweetness, making it a beloved choice for a satisfying and delicious meal."
    },
    {
        "img": "https://media.istockphoto.com/id/1086140442/photo/closeup-of-pork-ribs-grilled-with-bbq-sauce-and-caramelized-in-honey-tasty-snack-to-beer-on-a.jpg?s=612x612&w=0&k=20&c=CsKA46woAZNQLYY6mpxG-0X3t1rCtVtN4CVjzwCcRdw=",
        "title": "BBQ Ribs",
        "description": "BBQ Ribs are a classic American dish consisting of tender pork ribs slow-cooked or grilled and coated in a tangy, smoky barbecue sauce. The ribs are often seasoned with a dry rub before cooking, which caramelizes and intensifies the flavor. They are typically served with sides like coleslaw, baked beans, or cornbread, making for a hearty, flavorful meal that’s perfect for casual gatherings and barbecues."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/french-cassoulet-wood-board-64645861.jpg",
        "title": "Cassoulet",
        "description": "Cassoulet is a rich, traditional French stew originating from the Languedoc region. It features slow-cooked white beans with a variety of meats such as pork, sausages, and sometimes duck or lamb. Flavored with garlic, onions, and herbs, the dish develops a deep, hearty taste as it simmers. Topped with a crunchy breadcrumb crust, cassoulet is a comforting and satisfying meal, often enjoyed in cooler weather."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "Kimchi Jjigae is a popular Korean stew made with fermented kimchi, pork (or sometimes tuna), tofu, and various vegetables like onions and scallions. The stew is seasoned with garlic, ginger, and gochugaru (Korean red chili flakes) for a spicy, tangy flavor. It’s known for its robust, umami-rich taste and is often enjoyed with a side of steamed rice, making it a hearty and comforting dish."
    },
    {
        "img": "https://media.istockphoto.com/id/1174042861/photo/mexican-red-pozole-soup-on-wooden-background.jpg?s=612x612&w=0&k=20&c=P5AGzkZk3t_P5uFqYYMjphXogwxdgLnCXnpe8M74Lm8=",
        "title": "Pozole",
        "description": "Pozole is a traditional Mexican stew made from hominy (dried corn kernels that have been treated with an alkali), typically combined with pork or chicken. The dish features a rich, savory broth flavored with garlic, chilies, and various spices. Pozole is often garnished with fresh ingredients like shredded cabbage, radishes, lime wedges, and oregano, offering a hearty and flavorful meal that’s especially popular during celebrations and festive occasions."
    },
    {
        "img": "https://plus.unsplash.com/premium_photo-1664472730118-bec9632ce8f1?fm=jpg&w=3000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMGFuZCUyMHdhZmZsZXN8ZW58MHx8MHx8fDA%3D",
        "title": "Chicken and Waffles",
        "description": "Chicken and Waffles is a classic American dish that combines crispy, fried chicken with fluffy, golden waffles. The savory chicken is often seasoned and fried until crispy, while the waffles provide a light, slightly sweet contrast. Typically served with maple syrup, and sometimes with a side of hot sauce or butter, this dish offers a delightful blend of textures and flavors, making it a beloved comfort food."
    },
    {
        "img": "https://media.istockphoto.com/id/1414036163/photo/bowl-of-massaman-curry.jpg?s=612x612&w=0&k=20&c=XcrQs1wVV98KSgllfV4TxkkHj8ZlwvD1BXQPP79TtO4=",
        "title": "Massaman Curry",
        "description": "Massaman Curry is a rich, Thai curry known for its unique blend of flavors, which combines traditional Thai spices with influences from Indian cuisine. Made with tender chunks of meat (often beef or chicken) and vegetables, it's simmered in a creamy coconut milk base flavored with Massaman curry paste, tamarind, and roasted peanuts. The result is a savory, slightly sweet curry with a complex, aromatic profile that pairs beautifully with steamed rice."
    },
    {
        "img": "https://media.istockphoto.com/id/649691790/photo/tarte-tatin.jpg?s=612x612&w=0&k=20&c=bU5FZ5kuHK4n9h_oUjTsTQ4YdVJsuPgxel0DsRWHHzE=",
        "title": "Tarte Tatin",
        "description": "Tarte Tatin is a classic French upside-down caramelized apple tart. It features tender, caramel-coated apples baked under a layer of pastry. Traditionally made with a buttery, flaky crust, the tart is flipped over before serving, revealing the caramelized apples on top. The result is a rich, sweet dessert with a delightful combination of soft, caramelized fruit and crisp pastry."
    },
    {
        "img": "https://media.istockphoto.com/id/1223917846/photo/chiles-en-nogada-traditional-mexican-cuisine-in-puebla-mexico.jpg?s=612x612&w=0&k=20&c=cExU00c2xlU7NGEdH-4HMvw-CyRUA5Jl0RpNg61U418=",
        "title": "Chiles en Nogada",
        "description": "Chiles en Nogada is a traditional Mexican dish celebrated for its vibrant flavors and festive presentation. It features poblano peppers stuffed with picadillo, a mixture of ground meat, fruits, nuts, and spices. The dish is then topped with a creamy walnut sauce (nogada) and garnished with pomegranate seeds and fresh parsley. The combination of savory, sweet, and nutty flavors, along with the colorful presentation, makes it a beloved and visually striking dish, especially during Mexican Independence Day celebrations."
    },
    {
        "img": "https://media.istockphoto.com/id/1959546028/photo/vietnamese-banh-bot-loc.jpg?s=612x612&w=0&k=20&c=XpMvY6eRiVLYZ3bZtoIzhMObTonz98DQkwn9bTEgQpM=",
        "title": "Banh Bot Loc",
        "description": "Banh Bot Loc is a Vietnamese dish consisting of small, translucent dumplings made from tapioca flour. They are typically filled with a savory mixture of shrimp and pork belly, then steamed and served with fried shallots and a dipping sauce."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a simple and refreshing Japanese dish featuring chilled tofu served with various toppings. Typically, it consists of silky, cold tofu garnished with ingredients such as sliced green onions, grated ginger, bonito flakes, and a drizzle of soy sauce. This dish highlights the tofu's delicate flavor and smooth texture, making it a light and satisfying appetizer or side dish."
    }
]
const mealLunchSweetHeavyCold = [
    {
        "img": "https://www.shutterstock.com/image-photo/banh-cuonvietnamese-steamed-rice-rolls-600nw-796067941.jpg",
        "title": "Banh Cuon",
        "description": "A Vietnamese dish of steamed rice rolls filled with minced pork, mushrooms, and onions, served with a side of fish sauce and fresh herbs."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "A Chinese cold noodle dish made from wheat or rice flour, served with a spicy, tangy dressing and garnished with vegetables and sometimes meat."
    },
    {
        "img": "https://media.istockphoto.com/id/1742686184/photo/naengmyeon.jpg?s=612x612&w=0&k=20&c=yZSfJu4qtLLPJDDqh8Mrjs1o5dnEY6xqFDBA51UFlIU=",
        "title": "Naengmyeon",
        "description": "A Korean cold noodle dish featuring chewy noodles served in a chilled, tangy broth, often garnished with beef slices, cucumber, and a boiled egg."
    },
    {
        "img": "https://letseattheworld.com/wp-content/uploads/2021/08/D75_0910-pate-en-croute-rustique.jpg",
        "title": "Pate en Croute",
        "description": "A French pâté baked in a pastry crust, often made with a mix of meats and liver, and served cold or at room temperature."
    },
    {
        "img": "https://natashaskitchen.com/wp-content/uploads/2019/12/Tres-Leches-Cake-Recipe-6.jpg",
        "title": "Tres Leches Cake",
        "description": "A Latin American sponge cake soaked in a mixture of three kinds of milk—evaporated, condensed, and heavy cream—creating a rich, moist dessert."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi Chuka",
        "description": "A Japanese cold noodle salad made with chilled ramen noodles topped with various ingredients such as ham, cucumber, and egg, dressed in a tangy sesame sauce."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "An Italian bread salad featuring cubes of stale bread mixed with tomatoes, cucumbers, red onions, and basil, dressed in olive oil and vinegar."
    },
    {
        "img": "https://img.freepik.com/free-photo/layered-chocolate-tiramisu-cake-with-mascarpone-cream-generated-by-ai_188544-18033.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722211200&semt=sph",
        "title": "Tiramisu",
        "description": "An Italian dessert made with layers of coffee-soaked ladyfingers and a creamy mascarpone mixture, dusted with cocoa powder."
    },
    {
        "img": "https://media.istockphoto.com/id/1257680494/photo/cherry-clafouti-traditional-french-sweet-fruit-dessert.jpg?s=612x612&w=0&k=20&c=0hyVafeEhRK08gdBuYe6xgXccH11Xarr3VSTE9KsR3k=",
        "title": "Clafoutis",
        "description": "A French dessert featuring a custard-like batter baked with fruit, typically cherries, resulting in a flan-like texture with a crispy top."
    },

    {
        "img": "https://www.thecountrycook.net/wp-content/uploads/2019/05/thumbnail-Southern-Ambrosia-Salad.jpg",
        "title": "Ambrosia Salad",
        "description": "An American fruit salad made with a mix of fresh fruit, coconut, and mini marshmallows, often combined with a creamy dressing made from whipped cream or sour cream."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "A famous Thai soup known for its bold flavors, combining shrimp, lemongrass, kaffir lime leaves, galangal, and chili peppers in a spicy and sour broth."
    }
]
const mealLunchSweetLightHot = [
    {
        "img": "https://media.istockphoto.com/id/1038060160/photo/portion-fried-chicken-karaage-with-lemon-and-onion-close-up-on-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=5QYZeUeQDG70i6R1Fjq9o_AVgObUqgPxEvJ0zYiHKAo=",
        "title": "Karaage",
        "description": "Karaage is a popular Japanese dish consisting of bite-sized pieces of chicken marinated in soy sauce, garlic, and ginger, then coated in a seasoned flour mixture and deep-fried until crispy. The result is a flavorful, crunchy exterior with tender, juicy meat inside. Often served with a wedge of lemon and a side of shredded cabbage, karaage is a favorite for its savory taste and satisfying texture."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/magret-de-canard-lorange-600nw-1230744946.jpg",
        "title": "Canard à l'Orange",
        "description": "Canard à l'Orange, or Duck à l'Orange, is a classic French dish that combines tender roast duck with a tangy, sweet orange sauce. The sauce is typically made from fresh orange juice, stock, and sometimes a splash of white wine or brandy, often thickened with a reduction. The duck is usually roasted until crispy and golden, and the rich, flavorful sauce complements the savory meat with a bright citrus note, making it a refined and elegant meal."
    },
    {
        "img": "https://lh5.googleusercontent.com/f-XE1LiTgPQDwPoAhGHsSQsnsQLm4lfPtRmpYVXVhkOQncL2950HbMjJkpkJg-KhNb-2b_2rN2ZqqOR1EH-EUIDZJuXX3ImRcCEO5Y9val4uwNxCb6MWF7SQ57k6azJAhlgC---uzYxIcA__DAf3hwE",
        "title": "Com Ga Xoi Mo",
        "description": "Com Ga Xoi Mo is a traditional Vietnamese dish featuring fragrant, steamed rice served with shredded chicken and crispy shallots. The chicken is often seasoned and cooked until tender, then mixed with the rice, which is infused with the flavors of ginger and garlic. The dish is garnished with crispy shallots and fresh herbs, providing a delightful contrast of textures and a savory, aromatic flavor profile."
    },
    {
        "img": "https://media.istockphoto.com/id/1128744649/photo/enchiladas-suizas.jpg?s=612x612&w=0&k=20&c=_DYp_GmxfWNSEN2qTU5WVRdfqii3dQ9_XvViiEOm6OY=",
        "title": "Enchiladas Suizas",
        "description": "Enchiladas Suizas are a popular Mexican dish known for their creamy, cheesy flavor. They feature corn tortillas filled with shredded chicken or other proteins, rolled up and covered in a luscious, tangy green sauce made from tomatillos and green chilies. Topped with a generous layer of melted cheese and sometimes baked until bubbly, the enchiladas are often garnished with fresh cilantro and served with a side of sour cream or guacamole for added richness."
    },
    {
        "img": "https://japan.recipetineats.com/wp-content/uploads/2018/01/Nikujaga_0146-500x500.jpg",
        "title": "Nikujaga",
        "description": "Nikujaga is a comforting Japanese dish featuring sliced beef, potatoes, and onions simmered in a sweet-savory sauce made from soy sauce, sugar, and mirin. Often considered a home-cooked favorite, it combines tender beef with starchy potatoes and aromatic onions, creating a hearty and flavorful meal that’s both simple and satisfying. Nikujaga is typically enjoyed with a bowl of rice and sometimes garnished with scallions or sesame seeds."
    },
    {
        "img": "https://drivemehungry.com/wp-content/uploads/2021/09/pad-see-ew-1-1.jpg",
        "title": "Pad See Ew",
        "description": "Pad See Ew is a popular Thai stir-fry dish made with wide rice noodles, sautéed with a savory-sweet sauce of soy sauce, oyster sauce, and a hint of sugar. It typically includes ingredients such as chicken, pork, or beef, along with crisp vegetables like broccoli and bell peppers. The dish is known for its rich, umami flavor and slightly charred edges from the high-heat cooking, offering a satisfying and flavorful meal."
    },
    {
        "img": "https://upload.wikimedia.org/wikipedia/commons/0/0c/B%C3%A1nh_m%C3%AC_th%E1%BB%8Bt_n%C6%B0%E1%BB%9Bng.png",
        "title": "Banh Mi Thit Nuong",
        "description": "Banh Mi Thit Nuong is a Vietnamese sandwich featuring grilled pork (thit nuong) as the star ingredient. The pork is marinated with lemongrass and spices, then grilled to perfection and served in a crispy baguette. The sandwich is typically garnished with pickled daikon and carrots, fresh cucumber slices, cilantro, and a drizzle of spicy mayonnaise or chili sauce, offering a delightful blend of savory, tangy, and fresh flavors."
    },
    {
        "img": "https://media.istockphoto.com/id/1057431080/photo/risotto-milanese-an-italian-recipe-typical-of-milan-closeup-horizontal.jpg?s=612x612&w=0&k=20&c=mxHzf7J9vSLMi2ey3b4HfKO830V2IkyVBIwHcWDNnQc=",
        "title": "Risotto alla Milanese",
        "description": "Risotto alla Milanese is a luxurious Italian dish known for its creamy texture and vibrant yellow color. Made with Arborio rice slowly cooked in a rich broth, it features a generous infusion of saffron, which imparts a distinct golden hue and a subtle floral flavor. Typically finished with grated Parmesan cheese and butter, this risotto offers a rich, savory taste with a velvety consistency, making it a classic example of Milanese cuisine."
    },
    {
        "img": "https://media.istockphoto.com/id/1223917846/photo/chiles-en-nogada-traditional-mexican-cuisine-in-puebla-mexico.jpg?s=612x612&w=0&k=20&c=cExU00c2xlU7NGEdH-4HMvw-CyRUA5Jl0RpNg61U418=",
        "title": "Chiles en Nogada",
        "description": "Chiles en Nogada is a traditional Mexican dish celebrated for its rich flavors and colorful presentation. It features poblano peppers stuffed with picadillo, a mixture of ground meat, fruits, nuts, and spices. The dish is then topped with a creamy walnut sauce (nogada) and garnished with pomegranate seeds and fresh parsley. The combination of sweet, savory, and nutty flavors, along with its vibrant colors, makes it a festive and visually striking dish, often enjoyed during Mexican Independence Day celebrations."
    },
    {
        "img": "https://www.lanascooking.com/wp-content/uploads/2022/10/southern-sweet-potato-casserole-feature-1200.jpg",
        "title": "Sweet Potato Casserole",
        "description": "Sweet Potato Casserole is a comforting and popular dish, especially during holiday meals. It features mashed sweet potatoes mixed with ingredients like butter, brown sugar, and spices, then topped with a crunchy layer of pecans or marshmallows before baking. The result is a rich, sweet, and creamy side dish with a delightful contrast of textures, offering a warm and indulgent complement to savory dishes."
    },
    {
        "img": "https://www.sidechef.com/recipe/8c7711a5-a01f-4e1b-a4e8-de37e4ad3e4c.jpg",
        "title": "Jian Dui",
        "description": "Jian Dui, also known as sesame balls, is a popular Chinese dessert featuring deep-fried glutinous rice dough filled with sweet red bean paste or lotus seed paste. The exterior is coated in sesame seeds, which become crispy and golden when fried. Jian Dui is known for its crispy, nutty outer layer and chewy, sweet filling, making it a delightful treat often enjoyed during celebrations and special occasions."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/korean-fried-chicken-yangnyeom-tongdak-sweet-spicy-sauce-sesame-seed-271771781.jpg",
        "title": "Yangnyeom Tongdak",
        "description": "Yangnyeom Tongdak is a popular Korean fried chicken dish known for its crispy exterior and flavorful, spicy-sweet glaze. The chicken is deep-fried until golden and crispy, then coated in a tangy sauce made from ingredients like gochujang (Korean red chili paste), soy sauce, garlic, and honey. Often garnished with sesame seeds and chopped green onions, this dish offers a delicious balance of heat, sweetness, and umami, making it a favorite for casual dining and celebrations."
    },
    {
        "img": "https://media.istockphoto.com/id/649691790/photo/tarte-tatin.jpg?s=612x612&w=0&k=20&c=bU5FZ5kuHK4n9h_oUjTsTQ4YdVJsuPgxel0DsRWHHzE=",
        "title": "Tarte Tatin",
        "description": "Tarte Tatin is a classic French dessert featuring caramelized apples baked under a buttery, flaky pastry. The apples are cooked in a rich caramel sauce until tender, then covered with the pastry and baked until golden. Once baked, the tart is flipped over to reveal the glossy, caramel-coated apples on top. This upside-down tart combines the sweet, rich flavors of caramelized fruit with the crisp texture of the pastry, creating a deliciously comforting and elegant treat."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/grill-chicken-vegetables-korea-dak-600nw-707779291.jpg",
        "title": "Dak Galbi",
        "description": "Dak Galbi is a flavorful Korean dish made with marinated, boneless chicken pieces stir-fried with vegetables and rice cakes. The chicken is typically seasoned with a spicy-sweet sauce made from gochujang (Korean red chili paste), soy sauce, garlic, and ginger, giving it a bold, savory flavor. The dish often includes ingredients like cabbage, sweet potatoes, and onions, and is cooked on a hot grill or skillet, offering a delightful combination of spicy, sweet, and umami flavors with a satisfying mix of textures."
    },
    {
        "img": "https://media.istockphoto.com/id/461174267/photo/traditional-sliced-honey-glazed-ham.jpg?s=612x612&w=0&k=20&c=3mLwaQ2Acn3uLdQM4xr14PwkCk5nB-bW5RMzQt4qSUM=",
        "title": "Honey Glazed Ham",
        "description": "Honey Glazed Ham is a classic holiday dish featuring a baked ham coated in a sweet and savory glaze made from honey, brown sugar, and sometimes mustard or cloves. The ham is typically scored to allow the glaze to caramelize, creating a glossy, flavorful crust. The result is a tender, juicy ham with a deliciously sweet and slightly tangy flavor, often served as a centerpiece for festive meals and special occasions."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
        "title": "Pad Thai",
        "description": "Pad Thai is a Thai stir-fried noodle dish made with rice noodles, shrimp, tofu, bean sprouts, peanuts, and scrambled egg, flavored with tamarind sauce, fish sauce, and chili."
    },
    {
        "img": "https://cookieandkate.com/images/2020/09/pasta-alla-norma-recipe-3.jpg",
        "title": "Pasta alla Norma",
        "description": "Pasta alla Norma is a classic Sicilian dish renowned for its simple yet flavorful ingredients. It features pasta, typically spaghetti or penne, tossed with a rich tomato sauce made from eggplant, garlic, and basil. The dish is often topped with a generous sprinkle of ricotta salata, a tangy, aged cheese, which adds a delightful contrast to the sweet and savory tomato sauce. This vegetarian pasta offers a satisfying blend of textures and flavors, celebrating the essence of Sicilian cuisine."
    },
    {
        "img": "https://media.istockphoto.com/id/1038297162/photo/mexican-mole-sauce-with-chicken.jpg?s=612x612&w=0&k=20&c=l_AV9-2nKp1wBHvjyxp971YEdqH7XdzrNURHVkk2JSQ=",
        "title": "Pollo con Mole",
        "description": "Pollo con Mole is a traditional Mexican dish featuring chicken cooked in a rich, complex mole sauce. Mole is a savory-sweet sauce made from a blend of ingredients like dried chilies, chocolate, spices, and nuts, resulting in a deep, flavorful sauce with layers of taste. The chicken is simmered in the mole until tender, absorbing the sauce's robust flavors. Typically served with rice or tortillas, Pollo con Mole offers a comforting and distinctive taste that highlights the depth of Mexican cuisine."
    },
    {
        "img": "https://media.istockphoto.com/id/1434821095/photo/pulled-pork-sandwiches-with-cole-slaw-on-brioche-buns.jpg?s=612x612&w=0&k=20&c=b0-feNr-JlOMt_gWtGnMv5Czo_QS-g444KCiyfbDbhM=",
        "title": "BBQ Pulled Pork Sandwich",
        "description": "A BBQ Pulled Pork Sandwich features tender, slow-cooked pork shoulder that is shredded and tossed in a tangy barbecue sauce. The pork is often seasoned with a spice rub before being cooked until it falls apart easily. Served on a soft bun, the sandwich is typically topped with crunchy coleslaw and pickles for added texture and flavor. This comforting and flavorful sandwich combines smoky, sweet, and savory elements, making it a popular choice for casual dining and gatherings."
    },
    {
        "img": "https://www.wokandkin.com/wp-content/uploads/2020/06/Banh-Canh-Cua-saved-for-web-500x500.png",
        "title": "Banh Canh Cua",
        "description": "A BBQ Pulled Pork Sandwich features tender, slow-cooked pork shoulder that is shredded and tossed in a tangy barbecue sauce. The pork is often seasoned with a spice rub before being cooked until it falls apart easily. Served on a soft bun, the sandwich is typically topped with crunchy coleslaw and pickles for added texture and flavor. This comforting and flavorful sandwich combines smoky, sweet, and savory elements, making it a popular choice for casual dining and gatherings."
    },
    {
        "img": "https://www.sidechef.com/recipe/26dd29be-4ba2-49a6-80cf-7dd3062d793e.jpg?d=1408x1120",
        "title": "Hong Kong Style French Toast",
        "description": "Hong Kong Style French Toast is a beloved breakfast and tea-time treat featuring thick slices of bread dipped in an egg mixture, then deep-fried until golden and crispy. It's typically served with a generous pat of butter and drizzled with syrup or honey. Often accompanied by a side of sweetened condensed milk or a sprinkle of powdered sugar, this indulgent dish combines a crispy exterior with a soft, fluffy interior, offering a deliciously rich and satisfying treat."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "Bibimbap is a Korean dish of mixed rice topped with vegetables (such as spinach, mushrooms, and carrots), beef, a fried egg, and spicy gochujang sauce. It's hearty and flavorful."
    },
    {
        "img": "https://media.istockphoto.com/id/1397562458/photo/panaeng-curry-with-chicken-sliced-chicken-breast-meat-in-red-curry-paste-and-coconut-milk.jpg?s=612x612&w=0&k=20&c=-qrcsOdHDDR9fEU4sbH42aDUaMmoHb4GkaUm3B-inCw=",
        "title": "Panang Curry",
        "description": "Panang Curry is a rich and aromatic Thai curry known for its distinctive blend of flavors. Made with Panang curry paste, which includes ingredients like dried chili, coriander, cumin, and kaffir lime leaves, the curry is cooked in a creamy coconut milk base. It often features tender slices of meat (such as beef or chicken) and vegetables, and is typically garnished with fresh basil and a sprinkle of peanuts. The result is a slightly sweet, spicy, and savory curry with a smooth, flavorful sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/153710716/photo/crepes.jpg?s=612x612&w=0&k=20&c=o99rEeJpz31ObuTefMBGbIlSa-HlpJxkP4XHD44IOcQ=",
        "title": "Crepes Suzette",
        "description": "Crêpes Suzette is a classic French dessert featuring delicate crêpes served with a zesty, orange-flavored sauce. The crêpes are typically folded or rolled and topped with a sauce made from orange juice, zest, butter, sugar, and a splash of liqueur such as Grand Marnier or Cointreau. Often flambéed to enhance the flavor, this dish offers a delightful combination of tender crêpes and a tangy, sweet sauce, making it an elegant and indulgent treat."
    }
]
const mealLunchSweetLightCold = [
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://cinnamonsnail.com/wp-content/uploads/2023/08/banh-trang-tron-FEATURE-1.jpg",
        "title": "Banh Trang Tron",
        "description": "Banh Trang Tron is a Vietnamese street food dish featuring rice paper cut into strips and mixed with shredded vegetables, herbs, and a tangy, spicy dressing, often topped with dried shrimp or pork."
    },
    {
        "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
        "title": "Tostadas de Ceviche",
        "description": "Tostadas de Ceviche is a Mexican dish featuring crispy tostadas topped with a refreshing ceviche made from marinated seafood, lime juice, tomatoes, onions, and cilantro."
    },
    {
        "img": "https://media.istockphoto.com/id/1742686184/photo/naengmyeon.jpg?s=612x612&w=0&k=20&c=yZSfJu4qtLLPJDDqh8Mrjs1o5dnEY6xqFDBA51UFlIU=",
        "title": "Naengmyeon",
        "description": "Naengmyeon is a Korean cold noodle dish featuring chewy noodles served in a chilled, tangy broth, often garnished with beef slices, cucumber, and a boiled egg."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2017/01/yum-woon-sen-blog.jpg",
        "title": "Yum Woon Sen",
        "description": "Yum Woon Sen is a Thai spicy and tangy salad made with glass noodles, mixed with shrimp, minced pork, fresh herbs, and a flavorful lime-chili dressing."
    },
    {
        "img": "https://assets.epicurious.com/photos/628ba560cf19fbfe9137ffa4/1:1/w_2560%2Cc_limit/Caprese_RECIPE_051922_34205.jpg",
        "title": "Insalata Caprese",
        "description": "Insalata Caprese is an Italian salad made with fresh tomatoes, mozzarella cheese, and basil, drizzled with olive oil and balsamic vinegar for a simple, refreshing appetizer."
    },
    {
        "img": "https://okonomikitchen.com/wp-content/uploads/2021/03/spinach-gomae-japanese-683x1024.jpg",
        "title": "Horenso no Goma-ae",
        "description": "Horenso no Goma-ae is a Japanese dish of blanched spinach dressed in a sweet and savory sesame sauce, often served as a side dish."
    },
    {
        "img": "https://foodnouveau.com/wp-content/uploads/2021/08/Soupe-au-pistou_02_1290px_new.jpg.webp",
        "title": "Soupe au Pistou",
        "description": "Soupe au Pistou is a French vegetable soup made with a variety of seasonal vegetables and beans, flavored with pistou, a garlicky basil sauce similar to pesto."
    },
    {
        "img": "https://st.depositphotos.com/1773130/4036/i/450/depositphotos_40368007-stock-photo-baked-tofu-with-spices.jpg",
        "title": "Liuliang Doufu",
        "description": "Liuliang Doufu is a Chinese dish made with chilled tofu, often served with a soy-based dressing and garnished with fresh herbs and vegetables."
    },
    {
        "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
        "title": "Cobb Salad",
        "description": "Cobb Salad is an American salad featuring a mix of greens topped with rows of ingredients like grilled chicken, bacon, eggs, avocado, and blue cheese, dressed in a tangy vinaigrette."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.B-ub5yqUC_tJ5OWjPWK8fgHaFj?rs=1&pid=ImgDetMain",
        "title": "Salade Nicoise",
        "description": "Salade Nicoise is a French salad made with fresh ingredients such as tuna, hard-boiled eggs, green beans, tomatoes, olives, and potatoes, dressed in a vinaigrette."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.mbZqwnte5R8fIHKsh2mRkAAAAA?rs=1&pid=ImgDetMain",
        "title": "Panzenella",
        "description": "Panzenella is an Italian bread salad featuring cubes of stale bread mixed with tomatoes, cucumbers, red onions, and basil, dressed in olive oil and vinegar."
    },
    {
        "img": "https://www.seriouseats.com/thmb/Xll8pGVDwEul3t1Pa4tqxdsGAnM=/1500x1125/filters:fill(auto,1)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2019__08__20190731-Oi-naengguk-chilled-cucumber-soup-vicky-wasik-5-896c3b95cb7c473a861d3b1bd3f070df.jpg",
        "title": "Oi Naengguk",
        "description": "Oi Naengguk is a Korean chilled cucumber soup made with sliced cucumbers in a cold, light broth flavored with garlic, ginger, and vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som Tam",
        "description": "Som Tam is a Thai green papaya salad known for its spicy, tangy flavor, made with shredded papaya, tomatoes, green beans, peanuts, and a chili-lime dressing."
    },
    {
        "img": "https://media.istockphoto.com/id/475045278/photo/concept-of-italian-food.jpg?s=612x612&w=0&k=20&c=HMrSq5Y40hFe947eXsMsH3npA_5-3VlCZYL2a72QKmw=",
        "title": "Prosciutto e Melone",
        "description": "Prosciutto e Melone is an Italian antipasto of thinly sliced prosciutto ham paired with fresh, sweet melon, creating a perfect balance of salty and sweet flavors."
    },
    {
        "img": "https://media.istockphoto.com/id/1742686184/photo/naengmyeon.jpg?s=612x612&w=0&k=20&c=yZSfJu4qtLLPJDDqh8Mrjs1o5dnEY6xqFDBA51UFlIU=",
        "title": "Bokkeum Naengmyeon",
        "description": "Bokkeum Naengmyeon is a Korean dish featuring stir-fried cold noodles with vegetables and a spicy-sweet sauce, served as a cold or room temperature meal."
    },
    {
        "img": "https://scruffandsteph.com/wp-content/uploads/2018/03/Vietnamese-Banana-Dessert-25.jpg",
        "title": "Che Chuoi",
        "description": "Che Chuoi is a Vietnamese dessert made with bananas cooked in a sweet coconut milk sauce, often served with tapioca pearls or beans."
    },
]
const mealLunchSavoryHeavyHot = [
    {
        "img": "https://th.bing.com/th/id/R.40e73cc28852a4f8933d92ff004c9459?rik=RVl5eAgPmqegkQ&riu=http%3a%2f%2fwww.angsarap.net%2fwp-content%2fuploads%2f2016%2f03%2fBanh-Xeo-Wide.jpg&ehk=vxSkYh%2fPULsZL%2bLFiwvGzG44ycUPBIF7zexCoe8wbvc%3d&risl=&pid=ImgRaw&r=0",
        "title": "Bánh xèo",
        "description": "Bánh xèo are crispy Vietnamese pancakes made from rice flour batter filled with shrimp, pork, bean sprouts, and herbs. They are served with fresh vegetables and dipping sauce."
    },
    {
        "img": "https://th.bing.com/th/id/R.6f872f2fb01b80d1c16b70190fccbaf3?rik=QX7%2b2Xhx%2bELCYg&pid=ImgRaw&r=0",
        "title": "Bánh tằm bì",
        "description": "Bánh tằm bì is a Vietnamese dish consisting of thick rice noodles topped with shredded pork skin (bì), crushed peanuts, herbs, and a fish sauce dressing. It's a refreshing and flavorful dish commonly found in Vietnam."
    },
    {
        "img": "https://th.bing.com/th/id/R.f25432f521fb3f2a7f9e4280b70ddc31?rik=r5VYHOSZrgNUIA&riu=http%3a%2f%2f4.bp.blogspot.com%2f-r8wa_rniThs%2fUldlT5v56KI%2fAAAAAAAAA60%2fDtDIEFZEyow%2fs1600%2fIMG_7381.JPG&ehk=%2bAW9%2f8AL2O%2f6CLKrPrVRpzobrhKDvoeI11w40Mum4L4%3d&risl=&pid=ImgRaw&r=0",
        "title": "Bánh bèo",
        "description": "Bánh bèo are small steamed rice cakes topped with savory ingredients such as dried shrimp, mung bean paste, and crispy pork rinds. They are served with a dipping sauce and often enjoyed as a snack or appetizer."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/dolsot-bibimbap-korean-mixed-rice-600nw-1635970195.jpg",
        "title": "Dolsot Bibimbap",
        "description": "Dolsot Bibimbap is a Korean mixed rice dish served in a hot stone bowl. It includes rice topped with assorted vegetables, beef, and a fried egg, all mixed with gochujang (Korean chili paste). The stone bowl creates a crispy layer of rice at the bottom."
    },
    {
        "img": "https://st.depositphotos.com/1419868/1253/i/450/depositphotos_12532112-stock-photo-cheeseburger.jpg",
        "title": "Cheeseburger",
        "description": "A Cheeseburger is a classic American sandwich featuring a grilled beef patty topped with melted cheese, typically served on a hamburger bun with lettuce, tomato, pickles, onions, and condiments like ketchup and mustard."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/risotto-ai-funghi-white-background-304013371.jpg",
        "title": "Risotto ai Funghi",
        "description": "Risotto ai Funghi is an Italian creamy rice dish made with arborio rice cooked in a rich broth and mixed with sautéed mushrooms, garlic, and onions. It's finished with Parmesan cheese and sometimes white wine for extra flavor."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-crispy-pancake-600nw-2092243153.jpg",
        "title": "Banh Xeo",
        "description": "Banh Xeo is a Vietnamese crispy savory pancake made from rice flour, turmeric, and coconut milk, filled with pork, shrimp, and bean sprouts. It’s typically served with fresh herbs and lettuce, and enjoyed with a dipping sauce."
    },
    {
        "img": "https://norecipes.com/wp-content/uploads/2012/04/recipecoq-au-vin-recipe.1024x1024-500x500.jpg",
        "title": "Coq au Vin",
        "description": "Coq au Vin is a traditional French dish of chicken braised in red wine with mushrooms, onions, and bacon. The slow cooking process results in a rich, flavorful sauce that complements the tender chicken."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/thai-drunken-noodles-pad-kee-600nw-1655549911.jpg",
        "title": "Pad Kee Mao",
        "description": "Pad Kee Mao, also known as Drunken Noodles, is a Thai stir-fried noodle dish made with wide rice noodles, vegetables, and a spicy sauce. It’s often flavored with basil and can include chicken, beef, or seafood."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/peking-duck-600nw-250918561.jpg",
        "title": "Peking Duck",
        "description": "Peking Duck is a renowned Chinese dish known for its crispy skin and tender meat. The duck is roasted until the skin is crisp, then served with thin pancakes, hoisin sauce, and sliced vegetables."
    },
    {
        "img": "https://media.istockphoto.com/id/1406672650/photo/japanese-tonkotsu-ramen.jpg?s=612x612&w=0&k=20&c=XfwavYs_chHo-S-M7IWoK7IxEXzYxd3dFyihnvC_zkI=",
        "title": "Tonkotsu Ramen",
        "description": "Tonkotsu Ramen is a Japanese noodle soup made with a rich, creamy pork bone broth. It typically features ramen noodles topped with sliced pork belly, green onions, and a soft-boiled egg."
    },
    {
        "img": "https://media.istockphoto.com/id/1127190325/photo/enchiladas-rojas.jpg?s=612x612&w=0&k=20&c=SGX49iBv1My4W7kldG6wzphm741R7XScB9XM3SXKSZM=",
        "title": "Enchiladas Rojas",
        "description": "Enchiladas Rojas are a traditional Mexican dish of rolled tortillas filled with meat, cheese, or beans, smothered in a rich red chili sauce, and baked until bubbly. They are often topped with onions, cheese, and cilantro."
    },
    {
        "img": "https://media.istockphoto.com/id/1143053016/photo/mapo-tofu-bowl.jpg?s=612x612&w=0&k=20&c=MQTOoLOAq2hgRm1JrQywuaxgn-BM3TR2z75gnfNAjbM=",
        "title": "Ma Po Tofu",
        "description": "Ma Po Tofu is a popular Chinese dish made with tofu cooked in a spicy, savory sauce made from chili bean paste, ground pork, and Sichuan peppercorns. It’s known for its bold flavors and spicy heat."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "Kimchi Jjigae is a Korean stew made with fermented kimchi, pork, tofu, and vegetables. It’s a hearty and spicy dish, often enjoyed with a bowl of steamed rice."
    },
    {
        "img": "https://media.istockphoto.com/id/1290605283/photo/homemade-gyudon-japanese-beef-bowl.jpg?s=612x612&w=0&k=20&c=gu8Y3Q5z51FzuBpCAl45WEXojI9boA31QsLEL700NwA=",
        "title": "Gyudon",
        "description": "Gyudon is a Japanese beef bowl consisting of thinly sliced beef and onions cooked in a sweet and savory sauce made with soy sauce and mirin, served over a bowl of steamed rice."
    },
    {
        "img": "https://media.istockphoto.com/id/637353622/photo/ossobuco-with-risotto-milanese.jpg?s=612x612&w=0&k=20&c=iGrIOVE_8KesOZM3yCltmojPd_zATzzafZdmmEyX16g=",
        "title": "Osso Buco",
        "description": "Osso Buco is an Italian dish featuring braised veal shanks cooked slowly in a white wine and broth mixture with vegetables. The marrow in the bone is a delicacy, and the dish is often served with gremolata and risotto or polenta."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "Bibimbap is a Korean mixed rice dish topped with various vegetables, meat (usually beef), a fried egg, and gochujang (red chili paste). The ingredients are mixed together before eating, creating a flavorful and colorful meal."
    },
    {
        "img": "https://media.istockphoto.com/id/1398323502/photo/massaman-curry-with-chicken-and-potatoes.jpg?s=612x612&w=0&k=20&c=2BKUUGn3d2A34O1uMmtZz0JdLVVS6epiys0U95sE5qs=",
        "title": "Massaman Curry",
        "description": "Massaman Curry is a Thai curry known for its rich, complex flavors. It features a blend of spices like cinnamon and cloves, combined with coconut milk, potatoes, peanuts, and meat, usually beef or chicken."
    },
    {
        "img": "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-4272x2848.jpg",
        "title": "Lasagna",
        "description": "Lasagna is an Italian dish made of layers of pasta sheets, meat sauce (often with ground beef or sausage), béchamel or ricotta cheese, and mozzarella, baked until bubbly and golden."
    },
    {
        "img": "https://th.bing.com/th/id/R.949856733c282ff21ce1a816a5d6de8a?rik=rjrylBOTHgdW7w&pid=ImgRaw&r=0",
        "title": "Chicken Pot Pie",
        "description": "Chicken Pot Pie is a comforting American dish with a flaky pie crust filled with a creamy mixture of chicken, vegetables, and herbs. It’s baked until golden and served warm."
    },
    {
        "img": "https://th.bing.com/th/id/R.cbe7570855a830cfc398d239b5fca21e?rik=OnYU3lOsoE6jTw&riu=http%3a%2f%2fmilrecetas.net%2fwp-content%2fuploads%2f2016%2f09%2fTacos-al-pastor-3.jpg&ehk=3ylAYP%2fgLg2n6pPBPanu7ldoF9p%2fJcQXH7osJScmAm0%3d&risl=&pid=ImgRaw&r=0",
        "title": "Tacos al Pastor",
        "description": "Tacos al Pastor are a Mexican street food classic made with marinated pork cooked on a vertical spit, sliced thin, and served in soft tortillas with pineapple, cilantro, and onions."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "Tom Yum Goong is a Thai hot and sour shrimp soup flavored with lemongrass, kaffir lime leaves, galangal, and chili peppers. It’s known for its bold, tangy, and aromatic flavors."
    },
    {
        "img": "https://media.istockphoto.com/id/535851351/photo/lasagna-on-a-square-white-plate.jpg?s=612x612&w=0&k=20&c=Rg1K7z4NlWhy2qexaym_GJ0khcJFSJUJgToTN2cRspM=",
        "title": "Cassoulet",
        "description": "Cassoulet is a hearty French stew made with white beans, pork (often including sausages and cured meats), and sometimes lamb. It's slow-cooked to develop a rich, deep flavor."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://media.istockphoto.com/id/182508547/photo/chiles-rellenos.jpg?s=612x612&w=0&k=20&c=rOJ_8y7h3geVtHKPtY89Eo1R1pvhGqUYHNZxg9g-MM4=",
        "title": "Chiles Rellenos",
        "description": "Chiles Rellenos are a Mexican dish featuring large, mild chili peppers stuffed with cheese or meat, then battered and fried until crispy. They are often served with a tomato-based sauce."
    },
    {
        "img": "https://1mal1japan.de/wp-content/uploads/2018/07/Okonomiyaki-Titelbild_1200x800.jpg",
        "title": "Oyakodon",
        "description": "Oyakodon is a Japanese rice bowl dish made with chicken and eggs simmered together in a sweet and savory sauce, served over a bed of steamed rice."
    },
    {
        "img": "https://media.istockphoto.com/id/1174042861/photo/mexican-red-pozole-soup-on-wooden-background.jpg?s=612x612&w=0&k=20&c=P5AGzkZk3t_P5uFqYYMjphXogwxdgLnCXnpe8M74Lm8=",
        "title": "Pozole",
        "description": "Pozole is a traditional Mexican soup made with hominy corn, meat (usually pork or chicken), and seasoned with chili peppers and other spices. It's often garnished with fresh vegetables and lime."
    }
]
const mealLunchSavoryHeavyCold = [
    {
        "img": "https://images.unsplash.com/photo-1708790035567-722342de7a36?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "title": "Macaroni Salad",
        "description": "Macaroni salad is a popular side dish made from cooked elbow macaroni pasta mixed with a creamy dressing, typically mayonnaise-based. It often includes ingredients such as diced celery, onions, bell peppers, and sometimes pickles or olives for added texture and flavor. Many variations also incorporate proteins like hard-boiled eggs, ham, or chicken."
    },
    {
        "img": "https://images.pexels.com/photos/4210803/pexels-photo-4210803.jpeg?auto=compress&cs=tinysrgb&w=1200",
        "title": "Potato Salad",
        "description": "Potato salad is a classic dish made primarily from boiled potatoes, mixed with various ingredients and a dressing. The dressing is typically mayonnaise-based, but it can also be made with mustard or vinaigrette.It is often served near room-temperature and can often be found in stores like Walmart or target.This is the perfect side dish to eat with your meal on a hot sunny day!"
    },
    {
        "img": "https://th.bing.com/th/id/OIP.y3qYxHrb96HCPJmArzjuYgHaE6?rs=1&pid=ImgDetMain",
        "title": "Gỏi Cuốn",
        "description": "Gỏi Cuốn is a popular vietnamese dish that is filled with shrimp, pork, vermicelli noodles, and fresh vegetables, often served with a hoisin-peanut dipping sauce. This is perfect for those who want to have a nice quick lunch!"
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-special-combination-vermicelli-bowl-600nw-2127831767.jpg",
        "title": "Bún Thịt Nướng",
        "description": "Bún Thịt Nướng is a well loved dish by many people served with cold rice vermicelli noodles topped with grilled pork, fresh herbs, and a side of fish sauce dressing. This is a delicious dish that is perfect for everyone! "
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "description": "A hearty salad featuring tuna, hard-boiled eggs, green beans, potatoes, olives, and anchovies, dressed with olive oil and vinegar.It is very filling and is perfect for who enjoy eating vegatbles!"
    },
    {
        "img": "https://media.istockphoto.com/id/528429797/photo/salad-nicoise.jpg?s=612x612&w=0&k=20&c=6dwufdqbuEGopIMeLng6sDGPR7MVA-ko4L3w9kh0reM=",
        "title": "Insalata di Riso",
        "description": "This is a cold rice salad with mixed vegetables, tuna, hard-boiled eggs, and olives, dressed with olive oil and vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/136183596/photo/tuna-calf.jpg?s=612x612&w=0&k=20&c=veJ2M1FAqUMmDQt1ZIAHOkMn_GYIPQD72vhmy68U-yo=",
        "title": "Vitello Tonnato",
        "description": "This dish is composed of thinly sliced veal served cold with a creamy tuna-caper sauce. It is often served with potato and beans on the side and is well liked by people of all ages. "
    },
    {
        "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fstellanspice.com%2Fmexican-shrimp-ceviche%2F&psig=AOvVaw3Cb0mpXbqjzmdx7XROU2JP&ust=1721943000251000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDn1N7PwIcDFQAAAAAdAAAAABAJ",
        "title": "Ceviche",
        "description": "Marinated seafood, typically shrimp or fish, mixed with lime juice, onions, tomatoes, cilantro, and avocado, served cold."
    }
]
const mealLunchSavoryLightHot = [{
    "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
    "title": "Quiche Lorraine",
    "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
},
{
    "img": "https://www.shutterstock.com/image-photo/vietnamese-crispy-pancake-600nw-2092243153.jpg",
    "title": "Banh xeo",
    "description": "Banh xeo are Vietnamese savory crepes filled with shrimp, pork, bean sprouts, and herbs. They are crispy and often served with lettuce leaves and dipping sauce."
},
{
    "img": "https://www.shutterstock.com/image-photo/mexican-traditional-chilaquiles-breakfast-national-600nw-2289060247.jpg",
    "title": "Chilaquiles",
    "description": "Chilaquiles are fried tortilla chips cooked in salsa (red or green) and topped with cheese, cream, and sometimes meat such as chicken or beef. They're a popular Mexican breakfast or brunch dish."
},
{
    "img": "https://st2.depositphotos.com/1692343/8128/i/450/depositphotos_81284818-stock-photo-homemade-asian-pork-potstickers.jpg",
    "title": "Gyoza",
    "description": "Gyoza are Japanese pan-fried dumplings filled with ground meat (usually pork) and vegetables, wrapped in thin dough. They are typically served with a dipping sauce."
},
{
    "img": "https://media.istockphoto.com/id/1206748835/photo/delicious-kung-pao-chicken-with-pepper-shallots-and-peanuts-in-a-wok-pan.jpg?s=612x612&w=0&k=20&c=1bZhsu-d-nUYcHdMJYFNMzRbl5MaMLH44jelULOY_HM=",
    "title": "Kung pao chicken",
    "description": "Kung pao chicken is a Chinese stir-fry dish made with diced chicken, peanuts, vegetables, and chili peppers. It's known for its spicy and slightly sweet flavor."
},
{
    "img": "https://cdn.pixabay.com/photo/2014/06/28/14/14/chili-con-carne-378952_1280.jpg",
    "title": "Chili con carne",
    "description": "Chili con carne is a spicy stew made with ground meat (often beef), tomatoes, chili peppers, beans, and spices. It's a hearty dish that's popular in Tex-Mex cuisine."
},
{
    "img": "https://t4.ftcdn.net/jpg/02/84/79/43/360_F_284794360_jBksBOvSB4MNAWKbffJXr7uVZUSqNAwx.jpg",
    "title": "Takoyaki",
    "description": "Takoyaki are Japanese octopus-filled savory balls made of batter cooked in a special molded pan. They are typically topped with takoyaki sauce, mayonnaise, bonito flakes, and seaweed."
},
{
    "img": "https://media.istockphoto.com/id/1414975259/photo/stir-fried-thai-basil-with-minced-pork-with-fried-egg.jpg?s=612x612&w=0&k=20&c=Wq0HGILPF2APjzl6fEnUQdvz9-nCPGhTq7ah-lyKf3M=",
    "title": "Pad krapow moo",
    "description": "Pad krapow moo is a Thai dish of stir-fried pork with holy basil, garlic, chili, and soy sauce. It's often served over rice with a fried egg on top."
},
{
    "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
    "title": "Ratatouille",
    "description": "Ratatouille is a French vegetable stew made with tomatoes, zucchini, eggplant, bell peppers, onions, garlic, and herbs. It's typically served warm as a side dish."
},
{
    "img": "https://static01.nyt.com/images/2021/05/10/dining/kc-spring-vegetable-japchae/kc-spring-vegetable-japchae-threeByTwoMediumAt2X.jpg",
    "title": "Japchae",
    "description": "Japchae is a Korean dish of stir-fried glass noodles made from sweet potato starch, mixed with vegetables (often including spinach, carrots, and mushrooms) and sometimes beef."
},
{
    "img": "https://media.istockphoto.com/id/1267610826/photo/famous-internationally-renowned-thai-green-coconut-curry-gaeng-keow-wan-gai-with-chicken-in-a.jpg?s=612x612&w=0&k=20&c=jXhnFi2TPqQKpvuLAPinL5HeuwnINKyS0hIqom46aV4=",
    "title": "Gaeng keow wan gai",
    "description": "Gaeng keow wan gai is a Thai green curry with chicken cooked in coconut milk, green curry paste, and vegetables such as Thai eggplant and bamboo shoots."
},
{
    "img": "https://media.istockphoto.com/id/174899936/photo/rice-croquette.jpg?s=612x612&w=0&k=20&c=wR2o--uL8tAtnn1sC6C4GCZvutTfff53kJ2U6IoWPGg=",
    "title": "Arancini",
    "description": "Arancini are Italian rice balls filled with ragù (meat sauce), mozzarella, and sometimes peas. They are coated in breadcrumbs and fried until crispy."
},
{
    "img": "https://media.istockphoto.com/id/1388417437/photo/homemade-italian-spaghetti-algio-e-olio.jpg?s=612x612&w=0&k=20&c=gocHozUlPyNStETLkDTqU5uTOQYDWLXLa8_FCb_yCjM=",
    "title": "Spaghetti aglio e olio",
    "description": "Spaghetti aglio e olio is an Italian pasta dish made with spaghetti, garlic, olive oil, and chili flakes. It's a simple yet flavorful dish often garnished with parsley and grated cheese."
},
{
    "img": "https://t4.ftcdn.net/jpg/00/85/01/81/360_F_85018173_76yv8bJ4ak9DeXEw19wgF7ts5sAlGcWD.jpg",
    "title": "Texas-style brisket",
    "description": "Texas-style brisket is a slow-cooked beef brisket rubbed with a mix of spices, then smoked until tender. It's a signature dish of Texas barbecue."
},
{
    "img": " https://www.shutterstock.com/image-photo/cheese-dak-galbi-600nw-761615974.jpg",
    "title": "Dakgalbi",
    "description": "Dakgalbi is a Korean dish of spicy stir-fried chicken marinated in a spicy-sweet sauce (often gochujang-based), with vegetables such as cabbage, carrots, and sweet potatoes."
},
{
    "img": "https://carlsbadcravings.com/wp-content/uploads/2021/01/Dan-Dan-Noodles-20.jpg",
    "title": "Dan dan noodles",
    "description": "Dan dan noodles are spicy Sichuan noodles topped with minced meat, chili oil, Sichuan pepper, and sometimes vegetables like bok choy."
},
{
    "img": "https://st4.depositphotos.com/1373322/27225/i/450/depositphotos_272258212-stock-photo-drunken-noodles-pad-kee-mao.jpg",
    "title": "Pad kee mao",
    "description": "Pad kee mao, also known as drunken noodles, is a Thai stir-fry dish made with wide rice noodles, soy sauce, fish sauce, garlic, basil, and chili. It's known for its spicy and savory flavors."
},
{
    "img": "https://st2.depositphotos.com/1692343/8128/i/450/depositphotos_81286030-stock-photo-spicy-homemade-buffalo-wings.jpg",
    "title": "Buffalo wings",
    "description": "Buffalo wings are deep-fried chicken wings coated in a spicy sauce made from hot sauce, butter, and other seasonings. They are typically served with celery sticks and blue cheese dressing."
},
{
    "img": "https://www.koreanbapsang.com/wp-content/uploads/2010/02/DSC0780-2-500x500.jpg",
    "title": "Kimchi jeon",
    "description": "Kimchi jeon is a Korean pancake made with kimchi and pancake batter, pan-fried until crispy. It's often served with a soy-based dipping sauce."
},
{
    "img": "https://media.istockphoto.com/id/1223917846/photo/chiles-en-nogada-traditional-mexican-cuisine-in-puebla-mexico.jpg?s=612x612&w=0&k=20&c=cExU00c2xlU7NGEdH-4HMvw-CyRUA5Jl0RpNg61U418=",
    "title": "Chiles en nogada",
    "description": "Chiles en nogada are stuffed poblano peppers filled with picadillo (a mixture of meat, fruits, and spices), topped with walnut sauce, and garnished with pomegranate seeds. They're a traditional Mexican dish."
},
{
    "img": "https://media.istockphoto.com/id/1038060160/photo/portion-fried-chicken-karaage-with-lemon-and-onion-close-up-on-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=5QYZeUeQDG70i6R1Fjq9o_AVgObUqgPxEvJ0zYiHKAo=",
    "title": "Karaage",
    "description": "Karaage is Japanese fried chicken marinated in soy sauce, garlic, and ginger, coated in flour or potato starch, and deep-fried until crispy. It's often served with a wedge of lemon."
},
{
    "img": "https://media.istockphoto.com/id/491938245/photo/steamed-mussels.jpg?s=612x612&w=0&k=20&c=MWGnxcHJEpYNKPFdzSUN2bTiYqjhsAdm9HMO9h_YIEs=",
    "title": "Moules marinières",
    "description": "Moules marinières are French mussels cooked in white wine with shallots, garlic, parsley, and sometimes cream. It's a classic French seafood dish often served with crusty bread."
},
{
    "img": "https://st2.depositphotos.com/1373322/47441/i/450/depositphotos_474417218-stock-photo-hot-spicy-rice-cake-tteokbokki.jpg",
    "title": "Tteokbokki",
    "description": "Tteokbokki is a Korean dish of spicy stir-fried rice cakes, commonly cooked with fish cakes in a sweet and spicy gochujang sauce."
},
{
    "img": "https://www.shutterstock.com/image-photo/cha-gio-vietnamese-food-fried-600nw-1673283199.jpg",
    "title": "Cha gio",
    "description": "Cha gio are Vietnamese fried spring rolls filled with ground pork, shrimp, mushrooms, and vegetables, wrapped in rice paper and deep-fried until crispy. They are served with dipping sauce."
},
{
    "img": "https://familystylefood.com/wp-content/uploads/2021/12/Coq-Au-Vin-hero-macro.jpg",
    "title": "Coq au vin",
    "description": "Coq au vin is a French dish of chicken braised in red wine, with mushrooms, onions, bacon (lardons), and sometimes garlic. It's a hearty and flavorful stew."
},
{
    "img": "https://www.katiescucina.com/wp-content/uploads/2021/08/Calamari-Fritti.jpg",
    "title": "Calamari fritti",
    "description": "Calamari fritti is Italian fried calamari (squid) coated in seasoned flour or breadcrumbs and deep-fried until crispy. It's often served with lemon wedges and marinara sauce for dipping."
},
{
    "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz6kh9iaJQLjNNzGlGI8Ju4t6CRqLBk3-tjQ&s",
    "title": "Xiao long bao",
    "description": "Xiao long bao, or soup dumplings, are Chinese steamed dumplings filled with meat (usually pork), gelatinized broth, and seasonings. They're served piping hot and are typically dipped in vinegar."
},
{
    "img": "https://media.istockphoto.com/id/478037138/photo/homemade-smoked-barbecue-beef-brisket.jpg?s=612x612&w=0&k=20&c=f9x0PNIxFoRY2dYxufXkfjpdLcU0KBg47F_BFgHl8Wg=",
    "title": "Texas-style brisket",
    "description": "Texas-style brisket is a slow-cooked beef brisket rubbed with a mix of spices, then smoked until tender. It's a signature dish of Texas barbecue."
},
{
    "img": "https://media.istockphoto.com/id/985133772/photo/mexican-nachos-with-tomato-salsa-chicken-and-egg-close-up-horizontal.jpg?s=612x612&w=0&k=20&c=ntGBZ-3jmcXYxZIWeOOspfcg_tLijbTm53cRHVitokY=",
    "title": "Chilaquiles",
    "description": "Chilaquiles are fried tortilla chips cooked in salsa (red or green) and topped with cheese, cream, and sometimes meat such as chicken or beef. They're a popular Mexican breakfast or brunch dish."
},
{
    "img": "https://media.istockphoto.com/id/177836555/photo/mapo-tofu-sichuan-style.jpg?s=612x612&w=0&k=20&c=z_JtjZBo8xxuMOgGW978jsTOL8hZoaUfgRngiYWWIz8=",
    "title": "Mapo tofu",
    "description": "Mapo tofu is a Chinese Sichuan dish made with tofu cubes cooked in a spicy, oily sauce with fermented black beans, minced meat (usually pork or beef), and Sichuan pepper."
},
{
    "img": "https://previews.123rf.com/images/pinkomelet/pinkomelet1508/pinkomelet150800063/44261382-green-curry-creamy-coconut-milk-with-chicken-the-popular-thai-food-called-gaeng-keow-wan-gai-on.jpg",
    "title": "Gaeng keow wan gai",
    "description": "Gaeng keow wan gai is a Thai green curry with chicken cooked in coconut milk, green curry paste, and vegetables such as Thai eggplant and bamboo shoots."
}
]
const mealLunchSavoryLightCold = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSVEsSFU7TAyJ2uvlMvNm-BJWsOOvJD4YdQ&s",
        "title": "Goi cuon",
        "description": "Goi Cuon, also known as Vietnamese fresh spring rolls, are made with rice paper wrappers filled with shrimp, pork, vermicelli noodles, fresh herbs like mint and cilantro, and lettuce. They're served cold with a dipping sauce like hoisin or nuoc cham, offering a refreshing and light appetizer or meal option."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2017/10/Liang-Pi-cold-skin-noodles-foodgawker.jpg",
        "title": "Liang pi",
        "description": "Liang pi is a Chinese cold noodle dish made with wheat gluten noodles, bean sprouts, cucumber, and a spicy dressing."
    },
    {
        "img": "https://img.freepik.com/free-photo/traditional-spanish-gazpacho-soup-bowl-blue-background_123827-25481.jpg",
        "title": "Gazpacho",
        "description": "Gazpacho is a Spanish cold soup made from tomatoes, cucumbers, bell peppers, onions, garlic, olive oil, vinegar, and bread."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi chuka",
        "description": "Hiyashi chuka is a Japanese cold noodle dish topped with various ingredients such as cucumber, ham, egg, and a soy-based dressing."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul naengmyeon",
        "description": "Mul naengmyeon is a Korean cold noodle soup made with buckwheat noodles, beef broth, and garnished with slices of beef, cucumber, and a hard-boiled egg."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is an Italian bread salad made with stale bread, tomatoes, onions, basil, olive oil, vinegar, and sometimes cucumbers or other vegetables."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade niçoise",
        "description": "Salade niçoise is a French salad originating from Nice, made with lettuce, tomatoes, boiled eggs, tuna, olives, and anchovies, dressed with olive oil."
    },
    {
        "img": "https://media.istockphoto.com/id/1371387989/photo/shrimp-ceviche-with-avocado-mexican-food.jpg?s=612x612&w=0&k=20&c=aeCQkKkeZ0Mp4TbfHqSL2vwhtCwTaV_KPO5MGbhW378=",
        "title": "Aguachile",
        "description": "Aguachile is a Mexican dish of shrimp marinated in a spicy green chili sauce made with lime juice, cilantro, and sliced onions."
    },
    {
        "img": "https://media.istockphoto.com/id/1371387989/photo/shrimp-ceviche-with-avocado-mexican-food.jpg?s=612x612&w=0&k=20&c=aeCQkKkeZ0Mp4TbfHqSL2vwhtCwTaV_KPO5MGbhW378=",
        "title": "Yum woon sen",
        "description": "Yum woon sen is a Thai glass noodle salad with shrimp, ground pork, lime juice, fish sauce, and chili, often mixed with vegetables."
    },
    {
        "img": "https://nemthuanviet.com/wp-content/uploads/2024/04/Bun-thit-nuong-bao-nhieu-calo.jpg",
        "title": "Bun thit nuong",
        "description": "Bun thit nuong is a Vietnamese dish of grilled pork served over vermicelli noodles with fresh herbs, vegetables, and a dipping sauce."
    },
    {
        "img": " https://nemthuanviet.com/wp-content/uploads/2024/04/Bun-thit-nuong-bao-nhieu-calo.jpg",
        "title": "Soba salad",
        "description": "Soba salad is a Japanese dish of chilled buckwheat noodles tossed with vegetables such as cucumber, radish, and seaweed, dressed with a soy-based sauce."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/15/0/FNK_Kongguksu_H3_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1657896779552.webp",
        "title": "Kongguksu",
        "description": "Kongguksu is a Korean cold noodle soup made with soy milk broth and served with wheat noodles, topped with cucumber and sometimes boiled egg."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/00/30/06/64/360_F_30066407_DeGiNlaRaAKlnzy10gOoR4vX1xUelgGo.jpg",
        "title": "Insalata di mare",
        "description": "Insalata di mare is an Italian seafood salad made with mixed seafood such as shrimp, calamari, and mussels, marinated in olive oil, lemon juice, and herbs."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som tam",
        "description": "Som tam is a Thai salad made with shredded green papaya, tomatoes, green beans, peanuts, dried shrimp, lime juice, fish sauce, and chili."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a Mexican salad made with nopales (cactus paddles), tomatoes, onions, cilantro, and lime juice."
    },
    {
        "img": "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1812/bbtreesubmission181200715/115657930-naengchae-jokbal-thinly-sliced-pork-served-with-various-chilled-vegetables.jpg",
        "title": "Naengchae",
        "description": "Naengchae is a Korean cold salad made with lightly blanched vegetables such as spinach, cucumber, and bean sprouts, dressed with a light soy sauce and vinegar dressing."
    },
    {
        "img": "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
        "title": "Caprese",
        "description": "Caprese is an Italian salad made with fresh mozzarella cheese, tomatoes, basil, olive oil, and balsamic vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "Larb is a Thai salad made with minced meat (often pork or chicken), fish sauce, lime juice, toasted ground rice, and herbs like mint and cilantro."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/04/17/10/70/360_F_417107032_xZg9PE7ELmOlzHhPmBPfpKUbYId3M619.jpg",
        "title": "Terrine de poisson",
        "description": "Terrine de poisson is a French fish terrine made with various types of fish and seafood, mixed with herbs, spices, and sometimes vegetables, then baked or steamed."
    },
    {
        "img": "https://chowdivine.com/wp-content/uploads/2012/06/Hobak-Namul-Korean-Seasoned-Zucchini.jpg",
        "title": "Hobak namul",
        "description": "Hobak namul is a Korean dish of stir-fried zucchini (hobak) seasoned with soy sauce, garlic, sesame oil, and sesame seeds."
    },
    {
        "img": "https://media.istockphoto.com/id/469583525/photo/quiche-lorraine.jpg?s=612x612&w=0&k=20&c=4SI1vXw0xIcUyDh5_A1jPXB0RfX9JXQLLM0gISY_P1I=",
        "title": "Quiche",
        "description": "Quiche is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and various ingredients such as vegetables, meat, or seafood."
    },
    {
        "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
        "title": "Tostadas de ceviche",
        "description": "Tostadas de ceviche are Mexican crispy fried tortillas topped with ceviche, a dish of marinated raw fish or seafood with lime juice, onions, tomatoes, and cilantro."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a Japanese cold tofu dish served with toppings such as soy sauce, ginger, green onions, or bonito flakes."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/04/17/10/70/360_F_417107032_xZg9PE7ELmOlzHhPmBPfpKUbYId3M619.jpg",
        "title": "Terrine de poisson",
        "description": "Terrine de poisson is a French fish terrine made with various types of fish and seafood, mixed with herbs, spices, and sometimes vegetables, then baked or steamed."
    },
    {
        "img": "https://media.istockphoto.com/id/136183596/photo/tuna-calf.jpg?s=612x612&w=0&k=20&c=veJ2M1FAqUMmDQt1ZIAHOkMn_GYIPQD72vhmy68U-yo=",
        "title": "Vitello tonnato",
        "description": "Vitello tonnato is an Italian dish of thinly sliced, cold veal served with a creamy tuna sauce flavored with capers and anchovies."
    },
    {
        "img": "https://omnivorescookbook.com/wp-content/uploads/2019/10/1910_Chinese-Bang-Bang-Chicken_FB.jpg",
        "title": "Bang bang ji",
        "description": "Bang bang ji is a Chinese dish of shredded chicken served with a spicy sesame sauce, often accompanied by cucumbers or other vegetables."
    },
    {
        "img": "https://media.istockphoto.com/id/900038546/photo/vichyssoise-traditional-french-leek-potato-and-onion-soup.jpg?s=612x612&w=0&k=20&c=Wni1sCE10Dq67tUg50g8xjpbxUgfR63OcYzs3u5t5hA=",
        "title": "Vichyssoise",
        "description": "Vichyssoise is a French cold soup made from puréed leeks, onions, potatoes, cream, and chicken stock, typically served chilled."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/00/30/06/64/360_F_30066407_DeGiNlaRaAKlnzy10gOoR4vX1xUelgGo.jpg",
        "title": "Insalata di mare",
        "description": "Insalata di mare is an Italian seafood salad made with mixed seafood such as shrimp, calamari, and mussels, marinated in olive oil, lemon juice, and herbs."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "Ensalada de nopales is a Mexican salad made with nopales (cactus paddles), tomatoes, onions, cilantro, and lime juice."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som tam",
        "description": "Som tam is a Thai salad made with shredded green papaya, tomatoes, green beans, peanuts, dried shrimp, lime juice, fish sauce, and chili."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "Larb is a Thai salad made with minced meat (often pork or chicken), fish sauce, lime juice, toasted ground rice, and herbs like mint and cilantro."
    },
    {
        "img": "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
        "title": "Caprese",
        "description": "Caprese is an Italian salad made with fresh mozzarella cheese, tomatoes, basil, olive oil, and balsamic vinegar."
    },
    {
        "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
        "title": "Tostadas de ceviche",
        "description": "Tostadas de ceviche are Mexican crispy fried tortillas topped with ceviche, a dish of marinated raw fish or seafood with lime juice, onions, tomatoes, and cilantro."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Hiyayakko is a Japanese cold tofu dish served with toppings such as soy sauce, ginger, green onions, or bonito flakes."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Panzanella is an Italian bread salad made with stale bread, tomatoes, onions, basil, olive oil, vinegar, and sometimes cucumbers or other vegetables."
    }
]
const mealLunchSaltyHeavyHot = [{
    "img": "https://media.istockphoto.com/id/1348333763/photo/bowl-of-traditional-south-vietnamese-noodle-dish-bun-bo-hue.jpg?s=612x612&w=0&k=20&c=4WHJJHeQfc3K3D9SGHV8nYD1J1o1nAexOelmRpZV1SA=",
    "title": "Bun bo Hue",
    "description": "Bun bo Hue is a spicy Vietnamese beef noodle soup from the city of Hue, made with beef, lemongrass, and fermented shrimp paste, garnished with herbs and lime."
},
{
    "img": "https://media.istockphoto.com/id/177836555/photo/mapo-tofu-sichuan-style.jpg?s=612x612&w=0&k=20&c=z_JtjZBo8xxuMOgGW978jsTOL8hZoaUfgRngiYWWIz8=",
    "title": "Mapo tofu",
    "description": "Mapo tofu is a Chinese dish of tofu cubes cooked in a spicy, oily sauce with fermented black beans, minced meat (usually pork or beef), and Sichuan peppercorns."
},
{
    "img": "https://media.istockphoto.com/id/538015607/photo/new-england-style-clam-chowder.jpg?s=612x612&w=0&k=20&c=yQpc3HL0htYr8lqKkmJlyt8qOSYcDBhp-AQDuv0qnLI=",
    "title": "New England clam chowder",
    "description": "New England clam chowder is a creamy soup made with clams, potatoes, onions, and sometimes celery, flavored with salt pork and herbs."
},
{
    "img": "https://img.freepik.com/free-photo/gourmet-ramen-noodles-steaming-bowl-generated-by-ai_188544-22769.jpg",
    "title": "Ramen",
    "description": "Ramen is a Japanese noodle soup dish consisting of Chinese-style wheat noodles served in a meat or fish-based broth, often flavored with soy sauce or miso, and topped with sliced pork, nori, menma, and green onions."
},
{
    "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
    "title": "Kimchi jjigae",
    "description": "Kimchi jjigae is a Korean stew made with kimchi, tofu, pork (or beef), and sometimes other vegetables like onions and mushrooms, flavored with gochujang or gochugaru."
},
{
    "img": "https://media.istockphoto.com/id/1096466528/photo/slice-of-lasagna.webp?b=1&s=170667a&w=0&k=20&c=_280kFHy6eD7WGgom9fcRBaBfz39pRqu8GHa6qpFHFY=",
    "title": "Lasagna",
    "description": "Lasagna is an Italian baked pasta dish made with layers of lasagna noodles, ragù (meat sauce), béchamel sauce, and cheese (usually mozzarella and Parmesan)."
},
{
    "img": "https://media.istockphoto.com/id/1085446276/photo/homemade-french-coq-au-vin-chicken.jpg?s=612x612&w=0&k=20&c=3YnIdmHUx6uiXTYnJ7TDfenwsWKOE12epIoKfmcMqyw=",
    "title": "Coq au vin",
    "description": "Coq au vin is a French dish of chicken braised with wine, mushrooms, onions, bacon (lardons), and garlic, often flavored with herbs like thyme and bay leaf."
},
{
    "img": "https://www.shutterstock.com/image-photo/chiles-en-nogada-typical-dish-600nw-2328489675.jpg",
    "title": "Chiles en nogada",
    "description": "Chiles en nogada is a Mexican dish consisting of poblano peppers stuffed with picadillo (a mixture of meat, fruits, and spices), topped with walnut sauce, and garnished with pomegranate seeds."
},
{
    "img": "https://media.istockphoto.com/id/1398323502/photo/massaman-curry-with-chicken-and-potatoes.jpg?s=612x612&w=0&k=20&c=2BKUUGn3d2A34O1uMmtZz0JdLVVS6epiys0U95sE5qs=",
    "title": "Massaman curry",
    "description": "Massaman curry is a Thai curry dish made with beef or chicken, potatoes, onions, peanuts, and massaman curry paste, flavored with spices like cinnamon, cloves, and cardamom."
},
{
    "img": "https://media.istockphoto.com/id/1215850319/photo/vietnam-saigon-typical-street-food-broken-rice-com-tam-with-grilled-pork-ribs-and-vegetable.jpg?s=612x612&w=0&k=20&c=N_xJvzGr_V29RIi2npY4rBjlGUJn_ZOvN9ZgYjCpr4E=",
    "title": "Com tam",
    "description": "Com tam is a Vietnamese dish of grilled pork chops served over broken rice, often accompanied by pickled vegetables, cucumber slices, and fish sauce."
},
{
    "img": "https://media.istockphoto.com/id/1206748835/photo/delicious-kung-pao-chicken-with-pepper-shallots-and-peanuts-in-a-wok-pan.jpg?s=612x612&w=0&k=20&c=1bZhsu-d-nUYcHdMJYFNMzRbl5MaMLH44jelULOY_HM=",
    "title": "Kung pao chicken",
    "description": "Kung pao chicken is a Chinese stir-fry dish made with chicken, peanuts, vegetables, and chili peppers, flavored with a sauce that includes soy sauce, hoisin sauce, and vinegar."
},
{
    "img": "https://static01.nyt.com/images/2021/01/01/dining/31CHILI1/31CHILI1-superJumbo.jpg",
    "title": "Texas-style chili",
    "description": "Texas-style chili is a hearty stew made with beef, chili peppers, tomatoes, onions, garlic, and spices such as chili powder, cumin, and paprika."
},
{
    "img": "https://glutenfreecuppatea.co.uk/wp-content/uploads/2014/10/gluten-free-chicken-katsu-curry-recipe-2.jpg",
    "title": "Katsu curry",
    "description": "Katsu curry is a Japanese dish of breaded and fried cutlet (often pork or chicken) served with a thick curry sauce and rice."
},
{
    "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
    "title": "Bibimbap",
    "description": "Bibimbap is a Korean dish of mixed rice topped with vegetables (such as spinach, bean sprouts, carrots, and mushrooms), meat (usually beef), a fried egg, and gochujang (chili pepper paste)."
},
{
    "img": "https://media.istockphoto.com/id/1057431080/photo/risotto-milanese-an-italian-recipe-typical-of-milan-closeup-horizontal.jpg?s=612x612&w=0&k=20&c=mxHzf7J9vSLMi2ey3b4HfKO830V2IkyVBIwHcWDNnQc=",
    "title": "Risotto alla milanese",
    "description": "Risotto alla milanese is an Italian risotto dish flavored with saffron, cooked with onions, white wine, and broth, and finished with butter and grated Parmesan cheese."
},
{
    "img": "https://media.istockphoto.com/id/1288246083/photo/cassoulet-a-meal-with-white-beans-duck-leg-sausage-and-bacon.jpg?s=612x612&w=0&k=20&c=FLZn2JiByNVVvh7rDR3eDWnCo0Hfuq2eVdc41xy7Fk8=",
    "title": "Cassoulet",
    "description": "Cassoulet is a French slow-cooked casserole dish originating from the region of Languedoc, made with meat (such as pork sausages, duck, and sometimes lamb), white beans, and tomatoes."
},
{
    "img": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fpozole&psig=AOvVaw18KCaKaEJ9DNktWw1l3qbF&ust=1722203024279000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLDJrq2YyIcDFQAAAAAdAAAAABAS",
    "title": "Pozole",
    "description": "Pozole is a Mexican soup or stew made with hominy (large white corn kernels), pork (or sometimes chicken), and flavored with garlic, onions, chilies, and various toppings like lettuce, radishes, and lime."
},
{
    "img": "https://drivemehungry.com/wp-content/uploads/2021/09/pad-see-ew-1-1.jpg",
    "title": "Pad see ew",
    "description": "Pad see ew is a Thai stir-fried noodle dish made with wide rice noodles, meat (such as chicken, beef, or pork), egg, and Chinese broccoli (gai lan), all cooked in a sweet and savory sauce."
},
{
    "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
    "title": "Hiyayakko",
    "description": "Hiyayakko is a Japanese cold tofu dish served with toppings such as soy sauce, ginger, green onions, or bonito flakes."
},
{
    "img": "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
    "title": "Caprese",
    "description": "Caprese is an Italian salad made with fresh mozzarella cheese, tomatoes, basil, olive oil, and balsamic vinegar."
}
]
const mealLunchSaltyHeavyCold = [
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-special-combination-vermicelli-bowl-600nw-2127831767.jpg",
        "title": "Bun thit nuong",
        "description": "A Vietnamese dish featuring grilled pork over vermicelli noodles, garnished with fresh herbs, pickled vegetables, and peanuts, served with a flavorful fish sauce."
    },
    {
        "img": "https://omnivorescookbook.com/wp-content/uploads/2019/10/1910_Chinese-Bang-Bang-Chicken_FB.jpg",
        "title": "Bang bang ji",
        "description": "A Chinese cold shredded chicken salad with a spicy, nutty sesame sauce, often garnished with sliced cucumbers and green onions."
    },
    {
        "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
        "title": "Cobb salad",
        "description": "An American salad with chopped greens, grilled chicken, bacon, hard-boiled eggs, avocado, tomatoes, blue cheese, and a tangy vinaigrette."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi chuka",
        "description": "Japanese cold noodle salad featuring chilled ramen noodles topped with an assortment of vegetables, meats, and a tangy sesame dressing."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul naengmyeon",
        "description": "A Korean cold noodle dish made with chewy buckwheat noodles served in a chilled, tangy broth, often garnished with sliced beef, cucumber, and a boiled egg."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "An Italian bread salad combining cubes of stale bread with ripe tomatoes, cucumbers, red onions, and basil, dressed in a simple vinaigrette."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade niçoise",
        "description": "A classic French salad from Nice with a mix of tuna, green beans, potatoes, olives, tomatoes, and hard-boiled eggs, dressed with olive oil and herbs."
    },
    {
        "img": "https://st2.depositphotos.com/15113232/46605/i/450/depositphotos_466053178-stock-photo-traditional-mexican-seafood-aguachile-mexican.jpg",
        "title": "Aguachile",
        "description": "A Mexican dish featuring raw shrimp marinated in a spicy lime juice mixture with chilies, cilantro, and cucumbers, often served with avocado slices."
    },
    {
        "img": "https://media.istockphoto.com/id/1471450999/photo/spicy-glass-noodle-salad.jpg?s=612x612&w=0&k=20&c=1IvFoVjmNuIIJpiiEafzgIIWlXJX4f0HHD3cEnNeoUE=",
        "title": "Yum woon sen",
        "description": "A Thai salad made with glass noodles, mixed with shrimp, ground meat, vegetables, and a spicy, tangy dressing of lime and fish sauce."
    },
    {
        "img": "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_NomHoaChuoi.jpg",
        "title": "Nom hoa chuoi",
        "description": "A Vietnamese salad made with sliced banana flowers, herbs, and often shrimp or pork, dressed in a tangy lime and fish sauce dressing."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/12/21/0/FN_White-Cut-Chicken-H1_s4x3.jpg.rend.hgtvcom.1280.1280.suffix/1608578941843.webp",
        "title": "Bai qie ji",
        "description": "A Chinese shredded chicken salad featuring tender chicken mixed with cucumbers, carrots, and a spicy sesame or ginger sauce."
    },
    {
        "img": "https://veganhuggs.com/wp-content/uploads/2022/06/Soba-Noodle-Salad-With-Chopsticks.jpg",
        "title": "Soba salad",
        "description": "A Japanese salad featuring chilled soba noodles mixed with vegetables and often topped with a sesame or soy-based dressing for a refreshing meal."
    },
    {
        "img": "https://www.918plate.com/wp-content/uploads/2018/08/kongguksu-4-500x500.jpg",
        "title": "Kongguksu",
        "description": "A Korean cold noodle dish with chewy noodles served in a creamy, chilled soybean broth, typically garnished with sliced cucumbers and tomatoes."
    },
    {
        "img": "https://t3.ftcdn.net/jpg/00/30/06/64/360_F_30066407_DeGiNlaRaAKlnzy10gOoR4vX1xUelgGo.jpg",
        "title": "Insalata di mare",
        "description": "An Italian seafood salad made with a mix of fresh seafood like shrimp, squid, and mussels, dressed in a lemon and olive oil vinaigrette."
    },
    {
        "img": "https://media.istockphoto.com/id/900038546/photo/vichyssoise-traditional-french-leek-potato-and-onion-soup.jpg?s=612x612&w=0&k=20&c=Wni1sCE10Dq67tUg50g8xjpbxUgfR63OcYzs3u5t5hA=",
        "title": "Vichyssoise",
        "description": "A classic French soup made from leeks, potatoes, and cream, traditionally served chilled for a smooth, velvety texture."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de nopales",
        "description": "A Mexican salad featuring cactus paddles (nopales) mixed with tomatoes, onions, cilantro, and lime juice, often garnished with cheese and avocado."
    },
    {
        "img": "https://as2.ftcdn.net/v2/jpg/01/75/70/61/1000_F_175706199_Y1lJ63LPbo1Co6nZWerCLT98VATrDBOc.jpg",
        "title": "Pla muek yang",
        "description": "A Thai dish of grilled squid marinated in a blend of spices and garlic, served with a spicy dipping sauce and fresh herbs."
    },
    {
        "img": "https://runawayrice.com/wp-content/uploads/2015/12/Rare-Beef-in-Lime-Juice-with-Rice-Chips-1024x576.jpg",
        "title": "Bo tai chanh",
        "description": "A Vietnamese dish of thinly sliced raw beef marinated in lime juice and fish sauce, mixed with fresh herbs, onions, and chili peppers."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2020/07/cold-noodles-with-Sichuan-dressing-0-scaled.jpeg",
        "title": "Liang mian",
        "description": "A Chinese cold noodle dish made with wheat noodles in a spicy, tangy sauce, often topped with cucumbers, peanuts, and sometimes meat."
    },
    {
        "img": "https://st4.depositphotos.com/4366637/22799/i/450/depositphotos_227991112-stock-photo-seafood-ceviche-typical-dish-peru.jpg",
        "title": "Ceviche",
        "description": "A Latin American dish made from raw fish or seafood marinated in citrus juice, mixed with tomatoes, onions, cilantro, and chili peppers."
    },
    {
        "img": "https://imag.bonviveur.com/portada-del-sunomono.jpg",
        "title": "Sunomono",
        "description": "A Japanese cucumber salad with thinly sliced cucumbers marinated in a sweet and tangy vinegar dressing, often garnished with sesame seeds."
    },
    {
        "img": "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1812/bbtreesubmission181200715/115657930-naengchae-jokbal-thinly-sliced-pork-served-with-various-chilled-vegetables.jpg",
        "title": "Naengchae",
        "description": "A Korean cold vegetable salad featuring thinly sliced vegetables such as cucumbers and carrots, dressed in a tangy, sweet vinegar sauce."
    },
    {
        "img": "https://st.depositphotos.com/3220235/4198/i/450/depositphotos_41981983-stock-photo-classic-caprese-salad.jpg",
        "title": "Caprese",
        "description": "An Italian salad made with fresh mozzarella, ripe tomatoes, and basil leaves, drizzled with olive oil and balsamic reduction."
    },
    {
        "img": "https://media.istockphoto.com/id/469583525/photo/quiche-lorraine.jpg?s=612x612&w=0&k=20&c=4SI1vXw0xIcUyDh5_A1jPXB0RfX9JXQLLM0gISY_P1I=",
        "title": "Quiche",
        "description": "A savory tart with a creamy filling of eggs, cream, and various ingredients like cheese, vegetables, or meats, baked in a pastry crust."
    },
    {
        "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
        "title": "Tostadas de ceviche",
        "description": "Mexican tostadas topped with a refreshing ceviche made from raw fish marinated in lime juice, mixed with tomatoes, onions, cilantro, and avocado."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som tam",
        "description": "A spicy Thai salad made from shredded green papaya, tomatoes, peanuts, and chili peppers, dressed with lime juice and fish sauce."
    },
    {
        "img": "https://omnivorescookbook.com/wp-content/uploads/2022/04/220310_Da-La-Pi_5.jpg",
        "title": "La pi",
        "description": "A Vietnamese dish featuring thinly sliced pork or chicken, marinated and grilled, often served with fresh vegetables and a dipping sauce."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "A Japanese dish of chilled tofu served with a simple topping of soy sauce, green onions, and grated ginger, often garnished with bonito flakes."
    },
    {
        "img": "https://iheartumami.com/wp-content/uploads/2023/02/Korean-zucchini-side-dish-recipe-500x500.jpg",
        "title": "Hobak namul",
        "description": "A Korean side dish made with sautéed or steamed zucchini, seasoned with garlic, soy sauce, sesame oil, and often sprinkled with sesame seeds."
    },
    {
        "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
        "title": "Larb",
        "description": "A Thai salad made with minced meat, typically pork or chicken, mixed with fresh herbs, lime juice, fish sauce, and toasted rice powder."
    }
]
const mealLunchSaltyLightHot = [
    {
        "img": "https://media.istockphoto.com/id/503129686/photo/vietnamese-pho-with-spicy-sriracha-sauce-shot-top-down.jpg?s=612x612&w=0&k=20&c=55B0kZD_LGlRk9jELQ9iV6TlIcVo3olcGs-ZcNLircU=",
        "title": "Pho",
        "description": "A fragrant Vietnamese noodle soup made with beef or chicken, herbs, and rice noodles, served in a rich, aromatic broth with fresh herbs and lime."
    },
    {
        "img": "https://media.istockphoto.com/id/1133151212/photo/japanese-dumplings-gyoza-with-pork-meat-and-vegetables.jpg?s=612x612&w=0&k=20&c=vC6GTUDGK6dD5_QHvY1V7fVUdPx-z4TG73DUACR_L5s=",
        "title": "Dumplings (Jiaozi)",
        "description": "Chinese dumplings filled with minced meat and vegetables, often steamed, boiled, or pan-fried, and served with a dipping sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/538015607/photo/new-england-style-clam-chowder.jpg?s=612x612&w=0&k=20&c=yQpc3HL0htYr8lqKkmJlyt8qOSYcDBhp-AQDuv0qnLI=",
        "title": "Clam chowder",
        "description": "A creamy New England soup made with clams, potatoes, onions, and celery, often seasoned with thyme and black pepper."
    },
    {
        "img": "https://media.istockphoto.com/id/1406672650/photo/japanese-tonkotsu-ramen.jpg?s=612x612&w=0&k=20&c=XfwavYs_chHo-S-M7IWoK7IxEXzYxd3dFyihnvC_zkI=",
        "title": "Ramen",
        "description": "Japanese noodle soup consisting of rich, savory broth with wheat noodles, often topped with pork, green onions, and a boiled egg."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "A Korean mixed rice dish topped with assorted vegetables, beef, a fried egg, and gochujang (red chili paste), mixed together before eating."
    },
    {
        "img": "https://media.istockphoto.com/id/1388417437/photo/homemade-italian-spaghetti-algio-e-olio.jpg?s=612x612&w=0&k=20&c=gocHozUlPyNStETLkDTqU5uTOQYDWLXLa8_FCb_yCjM=",
        "title": "Spaghetti aglio e olio",
        "description": "An Italian pasta dish made with spaghetti, garlic, olive oil, red pepper flakes, and parsley, offering a simple yet flavorful taste."
    },
    {
        "img": "https://media.istockphoto.com/id/1357788111/photo/croque-monsieur.jpg?s=612x612&w=0&k=20&c=HKgdoitbQJ_ARY77ADCRy1eljFHjSeAG_NcW4AV-aTc=",
        "title": "Croque monsieur",
        "description": "A classic French ham and cheese sandwich, typically made with Gruyère cheese and béchamel sauce, then baked or grilled to perfection."
    },
    {
        "img": "https://media.istockphoto.com/id/984290382/photo/traditional-tacos-al-pastor.jpg?s=612x612&w=0&k=20&c=1f1Gh236u2sCMXEj7VSNIiM6i9F7agyjE-DQiWgn2cU=",
        "title": "Tacos al pastor",
        "description": "Mexican tacos made with marinated pork cooked on a vertical spit, served in corn tortillas with pineapple, onions, cilantro, and salsa."
    },
    {
        "img": "https://foodandjourneys.net/wp-content/uploads/2021/09/Mushroom-Risotto-ai-Funghi-PIC1-500x500.jpg",
        "title": "Risotto al funghi",
        "description": "An Italian creamy rice dish made with arborio rice, cooked slowly with broth and mixed with sautéed mushrooms, garlic, and Parmesan cheese."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/classic-ratatouille-recipe/intro-1663175749.jpg",
        "title": "Ratatouille",
        "description": "A French vegetable stew made with a medley of eggplant, zucchini, bell peppers, and tomatoes, simmered with herbs and olive oil."
    },
    {
        "img": "https://media.istockphoto.com/id/980186286/photo/mexican-green-enchiladas.jpg?s=612x612&w=0&k=20&c=VxtBqYjUwAQSTBOSrSvWEi_yLG0gwPBNImBeTKf4uMc=",
        "title": "Enchiladas verdes",
        "description": "Mexican enchiladas filled with chicken or cheese, smothered in a tangy green tomatillo sauce, and topped with fresh cilantro and onions."
    },
    {
        "img": "https://media.istockphoto.com/id/1348333763/photo/bowl-of-traditional-south-vietnamese-noodle-dish-bun-bo-hue.jpg?s=612x612&w=0&k=20&c=4WHJJHeQfc3K3D9SGHV8nYD1J1o1nAexOelmRpZV1SA=",
        "title": "Bun bo Hue",
        "description": "A Vietnamese spicy beef noodle soup with lemongrass, chili, and a rich broth, served with rice noodles, beef slices, and herbs."
    },
    {
        "img": "https://redhousespice.com/wp-content/uploads/2021/08/Chinese-hot-and-sour-soup-1-scaled.jpg",
        "title": "Hot and sour soup (Suan la tang)",
        "description": "A flavorful Chinese soup with a balance of spicy and tangy flavors, featuring ingredients like mushrooms, tofu, and bamboo shoots in a savory broth."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2014/06/28/14/14/chili-con-carne-378952_1280.jpg",
        "title": "Chili con carne",
        "description": "A hearty American stew made with ground beef, beans, tomatoes, and chili spices, often served with cornbread or over rice."
    },
    {
        "img": "https://media.istockphoto.com/id/1418965870/photo/yakitori.jpg?s=612x612&w=0&k=20&c=O5uvy2zCMPQ5HlU6IRFEmei7fJrTgkk65Q4DPT_u0tI=",
        "title": "Yakitori",
        "description": "Japanese skewered chicken grilled over charcoal, typically seasoned with salt or a sweet soy-based glaze, and served with various side dishes."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi jjigae",
        "description": "A Korean stew made with kimchi, tofu, pork or beef, and vegetables, simmered together to create a spicy and comforting dish."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2023/05/28/14/13/ai-generated-8023787_1280.jpg",
        "title": "Pizza Margherita",
        "description": "An Italian pizza topped with tomatoes, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil, embodying the colors of the Italian flag."
    },
    {
        "img": "https://media.istockphoto.com/id/1421393829/photo/homemade-fried-poblano-chili-relleno.jpg?s=612x612&w=0&k=20&c=yi-RnslQVnCEqLJb2x_gaOYY_y3a8T4yA7J6QEh0yIk=",
        "title": "Chiles rellenos",
        "description": "Mexican stuffed peppers, typically filled with cheese or meat, coated in egg batter, and fried until crispy, served with a tomato-based sauce."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-egg-rolls-cha-gio-600nw-2032019294.jpg",
        "title": "Cha gio",
        "description": "Vietnamese crispy spring rolls filled with a mixture of ground pork, mushrooms, and vegetables, typically served with a sweet and sour dipping sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/1143053016/photo/mapo-tofu-bowl.jpg?s=612x612&w=0&k=20&c=MQTOoLOAq2hgRm1JrQywuaxgn-BM3TR2z75gnfNAjbM=",
        "title": "Mapo tofu",
        "description": "A spicy Chinese dish featuring tofu cubes cooked in a flavorful sauce with minced pork, fermented black beans, and Sichuan peppercorns."
    },
    {
        "img": "https://st2.depositphotos.com/1692343/8128/i/450/depositphotos_81286030-stock-photo-spicy-homemade-buffalo-wings.jpg",
        "title": "Buffalo wings",
        "description": "American-style chicken wings deep-fried and coated in a spicy, tangy sauce, usually served with celery sticks and blue cheese dressing."
    },
    {
        "img": "https://cdn.pixabay.com/photo/2020/08/15/04/22/shrimp-tempura-5489578_640.jpg",
        "title": "Tempura",
        "description": "A Japanese dish of lightly battered and deep-fried seafood or vegetables, often served with a dipping sauce and a side of grated daikon radish."
    },
    {
        "img": "https://th.bing.com/th/id/R.d8be25ee7ffff7f000e2600a0bb63890?rik=WHJbXvJEWaLkXw&riu=http%3a%2f%2fwww.maangchi.com%2fwp-content%2fuploads%2f2015%2f05%2fimg_5151.jpg&ehk=eVi%2bjAi2B%2fjlBjITmK7GWuByEJkOKghsvK4pFe5bs9k%3d&risl=&pid=ImgRaw&r=0",
        "title": "Sundubu jjigae",
        "description": "A Korean stew made with soft tofu, vegetables, and often seafood or beef, in a spicy broth with a raw egg added just before serving."
    },
    {
        "img": "https://silkroadrecipes.com/wp-content/uploads/2023/05/Creamy-Polenta-with-Sausage-Ragu-square.jpg",
        "title": "Polenta with sausage ragu",
        "description": "A comforting Italian dish featuring creamy polenta topped with a savory sausage ragu, made with tomatoes, onions, and herbs."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "A savory French tart with a creamy filling of eggs, cream, and bacon, baked in a pastry crust and often enjoyed warm or at room temperature."
    },
    {
        "img": "https://st2.depositphotos.com/1692343/5415/i/450/depositphotos_54150491-stock-photo-homemade-corn-and-chicken-tamales.jpg",
        "title": "Tamales",
        "description": "Mexican traditional dishes made of masa (corn dough) filled with various ingredients such as meats, cheeses, or vegetables, wrapped in corn husks and steamed."
    },
    {
        "img": "https://st2.depositphotos.com/1692343/6439/i/450/depositphotos_64397939-stock-photo-spicy-homemade-cajun-jambalaya.jpg",
        "title": "Jambalaya",
        "description": "A Creole dish from Louisiana made with rice, a mix of meats such as chicken, sausage, and shrimp, and a flavorful blend of spices and vegetables."
    },
    {
        "img": "https://st4.depositphotos.com/7691758/24333/i/450/depositphotos_243338382-stock-photo-tonkatsu-panko-breaded-deep-fried.jpg",
        "title": "Tonkatsu",
        "description": "A Japanese breaded and deep-fried pork cutlet, typically served with shredded cabbage, rice, and a savory tonkatsu sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/1421058418/photo/spanish-soup-bouillabaisse-with-seafood-mussels-shrimps-and-scallop.jpg?s=612x612&w=0&k=20&c=_52PEyLaoXY84CFGH7uHMGAQkeACwQ7PkEBLrGnjdUo=",
        "title": "Bouillabaisse",
        "description": "A traditional French seafood stew from Provence, made with a variety of fish, shellfish, and aromatic herbs, served with a saffron-infused broth."
    },
    {
        "img": "https://media.istockphoto.com/id/1421393829/photo/homemade-fried-poblano-chili-relleno.jpg?s=612x612&w=0&k=20&c=yi-RnslQVnCEqLJb2x_gaOYY_y3a8T4yA7J6QEh0yIk=",
        "title": "Chiles rellenos",
        "description": "Mexican stuffed peppers, typically filled with cheese or meat, coated in egg batter, and fried until crispy, served with a tomato-based sauce."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/cheese-dak-galbi-600nw-761615974.jpg",
        "title": "Dak galbi",
        "description": "A Korean dish of spicy stir-fried chicken with vegetables, rice cakes, and a sweet and spicy gochujang sauce, often cooked at the table."
    }
]
const mealLunchSaltyLightCold = [
        {
            "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSVEsSFU7TAyJ2uvlMvNm-BJWsOOvJD4YdQ&s",
            "title": "Goi cuon",
            "description": "Fresh Vietnamese spring rolls filled with shrimp, herbs, pork, rice noodles, and served with a flavorful hoisin-peanut dipping sauce."
        },
        {
            "img": "https://redhousespice.com/wp-content/uploads/2017/10/Liang-Pi-cold-skin-noodles-foodgawker.jpg",
            "title": "Liang pi",
            "description": "A popular Chinese cold noodle dish made from wheat or rice flour, served with a tangy, spicy sauce and various vegetables."
        },
        {
            "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
            "title": "Hiyashi chuka",
            "description": "Japanese chilled noodle salad featuring cold ramen noodles topped with a variety of colorful vegetables, sliced meats, and a tangy sesame dressing."
        },
        {
            "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
            "title": "Mul naengmyeon",
            "description": "A Korean cold noodle soup made with chewy buckwheat noodles in a chilled, tangy broth, garnished with sliced beef, vegetables, and a boiled egg."
        },
        {
            "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
            "title": "Panzanella",
            "description": "An Italian bread salad combining cubes of stale bread with ripe tomatoes, cucumbers, onions, basil, and a light vinaigrette dressing."
        },
        {
            "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
            "title": "Salade niçoise",
            "description": "A classic French salad from Nice, featuring a mix of tuna, green beans, potatoes, olives, tomatoes, and hard-boiled eggs, dressed with olive oil."
        },
        {
            "img": "https://media.istockphoto.com/id/1465250787/photo/close-up-shot-of-a-mexican-dish.jpg?s=612x612&w=0&k=20&c=RABHm2GHYZT7aSOsJLX9Roe7mvM9SDcxxQgSTDOHQHw=",
            "title": "Aguachile",
            "description": "A Mexican dish of raw shrimp marinated in a spicy, tangy mixture of lime juice, chilies, and cilantro, typically served with cucumber and avocado."
        },
        {
            "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
            "title": "Som tam",
            "description": "A spicy Thai green papaya salad with a crunchy texture, combining shredded papaya, tomatoes, peanuts, lime, fish sauce, and chili peppers."
        },
        {
            "img": "https://res.cloudinary.com/hksqkdlah/image/upload/40809_sfs-sichuan-style-chicken-salad-21-1.jpg",
            "title": "Bang bang ji",
            "description": "A Chinese cold chicken dish, often served shredded and coated in a spicy, nutty sesame sauce with cucumber slices for added crunch."
        },
        {
            "img": "https://st.depositphotos.com/3220235/4198/i/450/depositphotos_41981983-stock-photo-classic-caprese-salad.jpg",
            "title": "Caprese salad",
            "description": "An Italian salad made with ripe tomatoes, fresh mozzarella, basil leaves, olive oil, and balsamic vinegar, showcasing simple yet vibrant flavors."
        },
        {
            "img": "https://imag.bonviveur.com/portada-del-sunomono.jpg",
            "title": "Sunomono",
            "description": "A Japanese cucumber salad that features thinly sliced cucumbers marinated in a sweet and tangy vinegar dressing, often with seaweed or sesame seeds."
        },
        {
            "img": "https://thumbs.dreamstime.com/b/kong-guksu-cold-korean-soup-top-view-soy-milk-korean-soup-kongguksu-kong-guksu-rice-noodle-nuts-sesame-topped-123098167.jpg",
            "title": "Kongguksu",
            "description": "A Korean cold noodle dish in a creamy, chilled soybean broth, served with thinly sliced cucumbers, tomatoes, and a boiled egg for added texture."
        },
        {
            "img": "https://t3.ftcdn.net/jpg/00/30/06/64/360_F_30066407_DeGiNlaRaAKlnzy10gOoR4vX1xUelgGo.jpg",
            "title": "Insalata di mare",
            "description": "An Italian seafood salad made with a mix of fresh seafood such as shrimp, squid, and mussels, dressed in a light lemon and olive oil vinaigrette."
        },
        {
            "img": "https://media.istockphoto.com/id/900038546/photo/vichyssoise-traditional-french-leek-potato-and-onion-soup.jpg?s=612x612&w=0&k=20&c=Wni1sCE10Dq67tUg50g8xjpbxUgfR63OcYzs3u5t5hA=",
            "title": "Vichyssoise",
            "description": "A classic French soup made from leeks, potatoes, onions, and cream, traditionally served chilled for a smooth, velvety texture."
        },
        {
            "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
            "title": "Ensalada de nopales",
            "description": "A Mexican salad featuring cactus paddles (nopales) mixed with tomatoes, onions, cilantro, and lime juice, often served with cheese and avocado."
        },
        {
            "img": "https://as2.ftcdn.net/v2/jpg/01/75/70/61/1000_F_175706199_Y1lJ63LPbo1Co6nZWerCLT98VATrDBOc.jpg",
            "title": "Pla muek yang",
            "description": "A Thai grilled squid dish marinated in a blend of garlic, soy sauce, and spices, served with a spicy, tangy dipping sauce and fresh herbs."
        },
        {
            "img": "https://www.shutterstock.com/image-photo/vietnamese-special-combination-vermicelli-bowl-600nw-2127831767.jpg",
            "title": "Bun thit nuong",
            "description": "A Vietnamese dish of grilled pork over vermicelli noodles, garnished with fresh herbs, pickled vegetables, peanuts, and served with a sweet and tangy fish sauce."
        },
        {
            "img": "https://redhousespice.com/wp-content/uploads/2020/07/cold-noodles-with-Sichuan-dressing-0-scaled.jpeg",
            "title": "Sichuan liang mian",
            "description": "A spicy Chinese cold noodle dish featuring wheat noodles in a flavorful sauce made from Sichuan peppercorns, chili oil, and garlic, often topped with cucumbers and peanuts."
        },
        {
            "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
            "title": "Cobb salad",
            "description": "An American salad made with chopped greens, chicken, bacon, hard-boiled eggs, avocado, tomatoes, and blue cheese, dressed with a tangy vinaigrette."
        },
        {
            "img": "https://www.justonecookbook.com/wp-content/uploads/2024/05/Soba-Salad-8528-I-1.jpg",
            "title": "Soba salad",
            "description": "A Japanese salad made with chilled soba noodles, mixed with vegetables and often dressed in a sesame or soy-based dressing, offering a light yet satisfying meal."
        },
        {
            "img": "https://previews.123rf.com/images/bbtreesubmission/bbtreesubmission1812/bbtreesubmission181200715/115657930-naengchae-jokbal-thinly-sliced-pork-served-with-various-chilled-vegetables.jpg",
            "title": "Naengchae",
            "description": "A Korean cold vegetable salad made with thinly sliced vegetables such as cucumbers and carrots, dressed in a tangy, sweet vinegar-based sauce."
        },
        {
            "img": "https://media.istockphoto.com/id/1345888788/photo/caprese-salad.jpg?s=612x612&w=0&k=20&c=cvxuF6osxtSktuBP4tsHkb46547-HU9W-K8_rSq5UGY=",
            "title": "Caprese",
            "description": "An Italian salad made from slices of fresh mozzarella and ripe tomatoes, layered with basil leaves and drizzled with olive oil and balsamic reduction."
        },
        {
            "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
            "title": "Quiche Lorraine",
            "description": "A savory French tart made with a creamy filling of eggs, cream, and bacon, baked in a pastry crust and often served warm or at room temperature."
        },
        {
            "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
            "title": "Tostadas de ceviche",
            "description": "Mexican tostadas topped with a refreshing ceviche made from raw fish marinated in lime juice, mixed with tomatoes, onions, cilantro, and avocado."
        },
        {
            "img": "https://media.istockphoto.com/id/1404188430/photo/cooking-pork-larb-thai-food-preparation.jpg?s=612x612&w=0&k=20&c=mxlaEHTi_T0zeoF6d2yWwkukCoWD3b62WQBmVjaCFks=",
            "title": "Larb",
            "description": "A Thai salad made with minced meat, usually pork or chicken, mixed with herbs, lime juice, fish sauce, and roasted rice powder, often served with fresh vegetables."
        },
        {
            "img": "https://travinhnetworks.wordpress.com/wp-content/uploads/2015/02/tuyet-goi-ngo-sen-tom-thit11.jpg",
            "title": "Goi ngo sen",
            "description": "A Vietnamese lotus root salad that combines crunchy lotus root slices with herbs, vegetables, and sometimes meat, dressed in a tangy lime and fish sauce dressing."
        },
        {
            "img": "https://thumbs.dreamstime.com/b/white-cut-cold-poached-chicken-dish-bai-qie-ji-lean-succulent-breast-meat-bite-size-pieces-commonly-eaten-146681675.jpg",
            "title": "Bai qie ji",
            "description": "A Chinese shredded chicken salad served cold, with tender chicken mixed with a variety of fresh vegetables and a spicy sesame or ginger sauce."
        },
        {
            "img": "https://img.freepik.com/free-photo/traditional-spanish-gazpacho-soup-bowl-blue-background_123827-25481.jpg",
            "title": "Gazpacho",
            "description": "A Spanish cold tomato soup made with blended raw vegetables like tomatoes, cucumbers, and bell peppers, seasoned with olive oil and vinegar for a refreshing taste."
        },
        {
            "img": "https://www.justonecookbook.com/wp-content/uploads/2020/01/Tofu-Salad-with-Sesame-Ponzu-Dressing-3421-I.jpg",
            "title": "Tofu salad with sesame dressing",
            "description": "A light and nutritious salad featuring fresh tofu cubes, mixed greens, and vegetables, topped with a flavorful sesame dressing for added depth."
        },
        {
            "img": "https://static01.nyt.com/images/2021/05/10/dining/kc-spring-vegetable-japchae/kc-spring-vegetable-japchae-threeByTwoMediumAt2X.jpg",
            "title": "Japchae",
            "description": "A Korean stir-fried noodle dish made with sweet potato noodles, vegetables, and often beef or other proteins, seasoned with soy sauce and sesame oil."
        },
        {
            "img": "https://media.istockphoto.com/id/475045278/photo/concept-of-italian-food.jpg?s=612x612&w=0&k=20&c=HMrSq5Y40hFe947eXsMsH3npA_5-3VlCZYL2a72QKmw=",
            "title": "Prosciutto e melone",
            "description": "An Italian appetizer pairing thin slices of prosciutto with sweet cantaloupe melon, creating a delightful contrast of salty and sweet flavors."
        },
        {
            "img": "https://media.istockphoto.com/id/1408022026/photo/a-baked-pissaladi%C3%A8re-pie-close-up-on-a-wooden-board.jpg?s=612x612&w=0&k=20&c=5Mhoq8DKSTTWehiS2vNaM-VvQ2RptTQnX0gzTbO1liY=",
            "title": "Pissaladière",
            "description": "A French Provençal onion tart topped with caramelized onions, olives, and anchovies, baked in a savory pastry crust for a rich and flavorful dish."
        }
]
const LunchSourHeavyHot = [
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-crispy-pancake-600nw-2092243153.jpg",
        "title": "Banh Xeo",
        "description": "Vietnamese savory pancake filled with pork, shrimp, and bean sprouts, often served with a sour dipping sauce."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-gourmet-meal-wooden-table-close-up-generative-ai_188544-8192.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721433600&semt=sph",
        "title": "Bibimbap",
        "description": "A rice bowl topped with assorted vegetables, beef, a fried egg, and spicy gochujang sauce."
    },
    {
        "img": "https://littleferrarokitchen.com/wp-content/uploads/2023/05/Easy-French-seafood-stew-bouillabaisse-500x375.jpg",
        "title": "Bouillabaisse",
        "description": "A Provencal fish stew with a rich and spicy broth flavored with saffron and herbs."
    },
    {
        "img": "https://media.istockphoto.com/id/1348333763/photo/bowl-of-traditional-south-vietnamese-noodle-dish-bun-bo-hue.jpg?s=612x612&w=0&k=20&c=4WHJJHeQfc3K3D9SGHV8nYD1J1o1nAexOelmRpZV1SA=",
        "title": "Bun Bo Hue",
        "description": "Spicy beef and pork noodle soup known for its sour and spicy broth."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/canh-chua-nau-suon-viet-600nw-2224567955.jpg",
        "title": "Canh Chua",
        "description": "Vietnamese sour soup typically made with fish, pineapple, and tomatoes."
    },
    {
        "img": "https://media.istockphoto.com/id/1288246083/photo/cassoulet-a-meal-with-white-beans-duck-leg-sausage-and-bacon.jpg?s=612x612&w=0&k=20&c=FLZn2JiByNVVvh7rDR3eDWnCo0Hfuq2eVdc41xy7Fk8=",
        "title": "Cassoulet",
        "description": "A hearty stew of white beans, sausage, and duck confit, sometimes with spicy sausage added."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/chili-con-carne-mexican-dish-600nw-2454964959.jpg",
        "title": "Chili Con Carne",
        "description": "A hearty stew made with ground beef, beans, tomatoes, and chili peppers, served hot and spicy."
    },
    {
        "img": "https://media.istockphoto.com/id/1223917846/photo/chiles-en-nogada-traditional-mexican-cuisine-in-puebla-mexico.jpg?s=612x612&w=0&k=20&c=cExU00c2xlU7NGEdH-4HMvw-CyRUA5Jl0RpNg61U418=",
        "title": "Chiles en Nogada",
        "description": "Poblano chilies stuffed with picadillo (a mixture of meat, fruits, and spices) and topped with walnut sauce, pomegranate seeds, and parsley."
    },
    {
        "img": "https://media.istockphoto.com/id/162245450/photo/chicken-stew-coq-au-vin.jpg?s=612x612&w=0&k=20&c=btKi554qSdhc18l9y8Yklg74GtnIvLio65JOFGgAa3A=",
        "title": "Coq au Vin",
        "description": "Chicken braised with wine, mushrooms, and onions, often with a hint of spiciness."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/cheese-dak-galbi-600nw-760775632.jpg",
        "title": "Dakgalbi",
        "description": "Stir-fried spicy chicken with vegetables and rice cakes, a popular dish from Chuncheon, Korea."
    },
    {
        "img": "https://img.freepik.com/premium-photo/green-curry-gaeng-keow-wan-vibrant-thai-chicken-curry_818261-37147.jpg",
        "title": "Gaeng Keow Wan Gai",
        "description": "Thai green curry with chicken, eggplant, and bamboo shoots, known for its spicy and aromatic coconut milk broth."
    },
    {
        "img": "https://media.istockphoto.com/id/1539491416/photo/chinese-food.jpg?s=612x612&w=0&k=20&c=kyv1ZHuYDmdV9CHyxZAASOBwoTer1_ia7jm48SakVes=",
        "title": "Hot and Sour Soup",
        "description": "A popular Chinese soup with a spicy and tangy broth, usually containing tofu and bamboo shoots."
    },
    {
        "img": "https://st2.depositphotos.com/1692343/6439/i/450/depositphotos_64397939-stock-photo-spicy-homemade-cajun-jambalaya.jpg",
        "title": "Jambalaya",
        "description": "A Cajun dish with rice, sausage, chicken, and shrimp cooked in a spicy tomato sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/1038060160/photo/portion-fried-chicken-karaage-with-lemon-and-onion-close-up-on-a-plate-horizontal.jpg?s=612x612&w=0&k=20&c=5QYZeUeQDG70i6R1Fjq9o_AVgObUqgPxEvJ0zYiHKAo=",
        "title": "Karaage",
        "description": "Japanese fried chicken marinated in a tangy and savory sauce, often served with a spicy dipping sauce."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "A spicy and sour stew made with kimchi, pork, tofu, and sometimes seafood, a Korean favorite."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2019/12/Kimchi-Nabe-0747-I-2.jpg",
        "title": "Kimuchi Nabe",
        "description": "Japanese hot pot with a spicy broth flavored with kimchi, pork, and vegetables."
    },
    {
        "img": "https://www.kitchensanctuary.com/wp-content/uploads/2023/07/Penne-alarrabiata-square-FS.jpg",
        "title": "Pasta all'Arrabbiata",
        "description": "Spaghetti with a spicy tomato sauce made with garlic, tomatoes, and red chili peppers."
    },
    {
        "img": "https://media.istockphoto.com/id/1174042861/photo/mexican-red-pozole-soup-on-wooden-background.jpg?s=612x612&w=0&k=20&c=P5AGzkZk3t_P5uFqYYMjphXogwxdgLnCXnpe8M74Lm8=",
        "title": "Pozole Rojo",
        "description": "A traditional Mexican soup made with pork, hominy, and a spicy red chili broth."
    },
    {
        "img": "https://img.taste.com.au/yzM49jFu/taste/2017/02/classic-quiche-lorraine-121391-2.jpg",
        "title": "Quiche Lorraine",
        "description": "Quiche Lorraine is a French savory tart made with a buttery crust filled with eggs, cream, cheese, and bacon or lardons. It's baked until golden and served warm or at room temperature as a meal or snack."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/overhead-shot-chinese-sichuan-twoflavor-600nw-2384594125.jpg",
        "title": "Sichuan Hot Pot",
        "description": "A communal pot of simmering broth filled with spicy and numbing Sichuan peppercorns, meats, and vegetables."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som Tum",
        "description": "Spicy green papaya salad made with shredded papaya, tomatoes, chili peppers, and lime juice, a popular Thai dish."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-buffalo-chicken-wings-with-savory-dip-appetizer-generative-ai_188544-8118.jpg",
        "title": "Spicy Buffalo Wings",
        "description": "Deep-fried chicken wings coated in a tangy and spicy buffalo sauce."
    },
    {
        "img": "https://i0.wp.com/cookingwithcarbs.com/wp-content/uploads/2022/07/spicy-italian-sausage-risotto-7-min.jpg?fit=1200%2C800&ssl=1",
        "title": "Spicy Italian Sausage Risotto",
        "description": "Creamy risotto made with spicy Italian sausage, tomatoes, and Parmesan cheese, an Italian comfort dish."
    },
    {
        "img": "https://www.lostlaowai.com/wp-content/uploads/2015/02/hui-guo-rou-stu-spivack-1080x720.jpg",
        "title": "Twice-cooked Pork (Huí Guō Ròu)",
        "description": "Sliced pork belly stir-fried with spicy bean paste, fermented black beans, and vegetables, a popular dish in China."
    },
    {
        "img": "https://img.freepik.com/free-photo/mexican-food-concept-high-angle_23-2148629376.jpg",
        "title": "Tacos al Pastor",
        "description": "Tacos filled with marinated pork cooked on a vertical spit, served with spicy salsa and pineapple, a Mexican street food delight."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "A spicy and sour Thai soup with shrimp, lemongrass, lime leaves, and chili paste."
    }
]
const LunchSourHeavyCold = [
    {
        "img": "https://mediavine-res.cloudinary.com/image/upload/s--_3SC1VX0--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1707264040/cypds4x7xs0miv9p6atd.jpg",
        "title": "Goi Ga",
        "description": "Vietnamese chicken salad with shredded cabbage, herbs, and a tangy lime dressing."
    },
    {
        "img": "https://www.vietnamonline.com/media/uploads/froala_editor/images/VNO_NomHoaChuoi.jpg",
        "title": "Nom Hoa Chuoi",
        "description": "Banana blossom salad with shredded chicken, peanuts, and a sour dressing."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "Cold noodles made from wheat or rice flour served with a sour, spicy sauce."
    },
    {
        "img": "https://i0.wp.com/blog.themalamarket.com/wp-content/uploads/2019/03/niurou-mian-2023.jpg?resize=800%2C600&ssl=1",
        "title": "Sichuan Liang Ban Niu Rou",
        "description": "Cold Sichuan-style beef salad with a spicy, sour dressing."
    },
    {
        "img": "https://thewoksoflife.com/wp-content/uploads/2018/08/bang-bang-chicken-7.jpg",
        "title": "Bang Bang Ji Si",
        "description": "Shredded chicken salad with a spicy and sour sesame sauce."
    },
    {
        "img": "https://www.recipetineats.com/uploads/2023/08/Cobb-Salad_0.jpg",
        "title": "Cobb Salad",
        "description": "A classic American salad with mixed greens, avocado, bacon, eggs, tomatoes, and a tangy vinaigrette."
    },
    {
        "img": "https://img.freepik.com/free-photo/traditional-spanish-gazpacho-soup-bowl-blue-background_123827-25481.jpg",
        "title": "Gazpacho",
        "description": "A cold Spanish-style soup made with tomatoes, cucumbers, bell peppers, and a tangy broth."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/07/Hiyashi-Chuka-8711-I.jpg",
        "title": "Hiyashi Chuka",
        "description": "Cold ramen noodles topped with various ingredients like cucumber, ham, and egg, served with a sour vinaigrette."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Chilled tofu topped with ginger, green onions, and soy sauce, offering a refreshing and light sour note."
    },
    {
        "img": "https://i0.wp.com/www.angsarap.net/wp-content/uploads/2023/03/Naengmyeon-Wide.jpg?fit=1080%2C720&ssl=1",
        "title": "Naengmyeon",
        "description": "Cold buckwheat noodles served in a tangy iced broth, often topped with kimchi or sliced beef."
    },
    {
        "img": "https://www.koreanbapsang.com/wp-content/uploads/2010/07/DSC_1702-e1536078527576.jpg",
        "title": "Kongguksu",
        "description": "Chilled soy milk noodle soup with a hint of sourness, garnished with cucumbers and sesame seeds."
    },
    {
        "img": "https://media.istockphoto.com/id/136183596/photo/tuna-calf.jpg?s=612x612&w=0&k=20&c=veJ2M1FAqUMmDQt1ZIAHOkMn_GYIPQD72vhmy68U-yo=",
        "title": "Vitello Tonnato",
        "description": "Cold sliced veal served with a creamy tuna sauce, offering a tangy flavor profile."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "Tuscan bread salad with tomatoes, cucumbers, red onions, and a sour vinaigrette dressing."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "description": "French salad with tuna, boiled potatoes, green beans, tomatoes, olives, and a tangy vinaigrette."
    },
    {
        "img": "https://preppykitchen.com/wp-content/uploads/2022/03/Vichyssoise-Recipe-Card.jpg",
        "title": "Vichyssoise",
        "description": "Chilled potato and leek soup with a creamy texture and a touch of acidity."
    },
    {
        "img": "https://legallyhealthyblonde.com/wp-content/uploads/2022/09/escargot-featured.jpg",
        "title": "Escargot",
        "description": "Chilled snails served in garlic butter, often with a hint of tanginess from wine or vinegar."
    },
    {
        "img": "https://www.cookingclassy.com/wp-content/uploads/2020/09/ceviche-6.jpg",
        "title": "Ceviche",
        "description": "Raw fish marinated in citrus juices (usually lime or lemon) with tomatoes, onions, cilantro, and spicy peppers."
    },
    {
        "img": "https://www.foodandwine.com/thmb/goshvH2nk3Vw2pvlGTRfFOFGAz8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Shrimp-Coconut-Avocado-Aguachile-FT-RECPE0622-464861196c474b20885a6274514fdcde.jpg",
        "title": "Aguachile",
        "description": "Shrimp marinated in a spicy green chili sauce with lime juice, cucumbers, and onions."
    },
    {
        "img": "https://honest-food.net/wp-content/uploads/2020/05/ensalada-de-nopales-1.jpg",
        "title": "Ensalada de Nopalitos",
        "description": "Cactus salad with tomatoes, onions, cilantro, and a tangy lime dressing."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2017/01/yum-woon-sen-blog.jpg",
        "title": "Yum Woon Sen",
        "description": "Thai glass noodle salad with shrimp, minced pork, onions, and a tangy lime dressing."
    },
    {
        "img": "https://www.funkyasiankitchen.com/wp-content/uploads/2021/04/ZESTY-SHRIMP-SALAD-prep-photo-26.jpg",
        "title": "Pla Goong",
        "description": "Thai spicy shrimp salad with lemongrass, lime juice, fish sauce, and chilies."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som Tum Thai",
        "description": "Thai green papaya salad with tomatoes, peanuts, and a sour lime dressing."
    }
]
const LunchSourLightHot = [
    {
        "img": "https://media.istockphoto.com/id/499489654/photo/good-rieu.jpg?s=612x612&w=0&k=20&c=NGhF8-8lOhIxJV2joz17cK3K0eImPL3wBSd2ic_pY-0=",
        "title": "Bun Rieu",
        "description": "A sour and slightly spicy Vietnamese noodle soup made with crab or shrimp paste."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/2559be7d-00bd-4375-aeb8-f10a73f109a9/2023_09_28EOS+M57895.jpg",
        "title": "Canh Chua",
        "description": "A sour soup typically made with fish, tomatoes, pineapple, and tamarind broth.This is an amazing dish to have on a cold day and is usually enjoyed with white rice."
    },
    {
        "img": "https://dinnerthendessert.com/wp-content/uploads/2019/02/Hot-and-Sour-Soup-2.jpg",
        "title": "Hot and Sour Soup",
        "description": "A classic Chinese soup known for its spicy and tangy flavors, usually containing tofu, mushrooms, and bamboo shoots."
    },
    {
        "img": "https://thewoksoflife.com/wp-content/uploads/2015/10/hot-pot-14-1-500x375.jpg",
        "title": "Sichuan Hot Pot",
        "description": "A spicy and fragrant hot pot meal with a variety of meats, vegetables, and tofu cooked in a spicy broth."
    },
    {
        "img": "https://tasteasianfood.com/wp-content/uploads/2021/07/sweet-and-sour-fish-feature-image.jpeg",
        "title": "Steamed Fish with Sour Plum Sauce",
        "description": "Light and delicate fish steamed and served with a sour plum sauce."
    },
    {
        "img": "https://static01.nyt.com/images/2019/02/24/dining/dt-vegetarian-mapo-tofu/dt-vegetarian-mapo-tofu-master768.jpg",
        "title": "Ma Po Tofu",
        "description": "Spicy tofu dish from Sichuan province cooked in a hot and numbing sauce."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/classic-caesar-salad-grilled-chicken-600nw-1738605458.jpg",
        "title": "Chicken Caesar Salad",
        "description": "A light and tangy salad made with romaine lettuce, grilled chicken, Parmesan cheese, and Caesar dressing."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/chunky-new-england-clam-chowder-600nw-2410530719.jpg",
        "title": "New England Clam Chowder",
        "description": "A creamy and slightly sour soup made with clams, potatoes, and sometimes bacon."
    },
    {
        "img": "https://img.freepik.com/free-photo/fresh-buffalo-chicken-wings-with-savory-dip-appetizer-generative-ai_188544-8118.jpg",
        "title": "Hot Wings",
        "description": "Spicy chicken wings typically served with a tangy dipping sauce like blue cheese or ranch."
    },
    {
        "img": "https://media.istockphoto.com/id/491788887/photo/homemade-baja-fish-tacos.jpg?s=612x612&w=0&k=20&c=fed3j3tBn3pbBoKZchJRI6UqT01hNW5rXVF0wS2KJeA=",
        "title": "Fish Tacos",
        "description": "Light and fresh tacos filled with grilled or fried fish, usually topped with a tangy salsa or sauce."
    },
    {
        "img": "https://cookingtheglobe.com/wp-content/uploads/2016/06/japanese-cucumber-salad-recipe-sunomono.jpg",
        "title": "Sunomono (Japanese Cucumber Salad)",
        "description": "A light and refreshing salad made with thinly sliced cucumbers marinated in vinegar, sugar, and soy sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/155341533/photo/miso-soup.jpg?s=612x612&w=0&k=20&c=0614e4CQibtJ5RlwsHfdFuVPa9FS6QG38ITuBXoh4Qk=",
        "title": "Miso Soup",
        "description": "A traditional Japanese soup made with miso paste, tofu, seaweed, and sometimes vegetables."
    },
    {
        "img": "https://media.istockphoto.com/id/1418965870/photo/yakitori.jpg?s=612x612&w=0&k=20&c=O5uvy2zCMPQ5HlU6IRFEmei7fJrTgkk65Q4DPT_u0tI=",
        "title": "Yakitori",
        "description": "Grilled chicken skewers often brushed with a tangy soy-based sauce."
    },
    {
        "img": "https://veganhuggs.com/wp-content/uploads/2022/06/Soba-Noodle-Salad-With-Chopsticks.jpg",
        "title": "Soba Noodle Salad",
        "description": "Cold soba noodles served with a tangy dipping sauce and various toppings like tempura or vegetables."
    },
    {
        "img": "https://media.istockphoto.com/id/183752521/photo/bi-bim-bap.jpg?s=612x612&w=0&k=20&c=kK9ZtpnqNhG38QUZ-dRDd6eBlf-jj4XAVXQb6LRPEmk=",
        "title": "Bibimbap",
        "description": "A mixed rice dish with assorted vegetables, meat, and a spicy gochujang sauce."
    },
    {
        "img": "https://www.justonecookbook.com/wp-content/uploads/2022/12/Kimchi-Jjigae-Kimchi-Stew-1711-I.jpg",
        "title": "Kimchi Jjigae",
        "description": "A hot and sour stew made with kimchi, pork, tofu, and sometimes other vegetables."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul Naengmyeon",
        "description": "Cold noodles in a tangy broth typically made from beef and pickled radish."
    },
    {
        "img": "https://www.funkyasiankitchen.com/wp-content/uploads/2021/02/KOREAN-FRIED-CHICKEN-prep-photo-33.jpg",
        "title": "Korean Fried Chicken",
        "description": "Crispy fried chicken coated in a spicy and tangy sauce."
    },
    {
        "img": "https://st.depositphotos.com/3220235/4198/i/450/depositphotos_41981983-stock-photo-classic-caprese-salad.jpg",
        "title": "Caprese Salad",
        "description": "A light and refreshing salad made with tomatoes, mozzarella cheese, basil, olive oil, and balsamic vinegar."
    },
    {
        "img": "https://avegtastefromatoz.com/wp-content/uploads/2022/07/panzanella-7.jpg",
        "title": "Panzanella",
        "description": "A Tuscan salad made with stale bread, tomatoes, cucumbers, onions, and a tangy vinaigrette."
    },
    {
        "img": "https://img.sndimg.com/food/image/upload/f_auto,c_thumb,q_55,w_744,ar_5:4/v1/img/recipes/51/50/4/pyydJJSaSDF6B7IYczfA_0S9A7420.jpg",
        "title": "Lemon Risotto",
        "description": "Creamy risotto flavored with lemon zest and juice, giving it a tangy and refreshing taste."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/5e272e99dd02355ec2eb8101/1586459165930-HLUQVEOZX64E71BYOI6L/spaghetti+al+limone.jpg",
        "title": "Spaghetti al Limone",
        "description": "Spaghetti pasta tossed in a lemony sauce made with lemon juice, zest, and Parmesan cheese."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "description": "A salad originating from Nice, France, featuring tuna, hard-boiled eggs, olives, and dressed with a tangy vinaigrette."
    },
    {
        "img": "https://www.seriouseats.com/thmb/xo2aRvBxNaMMxMSTT_od8UUDuME=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SEA-french-onion-soup-recipe-hero-01-cbeea4db88344d00bc2254d4d2df602e.jpg",
        "title": "Soupe à l'Oignon (French Onion Soup)",
        "description": "A hearty soup made with onions, beef broth, and topped with melted cheese and toasted bread."
    },
    {
        "img": "https://lechefswife.com/wp-content/uploads/2023/09/coqauvinblancLCW9.jpg",
        "title": "Coq au Vin",
        "description": "A classic French dish of chicken braised with wine, mushrooms, and sometimes bacon, resulting in a rich and tangy sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/1387475714/photo/salade-lyonnaise.jpg?s=612x612&w=0&k=20&c=jGtYd7jnKL9l69-wYtlYwNsycHvzYKK4Ed5Og4Fkw9A=",
        "title": "Salade Lyonnaise",
        "description": "A salad from Lyon, France, featuring frisée lettuce, lardons (bacon), croutons, and a poached egg, typically dressed with a tangy vinaigrette."
    },
    {
        "img": "https://st4.depositphotos.com/4366637/22799/i/450/depositphotos_227991112-stock-photo-seafood-ceviche-typical-dish-peru.jpg",
        "title": "Ceviche",
        "description": "Fresh seafood marinated in citrus juices (sour), usually with tomatoes, onions, and cilantro."
    },
    {
        "img": "https://st2.depositphotos.com/1053932/9872/i/450/depositphotos_98721874-stock-photo-pozole-with-mote-big-corn.jpg",
        "title": "Pozole",
        "description": "A traditional Mexican soup made with hominy, pork or chicken, and seasoned with chili peppers, typically garnished with shredded cabbage, radishes, and lime (sour)."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/chiles-en-nogada-typical-dish-600nw-2328489675.jpg",
        "title": "Chiles en Nogada",
        "description": "Poblano peppers stuffed with picadillo (a mixture of meat, fruits, and spices), topped with a walnut-based cream sauce, pomegranate seeds, and parsley (sour)."
    },
    {
        "img": "https://media.istockphoto.com/id/1318944407/photo/pork-tacos-called-al-pastor-with-pineapple-on-dark-background-mexican-tacos.jpg?s=612x612&w=0&k=20&c=LXdBP6EYE5eSDUth3VcZjRDUnwO_B4rKKAUWjs9DiWs=",
        "title": "Tacos al Pastor",
        "description": "Tacos filled with marinated pork cooked on a vertical spit, often served with pineapple, onions, cilantro, and salsa (hot)."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "A spicy and sour Thai soup with shrimp, lemongrass, lime leaves, and chili peppers."
    },
    {
        "img": "https://media.istockphoto.com/id/478186916/photo/thai-style-papaya-salad.jpg?s=612x612&w=0&k=20&c=4tFuEIE6zBspSqx0YNG9FD5p0RyCuKToYkN4bRjSXLE=",
        "title": "Som Tum (Green Papaya Salad)",
        "description": "A refreshing and spicy salad made with shredded green papaya, tomatoes, green beans, peanuts, and a tangy dressing."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2021/10/Untitled-design-5.jpg",
        "title": "Pad Thai",
        "description": "Stir-fried rice noodles with shrimp or chicken, tofu, eggs, peanuts, and a tangy tamarind sauce."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2014/06/Tom-kha-gai-new-sq.jpg",
        "title": "Tom Kha Gai",
        "description": "A hot and sour Thai soup made with coconut milk, chicken, galangal, lemongrass, and lime juice."
    }
]
const mealLunchSourLightCold = [
    {
        "img": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUSVEsSFU7TAyJ2uvlMvNm-BJWsOOvJD4YdQ&s",
        "title": "Goi Cuon (Vietnamese Fresh Spring Rolls)",
        "description": "LightGoi Cuon and refreshing rolls filled with shrimp, herbs, and vermicelli, often served cold with a tangy dipping sauce."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/vietnamese-special-combination-vermicelli-bowl-600nw-2127831767.jpg",
        "title": "Bun Thit Nuong",
        "description": "Cold vermicelli noodles topped with grilled pork, fresh herbs, pickled vegetables, and a tangy fish sauce dressing."
    },
    {
        "img": "https://cdn1.vietnamtourism.org.vn/images/content/65a960605fb587be48cd11460502ec22.jpg",
        "title": "Nom Du Du",
        "description": "Nom Du Du is a green papaya salad often served with shrimp, herbs, peanuts, and a sour dressing, served cold."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.hs3qc99lVfFbGze09cDSEQHaHa?rs=1&pid=ImgDetMain",
        "title": "Liangpi",
        "description": "Cold noodles made from wheat or rice flour, typically served with vegetables, chili oil, vinegar, and soy sauce."
    },
    {
        "img": "https://thewoksoflife.com/wp-content/uploads/2020/06/suan-la-fen-14.jpg",
        "title": "Suan La Fen",
        "description": "Spicy and sour noodle soup from Sichuan, made with rice noodles, vinegar, chili oil, and various toppings."
    },
    {
        "img": "https://www.shutterstock.com/image-photo/noodles-bowl-cold-sesame-sliced-600nw-1700676658.jpg",
        "title": "Cold Sesame Noodles",
        "description": "Noodles tossed in a sesame sauce with cucumbers and sometimes shredded chicken, served cold."
    },
    {
        "img": "https://cdn0-production-images-kly.akamaized.net/FSbgjDUUN_Bs8KRyy0zCyuGqEvU=/0x177:668x845/1200x900/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4548394/original/077217600_1692766274-shutterstock_2289347229.jpg",
        "title": "Bang Bang Ji Si",
        "description": "Shredded chicken with sesame sauce and chili oil, served cold."
    },
    {
        "img": "https://static7.depositphotos.com/1066961/771/i/450/depositphotos_7711715-stock-photo-seafood-salad.jpg",
        "title": "Shrimp Salad",
        "description": "A cold salad made with shrimp, mixed greens, tomatoes, cucumbers, and a tangy vinaigrette dressing."
    },
    {
        "img": "https://img.freepik.com/free-photo/traditional-spanish-gazpacho-soup-bowl-blue-background_123827-25481.jpg",
        "title": "Gazpacho",
        "description": "A cold soup made from tomatoes, cucumbers, peppers, and onions, flavored with vinegar and served chilled."
    },
    {
        "img": "https://media.istockphoto.com/id/500119141/photo/healthy-hearty-cobb-salad.jpg?s=612x612&w=0&k=20&c=28Q_RKSRBvlrJD8XwINIc-vmMkQguq12o6QkWWscjA8=",
        "title": "Cobb Salad",
        "description": "A cold salad made with chopped greens, grilled chicken, avocado, tomatoes, bacon, hard-boiled eggs, and a tangy dressing."
    },
    {
        "img": "https://skinnyspatula.com/wp-content/uploads/2022/07/Cold_Cucumber_Soup_0-720x540.jpg",
        "title": "Chilled Cucumber Soup",
        "description": "A refreshing soup made with cucumbers, yogurt or buttermilk, dill, and lemon juice.It is often served with rice and makes a perfect quick and healthy meal."
    },
    {
        "img": "https://images.squarespace-cdn.com/content/v1/568e8fe6b204d5cbecd5c77e/1624403710386-71Z2KJH5M5R58G88BT6Z/Japanese+Summer+Noodles-9358.jpg",
        "title": "Hiyashi Chuka",
        "description": "Cold ramen noodles topped with various ingredients like sliced egg, ham, cucumber, and served with a tangy soy-based dressing."
    },
    {
        "img": "https://umamipot.com/wp-content/uploads/2023/09/hiyayakko.jpg",
        "title": "Hiyayakko",
        "description": "Cold tofu served with toppings like grated ginger, green onions, and soy sauce."
    },
    {
        "img": "https://onolicioushawaii.com/wp-content/uploads/2020/05/Somen-Salad-1.jpg",
        "title": "Somen Salad",
        "description": "Cold somen noodles served with cucumber, ham, egg, and a tangy dressing."
    },
    {
        "img": "https://www.tastingtable.com/img/gallery/mul-naengmyeon-the-korean-noodle-soup-thats-ideal-for-hot-weather/l-intro-1662728769.jpg",
        "title": "Mul Naengmyeon",
        "description": "Cold buckwheat noodles in a tangy broth typically made from beef and pickled radish."
    },
    {
        "img": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/07/15/0/FNK_Kongguksu_H3_s4x3.jpg.rend.hgtvcom.1280.960.suffix/1657896779552.webp",
        "title": "Kongguksu",
        "description": "Cold soy milk noodle soup served with noodles, cucumber, and sometimes sesame seeds."
    },
    {
        "img": "https://www.koreanbapsang.com/wp-content/uploads/2011/07/DSC_4974-2-e1563170940691.jpg",
        "title": "Oi Naengguk",
        "description": "Cold cucumber soup with a sour and refreshing flavor, often served as a side dish."
    },
    {
        "img": "https://christieathome.com/wp-content/uploads/2020/04/Bibim-Guksu-8.jpg",
        "title": "Bibim Guksu",
        "description": "Cold mixed noodles tossed in a spicy and tangy sauce with vegetables and sometimes topped with a boiled egg."
    },
    {
        "img": "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2019/07/Caprese-Salad-main-1.jpg",
        "title": "Insalata Caprese",
        "description": "A classic Italian salad with fresh tomatoes, mozzarella cheese, basil, olive oil, and balsamic vinegar."
    },
    {
        "img": "https://playswellwithbutter.com/wp-content/uploads/2022/07/Grilled-Panzanella-Salad-11.jpg",
        "title": "Panzenella",
        "description": "A Tuscan salad made with stale bread, tomatoes, cucumbers, onions, and dressed with a tangy vinaigrette."
    },
    {
        "img": "https://media.istockphoto.com/id/1132258434/photo/beef-carpaccio-cold-appetizer-with-parmesan-capers-and-arugula-on-white-plate.jpg?s=612x612&w=0&k=20&c=keh7ZHq1apADlu8Zxyohw2DFv3dyyodwwBZLx1QeP6k=",
        "title": "Carpaccio",
        "description": "Thinly sliced raw beef or fish drizzled with olive oil, lemon juice, and topped with capers and Parmesan cheese."
    },
    {
        "img": "https://assets.epicurious.com/photos/579fa0dbc9298e5449591827/master/pass/salade-nicoise.jpg",
        "title": "Salade Niçoise",
        "description": "A salad originating from Nice, France, featuring tuna, hard-boiled eggs, olives, and dressed with a tangy vinaigrette."
    },
    {
        "img": "https://media.istockphoto.com/id/1370267479/photo/delicious-meat-terrine-with-slice-chicken-green-peas-and-dried-fruits-meatloaf.jpg?s=612x612&w=0&k=20&c=0iDpLY16rax0aLif9Uq0y1bfAOr-paJMKnmayH7XcQw=",
        "title": "Terrine de Poisson",
        "description": "Cold fish terrine served with a tangy sauce or vinaigrette."
    },
    {
        "img": "https://media.istockphoto.com/id/1408022026/photo/a-baked-pissaladière-pie-close-up-on-a-wooden-board.jpg?s=612x612&w=0&k=20&c=5Mhoq8DKSTTWehiS2vNaM-VvQ2RptTQnX0gzTbO1liY=",
        "title": "Pissaladière",
        "description": "A cold tart from the south of France topped with caramelized onions, anchovies, and olives."
    },
    {
        "img": "https://st4.depositphotos.com/4366637/22799/i/450/depositphotos_227991112-stock-photo-seafood-ceviche-typical-dish-peru.jpg",
        "title": "Ceviche",
        "description": "Fresh seafood marinated in citrus juices (sour), usually with tomatoes, onions, and cilantro, served cold."
    },
    {
        "img": "https://media.istockphoto.com/id/1313317450/photo/shrimps-aguachile.jpg?s=612x612&w=0&k=20&c=vsdnFk0CEavim2JOUQmM_c9WyQiT0VPZu2bqi31znRs=",
        "title": "Aguachile",
        "description": "Shrimp marinated in lime juice, chili peppers, and served cold with cucumber slices."
    },
    {
        "img": "https://www.thebossykitchen.com/wp-content/uploads/2018/08/Authentic-Mexican-Cactus-Leaves-Salad-Ensalada-De-Nopales1.jpg",
        "title": "Ensalada de Nopales",
        "description": "A salad made with prickly pear cactus pads, tomatoes, onions, and a tangy dressing, served cold."
    },
    {
        "img": "https://media.istockphoto.com/id/1159529397/photo/shrimp-ceviche-toast.jpg?s=612x612&w=0&k=20&c=ZJSIrg9u_bsEgDMxlY83cIym5427vHsRVE8iqg4NFsU=",
        "title": "Tostadas de Ceviche",
        "description": "Tostadas topped with ceviche (marinated seafood), avocado, and salsa, served cold."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/som-tum-popular-thai-green-papaya-salad-blurred-background-325012322.jpg",
        "title": "Som Tum (Green Papaya Salad)",
        "description": "A refreshing and spicy salad made with shredded green papaya, tomatoes, green beans, peanuts, and a tangy dressing, served cold."
    },
    {
        "img": "https://133758612.cdn6.editmysite.com/uploads/1/3/3/7/133758612/s802153116529721152_p384_i1_w735.png",
        "title": "Yum Woon Sen",
        "description": "Glass noodle salad with shrimp, minced pork, onions, and a tangy lime dressing, served cold."
    },
    {
        "img": "https://thumbs.dreamstime.com/b/larb-gai-spicy-chicken-close-up-34063230.jpg",
        "title": "Larb Gai",
        "description": "Thai minced chicken salad with herbs, lime juice, and chili flakes, served cold."
    },
    {
        "img": "https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        "title": "Tom Yum Goong",
        "description": "A spicy and sour Thai soup with shrimp, lemongrass, lime leaves, and chili peppers, sometimes served cold."
    }
]
let snacksubmit = [
    {
        "img": "https://www.shutterstock.com/image-photo/italian-starter-appetizer-bruschetta-al-600nw-499184110.jpg",
        "title": "Bruschetta al pomodoro",
        "description": "Bruschetta al pomodoro is Italian toasted bread topped with diced tomatoes, garlic, basil, and olive oil. It's often served as an appetizer or snack."
    },
    {
        "img": "https://media.istockphoto.com/id/1248854133/photo/plate-of-corn-tortilla-chips-with-guacamole-dip.jpg?s=612x612&w=0&k=20&c=fIk2YdBD6kIIw55r4nTRVWt77ERwAw1dIJ7FG1aphds=",
        "title": "Guacamole with Tortilla Chips",
        "description": "Mash avocados and mix with lime juice, salt, tomatoes, onions, and cilantro. Serve with tortilla chips."
    },
    {
        "img": "https://media.istockphoto.com/id/1300836710/photo/crop-shot-of-plate-with-colorful-healthy-sliced-vegetables-and-dips.jpg?s=612x612&w=0&k=20&c=n78ffFNdqTX_DWQoQ7ghyjlfvLxZGOHuQUa_CDjLgRs=",
        "title": "Hummus with Veggies",
        "description": "Blend chickpeas, tahini, lemon juice, garlic, and olive oil to make hummus. Serve with carrot sticks, celery, and bell peppers."
    },
    {
        "img": "https://media.istockphoto.com/id/671996064/photo/quesadilla-close-up.jpg?s=612x612&w=0&k=20&c=fAcD2ELkYvZ_zAsWFM3HGEQhK4E1VlaCphh8MnR0x0w=",
        "title": "Cheese Quesadillas",
        "description": "Fill tortillas with cheese and cook on a skillet until the cheese melts and the tortillas are crispy. Serve with salsa or sour cream."
    },
    {
        "img": "https://th.bing.com/th/id/OIP.idEel2RlKPwaG260V-pMaQHaHa?rs=1&pid=ImgDetMain",
        "title": "Baked Sweet Potato Fries",
        "description": "Cut sweet potatoes into fries, toss with olive oil and seasonings, and bake until crispy."
    },
    {
        "img": "https://media.istockphoto.com/id/1127348662/photo/pop-corn-full-frame-detailed-view-from-above-top-view.webp?b=1&s=170667a&w=0&k=20&c=ceBQidetJvIwlLfGutiBIBUiOt_SN9rQkGrwYlyBnLQ=",
        "title": "Popcorn",
        "description": "Popcorn kernels can be popped on the stove or in a popcorn maker. Season with butter, salt, or your favorite spices."
    },
    {
        "img": "https://st2.depositphotos.com/1692343/6292/i/450/depositphotos_62928663-stock-photo-raw-organic-homemade-trail-mix.jpg",
        "title": "Homemade Trail Mix",
        "description": "Combine nuts, dried fruits, seeds, and a sprinkle of chocolate chips for a customizable snack mix."
    },
    {
        "img": "https://media.istockphoto.com/id/529660454/photo/fruits-on-sticks.jpg?s=612x612&w=0&k=20&c=k1tO3-Fbd4gi6F_IaUmhFu1M-0_xcultt_trq9o5P18=",
        "title": "Fruit Kabobs",
        "description": "Skewer pieces of fresh fruit such as strawberries, pineapple, and melon. Serve as is or with a yogurt dip."
    },
    {
        "img": "https://bellyfull.net/wp-content/uploads/2021/12/Caprese-Skewers-1.jpg",
        "title": "Mini Caprese Skewers",
        "description": "Thread cherry tomatoes, fresh basil, and mozzarella balls onto skewers. Drizzle with balsamic glaze."
    },
    {
        "img": "https://media.istockphoto.com/id/465827436/photo/homemade-spicy-deviled-eggs.jpg?s=612x612&w=0&k=20&c=ATeHqsGWTbRmCAjGI8naHc2UNx_9C-_m9OmZ7SG_YE8=",
        "title": "Deviled Eggs",
        "description": "Hard-boil eggs, then mix the yolks with mayo, mustard, and spices. Pipe or spoon the mixture back into the egg whites."
    },
    {
        "img": "https://media.istockphoto.com/id/611217296/photo/healthy-homemade-paleo-chocolate-energy-balls-horizontal-copy-space.jpg?s=612x612&w=0&k=20&c=6AuSctbn2xRcv0XXti-vMX0FDj-Ws-Gc1OHiwCdJg1g=",
        "title": "Energy Balls",
        "description": "Blend oats, nut butter, honey, and add-ins like chocolate chips or dried fruit. Roll into balls and refrigerate."
    },
    {
        "img": "https://media.istockphoto.com/id/1410877204/photo/stuffed-mushrooms.jpg?s=612x612&w=0&k=20&c=QBqvGx14n1XD7Q61TJu_IQj65zdy0cRLVmkZp7bQDOk=",
        "title": "Stuffed Mushrooms",
        "description": "Fill mushroom caps with a mixture of cream cheese, garlic, herbs, and breadcrumbs, then bake."
    },
    {
        "img": "https://cdn.loveandlemons.com/wp-content/uploads/2020/07/baked-zucchini.jpg",
        "title": "Baked Zucchini Chips",
        "description": "Slice zucchini thinly, coat with olive oil and breadcrumbs, and bake until crispy."
    },
    {
        "img": "https://media.istockphoto.com/id/480806355/photo/cucumber-sandwiches.jpg?s=612x612&w=0&k=20&c=VGDbKEwUJxEU10S9w9xqD40ziyCVQbKZ797EbWGDXdY=",
        "title": "Cucumber Sandwiches",
        "description": "Spread cream cheese on slices of bread, top with thin cucumber slices, and cut into bite-sized pieces."
    },
    {
        "img": "https://media.istockphoto.com/id/1427138342/photo/mexican-tomato-salsa-with-lime-onion-jalapeno-pepper-parsley-and-tortilla-chips.jpg?s=612x612&w=0&k=20&c=3SxJF4thCjpTGJOUPi03bWpZD52C48wihgJZrPntjME=",
        "title": "Homemade Salsa with Chips",
        "description": "Blend tomatoes, onions, cilantro, lime juice, and spices for a fresh salsa. Serve with tortilla chips."
    },
    {
        "img": "https://www.tosimplyinspire.com/wp-content/uploads/2022/12/Oven-Baked-Chicken-Wings-9.jpg",
        "title": "Oven-Baked Chicken Wings",
        "description": "Season chicken wings and bake until crispy. Toss in your favorite sauce."
    },
    {
        "img": "https://media.istockphoto.com/id/1520617700/photo/strawberry-yoghurt-parfait-on-drinking-jar.jpg?s=612x612&w=0&k=20&c=hM6_PCAWvjhncyrnHcFcJtJcfYPdsLFlGmxLHHc3sPA=",
        "title": "Greek Yogurt Parfait",
        "description": "Layer Greek yogurt with granola and fresh berries for a healthy and satisfying snack."
    },
    {
        "img": "https://nadiashealthykitchen.com/wp-content/uploads/2021/02/panasonic-zaatar-pitta-chips_5.jpg",
        "title": "Pita Bread with Baba Ganoush",
        "description": "Roast eggplant and blend with tahini, lemon juice, and garlic to make baba ganoush. Serve with pita bread."
    },
    {
        "img": "https://peanutbutterandjilly.com/wp-content/uploads/2023/04/IMG_0372-1.jpg",
        "title": "Banana Pancake Bites",
        "description": "Mash bananas and mix with oats to form a dough. Bake small spoonfuls until firm."
    },
]

let currentDishIndex = 0;


function anotherFood() {
    currentDishIndex++;
    update()
}
   
 function backfood() {
     currentDishIndex--;
     update()
 }
function update() {
    let selectedDishes = [];

    if (snack === true) {
        document.getElementById('quizpage').classList.remove('visible');
        document.getElementById('submitPage').classList.add('visible');
        selectedDishes = snacksubmit;

    }else if (meal === true && breakfast === true && light === true && hot === true && sour === true) {
            selectedDishes = mealbreakfastlightSourHot;
        }

    else if (meal === true && breakfast === true && heavy === true && cold === true && sweet === true) {
        selectedDishes = mealbreakfastSweetHeavyCold;
    }
    else if (meal === true && breakfast === true && heavy === true && hot === true && sweet === true) {
        selectedDishes = mealbreakfastSweetHeavyHot;
    }
    else if (meal === true && breakfast === true && light === true && hot === true && sweet === true) {
        selectedDishes = mealBreakfastSweetLightHot;
    }
    else if (meal === true && breakfast === true && light === true && cold === true && sweet === true) {
        selectedDishes = mealBreakfastSweetLightCold;
    }
    else if (meal === true && breakfast === true && heavy === true && hot === true && savory === true) {
        selectedDishes = mealBreakfastSavoryHeavyHot;
    }
    else if (meal === true && breakfast === true && heavy === true && cold === true && savory === true) {
        selectedDishes = mealBreakfastSavoryHeavyCold;
    }
    else if (meal === true && breakfast === true && light === true && hot === true && savory === true) {
        selectedDishes = mealBreakfastSavoryLightHot;
    }
    else if (meal === true && breakfast === true && light === true && cold === true && savory === true) {
        selectedDishes = mealBreakfastSavoryLightCold;
    }
    else if (meal === true && breakfast === true && heavy === true && hot === true && salty === true) {
        selectedDishes = mealBreakfastSaltyHeavyHot;
    }
    else if (meal === true && breakfast === true && heavy === true && cold === true && salty === true) {
        selectedDishes = mealBreakfastSaltyHeavyCold;
    }
    else if (meal === true && breakfast === true && light === true && hot === true && salty === true) {
        selectedDishes = mealBreakfastSaltyLightHot;
    }
    else if (meal === true && breakfast === true && light === true && cold === true && salty === true) {
        selectedDishes = mealBreakfastSaltyLightCold;
    }
    else if (meal === true && breakfast === true && heavy === true && hot === true && sour === true) {
        selectedDishes = mealBreakfastSourHeavyHot;
    }
    else if (meal === true && breakfast === true && heavy === true && cold === true && sour === true) {
        selectedDishes = mealBreakfastSourHeavyCold;
    }
    else if (meal === true && breakfast === true && light === true && cold === true && sour === true) {
        selectedDishes = mealBreakfastSourLightCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && hot === true && sweet === true) {
        selectedDishes = mealLunchSweetHeavyHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && cold === true && sweet === true) {
        selectedDishes = mealLunchSweetHeavyCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && hot === true && sweet === true) {
        selectedDishes = mealLunchSweetLightHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && cold === true && sweet === true) {
        selectedDishes = mealLunchSweetLightCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && cold === true && savory === true) {
        selectedDishes = mealLunchSavoryHeavyCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && hot === true && savory === true) {
        selectedDishes = mealLunchSavoryHeavyHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && hot === true && savory === true) {
        selectedDishes = mealLunchSavoryLightHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && cold === true && savory === true) {
        selectedDishes = mealLunchSavoryLightCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && hot === true && salty === true) {
        selectedDishes = mealLunchSaltyHeavyHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && cold === true && salty === true) {
        selectedDishes = mealLunchSaltyHeavyCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && hot === true && salty === true) {
        selectedDishes = mealLunchSaltyLightHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && cold === true && salty === true) {
        selectedDishes = mealLunchSaltyLightCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && hot === true && sour === true) {
        selectedDishes = LunchSourHeavyHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && heavy === true && cold === true && sour === true) {
        selectedDishes = LunchSourHeavyCold;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && hot === true && sour === true) {
        selectedDishes = LunchSourLightHot;
    }
    else if (meal === true && (lunch === true || dinner === true) && light === true && cold === true && sour === true) {
        selectedDishes = mealLunchSourLightCold;
    }
    else if (hot !== true && cold !== true) {
        alert("Please select at least one option");
        document.getElementById('submitPage').classList.remove('visible');
        document.getElementById('desiredTemp').classList.add('visible');
    }

    if (selectedDishes.length > 0) {
        img.src = selectedDishes[currentDishIndex].img;
        foodTitle.innerHTML = selectedDishes[currentDishIndex].title;
        foodDescription.innerHTML = selectedDishes[currentDishIndex].description;
        restartBtn.style.display = 'block';    
    }   
        
     ischecked = false;
}

const pageData = {
    title: document.getElementById('foodTitlePlaceHolder').innerText,
    img: document.getElementById('foodImage').src,
};




