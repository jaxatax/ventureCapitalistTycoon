//TODO:
//add in stats like assets worth and net worth
//make the companies have descriptions
//add a "sell all companies" button
//bugtest + playtest
//achievements?

var techCompaniesArray = [];
var foodCompaniesArray = [];
var cryptoCompaniesArray = [];
var dotcomCompaniesArray = [];
var retailCompaniesArray = [];
var specialCompaniesArray = [];
var company;
var advanceDays = false;
var changeMoney;
var day = 1;
var netWorth;
var assetWorth;
var profit;
var averageMoneyPerDay;

//get random element from array
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
}

//capitalize string
String.prototype.cap = function() {
  return this[0].toUpperCase() + this.slice(1);
}

//generate random number based on min and max parameter
function randomNumber(min, max) {
  range = max-min;
  return Math.random() * range + min;
}

//make a company object
function Company(name, type) {
  this.name = name;
  this.value = 10000;
  this.investedIn = false;
  this.type = type;
  this.sold = false;
}

//invest function
function invest(index) {
  if (index == "spritesprite") {
    if (localStorage.money >= 9700000 && !specialCompaniesArray[0].investedIn) {
      localStorage.money -= 10000000;
      specialCompaniesArray[0].investedIn = true;
    } else if (specialCompaniesArray[0].investedIn) {
      alert("You have already invested in Spritesprite.");
    } else {
      alert("You will go into too much debt if you invest in Spritesprite.");
    }
  } else if (index == "shranos") {
    if (localStorage.money >= 4700000 && !specialCompaniesArray[1].investedIn) {
      localStorage.money -= 5000000;
      specialCompaniesArray[1].investedIn = true;
    } else if (specialCompaniesArray[1].investedIn) {
      alert("You have already invested in Shranos.");
    } else {
      alert("You will go into too much debt if you invest in Shranos.");
    }
  } else if (index == "ziri") {
    if (localStorage.money >= 1700000 && !specialCompaniesArray[2].investedIn) {
      localStorage.money -= 2000000;
      specialCompaniesArray[2].investedIn = true;
    } else if (specialCompaniesArray[2].investedIn) {
      alert("You have already invested in Ziri.");
    } else {
      alert("You will go into too much debt if you invest in Ziri.");
    }
  } else if (localStorage.money >= -20000) {
    if (type == "tech") {
      if (!techCompaniesArray[index].investedIn) {
        localStorage.money -= 10000;
        techCompaniesArray[index].investedIn = true;
      } else {
        alert("You have already invested in " + company + ".");
      }
    } else if (type == "food") {
      if (!foodCompaniesArray[index].investedIn) {
        localStorage.money -= 10000;
        foodCompaniesArray[index].investedIn = true;
      } else {
        alert("You have already invested in " + company + ".");
      }
    } else if (type == "crypto") {
      if (!cryptoCompaniesArray[index].investedIn) {
        localStorage.money -= 10000;
        cryptoCompaniesArray[index].investedIn = true;
      } else {
        alert("You have already invested in " + company + ".");
      }
    } else if (type == "dotcom") {
      if (!dotcomCompaniesArray[index].investedIn) {
        localStorage.money -= 10000;
        dotcomCompaniesArray[index].investedIn = true;
      } else {
        alert("You have already invested in " + company + ".");
      }
    } else if (type == "retail") {
      if (!retailCompaniesArray[index].investedIn) {
        localStorage.money -= 10000;
        retailCompaniesArray[index].investedIn = true;
      } else {
        alert("You have already invested in " + company + ".");
      }
    } else {
      console.log("somethings wrong");
    }
  } else {
    alert("You are already in too much debt to spend any more money.");
  }
}


