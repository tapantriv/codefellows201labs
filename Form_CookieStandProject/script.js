var table = document.getElementById('sales-data');
var totalStores = [];

// Constructor function for Cookie Stores
function CookieStand(name, min, max, avg) {
  this.name = name;
  this.minCust = min;
  this.maxCust = max;
  this.avgCookiePerCust = avg;
//   this.inputCookiePerCust=iavg;
  this.cookiesByHour = [];
  this.totalCookiesPerDay = 0;
  totalStores.push(this);
}

CookieStand.prototype.hours = ["6:00 AM","7:00 AM","8:00 AM","9:00 AM","10:00 AM","11:00 AM","12:00 PM","1:00 PM","2:00 PM","3:00 PM","4:00 PM","5:00 PM","6:00 PM","7:00 PM"]


// Getting cookies per hour.
CookieStand.prototype.generateCookiesPerHour = function ()
 {
  for (var i = 0; i < this.hours.length; i++)
   {
    this.cookiesByHour.push(Math.floor(randomNumberOfCustomers(this.minCust, this.maxCust) * this.avgCookiePerCust));
  }
}

CookieStand.prototype.generateDailyTotals = function () {
  for (var i = 0; i < this.cookiesByHour.length; i++) {
    this.totalCookiesPerDay = this.totalCookiesPerDay + this.cookiesByHour[i];

  }
}

// to render a single row of data for a store
 function render(store) {
 
  // create one tr
  var row = document.createElement('tr');
  var name = document.createElement('td');
  name.textContent = store.name;
  row.appendChild(name);
 
  // create as many <td>s as there are values in cookiesByHour
  for (var i = 0; i < store.cookiesByHour.length; i++) {
    var data = document.createElement('td');
    data.textContent = store.cookiesByHour[i];
    row.appendChild(data);

    // var total = document.createElement('td');
    // total.textContent = store.totalCookiesPerDay;
    // row.appendChild(total);
  }

    var total = document.createElement('td');
    total.textContent = store.totalCookiesPerDay;
    row.appendChild(total);
  
  // add one more <td> for the store name, and another for daily total

  table.appendChild(row);
}

var seattle = new CookieStand('Seattle',23,65,6.3 );
var tokyo = new CookieStand('Tokyo',3,24,1.2);
var dubai = new CookieStand('Dubai',11,38,3.7);
var lima = new CookieStand('Lima',2,16,4.6);
var paris = new CookieStand('paris',20,38,2.3);
// var userInput= new CookieStand(name, min, max, avg);






function randomNumberOfCustomers(min, max) {
  return (Math.random() * (max - min) + min);
}


for (var i = 0; i < totalStores.length; i++) {
  totalStores[i].generateCookiesPerHour();
  totalStores[i].generateDailyTotals();
  render(totalStores[i]);
}
// var seattleRow;
// seattleRow=document.createElement('th');
// seattleRow.textContent="Store Name";
// row.appendChild(seattleRow);

// seattleRow=document.createElement('th');
// seattleRow.textContent="Min Customer";
// row.appendChild(seattleRow);

// seattleRow= document.createElement('th');
// seattleRow.textContent="Max Customer";
// row.appendChild(seattleRow);

// seattleRow= document.createElement('th');
// seattleRow.textContent="Customer Average";
// row.appendChild(seattleRow);

// for(i=0;i<CookieStand.prototype.hours.length;i++){
// seattleRow=document.createElement('th');
// seattleRow.textContent=CookieStand.prototype.hours[i];
// row.appendChild(seattleRow);

// }

// seattleRow= document.createElement('th');
// seattleRow.textContent="Total";
// row.appendChild(seattleRow);

// USer input data
var userInput= [];
function Input (name, min, max, avg)
{
    this.name = name;
    this.minCust = min;
    this.maxCust = max;
    this.avgCookiePerCust = avg;
    this.cookiesByHour = [];
    this.totalCookiesPerDay = 0;
    totalStores.push(this);

}
function handleform(event)
{
    event.preventDefault();

    var location = event.target.location.value;
    var minCust = event.target.min.value;
    var maxCust= event.target.max.value;
    var inputCookiePerCust= event.target.avg.value;
    var cookieStand= new CookieStand(location, parseInt(minCust),parseInt(maxCust), parseInt(inputCookiePerCust));

    userInput.push(cookieStand);
    console.log('USR INPUT',cookieStand)

    cookieStand.generateCookiesPerHour();
    cookieStand.generateDailyTotals();
    render(cookieStand);
}

// Grabing our form with input
var myData = document.getElementById('form');

myData.addEventListener('submit',handleform);


 