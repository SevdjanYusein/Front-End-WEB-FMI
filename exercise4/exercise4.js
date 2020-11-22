//______1____________________________________________________
// var person = {
//     _salary: 1000,
//     getSecretSalaryInfo: function (){
//         return this._salary;
//     }
// };

// var stoleSalaryInfo = person.getSecretSalaryInfo;

// console.log(person.getSecretSalaryInfo()); 
// console.log(stoleSalaryInfo); 

//______2____________________________________________________
// const PLANET = "Земя";

// class Person {
//     constructor(name) {
//         this.name = name;
//         this.planet = PLANET;
//     }

//     printPerson = function () {
//         console.log(`Здравей ${this.name} от планетата ${this.planet}`)
//     }
// }

// let p1 = new Person("Sevdjan");
// p1.printPerson();

// let p2 = new Person("person2");
// p1.printPerson();

// let p3 = new Person("person3");
// p1.printPerson();

//______3____________________________________________________
// class Item {
//     constructor(name, discount){
//         this.name = name;
//         this.discount = discount;
//     }

//     priceWithDiscount = function(){
//         console.log(this.price - (this.price * this.discount / 100));
//     }
// }

// Item.prototype.price = 1000;

// let i = new Item("bla", 20);
// i.priceWithDiscount();

//______4____________________________________________________
// function Person(){
//     let _salary = 1000;
//     this.getSecretSalaryInfo = function(){
//         return _salary;
//     }
// }

// let p1 = new Person();
// p1.getSecretSalaryInfo();

//______5____________________________________________________

// window.onload = function() {modify("#e5e5e5", "#333333")};

// function modify(sColor1, sColor2) {
//     let pCount = document.getElementsByTagName('p').length;
//     let headertitleCount = document.getElementsByClassName("headertitle").length;
//     console.log(headertitleCount);

//     var p = document.createElement("p");
//     p.innerHTML =  `${pCount} параграфа, ${headertitleCount} елемента с клас headertitle`;    
//     document.body.insertBefore(p, document.body.firstChild);

//     let paragraphs = document.getElementsByTagName('p');
//     let headertitles = document.getElementsByClassName('headertitle');

//     for(let i = 0; i<paragraphs.length;i++){
//         paragraphs[i].setAttribute("style", `background-color: ${sColor1}`);
//     };

//     for(let i = 0; i<headertitles.length;i++){
//         headertitles[i].setAttribute("style", `background-color: ${sColor2}`);
//     };
// }

//_____6, 7_____________________________________________________

// let rows = [`<tr>
// <th>Evidence Raiting</th>
// <th>Effect</th>
// <th>Efficacy</th>
// <th>Consensus</th>
// <th>Comments</th>
// </tr>`,
// `<tr>
// <td>A</td>
// <td>Power Output</td>
// <td>3 stars</td>
// <td>80% 18 studies</td>
// <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita dolore quisquam veritatis magni fugit animi ad officiis debitis consectetur deleniti libero vel iste mollitia minus deserunt, officia ullam possimus! Sequi.</td>
// </tr>`,
// `<tr>
// <td>B</td>
// <td>Weight</td>
// <td>4 stars</td>
// <td>100% 65 studies</td>
// <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae quasi voluptatibus error voluptates impedit ratione deserunt id maiores ut, laborum eligendi iste, provident rerum cupiditate eos architecto, at molestiae aspernatur.</td>
// </tr>`];

// let body = document.getElementById("body");

// var node = document.createElement("button"); 
// var textnode = document.createTextNode("Toggle rows"); 
// node.appendChild(textnode);    

// body.innerHTML = 
// `<table>
//     ${rows[0]}
//     ${rows[1]}
//     ${rows[2]}
// </table>`;

// function toggleRows() {
//     let temp = rows[1];
//     rows[1] = rows[2];
//     rows[2] = temp;

//     body.innerHTML = `<table>
//     ${rows[0]}
//     ${rows[1]}
//     ${rows[2]}
//     </table>`;
//     body.appendChild(node); 
// }

// body.appendChild(node); 

// let button = document.getElementsByTagName("button")[0];
// button.onclick = function() {toggleRows()};

