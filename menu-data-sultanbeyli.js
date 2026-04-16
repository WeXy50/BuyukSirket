/**
 * SULTANBEYLİ ŞUBESİ — Menü Verisi
 * Bu dosya yalnızca Sultanbeyli şubesine aittir.
 * Fiyatlar ve ürünler Ümraniye şubesinden farklıdır.
 */

window.BRANCH_NAME = 'Sarıyer Börekçisi — Sultanbeyli';

window.BRANCH_MENU_DATA = {

  borekler: {
    name: 'Börekler',
    emoji: '🥐',
    desc: 'Günlük taze · Odun ateşi fırın',
    heroBg: 'linear-gradient(135deg, #2a1f0e, #1c1410)',
    groups: [
      {
        label: 'Su Böreği',
        items: [
          { name: 'Peynirli Su Böreği',     desc: 'Bol beyaz peynir, ev usulü yufka',         price: 90,  unit: 'dilim', badge: 'popular', icon: '🥐' },
          { name: 'Kıymalı Su Böreği',      desc: 'Baharatlı dana kıyma, soğan, domates',     price: 100, unit: 'dilim', badge: null,      icon: '🥐' },
          { name: 'Patatesli Su Böreği',    desc: 'Zeytinyağlı patates püresi, nane',         price: 80,  unit: 'dilim', badge: null,      icon: '🥐' },
        ]
      },
      {
        label: 'Kol Böreği',
        items: [
          { name: 'Peynirli Kol Böreği',  desc: 'Çıtır yufka, taze beyaz peynir',           price: 70,  unit: 'adet', badge: null,      icon: '🥐' },
          { name: 'Kıymalı Kol Böreği',   desc: 'Dana kıyma, soğan, baharat harmonu',       price: 80,  unit: 'adet', badge: 'popular', icon: '🥐' },
          { name: 'Patatesli Kol Böreği', desc: 'Biberli patates dolgusu, maydanoz',        price: 65,  unit: 'adet', badge: null,      icon: '🥐' },
        ]
      },
      {
        label: 'Özel Börekler',
        items: [
          { name: 'Kavurmalı Adana Böreği', desc: 'Kuzu kavurma, ince yufka, tereyağı',     price: 110, unit: 'adet', badge: 'spicy',   icon: '🥐' },
          { name: 'Sade Börek',             desc: 'Sade, hafif, geleneksel tat',             price: 50,  unit: 'adet', badge: null,      icon: '🥐' },
          { name: 'Lor Peynirli Börek',     desc: 'Taze lor peyniri, dereotu, çıtır yufka', price: 85,  unit: 'adet', badge: 'new',     icon: '🥐' },
        ]
      }
    ]
  },

  pogacalar: {
    name: 'Poğaçalar',
    emoji: '🫓',
    desc: 'Fırından sıcak · Günlük pişirim',
    heroBg: 'linear-gradient(135deg, #1e1a10, #141210)',
    groups: [
      {
        label: 'Tüm Poğaçalar',
        items: [
          { name: 'Peynirli Poğaça',    desc: 'Bol beyaz peynir, susamlı üst',              price: 50, unit: 'adet', badge: 'popular', icon: '🫓' },
          { name: 'Patatesli Poğaça',   desc: 'Biberli patates iç harç, yumuşak hamur',    price: 45, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Zeytinli Poğaça',    desc: 'Siyah zeytin, kekik, nefis hamur',          price: 50, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Kıymalı Poğaça',     desc: 'Baharatlı kıyma, soğan, maydanoz',         price: 60, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Sade Poğaça',        desc: 'Klasik yumuşak hamur, sade',                price: 35, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Ispanaklı Poğaça',   desc: 'Taze ıspanak, beyaz peynir, nane',         price: 55, unit: 'adet', badge: 'new',     icon: '🫓' },
        ]
      }
    ]
  },

  pideler: {
    name: 'Pideler',
    emoji: '🫔',
    desc: 'Taş fırın pideleri · El açması',
    heroBg: 'linear-gradient(135deg, #1a1510, #141210)',
    groups: [
      {
        label: 'Karadeniz Pidesi',
        items: [
          { name: 'Kuşbaşı Kaşarlı Pide',   desc: 'Kuşbaşı et, bol kaşar, tereyağı',        price: 165, unit: 'adet', badge: 'popular', icon: '🫔' },
          { name: 'Kıymalı Kaşarlı Pide',   desc: 'Dana kıyma, kaşar, taze domates',        price: 145, unit: 'adet', badge: null,      icon: '🫔' },
          { name: 'Kaşarlı Sucuklu Pide',   desc: 'Bol sucuk, kaşar, fırın çıkışı',        price: 145, unit: 'adet', badge: null,      icon: '🫔' },
          { name: 'Peynirli Pide',          desc: 'Beyaz peynir ve kaşar karışımı',         price: 125, unit: 'adet', badge: null,      icon: '🫔' },
        ]
      },
      {
        label: 'Özel Pide',
        items: [
          { name: 'Karışık Pide',    desc: 'Kıyma, sucuk, kaşar üçlüsü',                  price: 180, unit: 'adet', badge: 'new', icon: '🫔' },
          { name: 'Islak Pide',      desc: 'Domates soslu, ıslak teknik, özel tarif',      price: 120, unit: 'adet', badge: 'new', icon: '🫔' },
        ]
      }
    ]
  },

  acmalar: {
    name: 'Açmalar & Simitler',
    emoji: '🥖',
    desc: 'Sabahın vazgeçilmezi',
    heroBg: 'linear-gradient(135deg, #1a1612, #141210)',
    groups: [
      {
        label: 'Açmalar',
        items: [
          { name: 'Sade Açma',       desc: 'Tereyağlı, yumuşak hamur',                    price: 40, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Peynirli Açma',   desc: 'Beyaz peynir dolgulu, fırın çıkışı',          price: 50, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Zeytinli Açma',   desc: 'Siyah zeytin, kekik, zeytinyağı',            price: 45, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Çikolatalı Açma', desc: 'Sütlü çikolata dolgulu, tatlı hamur',        price: 55, unit: 'adet', badge: 'new', icon: '🥖' },
        ]
      },
      {
        label: 'Simitler',
        items: [
          { name: 'Sade Simit',      desc: 'Susamlı, çıtır, geleneksel tat',             price: 25, unit: 'adet', badge: null, icon: '🥯' },
          { name: 'Kaşarlı Simit',   desc: 'Simit üzeri eritilmiş kaşar',               price: 40, unit: 'adet', badge: null, icon: '🥯' },
          { name: 'Peynirli Simit',  desc: 'Beyaz peynir, simit arası',                 price: 40, unit: 'adet', badge: 'new', icon: '🥯' },
        ]
      }
    ]
  },

  icecekler: {
    name: 'İçecekler',
    emoji: '☕',
    desc: 'Sıcak & soğuk seçenekler',
    heroBg: 'linear-gradient(135deg, #101418, #141210)',
    groups: [
      {
        label: 'Sıcak İçecekler',
        items: [
          { name: 'Bardak Çay',     desc: 'Rize demli, taze demleme',               price: 15, unit: '₺', badge: null,      icon: '🫖' },
          { name: 'Fincan Çay',     desc: 'Çay fincanında servis',                  price: 15, unit: '₺', badge: null,      icon: '☕' },
          { name: 'Türk Kahvesi',   desc: 'Geleneksel, cezve pişirim',              price: 50, unit: '₺', badge: 'popular', icon: '☕' },
          { name: 'Nescafé',        desc: 'Sütlü veya sade',                        price: 45, unit: '₺', badge: null,      icon: '☕' },
          { name: 'Bitki Çayları',  desc: 'Ihlamur, papatya, ada çayı',            price: 35, unit: '₺', badge: null,      icon: '🍵' },
        ]
      },
      {
        label: 'Soğuk İçecekler',
        items: [
          { name: 'Ayran',               desc: 'Ev yapımı, bol köpüklü',             price: 25, unit: '₺', badge: 'popular', icon: '🥛' },
          { name: 'Limonata',            desc: 'Taze sıkılmış limon, nane, buz',     price: 50, unit: '₺', badge: null,      icon: '🍋' },
          { name: 'Kola (330 ml)',       desc: 'Coca-Cola, soğuk servis',            price: 40, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Fanta (330 ml)',      desc: 'Portakal aromalı gazlı',             price: 40, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Sprite (330 ml)',     desc: 'Limonlu ve serinletici',             price: 40, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Meyve Suyu (330 ml)', desc: 'Şeftali, kayısı, vişne',            price: 35, unit: '₺', badge: null,      icon: '🧃' },
          { name: 'Maden Suyu',          desc: 'Soğuk, ferahlatıcı',               price: 20, unit: '₺', badge: null,      icon: '🫧' },
        ]
      }
    ]
  }

};