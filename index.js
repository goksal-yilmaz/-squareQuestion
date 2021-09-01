/* İlk on doğal sayının karelerinin toplamı, 12+22+...+102=385 İlk on doğal sayının toplamının karesi, 
(1+2+...+10)2=552=3025 Dolayısıyla ilk on doğal sayının kareleri toplamı ile toplamın karesi arasındaki fark 3025−385=2640'tır. 
İlk yüz doğal sayının kareleri toplamı ile toplamın karesi arasındaki farkı bulun. */


let squarSums = 0, sumSquares =0

function difference(){
    
    for (i = 0; i <= 100; i++){
        squarSums += i;
        sumSquares += i * i;
    }
}
difference();

let start = Date.now();
console.log ("Toplamların Karesi : " + squarSums * squarSums);
console.log ("Karelerin Toplamı : " + sumSquares);

console.log ("İlk yüz doğal sayının kareleri toplamı ile toplamın karesi arasındaki fark : ", squarSums * squarSums - sumSquares)

let end = Date.now();
console.log("Hesaplama Süresi :", (end - start)/ 1000);