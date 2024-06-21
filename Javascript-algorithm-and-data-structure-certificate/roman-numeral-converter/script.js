const convert = (num) => { 

    let romanNumeral = { 
    M : 1000 , 
    CM : 900 , 
    D : 500 , 
    CD : 400 , 
    C : 100 , 
    XC : 90 , 
    L : 50 ,
    XL : 40 , 
    X : 10 , 
    IX : 9 , 
    V : 5 , 
    IV : 4 , 
    I :  1 
}

    let result = "" 
    for ( let prop in romanNumeral ) { 
        while ( num >= romanNumeral[prop]) { 
            result += prop
            num -= romanNumeral[prop]
        document.getElementById("output").innerHTML = `<p>`+result+`</p>`

        }      
    }
}

const check = () => { 
    var val = document.getElementById("number").value ; 

    (val == "") 
    ? document.getElementById("output").innerHTML = `<p>Please enter a valid number</p>`

    : (val.substring(0,1) =="-") 
    ? document.getElementById("output").innerHTML = `<p>Please enter a number greater than or equal to 1</p>`
    
    : (parseInt(val) >= 4000) 
    ? document.getElementById("output").innerHTML = `<p>Please enter a number less than or equal to 3999</p>`
    : convert(val)
}