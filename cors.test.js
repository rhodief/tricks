/*
1. Open a new tab of google Chrome
2. Open the console (windows: F12, macOS: Command + alt + i) (tab "Console")
3. Paste this code
4. Set MY_URL with your url
5. Hit enter!
*/

let MY_URL = "https://dadosabertos.camara.leg.br/api/v2/blocos?ordem=ASC&ordenarPor=nome" // Working URL
let METHOD = "GET"
function main()
{
    console.log("Here is the function!");
    console.log("ajax request to the resource which will require cors enabled!");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log('It works =D');
      console.log('Response Content:', this.responseText);
    }
  };
    xhttp.open(METHOD, MY_URL, true);
    xhttp.send();
}
main()
