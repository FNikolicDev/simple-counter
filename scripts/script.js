let broj = 0;
let brojel = document.getElementById("brojac");
let brojzapamceno = document.getElementById("pamcen");

function dodaj() {
  broj = broj + 1;
  brojel.innerText = broj;
}

function oduzmi() {
  if (broj > 0) {
    broj = broj - 1;
    brojel.innerText = broj;
  }
}

function reset() {
  broj = 0;
  brojel.innerText = broj;
}

function zapamti() {
  if (broj > 1) {
    let brojpamcen = " " + broj + " /";
    brojzapamceno.innerText += brojpamcen;
  }
}
