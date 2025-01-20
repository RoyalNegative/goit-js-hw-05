// Görev 4. Toplam bakiye

// İki parametre alan bir getTotalBalanceByGender(users, gender) ok fonksiyonu yazın:

// ilk parametre users - kullanıcı nesnelerinden oluşan bir dizi,
// ikinci parametre gender - cinsiyeti saklayan bir dize.
// Fonksiyon bir metot çağrı zinciri kullanmalı ve cinsiyeti (özellik gender) gender parametresinin değeriyle eşleşen kullanıcıların toplam bakiyesini (özellik balance) döndürmelidir.

// Aşağıdaki kodu alın ve doğru çalışıp çalışmadığını kontrol etmek için fonksiyonunuzun tanımlanmasından sonra yapıştırın. Çalışmasının sonuçları konsolda görüntülenecektir.

const getTotalBalanceByGender = (users, gender) => {
  return users.reduce((total, user) => {
    return user.gender === gender ? total + user.balance : total;
  }, 0);
};



console.log(getTotalBalanceByGender(allUsers, "male")); // 12053

console.log(getTotalBalanceByGender(allUsers, "female")); // 8863