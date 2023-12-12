const changecolor= document.getElementById('changecolor')

changecolor.addEventListener('click',function(){
  this.style.backgroundColor = getRandomColor();
})

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// const letters = '0123456789ABCDEF';: Bu değişken, altı haneli bir renk kodu oluşturmak için kullanılacak olan renklerin hepsini içeren bir dizedir. Renk kodları hexadecimal (16 tabanında) sistemde 0'dan F'ye kadar olan harfleri ve rakamları kullanır.

// let color = '#';: Bu değişken, oluşturulan rastgele renk kodunun başlangıcında # sembolünü içeren bir dizedir. HTML ve CSS'de renk kodlarını belirtirken genellikle # sembolü kullanılır.

// for (let i = 0; i < 6; i++) { ... }: Bu döngü, altı defa çalışır ve her bir iterasyonda rastgele renk kodunu oluşturmak için bir karakter seçer.

// Math.floor(Math.random() * 16): Math.random() fonksiyonu, 0 ile 1 arasında rastgele bir ondalık sayı döndürür. Bu değer 16 ile çarpılarak 0 ile 15 arasında bir rastgele sayı elde edilir.

// letters[Math.floor(Math.random() * 16)]: letters dizisinde, rastgele seçilen sayıya karşılık gelen bir karakter seçilir ve color değişkenine eklenir. Bu işlem altı kez tekrarlanarak altı haneli bir renk kodu oluşturulur.

// return color;: Oluşturulan altı haneli renk kodu, fonksiyon tarafından geri döndürülür.

// Bu fonksiyon, rastgele bir renk kodu oluşturmak için kullanılabilir ve genellikle web sayfalarında dinamik olarak arka plan rengi veya metin rengi gibi özelliklerin değiştirilmesinde kullanılır.



  