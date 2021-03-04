import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      { id: 1, name: "Avatar", description: "Bir hırsızlık olayında ağabeyi ölen yarı felçli Jake Sully, Pandora adındaki uzak bir gezegende misyonunun başına geçmeye karar verir. Bu yerde Na'vi adında giderek tükenmekte olan bir halk yaşamaktadır. ... Bu program insanları kısmen insan kısmen de Na'vi haline büründürerek misyon amaçlı Pandora'ya göndermektedir.", imageUrl: "1.jpg" },
      { id: 2, name: "Bird Box", description: "Görünmeyen uğursuz bir varlığın toplumun büyük kısmını intihara sürüklemesinden beş yıl sonra, hayatta kalan bir kadın ve iki çocuğu güvenli bir yere ulaşmaya çabalar. Canınız neyi isterse izleyin", imageUrl: "2.jpg" },
      { id: 3, name: "Dark", description: "2017 yılından 2020 yılına kadar üç yıl boyunca devam etti. Kurgusal Alman kasabası Winden'de geçen Dark, bir çocuğun kayboluşunun ardından endişeli bir zaman yolculuğunu yavaşça çözdüğü için gizlenen dört ailenin sırlarını ve gizli bağlantılarını açıklamaktadır.", imageUrl: "3.jpg" },
      { id: 4, name: "John Wick", description: "John Wick, emekliye ayrılmış bir tetikçidir. Emekliliğinin tadını çıkarırken karısının yakalandığı amansız hastalıkla hayatı altüst olur. Karısından kendisine kalan en değerli varlığı ve can yoldaşı köpeğidir. Ancak evine dalan üç gangster onu da öldürür. Gansterlerden biri, mafya babası Viggo Tasarov'un oğlu Josef Tasarov'dur ve John'un daha önce birlikte çalıştığı bir adamdır. Artık kaybedecek hiçbir şeyi de kalmayan John Wick'in tek istediği intikamdır ve New York sokaklarında düşmanlarıyla nefes kesen bir kovalamacanın içine girer", imageUrl: "4.jpg" },
      { id: 5, name: "Müslüm", description: "Unutulmaz ses sanatçısının iniş ve çıkışlarla dolu yaşamının anlatıldığı filmde, Müslüm Gürses'in milyonları etkileyen müziğine, çocukluğundan ölümüne kadar geçen zamanda yaşamına etki eden kişilere, çok sevdiğini her fırsatta dile getirdiği eşi Muhterem Nur'a odaklanılıyor", imageUrl: "5.jpg" },
      { id: 6, name: "Naim Süleymanoğlu Cep Herkülü", description: "İlk Dünya Rekoru'na imza attığında 15 yaşında olan, spor kariyerine 7 Dünya Rekoru,üç farklı olimpiyatta kazandığı 3 Olimpiyat Altın Madalya, 6 Avrupa Şampiyonluğu ile 7 tane Dünya Şampiyonluğu ve daha nice başarılar sığdıran Naim Süleymanoğlu'nun hayatının anlatıldığı filmde, Süleymanoğlu'na Hayat Van Eck hayat ...", imageUrl: "6.jpg" },
      { id: 7, name: "Thor", description: "Thor serisinin 2017 yılında izleyiciyle buluşacak olan üçüncü filminde, yaklaşmakta olan Norse kıyametine tanık olacağız. Asgard'tan uzakta, evrenin öbür ucunda hapsolmuş olan Thor çıkış yolu bulamamaktadır. Üstelik güçlü çekici de yanında değildir ve Asgard bir yıkımın eşiğindedir. Ragnarok zamanı gelmiştir, eğer gerçekleşirse bütün Asgardlıları yok edecek olan yıkımın sorumlusu ise acımasız Hela'dır. Ancak Asgard'ı kurtarabilmek için öncelikle özgür kalmalı, bunun içinde karşısına eski müttefiki Hulk'ı çıkaran ölümcül bir yarışmayı kazanmalıdır...", imageUrl: "7.jpg" },
      { id: 8, name: "Sherlock", description: "Dövüş tekniklerini, efsanevi zekası gibi silah olarak kullanan Holmes, bu serüvende ülkesini tahrip edebilecek ölümcül bir komployu aydınlatmak için yeni bir düşman ile savaşmak zorundadır. Robert Downey Jr. , efsanevi dedektif Sherlock Holmes'ü daha önce benzeri görülmemiş bir yorumla canlandırıyor.", imageUrl: "8.jpg" }
    ];
    return { movies };
  }
  constructor() { }
}
