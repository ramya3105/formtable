function foo(){
    let res= document.getElementById("tab");
    let row= res.insertRow();
    let cell1= row.insertCell();
    let cell2= row.insertCell();
    let cell3= row.insertCell();
    let cell4= row.insertCell();
    let cell5= row.insertCell();
    let cell6= row.insertCell();
    let cell7= row.insertCell();
    let cell8= row.insertCell();
    cell1.innerHTML=document.getElementById("fname").value;
    cell2.innerHTML=document.getElementById("lname").value;
    cell3.innerHTML=document.getElementById("addr").value;
    cell4.innerHTML=document.getElementById("pin").value;
    cell5.innerHTML=document.getElementById("gender").value;
    cell6.innerHTML=document.getElementById("food").value;
    cell7.innerHTML=document.getElementById("state").value;
    cell8.innerHTML=document.getElementById("country").value;
}