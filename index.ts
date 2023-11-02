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

function VanENegativ(szamok:number[]):boolean{
    var vanE:number = 0;

    while(vanE < szamok.length && !(szamok[vanE] < 0)){
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

function KorKerTer(r:number):[number, number]{
    var ker:number = 2 * r * Math.PI;
    var ter:number = r * r * Math.PI;

    return [ker, ter];
}

interface Auto{
    gyarto:string;
    tipus:string;
    hengerurtartalom:number;
    benzinesE:boolean;
}

function TrKeszito(f:string, bemenet:any, kimenet:any):void{
    var tr:HTMLElement = document.createElement("tr");

    var td1:HTMLElement = document.createElement("td");
    var td2:HTMLElement = document.createElement("td");
    var td3:HTMLElement = document.createElement("td");

    td1.appendChild(document.createTextNode(f));
    td2.appendChild(document.createTextNode(bemenet));
    td3.appendChild(document.createTextNode(kimenet));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);

    document.getElementById("torzs")?.appendChild(tr);
}

function Futtatas():void{
    TrKeszito("Van-e negativ", [12, 23, 5, 0, -1, 17], VanENegativ([12, 23, 5, 0, -1, 17]));
    TrKeszito("Kor kerulet-terulet", 3, KorKerTer(3));
}

Futtatas();

/*
- Keszits publikus GitHub repositorit a sajat felhasznaloi fiokodban
- Indits Git BASH-t, es a jelenlegi TS projektedben inicializalj git-et
- A lokalis repo-t kosd ossze az online (github-os) repoddal
- Toltsd fel a jelenlegi allapotot a github-ra
*/