/**
 * ÜMRANIYE ŞUBESI — Menü Verisi
 * Bu dosya yalnızca Ümraniye şubesine aittir.
 */

window.BRANCH_NAME = 'Sarıyer Börekçisi — Ümraniye';

window.BRANCH_MENU_DATA = {

  borekler: {
    name: 'Börekler',
    emoji: '🥐',
    desc: 'Günlük taze · Fırın çıkışı',
    heroBg: 'linear-gradient(135deg, #2a1f0e, #1c1410)',
    groups: [
      {
        label: 'Su Böreği',
        items: [
          { name: 'Peynirli Su Böreği',  desc: 'Bol beyaz peynir, taze haşlanmış yufka',      price: 95,  unit: 'dilim', badge: 'popular', icon: '🥐' },
          { name: 'Kıymalı Su Böreği',   desc: 'Baharatlı dana kıyma, kavurma iç harç',       price: 105, unit: 'dilim', badge: null,      icon: '🥐' },
          { name: 'Ispanaklı Su Böreği', desc: 'Taze ıspanak, beyaz peynir, soğan',           price: 95,  unit: 'dilim', badge: null,      icon: '🥐' },
          { name: 'Patatesli Su Böreği', desc: 'Zeytinyağlı patates püresi, nane',            price: 85,  unit: 'dilim', badge: null,      icon: '🥐' },
        ]
      },
      {
        label: 'Kol Böreği',
        items: [
          { name: 'Peynirli Kol Böreği',  desc: 'Çıtır yufka, beyaz peynir dolusu',          price: 75,  unit: 'adet', badge: null,      icon: '🥐' },
          { name: 'Kıymalı Kol Böreği',   desc: 'Dana kıyma, soğan, domates, baharat',       price: 85,  unit: 'adet', badge: 'popular', icon: '🥐' },
          { name: 'Patatesli Kol Böreği', desc: 'Baharatlı patates dolgusu, taze maydanoz',  price: 70,  unit: 'adet', badge: null,      icon: '🥐' },
          { name: 'Ispanaklı Kol Böreği', desc: 'Çıtır yufka, ıspanak, peynir karışımı',    price: 75,  unit: 'adet', badge: null,      icon: '🥐' },
        ]
      },
      {
        label: 'Adana Böreği',
        items: [
          { name: 'Kavurmalı Adana Böreği', desc: 'Kuzu kavurma, ince yufka, tereyağı',      price: 115, unit: 'adet', badge: 'spicy',   icon: '🥐' },
          { name: 'Kaşarlı Adana Böreği',   desc: 'Erimiş kaşar, ince çıtır yufka',          price: 105, unit: 'adet', badge: null,      icon: '🥐' },
          { name: 'Sade Börek',             desc: 'Klasik lezzet, sade ve hafif',              price: 55,  unit: 'adet', badge: null,      icon: '🥐' },
        ]
      }
    ]
  },

  pogacalar: {
    name: 'Poğaçalar',
    emoji: '🫓',
    desc: 'Yumuşacık hamur · Fırından sıcak',
    heroBg: 'linear-gradient(135deg, #1e1a10, #141210)',
    groups: [
      {
        label: 'Tüm Poğaçalar',
        items: [
          { name: 'Peynirli Poğaça',  desc: 'Bol beyaz peynir, susam üstü',              price: 55, unit: 'adet', badge: 'popular', icon: '🫓' },
          { name: 'Patatesli Poğaça', desc: 'Baharatlı patates iç harç, yumuşak hamur',  price: 50, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Kaşarlı Poğaça',   desc: 'Erimiş kaşar peyniri, altın rengi üst',    price: 60, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Zeytinli Poğaça',  desc: 'Siyah zeytin parçaları, nefis hamur',      price: 55, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Dereotlu Poğaça',  desc: 'Taze dereotu, beyaz peynir aroması',       price: 55, unit: 'adet', badge: 'new',     icon: '🫓' },
          { name: 'Kıymalı Poğaça',   desc: 'Baharatlı dana kıyma, soğan, maydanoz',   price: 65, unit: 'adet', badge: null,      icon: '🫓' },
          { name: 'Sade Poğaça',      desc: 'Klasik yumuşak poğaça, sade',              price: 40, unit: 'adet', badge: null,      icon: '🫓' },
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
          { name: 'Kuşbaşı Kaşarlı Pide',   desc: 'Kuşbaşı et, bol kaşar, tereyağı',        price: 175, unit: 'adet', badge: 'popular', icon: '🫔' },
          { name: 'Kıymalı Kaşarlı Pide',   desc: 'Dana kıyma, kaşar peyniri, domates',     price: 155, unit: 'adet', badge: null,      icon: '🫔' },
          { name: 'Kıymalı Yumurtalı Pide', desc: 'Dana kıyma, yumurta, taze baharat',      price: 150, unit: 'adet', badge: null,      icon: '🫔' },
          { name: 'Kaşarlı Sucuklu Pide',   desc: 'Bol kaşar, dilimli sucuk, fırın çıkışı', price: 155, unit: 'adet', badge: null,      icon: '🫔' },
          { name: 'Peynirli Pide',          desc: 'Beyaz peynir, kaşar karışımı, taze otlar', price: 135, unit: 'adet', badge: null,   icon: '🫔' },
        ]
      },
      {
        label: 'Kır Pidesi',
        items: [
          { name: 'Kıymalı Kır Pidesi',   desc: 'Maltalı pide hamuru, baharatlı kıyma', price: 95, unit: 'adet', badge: null, icon: '🫔' },
          { name: 'Patatesli Kır Pidesi', desc: 'Fırın patates, taze otlar, zeytinyağı', price: 80, unit: 'adet', badge: null, icon: '🫔' },
          { name: 'Peynirli Kır Pidesi',  desc: 'Taze beyaz peynir, kekik, fırın',       price: 80, unit: 'adet', badge: null, icon: '🫔' },
        ]
      }
    ]
  },

  acmalar: {
    name: 'Açmalar & Simitler',
    emoji: '🥖',
    desc: 'Sabahın vazgeçilmezi · Taze',
    heroBg: 'linear-gradient(135deg, #1a1612, #141210)',
    groups: [
      {
        label: 'Açmalar',
        items: [
          { name: 'Sade Açma',       desc: 'Yumuşak, tereyağlı, klasik açma',         price: 45, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Peynirli Açma',   desc: 'Beyaz peynir dolgulu, fırın çıkışı',      price: 55, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Patatesli Açma',  desc: 'Baharatlı patates, nane, yumuşak açma',  price: 50, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Zeytinli Açma',   desc: 'Siyah zeytin, kekik, zeytinyağı',        price: 50, unit: 'adet', badge: null,  icon: '🥖' },
          { name: 'Çikolatalı Açma', desc: 'Bitter çikolata dolgulu, tatlı hamur',   price: 60, unit: 'adet', badge: 'new', icon: '🥖' },
        ]
      },
      {
        label: 'Simitler',
        items: [
          { name: 'Sade Simit',    desc: 'Susamlı, çıtır, geleneksel tat',         price: 30, unit: 'adet', badge: null, icon: '🥯' },
          { name: 'Kaşarlı Simit', desc: 'Simit üzeri kaşar, tost gibi erimiş',    price: 45, unit: 'adet', badge: null, icon: '🥯' },
        ]
      }
    ]
  },

  tatlilar: {
    name: 'Tatlılar',
    emoji: '🍰',
    desc: 'Günlük taze tatlılar',
    heroBg: 'linear-gradient(135deg, #1e1418, #141210)',
    groups: [
      {
        label: 'Tüm Tatlılar',
        items: [
          { name: 'Sütlaç',          desc: 'Fırın sütlaç, tarçın, ev yapımı',          price: 85, unit: 'porsiyon', badge: 'popular', icon: '🍮' },
          { name: 'Kazandibi',       desc: 'Karamelize süt tatlısı, geleneksel',       price: 85, unit: 'porsiyon', badge: null,      icon: '🍮' },
          { name: 'Revani',          desc: 'Şerbetli irmik tatlısı, hindistan cevizi', price: 75, unit: 'dilim',    badge: null,      icon: '🍰' },
          { name: 'Baklava',         desc: 'Fıstıklı, cevizli, ince yufka, şerbet',   price: 95, unit: 'porsiyon', badge: 'new',     icon: '🍯' },
          { name: 'Tulumba Tatlısı', desc: 'Kızarmış hamur tatlısı, şerbet',          price: 70, unit: 'porsiyon', badge: null,      icon: '🍡' },
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
          { name: 'Bardak Çay',     desc: 'Rize demli, taze demleme',            price: 20, unit: '₺', badge: null,      icon: '🫖' },
          { name: 'Fincan Çay',     desc: 'Çay fincanında servis, sıcak',        price: 20, unit: '₺', badge: null,      icon: '☕' },
          { name: 'Türk Kahvesi',   desc: 'Geleneksel, cezve pişirim',           price: 55, unit: '₺', badge: 'popular', icon: '☕' },
          { name: 'Nescafé',        desc: 'Sütlü veya sade seçeneği ile',        price: 50, unit: '₺', badge: null,      icon: '☕' },
          { name: 'Bitki Çayları',  desc: 'Ihlamur, papatya, ada çayı',          price: 40, unit: '₺', badge: null,      icon: '🍵' },
          { name: 'Sıcak Çikolata', desc: 'Tam yağlı süt, bitter çikolata',     price: 65, unit: '₺', badge: 'new',     icon: '🍫' },
        ]
      },
      {
        label: 'Soğuk İçecekler',
        items: [
          { name: 'Ayran',              desc: 'Ev yapımı, bol köpüklü, taze',          price: 30, unit: '₺', badge: 'popular', icon: '🥛' },
          { name: 'Limonata',           desc: 'Taze sıkılmış limon, nane, buz',        price: 55, unit: '₺', badge: null,      icon: '🍋' },
          { name: 'Kola (330 ml)',      desc: 'Coca-Cola, soğuk servis',               price: 45, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Fanta (330 ml)',     desc: 'Portakal aromalı gazlı içecek',         price: 45, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Sprite (330 ml)',    desc: 'Limonlu ve serinletici',                price: 45, unit: '₺', badge: null,      icon: '🥤' },
          { name: 'Meyve Suyu (330ml)', desc: 'Şeftali, kayısı, vişne seçenekleri',   price: 40, unit: '₺', badge: null,      icon: '🧃' },
          { name: 'Maden Suyu',         desc: 'Sade veya meyveli, soğuk servis',      price: 25, unit: '₺', badge: null,      icon: '🫧' },
          { name: 'Ice Tea (330 ml)',   desc: 'Soğuk çay, şeftalili veya limonlu',    price: 40, unit: '₺', badge: null,      icon: '🍵' },
        ]
      }
    ]
  }

};
