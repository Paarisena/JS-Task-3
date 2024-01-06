const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    const country = JSON.parse(this.response)
    const population = country.filter((a)=>{
        return a.population<200000
        })
    
    console.log(population)
}

const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    const country = JSON.parse(this.response)
    const asian = country.filter((a)=>{
        if(a.region === 'Asia'){
            return a.name
        }
    })
    console.log(asian)
}

const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    const country = JSON.parse(this.response)
    country.forEach(element => {
        console.log(element.name,element.capital,element.flag)
    })
    };

const request=new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all','true');
request.send();
request.onload=function (){
    const country = JSON.parse(this.response)
    const population = country.reduce((sum,arr)=>{
        return sum+arr.population
    })
    console.log(population)
}

