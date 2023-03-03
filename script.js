document.getElementById("ellenorzes").addEventListener("click", function(){
    let eredmeny = document.getElementById("eredmeny");
    let felhasznalonev = document.getElementById("felhasznalonev").value;
    let jelszo = document.getElementById("jelszo").value;
    

    if(jelszo == "s9@:8BpuC]*Q,e,A" && felhasznalonev == "frontend@webstar.hu"){
        window.location.href = "/karakter.html";
    }
    else{
        eredmeny.innerHTML = "Nem megfelelő felhasználónév vagy jelszó!";
    }
}, false);

/*
let regexpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
let regexemail = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

    frontend@webstar.hu
    s9@:8BpuC]*Q,e,A

*/

//   ctzLUF94

//   https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/

/*
const apiUrl = "https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/";

var xhr = new XMLHttpRequest();
xhr.open("GET", apiUrl, true);

xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
        console.log(JSON.parse(xhr.responseText));
        Feldolgozas(JSON.parse(xhr.responseText));
    }
};

xhr.send(null);

/*
Azonosítás
POST REQUEST
https://developer.webstar.hu/rest/frontend-felveteli/v2/authentication/

HEADER PARAMETERS
Content-Type: application/json
Applicant-Id: {Turnár Csillától kapott azonosító}
*/
/*
fetch('https://developer.webstar.hu/rest/frontend-felveteli/v2/characters/', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({ "id": ctzLUF94 })
})
   .then(response => response.json())
   .then(response => console.log(JSON.stringify(response)))
*/