//returns a random company name based on companyType
function randomCompany(c) {
  //return(allthewords.randomElement());
  if (c == "tech") { //if it's a tech company
    return(adjectives.randomElement().cap() + " " + tech.randomElement().cap());
  } else if (c == "food") { //if it's a restaurant/food company
    return(adjectives.randomElement().cap() + " " + food.randomElement().cap());
  } else if (c == "crypto") { //if it's a cryptocurrency company
    return(allthewords.randomElement().cap() + "coin");
  } else if (c == "retail") { //if it's a retail company
    return(allthewords.randomElement().cap() + "-Mart");
  } else if (c == "dotcom") { //if it's a website/dot com company
    if (Math.random() < 0.5) { //chooses between .com and .net
      return(allthewords.randomElement().cap() + ".com");
    } else {
      return(allthewords.randomElement().cap() + ".net");
    }
  }
}

//creates all the normal companies
for (var i = 0; i<25; i++) {
  techCompaniesArray[i] = new Company(randomCompany("tech"), "tech");
  foodCompaniesArray[i] = new Company(randomCompany("food"), "food");
  cryptoCompaniesArray[i] = new Company(randomCompany("crypto"), "crypto");
  dotcomCompaniesArray[i] = new Company(randomCompany("dotcom"), "dotcom");
  retailCompaniesArray[i] = new Company(randomCompany("retail"), "retail");
}

//creates the special companies
specialCompaniesArray[0] = new Company("Spritesprite", "special");
specialCompaniesArray[1] = new Company("Shranos", "special");
specialCompaniesArray[2] = new Company("Ziri", "special");

