// fcia konvertujúca čísla z decimálnej do binárnej:
function dec2bin(cislo){
    if (cislo<0){   // pre prípad že by nejaký vtipálek chcel binarizovať záporné číslo
        console.log("Zadajte nezáporné číslo prosím");
        return undefined;
    }

    let pole = [];    // vytvorenie nového poľa do ktorého sa budú ukladať 0 & 1
    while (cislo>0){ // podmienka pre nenulovosť vstupu, predpoklad je že uživateľ dáva nezáporné celé čísla
        pole.push(cislo % 2);           // pridáme do poľa zvyšok po delení dvojkou teda 0 alebo 1
        cislo = Math.floor(cislo / 2); // predelíme input pre príslušný cyklus dvoma a zaokrúhlime nadol nech to je celé číslo
    }

    /* najprv prehodíme poradie indexov poľa tak aby to malo pravdivú hodnotu binárneho čísla a nie "zrkaldlovú"
       ešte nech to krajšie vyzerá keď to printneme tak si z binarneCislo poľa urobíme string */
    let binarneCislo = pole.reverse().join("");
                 
    return binarneCislo || "0";  // vrátime buď binarneCislo ak je vstup > 0 alebo ak je = 0 tak vrátime 0
}

let cislo = 37;     // nastavíme si aké číslo chceme zbinarizovať
console.log(dec2bin(cislo));    // printneme si ho do konzoly