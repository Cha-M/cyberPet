/*class Cars {
    constructor(reg, arrival) {
        this._hourlyRate = 7.50;
        this._reg = reg;
        this._arrival = arrival;
        this._parkingPaid = false;
        this._amountPaid = 0;
    }

    get hoursParked() {
        return this._hoursParked;
    }
    get reg() {
        return this._reg;
    }
    get hourlyRate() {
        return this._hourlyRate;
    }

    doDeparture(departure) {
        this._departure = departure;
    }


    pay(amountPaid) {
        this._amountPaid = amountPaid;
        alert(`You have paid ${amountPaid}.`);
    }
    payTotal() {
        // alert("Hi, payTotal", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        console.log("Hi, payTotal", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        return (this._departure - this._arrival) * this._hourlyRate;
    }
    demandPayment() {
        alert(`Pay ${this.payTotal()}`);
    }
    resolveBalance() {
        // alert(this._amountPaid);
        // alert(this.payTotal());
        if (this._amountPaid >= this.payTotal())
        {
            alert("Your parking is paid in full.");
            this._parkingPaid = true;
        }
        else
        {
            alert(`You have ${this.payTotal() - this._amountPaid} left to pay.`);
        }
    }
    carExit() {
        if(this._parkingPaid == true)
        {
            alert("Your car can leave.");
        }
    }

}

// let firstCar = new Cars("ABC1", 3);

// firstCar.doDeparture(8);
// firstCar.demandPayment();
// firstCar.pay(30);
// firstCar.resolveBalance();
// firstCar.pay(7.5);
// firstCar.resolveBalance();
// firstCar.carExit();

// Let’s continue with our car park project.
// Add a subclass for staff, so that staff can provide their
// staff number, and credits they have left to pay for the
// car park fees.
// Given a staff member parked for 5 hours as before,
// show how much it will be charged and remaining
// balance.

// class staffCars extends Cars {
//     constructor(reg, arrival, staffNum, credits) {
//         this.staffNum = staffNum;
//         this.credits = credits;
//         super(reg, arrival);
//     }

//     useCredits() {
//         super._amountPaid += super.credits;
//         super.credits = 0;
//         alert(`You have used your credits and have ${super.payTotal() - super._amountPaid} left to pay.`);
//     }
    
// }

class staffCars extends Cars {
    constructor(reg, arrival, staffNum, credits) {
        super(reg, arrival);
        // this._reg = ;
        // this._arrival = ;
        this._staffNum = staffNum;
        this._credits = credits;
    }

    doDeparture(n) {
        super.doDeparture(n);
    }
    demandPayment() {
        super.demandPayment();
    }
    resolveBalance() {
        super.resolveBalance();
    }
    carExit() {
        super.carExit();            
    }
    

    useCredits() {
        // alert("Hi, usecredits", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        // console.log("Hi, usecredits", `Pay (${this._departure})(${this._arrival}) (${this._hourlyRate})`);
        
        this._amountPaid += this._credits;
        this._credits = 0;

        // let n = this.payTotal() - this._amountPaid;
        // alert(`You have used your credits and have ${n} left to pay.`);
    }
    
}

let workerCar = new staffCars("123A", 5, "4321", 7);

workerCar.doDeparture(10);
workerCar.demandPayment();
workerCar.useCredits();
workerCar.resolveBalance();
workerCar.carExit();*/


//fun
//attention
//hygiene
//energy
//diet

const badGenRand = () => {
    return Math.random() * 25 + 25;
}
const goodGenRand = () => {
    return Math.random() * 50 + 50;
}

const die50 = () => {
    return Math.random() * 50;
}

const die100 = () => {
    return Math.random() * 100;
}

const foodDiet = {
    "hamburger" : 1,
    "dandelions" : 0
}

const statGrades = {100: "A", 80: "B", 60: "C", 40: "D", 20: "E", 0: "F"};

const gradeFromStat = (stat) => {
    if (stat >= 120) {
        // console.log(stat - (stat % 20));
        return "S";
    }
    else if (stat >= 0) {
        // console.log(stat - (stat % 20));
        return statGrades[stat - (stat % 20)];
    }
    else {
        return "X"
    }

}

console.log(gradeFromStat(69));


// super(_fun = 100;
// this._attention = 100;
// this._hygiene = 100;
// this._health = 100;

// this._hunger = 100;
// this._thirst = 100;
// this._herbCarn = 0;
// this._ailments = [];

const petsArray = [];
let currentPet = -1;

const displayHealthVar = document.getElementById("displayHealth");
const displayThirstVar = document.getElementById("displayThirst");
const displayHungerVar = document.getElementById("displayHunger");

const updateStatsDisplay = () => {
    displayHealthVar.textContent = gradeFromStat(petsArray[currentPet]._health);
    console.log(gradeFromStat(petsArray[currentPet]._health));
    displayThirstVar.textContent = gradeFromStat(petsArray[currentPet]._thirst);
    console.log(gradeFromStat(petsArray[currentPet]._thirst));
    displayHungerVar.textContent = gradeFromStat(petsArray[currentPet]._hunger);
    console.log(gradeFromStat(petsArray[currentPet]._hunger));
}

class Pets {
    constructor(name) {
        this._name = name;
        this._fun = 100;
        this._attention = 100;
        this._hygiene = 100;
        this._health = 100;

        this._hunger = 100;
        this._thirst = 100;
        this._herbCarn = 0;
        this._ailments = [];
    }

