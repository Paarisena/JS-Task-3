class persondetails{
    constructor(name, dob, age, location){
        this.name = name
        this.dob = dob
        this.age = age
        this.location = location
      
    }
     details(){
        console.log(`my name is ${this.name}.My date of birth is ${this.dob}.the age is ${this.age} and my current location is ${this.location}`)
     }

}

let person = new persondetails("paari","october","30","Thanjavur")
console.log(person)
person.details()


//calculate uber 

class price{
    constructor(Name, location , desitnation ,basefair){
        this.Name = Name
        this.location = location
        this.desitnation = desitnation
        this.basefair = basefair
        this.price = price
    }
        trip(){
            console.log(`Customer name =${this.Name}
                         starting point = ${this.location}
                         destination point = ${this.desitnation}
                         basefare = ${this.basefair}
                         `)
        }
        getprice() {
            let fair = (this.basefair+(10*407)+(15*339))+250
            console.log(`Totalcost = ${fair}`)
        }

    }
    
const person1 = new price("Paari","chennai","blr",1000)
console.log(person)

person1.trip()
person1.getprice()
