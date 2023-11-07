/*
TYPESCRIPT

- Keszits alprogramot, ami...
    - Eldonti, hogy a parameterul kapott szamo tombben van-e negativ szam
    - Egy parametrul kapott sugarbol megallapitja a kor keruletet es teruletet
        - Tuple-t alkalmazz
        - Kerulet: 2 * sugar * PI
        - Terulet: sugar * sugar * PI
    
- Keszits interface-t Auto neven
    - Gyarto (szoveg)
    - Tipus (szoveg)
    - Hengerurtartalom (szam)
    - BenzinesE (logikai)
*/
function VanENegativ(szamok) {
    var vanE = 0;
    while (vanE < szamok.length && !(szamok[vanE] < 0)) {
        vanE++;
    }
    return vanE < szamok.length;
    /*if(vanE < szamok.length){
        return true;
    }
    else{
        return false;
    }*/
}
function KorKerTer(r) {
    var ker = 2 * r * Math.PI;
    var ter = r * r * Math.PI;
    return [ker, ter];
}
function TrKeszito(f, bemenet, kimenet) {
    var _a;
    var tr = document.createElement("tr");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    td1.appendChild(document.createTextNode(f));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(kimenet));
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    (_a = document.getElementById("torzs")) === null || _a === void 0 ? void 0 : _a.appendChild(tr);
}
/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/
/*
TS!!
- Keszits alprogramot, ami kivalasztja egy auto tombbol a legkisebb hengerurtartalmu autot
- Keszits alprogramot, ami megadja a parameterul kapott auto tombbol a benzinesek darabszamat
- A valtoztatasokat toltsd fel a github repodba
*/
function MinAuto(autok) {
    var min = autok[0];
    for (var i = 1; i < autok.length; i++) {
        if (autok[i].hengerurtartalom < min.hengerurtartalom) {
            min = autok[i];
        }
    }
    return min;
}
function BenzinesDb(autok) {
    var db = 0;
    for (var i = 0; i < autok.length; i++) {
        if (autok[i].benzinesE /*== true*/) {
            db++;
        }
    }
    return db;
}
function Futtatas() {
    TrKeszito("Van-e negativ", [12, 23, 5, 0, -1, 17], VanENegativ([12, 23, 5, 0, -1, 17]));
    TrKeszito("Kor kerulet-terulet", 3, KorKerTer(3));
    var a1 = {
        gyarto: "Opel",
        tipus: "Corsa",
        hengerurtartalom: 1200,
        benzinesE: true
    };
    var a2 = {
        gyarto: "Volkswagen",
        tipus: "Passat",
        hengerurtartalom: 2200,
        benzinesE: false
    };
    var a3 = {
        gyarto: "Mitsubishi",
        tipus: "Colt",
        hengerurtartalom: 1400,
        benzinesE: true
    };
    var autok = [a1, a2, a3];
    TrKeszito("Min auto", autok, MinAuto(autok));
    TrKeszito("Benzines db", autok, BenzinesDb(autok));
    console.log(MinAuto(autok));
    console.log(BenzinesDb(autok));
}
Futtatas();