    get fun() {
        return this._fun;
    }
    get attention() {
        return this._attention;
    }
    get hygiene() {
        return this._hygiene;
    }
    get health() {
        return this._health;
    }

    get hunger() {
        return this._hunger;
    }
    get thirst() {
        return this._thirst;
    }

    get diet() {
        return this._diet;
    }
    get ailments() {
        return this._ailments;
    }

    get herbCarn() {
        return this._herbCarn;
    }

    feed(food) {
        if (foodDiet[food] == this._herbCarn) {
            
            // console.log(this._hunger);
            // console.log("Food is good")
            this._hunger += die50();
            // console.log(this._hunger);
            updateStatsDisplay();
        }
        else
        {
            // console.log("Oh no!")
            // console.log("food", food);
            // console.log("food", foodDiet.food);
            // console.log("_herbCarn", this._herbCarn);
            // console.log("herbCarn", this.herbCarn);
            this._hunger -= die50();
            // console.log(this._hunger);
            updateStatsDisplay();
        }
    }

    water() {
        this._thirst += die50();
        console.log(this._thirst);
        updateStatsDisplay();
    }

    lifeDeathCheck() {
        if (this.health < 0)
        {
            this._dead = true;
        }
    }


}



class Bunny extends Pets {
    constructor(name) {
        super(name);
        this._name = name;
        this._fun = goodGenRand();
        this._attention = goodGenRand();
        this._hygiene = goodGenRand();
        this._health = goodGenRand();
        this._hunger = goodGenRand();
        this._thirst = goodGenRand();
        this._herbCarn = 0;
        this._ailments = [];
    }


}


// /////
// class Kitty extends Pets {
//     constructor(_fun, _attention, _health, _herbCarn, _ailments) {
//         super(_fun, _attention, _health, _herbCarn, _ailments);
//         this._fun = goodGenRand();
//         this._attention = goodGenRand();
//         this._hygiene = goodGenRand();
//         this._health = goodGenRand();
//         this._herbCarn = 1;
//         this._ailments = [];
//     }

// }

// class Doggy extends Pets {
//     constructor(_fun, _attention, _health, _herbCarn, _ailments) {
//         super(_fun, _attention, _health, _herbCarn, _ailments);
//         this._fun = goodGenRand();
//         this._attention = goodGenRand();
//         this._hygiene = goodGenRand();
//         this._health = goodGenRand();
//         this._herbCarn = 1;
//         this._ailments = [];
//     }

// }

// class Snek extends Pets {
//     constructor(_fun, _attention, _health, _herbCarn, _ailments) {
//         super(_fun, _attention, _health, _herbCarn, _ailments);
//         this._fun = goodGenRand();
//         this._attention = goodGenRand();
//         this._hygiene = goodGenRand();
//         this._health = goodGenRand();
//         this._herbCarn = 1;
//         this._ailments = [];
//     }

// }




// setUpRescuePet

// const fluffy = new Bunny;
// fluffy.feed("hamburger");



const newPet = (name) => {
    const oneNewPet = new Bunny(name);
    petsArray.push(oneNewPet);
    // console.log(petsArray)

    for (let x of petsArray)
    {
        console.log(x._name);
    }

    setPetPortrait();
    currentPet++;
}

let nameForCall = "Fluffy";
let foodForCall = "dandelions";


const setNewPetName = (name) => {
    nameForCall = name;
    document.getElementById("subScreen").innerHTML = name;
}

const newPetNoArgs = () => {
    setNewPetName("Dave")
    newPet(nameForCall)
    document.getElementById("subScreen").innerHTML = nameForCall;
    updateStatsDisplay();
}

const setFood = (foodName) => {
    foodForCall = foodName;
}
const feedNoArgs = () => {
    if (petsArray.length > 0)
    {
        petsArray[currentPet].feed(foodForCall);
    }
    
}

const waterPet = () => {
    if (petsArray.length > 0)
    {
        petsArray[currentPet].water();
    }
}


{/* <div class = "boxStat" id ="displayHealth">
Health
</div>
<div class = "boxStat" id ="displayThirst">
Thirst
</div>
<div class = "boxStat" id ="displayHunger"> */}

//grey out ineffectual buttons
document.getElementById("newPetButton").addEventListener("click", newPetNoArgs, false);
document.getElementById("feedButton").addEventListener("click", feedNoArgs, false);
document.getElementById("waterButton").addEventListener("click", waterPet, false);

//some kind of selecta here


const animalPortraits = [];




const setPetPortrait = () => {
    console.log(document.getElementById("innerScreenImage"));
    document.getElementById("innerScreenImage").className = "innerAnimalPicture";
}



//     doDeparture(n) {
//     if (this._numVerified) {
//         super.doDeparture(n);
//     }
// }
// demandPayment() {
//     if (this._numVerified) {
//         super.demandPayment();
//     }
//     // super.demandPayment();
// }
// resolveBalance() {
//     if (this._numVerified) {
//         alert("Number verified.");
//         super.resolveBalance();
//     }
//     // super.resolveBalance();
// }
// carExit() {
//     if (this._numVerified) {
//         super.carExit();
//     }
//     // super.carExit();            
// }

// verifyNum() {
//     if (staffNumArray.includes(this._staffNum)) {
//         this._numVerified = true;
//     }
// }