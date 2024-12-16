/* zdroje mien:
    https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Dast%C4%9Bj%C5%A1%C3%ADch_mu%C5%BEsk%C3%BDch_jmen_v_%C4%8Cesku
    https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Dast%C4%9Bj%C5%A1%C3%ADch_%C5%BEensk%C3%BDch_jmen_v_%C4%8Cesku
    https://cs.wikipedia.org/wiki/Seznam_nej%C4%8Detn%C4%9Bj%C5%A1%C3%ADch_p%C5%99%C3%ADjmen%C3%AD_v_%C4%8Cesku
*/

// nastavíme si koľko zamestnancov chceme vygenerovať
const dtoIn = {
    count: 50,
    age: {
      min: 19,
      max: 35
    }
  }

// množiny krstných mien, priezvísk, pohlaví a typov úväzku:
const krstneMenaM = ["Jiří", "Jan", "Petr", "Josef", "Pavel", "Martin", "Tomáš", "Jaroslav", "Miroslav", "Zdeněk", "Václav", "Michal", "František", "Jakub", "Milan", "Karel", "Lukáš", "David", "Vladimír", "Ondřej", "Ladislav", "Roman", "Marek", "Stanislav", "Daniel", "Radek", "Antonín", "Vojtěch", "Filip", "Adam", "Matěj", "Dominik", "Aleš", "Miloslav", "Jaromír", "Patrik", "Libor", "Jindřich", "Vlastimil", "Miloš", "Lubomír", "Štěpán", "Oldřich", "Rudolf", "Matyáš", "Ivan", "Robert", "Luboš", "Radim", "Richard"];
const krstneMenaZ = ["Jana", "Marie", "Eva", "Hana", "Anna", "Lenka", "Kateřina", "Lucie", "Věra", "Alena", "Petra", "Veronika", "Jaroslava", "Tereza", "Martina", "Michaela", "Jitka", "Helena", "Ludmila", "Zdeňka", "Ivana", "Monika", "Eliška", "Zuzana", "Markéta", "Jarmila", "Barbora", "Jiřina", "Marcela", "Kristýna", "Dana", "Dagmar", "Adéla", "Pavla", "Vlasta", "Miroslava", "Andrea", "Irena", "Božena", "Klára", "Libuše", "Marta", "Šárka", "Nikola", "Karolína", "Iveta", "Pavlína", "Natálie", "Olga", "Blanka"];
const priezviskaM = ["Novák", "Svoboda", "Novotný", "Dvořák", "Černý", "Procházka", "Kučera", "Veselý", "Horák", "Němec", "Marek", "Pospíšil", "Pokorný", "Hájek", "Král", "Jelínek", "Růžička", "Beneš", "Fiala", "Sedláček", "Doležal", "Zeman", "Kolář", "Navrátil", "Čermák", "Vaněk", "Urban", "Blažek", "Kříž", "Kovář", "Kratochvíl", "Bartoš", "Vlček", "Polák", "Musil", "Kopecký", "Šimek", "Konečný", "Malý", "Holub", "Čech", "Štěpánek", "Staněk", "Kadlec", "Dostál", "Soukup", "Šťastný", "Mareš", "Moravec", "Sýkora"];
const priezviskaZ = ["Nováková", "Svobodová", "Novotná", "Dvořáková", "Černá", "Procházková", "Kučerová", "Veselá", "Horáková", "Němcová", "Marková", "Pokorná", "Pospíšilová", "Hájková", "Králová", "Jelínková", "Růžičková", "Benešová", "Fialová", "Sedláčková", "Doležalová", "Zemanová", "Kolářová", "Navrátilová", "Čermáková", "Vaňková", "Urbanová", "Kratochvílová", "Šimková", "Blažková", "Křížová", "Kopecká", "Kovářová", "Bartošová", "Vlčková", "Poláková", "Konečná", "Musilová", "Čechová", "Malá", "Staňková", "Štěpánková", "Holubová", "Šťastná", "Kadlecová", "Dostálová", "Soukupová", "Marešová", "Sýkorová", "Valentová"];
const pohlavie = ["m", "ž"];
const uvazok = [10, 20, 30, 40];

//objekt do ktorého budú ukladať charakteristiky zamestnanca
const zamestnanec = [];

