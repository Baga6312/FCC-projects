function telephoneCheck(str) {
  
    //Regular expressions to check for the possible correct formats
    if(/^(1?\s?\(?[0-9]{3}\)?\s?[0-9]{3}\s?[0-9]{4})$/.test(str)){
      return true;
    }else if(/^(1?\s?\({1}[0-9]{3}\){1}\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
      return true;
    }else if(/^(1?\s?[0-9]{3}\-?\s?[0-9]{3}\-?\s?[0-9]{4})$/.test(str)){
      return true;
    }
    else {
      return false;
    }
  }
  

const check = () => { 
   
    var val = document.getElementById("user-input").value ;
    (val == "")
    ? alert("Please provide a phone number")
    : (telephoneCheck(val))
    ? (document.getElementById("results-div").innerText+="Valid US number: " + val)
    : (document.getElementById("results-div").innerText+="Invalid US number: " + val) 
}