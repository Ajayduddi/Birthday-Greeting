function myfun(){
    var name=document.getElementById("usrinput").value;
    localStorage.setItem("text",name);
    return false;

}