// generátor celého zamestnanca
function main(dtoIn) {
    for (let i = 0; i < dtoIn.count; i++) {
        // generátor náhodných indexov pre množiny krstných mien & priezvísk
        const krstneIndex = Math.floor(Math.random() * 50);
        const priezviskaIndex = Math.floor(Math.random() * 50);

        // priradzovač pohlavia a úväzku
        const gender = pohlavie[Math.floor(Math.random() * pohlavie.length)];
        const hodiny = uvazok[Math.floor(Math.random() * uvazok.length)];
        
        // priradzovač krstných mien & priezvísk na najprv mužov potom ženy
        let meno, priezvisko;
        if (gender === "m") {   
            meno = krstneMenaM[krstneIndex]; 
            priezvisko = priezviskaM[priezviskaIndex];
        } else {
            meno = krstneMenaZ[krstneIndex]; 
            priezvisko = priezviskaZ[priezviskaIndex];
        }

        // zistíme aký máme dneska deň
        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1; // js indexuje od 0 preto treba ešte +1
        const currentDay = today.getDate();
        const currentHour = today.getHours();
        const currentMinute = today.getMinutes();
        const currentSecond = today.getSeconds();
        const currentMillisecond = today.getMilliseconds();
        
        // generovanie hodín, minút, sekúnd a milisekúnd
        const hodinyNarodenia = Math.floor(Math.random() * 24);
        const minutyNarodenia = Math.floor(Math.random() * 60);
        const sekundyNarodenia = Math.floor(Math.random() * 60);
        const milisekundyNarodenia = Math.floor(Math.random() * 1000);

        // generovanie roka s hranicami na vstupe
        const rokMin = dtoIn.age.min;
        const rokMax = dtoIn.age.max;
        rok = Math.floor(Math.random() * (rokMax - rokMin + 1)) + rokMin;

        // generovanie mesiaca
        mesiac = Math.floor(Math.random() * 12) + 1;

        // prvý deň mesiaca
        denMin = 1;

        // rozhodujúci algoritmus pre posledný deň v mesiaci
        if (mesiac == 2) {
            if (rok % 4 == 0 && (rok % 100 != 0 || rok % 400 == 0)) {
                denMax = 29; // prestupný rok
            }
            else {
                denMax = 28; // neprestupný rok
            }
        }
        else if (mesiac == 4 || mesiac == 6 || mesiac == 9 || mesiac == 11) {
            denMax = 30; // mesiace s 30 dňami
        }
        else {
            denMax = 31; // mesiace s 31 dňami
        }

        // generovanie dňa
        den = Math.floor(Math.random() * (denMax - denMin + 1)) + denMin;

        // rozhodujúci algoritmus na vek či už dakto mal narodeniny v danom roku alebo ešte nie
        if (
            currentMonth < mesiac || 
            (currentMonth === mesiac && currentDay < den) || 
            (currentMonth === mesiac && currentDay === den && (
                currentHour < hodinyNarodenia || 
                (currentHour === hodinyNarodenia && currentMinute < minutyNarodenia) || 
                (currentHour === hodinyNarodenia && currentMinute === minutyNarodenia &&
                    currentSecond < sekundyNarodenia) || 
                (currentHour === hodinyNarodenia && currentMinute === minutyNarodenia &&
                    currentSecond === sekundyNarodenia && currentMillisecond < milisekundyNarodenia)
            ))
        ) {
            vek = currentYear - rok - 1; // narodeniny ešte neboli
        } else {
            vek = currentYear - rok; // narodeniny už boli
        }

        // celý dátum narodenia dokopy
        datumNarodenia = new Date(rok, mesiac-1, den, hodinyNarodenia, minutyNarodenia, sekundyNarodenia, milisekundyNarodenia);

        // skladanie človeka
        zamestnanec.push({
            pohlavie: gender,
            meno: meno,
            priezvisko: priezvisko,
            uvazok: hodiny,
            datumNarodenia: datumNarodenia.toISOString(),
            vek
        });        
    }
    return zamestnanec;
}

// generujeme si dáta všetkých zamestnancov a printneme
const dtoOut = main(dtoIn);

for (dto of dtoOut) {
    console.log(dto);
 }