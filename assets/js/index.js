function valid(){
    var champ = document.getElementById('lastname').value
    if (isNaN(champ)){
       result= champ;
    }
    else
    {
       result = "saisi ton nom !";
       document.getElementById('lastname').value = ""
    }
    return result;
}