//creates buttons with js createElement
function createButtons(type) {
  if (type == "tech") {
    for (var i = 0; i<25; i++) {
      var button = document.createElement("BUTTON");
      button.innerHTML = techCompaniesArray[i].name;
      button.id = i; //for when we need which button is clicked
      button.className = "company";
      button.onclick = function(){ Turbolinks.visit("company.html"); company = this.innerHTML; companyIndex = this.id; /*this.id is for the index of the company invested in for the invest function*/ };
      document.body.appendChild(button);
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  } else if (type == "food") {
    for (var i = 0; i<25; i++) {
      var button = document.createElement("BUTTON");
      button.innerHTML = foodCompaniesArray[i].name;
      button.id = i; //for when we need which button is clicked
      button.className = "company";
      button.onclick = function(){ Turbolinks.visit("company.html"); company = this.innerHTML; companyIndex = this.id; /*this.id is for the index of the company invested in for the invest function*/ };
      document.body.appendChild(button);
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  } else if (type == "crypto") {
    for (var i = 0; i<25; i++) {
      var button = document.createElement("BUTTON");
      button.innerHTML = cryptoCompaniesArray[i].name;
      button.id = i; //for when we need which button is clicked
      button.className = "company";
      button.onclick = function(){ Turbolinks.visit("company.html"); company = this.innerHTML; companyIndex = this.id; /*this.id is for the index of the company invested in for the invest function*/ };
      document.body.appendChild(button);
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  } else if (type == "dotcom") {
    for (var i = 0; i<25; i++) {
      var button = document.createElement("BUTTON");
      button.innerHTML = dotcomCompaniesArray[i].name;
      button.id = i; //for when we need which button is clicked
      button.className = "company";
      button.onclick = function(){ Turbolinks.visit("company.html"); company = this.innerHTML; companyIndex = this.id; /*this.id is for the index of the company invested in for the invest function*/ };
      document.body.appendChild(button);
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  } else if (type == "retail") {
    for (var i = 0; i<25; i++) {
      var button = document.createElement("BUTTON");
      button.innerHTML = retailCompaniesArray[i].name;
      button.id = i; //for when we need which button is clicked
      button.className = "company";
      button.onclick = function(){ Turbolinks.visit("company.html"); company = this.innerHTML; companyIndex = this.id; /*this.id is for the index of the company invested in for the invest function*/ };
      document.body.appendChild(button);
      var br = document.createElement("br");
      document.body.appendChild(br);
    }
  }
}

//changes the company page
function changeh1() {
  document.getElementById("company").innerHTML = company;
  //console.log("changeh1 called");
}

//goes back to the company select page based on type
function goBack() {
  if (type == "tech") {
    Turbolinks.visit("tech.html");
  } else if (type == "food") {
    Turbolinks.visit("restaurants.html");
  } else if (type == "crypto") {
    Turbolinks.visit("cryptocurrencies.html");
  } else if (type == "dotcom") {
    Turbolinks.visit("dotcom.html");
  } else if (type == "retail") {
    Turbolinks.visit("retail.html");
  } else if (type == "special") {
    Turbolinks.visit("special.html");
  }
}

//displays investments on investment page
function displayInvestments() {
  for (var i = 0; i<25; i++) {
    if (techCompaniesArray[i].investedIn && !techCompaniesArray[i].sold) {
      //makes a button and changes properties of it
      var button = document.createElement("BUTTON");
      button.innerHTML = "Sell " + techCompaniesArray[i].name;
      button.id = i + "tech";
      button.style = "width: 300px; height: 35px;";
      //adds the invested company
      document.getElementById("techInvestments").innerHTML = document.getElementById("techInvestments").innerHTML + techCompaniesArray[i].name + "<br>Value: $" + techCompaniesArray[i].value + "<br>";
      //adds the sell button
      document.getElementById("techInvestments").appendChild(button);
      //sets the onclick attribute
      document.getElementById(i+"tech").setAttribute("onclick","sell(techCompaniesArray[parseInt(this.id)]); this.style.display='none'");
      //skips lines
      document.getElementById("techInvestments").appendChild(document.createElement("br"));
      document.getElementById("techInvestments").appendChild(document.createElement("br"));
    }
  }
  for (var i = 0; i<25; i++) {
    if (foodCompaniesArray[i].investedIn && !foodCompaniesArray[i].sold) {
      //makes a button and changes properties of it
      var button = document.createElement("BUTTON");
      button.innerHTML = "Sell " + foodCompaniesArray[i].name;
      button.id = i + "food";
      button.style = "width: 300px; height: 35px;";
      //adds the invested company
      document.getElementById("foodInvestments").innerHTML = document.getElementById("foodInvestments").innerHTML + foodCompaniesArray[i].name + "<br>Value: $" + foodCompaniesArray[i].value + "<br>";
      //adds the sell button
      document.getElementById("foodInvestments").appendChild(button);
      //sets the onclick attribute
      document.getElementById(i+"food").setAttribute("onclick","sell(foodCompaniesArray[parseInt(this.id)]); this.style.display='none'");
      //skips lines
      document.getElementById("foodInvestments").appendChild(document.createElement("br"));
      document.getElementById("foodInvestments").appendChild(document.createElement("br"));
    }
  }
  for (var i = 0; i<25; i++) {
    if (cryptoCompaniesArray[i].investedIn && !cryptoCompaniesArray[i].sold) {
      //makes a button and changes properties of it
      var button = document.createElement("BUTTON");
      button.innerHTML = "Sell " + cryptoCompaniesArray[i].name;
      button.id = i + "crypto";
      button.style = "width: 300px; height: 35px;";
      //adds the invested company
      document.getElementById("cryptoInvestments").innerHTML = document.getElementById("cryptoInvestments").innerHTML + cryptoCompaniesArray[i].name + "<br>Value: $" + cryptoCompaniesArray[i].value + "<br>";
      //adds the sell button
      document.getElementById("cryptoInvestments").appendChild(button);
      //sets the onclick attribute
      document.getElementById(i+"crypto").setAttribute("onclick","sell(cryptoCompaniesArray[parseInt(this.id)]); this.style.display='none'");
      //skips lines
      document.getElementById("cryptoInvestments").appendChild(document.createElement("br"));
      document.getElementById("cryptoInvestments").appendChild(document.createElement("br"));
    }
  }
  for (var i = 0; i<25; i++) {
    if (dotcomCompaniesArray[i].investedIn && !dotcomCompaniesArray[i].sold) {
      //makes a button and changes properties of it
      var button = document.createElement("BUTTON");
      button.innerHTML = "Sell " + dotcomCompaniesArray[i].name;
      button.id = i + "dotcom";
      button.style = "width: 300px; height: 35px;";
      button.onclick = function() {sell(dotcomCompaniesArray[this.id]); this.style.display = "none"; }
      //adds the invested company
      document.getElementById("dotcomInvestments").innerHTML = document.getElementById("dotcomInvestments").innerHTML + dotcomCompaniesArray[i].name + "<br>Value: $" + dotcomCompaniesArray[i].value + "<br>";
      //adds the sell button
      document.getElementById("dotcomInvestments").appendChild(button);
      //sets the onclick attribute
      document.getElementById(i+"dotcom").setAttribute("onclick","sell(dotcomCompaniesArray[parseInt(this.id)]); this.style.display='none'");
      //skips lines
      document.getElementById("dotcomInvestments").appendChild(document.createElement("br"));
      document.getElementById("dotcomInvestments").appendChild(document.createElement("br"));
    }
  }
  for (var i = 0; i<25; i++) {
    if (retailCompaniesArray[i].investedIn && !retailCompaniesArray[i].sold) {
      //makes a button and changes properties of it
      var button = document.createElement("BUTTON");
      button.innerHTML = "Sell " + retailCompaniesArray[i].name;
      button.id = i + "retail";
      button.style = "width: 300px; height: 35px;";
      //adds the invested company
      document.getElementById("retailInvestments").innerHTML = document.getElementById("retailInvestments").innerHTML + retailCompaniesArray[i].name + "<br>Value: $" + retailCompaniesArray[i].value + "<br>";
      //adds the sell button
      document.getElementById("retailInvestments").appendChild(button);
      //sets the onclick attribute
      document.getElementById(i+"retail").setAttribute("onclick","sell(retailCompaniesArray[parseInt(this.id)]); this.style.display='none'");
      //skips lines
      document.getElementById("retailInvestments").appendChild(document.createElement("br"));
      document.getElementById("retailInvestments").appendChild(document.createElement("br"));
    }
  }
}

//randomly changes company value
function changeCompanyValue(c) {
  if (c.type == "tech") {
    //tech companies will usually go up in value over time
    c.value = Math.round(c.value * randomNumber(0.95,1.055));
  } else if (c.type == "food") {
    //restaurants will usually not turn a profit
    c.value = Math.round(c.value * randomNumber(0.96,1.037));
  } else if (c.type == "crypto") {
    //cryptocurrencies will fluctuate wildly but turn a small profit on average
    c.value = Math.round(c.value * randomNumber(0.9,1.105));
  } else if (c.type == "dotcom") {
    //websites will fluctuate wildly but turn a small profit on average
    c.value = Math.round(c.value * randomNumber(0.91,1.097));
  } else if (c.type == "retail") {
    //retail companies will slowly but steadily go up over time
    c.value = Math.round(c.value * randomNumber(0.99,1.016));
  }
}

//toggles the advanceDays variable
function toggleDays() {
  if (advanceDays) {
    advanceDays = false;
    document.getElementById("daysButton").innerHTML = "Time Progress: False";
  } else {
    advanceDays = true;
    document.getElementById("daysButton").innerHTML = "Time Progress: True";
  }
}

//if advanceDays is true advances to the next day and changes your company values
function nextDay() {
  if (advanceDays) {
    if (specialCompaniesArray[0].investedIn) {
      //if spritesprite invested in increase money by 10%
      localStorage.money *= 1.1;
    }
    if (specialCompaniesArray[1].investedIn) {
      //if shranos invested in increase money by 2.5%
      localStorage.money *= 1.025;
    }
    if (specialCompaniesArray[2].investedIn) {
      //if ziri invested in add 5000 to money
      localStorage.money = parseInt(localStorage.money) + 20000;
    }
    for (var i = 0; i<25; i++) {
      if (techCompaniesArray[i].investedIn && !techCompaniesArray[i].sold) {
        changeCompanyValue(techCompaniesArray[i]);
      }
      if (foodCompaniesArray[i].investedIn && !foodCompaniesArray[i].sold) {
        changeCompanyValue(foodCompaniesArray[i]);
      }
      if (cryptoCompaniesArray[i].investedIn && !cryptoCompaniesArray[i].sold) {
        changeCompanyValue(cryptoCompaniesArray[i]);
      }
      if (dotcomCompaniesArray[i].investedIn && !dotcomCompaniesArray[i].sold) {
        changeCompanyValue(dotcomCompaniesArray[i]);
      }
      if (retailCompaniesArray[i].investedIn && !retailCompaniesArray[i].sold) {
        changeCompanyValue(retailCompaniesArray[i]);
      }
    }
    if (changeMoney) {
      document.getElementById("money").innerHTML = "Money: $" + localStorage.money;
    }
    changeInvestmentDisplay();
    changeStats();
    day++;
    if (type == "index2") {
      document.getElementById("day").innerHTML = "Day: " + day;
    }
  }
}

//updates investment display page
function changeInvestmentDisplay() {
  if (type == "investments") {
    document.getElementById("techInvestments").innerHTML = "";
    document.getElementById("foodInvestments").innerHTML = "";
    document.getElementById("cryptoInvestments").innerHTML = "";
    document.getElementById("dotcomInvestments").innerHTML = "";
    document.getElementById("retailInvestments").innerHTML = "";
    displayInvestments();
  }
}

//runs the nextDay function every 2.5 seconds
setInterval(nextDay, 2500);

//sell function for the company
function sell(c) {
  localStorage.money = parseInt(localStorage.money) + c.value;
  c.sold = true;
  console.log(c);
  console.log(c.value);
  console.log(c.type);
}


//changes stats
function changeStats() {
  if (type == "stats") {
    //changes money on stats page to localStorage.money
    document.getElementById("moneyStat").innerHTML = "Money: $" + localStorage.money;
    //sets netWorth equal to localStorage.money, then adds all the values of the companies the player has invested in
    netWorth = parseInt(localStorage.money);
    for (var i = 0; i<25; i++) {
      if (techCompaniesArray[i].investedIn && !techCompaniesArray[i].sold) {
        netWorth += techCompaniesArray[i].value;
      }
      if (foodCompaniesArray[i].investedIn && !foodCompaniesArray[i].sold) {
        netWorth += foodCompaniesArray[i].value;
      }
      if (cryptoCompaniesArray[i].investedIn && !cryptoCompaniesArray[i].sold) {
        netWorth += cryptoCompaniesArray[i].value;
      }
      if (dotcomCompaniesArray[i].investedIn && !dotcomCompaniesArray[i].sold) {
        netWorth += dotcomCompaniesArray[i].value;
      }
      if (retailCompaniesArray[i].investedIn && !retailCompaniesArray[i].sold) {
        netWorth += retailCompaniesArray[i].value;
      }
    }
    //changes net worth on the stats page to netWorth
    if (netWorth >= 0) {
      document.getElementById("netWorth").innerHTML = "Net Worth: $" + netWorth;
    } else {
      document.getElementById("netWorth").innerHTML = "Net Worth: -$" + (netWorth * -1);
    }
    //sets assetWorth to netWorth minus localStorage.money
    assetWorth = netWorth - localStorage.money;
    //changes asset worth on the stats page to assetWorth
    if (assetWorth >= 0) {
      document.getElementById("assetWorth").innerHTML = "Asset Worth: $" + assetWorth;
    } else {
      document.getElementById("assetWorth").innerHTML = "Asset Worth: -$" + (assetWorth * -1);
    }
    //sets profit to netWorth - 250000
    profit = netWorth - 250000
    //changes profit on the stats page to profit
    if (profit >= 0) {
      document.getElementById("profit").innerHTML = "Profit: $" + profit;
    } else {
      document.getElementById("profit").innerHTML = "Profit: -$" + (profit * -1);
    }
    //sets averageMoneyPerDay to profit divided by (day-1) if day isn't 1
    if (day == 1) {
      averageMoneyPerDay = 0;
    } else {
      averageMoneyPerDay = profit/(day-1);
    }
    //changes average money made per day on the stats page to averageMoneyPerDay
    if (averageMoneyPerDay >= 0) {
      document.getElementById("averageMoneyPerDay").innerHTML = "Average Money Made Per Day: $" + averageMoneyPerDay;
    } else {
      document.getElementById("averageMoneyPerDay").innerHTML = "Average Money Made Per Day: $" + (averageMoneyPerDay * -1);
    }
  }
}

//console.log("script.js loaded");