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

function MinAuto(autok:Auto[]):Auto{
    var min:Auto = autok[0];

    for(var i:number = 1; i < autok.length; i++){
        if(autok[i].hengerurtartalom < min.hengerurtartalom){
            min = autok[i];
        }
    }

    return min;
}

function BenzinesDb(autok:Auto[]):number{
    var db:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE /*== true*/){
            db++;
        }
    }

    return db;
}

/*
- Keszits alprogramot, ami..
    - Egy auto tombbol megadja az atlag hengerurtartalmat
    - Eldonti, hogy van-e nem benzines auto az autok tombben
    - Szetvalogatja a benzines es nem benzines autokat

- A valtoztatasokat toltsd fel a github repodba
*/

function AtlagHengerurtartalom(autok:Auto[]):number{
    var atlag:number = 0;

    for(var i:number = 0; i < autok.length; i++){
        atlag += autok[i].hengerurtartalom;
    }

    atlag /= autok.length;
    return atlag;
}

function VaneENemBenzines(autok:Auto[]):boolean{
    var i:number = 0;

    while(i < autok.length && !(autok[i].benzinesE == false)){
        i++;
    }

    return i < autok.length;
}

function AutokSzetvalogatasa(autok:Auto[]):[Auto[], Auto[]]{
    var benzinesek:Auto[] = [];
    var nemBenzinesek:Auto[] = [];

    for(var i:number = 0; i < autok.length; i++){
        if(autok[i].benzinesE){
            benzinesek.push(autok[i]);
        }
        else{
            nemBenzinesek.push(autok[i]);
        }  
    }

    return [benzinesek, nemBenzinesek];
}

function Futtatas():void{
    TrKeszito("Van-e negativ", [12, 23, 5, 0, -1, 17], VanENegativ([12, 23, 5, 0, -1, 17]));
    TrKeszito("Kor kerulet-terulet", 3, KorKerTer(3));

    var a1:Auto = {
        gyarto: "Opel",
        tipus: "Corsa",
        hengerurtartalom: 1200,
        benzinesE: true
    };

    var a2:Auto = {
        gyarto: "Volkswagen",
        tipus: "Passat",
        hengerurtartalom: 2200,
        benzinesE: false
    };

    var a3:Auto = {
        gyarto: "Mitsubishi",
        tipus: "Colt",
        hengerurtartalom: 1400,
        benzinesE: true
    };

    var autok:Auto[] = [a1, a2, a3];

    TrKeszito("Min auto", autok, MinAuto(autok));
    TrKeszito("Benzines db", autok, BenzinesDb(autok));
    TrKeszito("Atlag hengerurtartalom", autok, AtlagHengerurtartalom(autok));
    TrKeszito("Van-e NEM benzines", autok, VaneENemBenzines(autok));
    TrKeszito("Szetvalogatas", autok, AutokSzetvalogatasa(autok));

    /*console.log(MinAuto(autok));
    console.log(BenzinesDb(autok));*/

    console.log(AtlagHengerurtartalom(autok));
    console.log(VaneENemBenzines(autok));
    console.log(AutokSzetvalogatasa(autok));
}

Futtatas();