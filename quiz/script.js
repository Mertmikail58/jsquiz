const icerikler = [
    { id: 1, value: 'BEŞİKTAŞ',ipucu1:"Siyah Beyaz",ipucu2:"5 Şampiyonluk",ipucu3:"Kartal",ipucu4:"B" },
    { id: 2, value: 'FENERBAHÇE',ipucu1:"Sarı Lacivert",ipucu2:"7 Şampiyonluk",ipucu3:"Bahçe",ipucu4:"F" },
    { id: 3, value: 'GALATASARAY',ipucu1:"Sarı Kırmızı",ipucu2:"9 Şampiyonluk",ipucu3:"Cimbom",ipucu4:"G" },
    { id: 4, value: 'İSTANBUL',ipucu1:"Siyah Sarı",ipucu2:"10 Şampiyonluk",ipucu3:"City",ipucu4:"İ" }
];

const kapsayici=document.getElementById("container");
const btnBasla=document.getElementById("startButton");
const yazi=document.getElementById("kutu");

let kart1=null;
let kart2=null;
let kart3=null;
let kart4=null;

btnBasla.addEventListener("click",kartolustur);

function kartolustur(){
    sayac=0;
    kapsayici.innerHTML="";
    karistir(icerikler);
    icerikler.forEach(icerik=>{
        kart=document.createElement("div");
        kart.innerHTML="?";
        kart.className="card";
        kart.dataset.value=icerik.ipucu2;
        kapsayici.appendChild(kart);
        kart.addEventListener("click",kartac);
    })
}

function karistir(icerikler){
    for(let i=0;i<icerikler.length;i++){
        const rastgeleSayi = Math.floor(Math.random() * (i + 1));
        //console.log(icerikler[i],icerikler[rastgeleSayi]);
        [icerikler[i], icerikler[rastgeleSayi]] = [icerikler[rastgeleSayi], icerikler[i]];
    }
}
function kartac(){
    sayac++;    
        kart1=this;
        kart2=this;
        kart3=this;
        kart4=this;
        kart1.innerHTML=this.dataset.value;
        kart2.innerHTML=this.dataset.value;
        kart3.innerHTML=this.dataset.value;
        kart4.innerHTML=this.dataset.value;

}