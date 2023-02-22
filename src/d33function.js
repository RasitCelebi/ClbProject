

function sayHello(name){
    console.log(`Hello ${name}`)
}

sayHello("Mehmet");

//output Hello Mehmet

/* java dilinde fonksiyon tanımlarken tür belirtilir. ör:

public void sayHello(String x){
    console.log("Merhaba" + x)
} 
Hem parametre kısmında x'e tür belirttim. Hem de fonksiyona tür belirttim. void, yani geri değer döndürmeyecek.

*/

/////////////////////

/* public int findYearOfBirth ( int age){

    int yearOfToday = 2023;
    int yearOfBirth = 2023-age;
    
    return yearOfBirth;
}
türü int olan bir fonksiyon tanımladım ve geriye int türünde bir değişken döndürdüm. */

//////////////////////

/* private ArrayList<Book> getAllBookToCategory (String iCategoryID){

    ArrayList<Book> allBookOfTheCategory = new ArrayList<>;

    ArrayList <Book> allBook = dbManager.getAllBook();
    //veritabanından tüm kitapları aldım.

    for(int i=0 i<allBook.size; i++){

        if(allbook.get(i).getID = iCategoryID) {
            allBookOfTheCategory.add(allBook.get(i))
        }

    }

    return allBookOfTheCategory;

}

Geriye ArrayList döndüren bir fonksiyon yazdım. Js'de geriye değer döndürüp döndürmemeyi belirtmeden de foknsiyon yazabiiliyoruz. */

function cumNameSurname(name, surname){

    let nameSurname = name + " " + surname;
    let nameSurname2 = `name : ${name} surname: ${surname}`

    let twoOptionPrint = nameSurname + "\n" + nameSurname2
    return twoOptionPrint;
    // return değerinden sonra yazılan herhangi bir kod gözükmeyecektir.

}
// burada geriye String değer döndüreceğiimi ve parametre içerisindeki değişken türlerini belirtmedim. 

console.log(cumNameSurname("Rasit", "CELEBI"));

//output 
//Rasit CELEBI
//name : Rasit surname: CELEBI

// variable shadowing; same name but diff scope
// değişken adı localde var ise localdekini kullanır. {arasında var ise buradakini kullanır.}; eğer süslü parantez içerisinde yok
//ise global variable 'ı  kullanır.