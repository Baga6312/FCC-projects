const palaindrome = (str) => {
    var newstr = str.replace(/[\W\_]/gi, "").toLowerCase();

    let array  = newstr.split("").reverse().join("");
    
    if (newstr === array) {
      return true;
    }
    else return false;
  };
  

const check_palaindrom = (val) => { 
    (palaindrome(val))
    ? (document.getElementById("result").innerHTML = val+' is a palindrome')  
    : (document.getElementById("result").innerHTML = val+' is not a palindrome')  
}


const check_length= (val) => { 
    (val.length == 1 )
    ? (document.getElementById("result").innerHTML = val+' is a palindrome')  
    : check_palaindrom(val)
}


const make_alert = () => {
var val = document.getElementById("text-input").value ; 

    (val == "")  
    ? (alert("Please input a value"))
    // : 
    : check_length(val)
}