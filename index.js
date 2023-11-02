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
function Futtatas() {
    TrKeszito("Van-e negativ", [12, 23, 5, 0, -1, 17], VanENegativ([12, 23, 5, 0, -1, 17]));
    TrKeszito("Kor kerulet-terulet", 3, KorKerTer(3));
}
Futtatas();
