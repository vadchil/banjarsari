const photos = [
  {
    id: 1,
    src: 'https://i.imgur.com/u44VlB2.jpeg',
    title: 'Photoshoot Profile KKN',
    description: 'Damn keliatan kayak org bener semua.'
  },
  {
    id: 2,
    src: 'https://i.imgur.com/4MKfTuv.jpeg',
    title: 'Sowan Rumah Pak Minhajul Abidin',
    description: 'Bapak-bapak sejuta cerita 🗿.'
  },
  {
    id: 3,
    src: 'https://i.imgur.com/WBrkrb6.jpeg',
    title: 'Kink Galuh Memasak',
    description: 'Kink galuh melakukan penyuluhan dedak fermentasi.'
  },
  {
    id: 4,
    src: 'https://i.imgur.com/ifSXYZx.jpeg',
    title: 'Momen Ketika PDD Pegang Sikat',
    description: 'Capek banget cikkk.'
  },
  {
    id: 5,
    src: 'https://i.imgur.com/HbYFfUR.jpeg',
    title: 'Kedatangan DPL Terbaik se-Angkatan',
    description: 'YTTA deh banggg.'
  },
  {
    id: 6,
    src: 'https://i.imgur.com/DOC4N2Y.jpeg',
    title: 'Panggil Dia Hakim Tata',
    description: 'GELOKK Bu Hakim Mahkotanya Ketinggalan di DC Cakung.'
  },
  {
    id: 7,
    src: 'https://i.imgur.com/JcUNFAv.jpeg',
    title: 'Proker Paling Gampang',
    description: 'Wong ekonomi proker,e paling gampang ndes.'
  },
  {
    id: 8,
    src: 'https://i.imgur.com/TYQioZ9.jpeg',
    title: 'Pelatihan Pembuatan Tas Pake Bekas Kopi',
    description: 'Josjis rodok boros tapi.'
  },
  {
    id: 9,
    src: 'https://i.imgur.com/oHeaS8e.jpeg',
    title: 'Para Bidadari Tanpa Sayap',
    description: 'Sayap,e ketinggalan. Kurir sedang mantai.'
  },
  {
    id: 10,
    src: 'https://i.imgur.com/JwYJ5KN.jpeg',
    title: 'NJARSARI DE FAMILIAAA',
    description: 'Wong sukses kabeh, aamiin.'
  },
  {
    id: 11,
    src: 'https://i.imgur.com/IyCQoG1.jpeg',
    title: 'Bu Guru Masa Depan',
    description: 'Tulung iku anak-anak e diajari sek bener nggihh.'
  },
  {
    id: 12,
    src: 'https://i.imgur.com/47h90ON.jpeg',
    title: 'Uswatun Memberikan Buket Momen',
    description: 'Hujan deras para pria tidak datang mon maap ye.'
  },
  {
    id: 13,
    src: 'https://i.imgur.com/mvQw1Zo.jpeg',
    title: 'Galuh Pijat Plus Plus',
    description: 'Plus e sikile njepat-njepat.'
  },
  {
    id: 14,
    src: 'https://i.imgur.com/Hmk1SRR.jpeg',
    title: 'Senam Aerobic Josjis',
    description: 'Berikan uang lebih kepada instruktur,e aowkaowkao.'
  },
  {
    id: 15,
    src: 'https://i.imgur.com/eysdHwB.jpeg',
    title: 'Posyandu Lansia',
    description: 'Sayah ternyata nggaweni caption og cah.'
  },
  {
    id: 16,
    src: 'https://i.imgur.com/IYZuxy8.jpeg',
    title: 'PGSD Momong Bocill',
    description: 'Wong 3 sijine sek moto kayane kie'
  },
  {
    id: 17,
    src: 'https://i.imgur.com/tFvSsgw.jpeg',
    title: 'PGSD Proker Rumah Belajar',
    description: 'Gawe banner tapi ora dinggo og ndes.'
  },
  {
    id: 18,
    src: 'https://i.imgur.com/vVT0j09.jpeg',
    title: 'Sowan Rumah Pak Carik',
    description: 'Tekan saiki aku ra ngerti jeneng lengkap,e pak carik ki sopo.'
  },
  {
    id: 19,
    src: 'https://i.imgur.com/wRiO2oj.jpeg',
    title: 'Wong Mendo #1',
    description: 'Wong mendo kadang marlong kadang dari satgas MBG.'
  },
  {
    id: 20,
    src: 'https://i.imgur.com/oDystv9.jpeg',
    title: 'ISIEN DEWE JUDULE AKU SAYAHHH',
    description: 'ISIEN DEWE JUDULE AKU SAYAHHH'
  },
  {
    id: 21,
    src: 'https://i.imgur.com/dnvR8bw.jpeg',
    title: 'LOHH Faiz Due Anak?!',
    description: 'Kapan maneh faiz momong bocil.'
  },
  {
    id: 22,
    src: 'https://i.imgur.com/fGwaEOu.jpeg',
    title: 'KELAZ Bu Guruu',
    description: 'Semangat terus bu guru.'
  },
  {
    id: 23,
    src: 'https://i.imgur.com/k4Rs9oB.jpeg',
    title: 'Keluarga Besar Senam Aerobic',
    description: 'Oke baik.'
  },
  {
    id: 24,
    src: 'https://i.imgur.com/jCAPYB9.jpeg',
    title: 'EL Masyallah Tabarakallah',
    description: '2 Kata andalan Masyaallah Tabarakallah.'
  },
  {
    id: 25,
    src: 'https://i.imgur.com/0sMB7GO.jpeg',
    title: 'Proker TPQ',
    description: 'Isien dewe caption,e'
  },
  {
    id: 26,
    src: 'https://i.imgur.com/wfPOM9W.jpeg',
    title: 'Wong Mendo #2',
    description: 'Isien dewe caption,e'
  },
  {
    id: 27,
    src: 'https://i.imgur.com/OobZOQ4.jpeg',
    title: 'Rumah Belajar Tapi Versi Wes Due Banner',
    description: 'Isien dewe caption,e'
  },
  {
    id: 28,
    src: 'https://i.imgur.com/R6gtyYZ.jpeg',
    title: 'Foto Bareng Ro Dapol',
    description: 'Oke baik.'
  },
  {
    id: 29,
    src: 'https://i.imgur.com/IQHmdW8.jpeg',
    title: 'Wong Mendo #3',
    description: 'Isine raine galuh kabeh.'
  },
  {
    id: 30,
    src: 'https://i.imgur.com/ZSQjRCL.jpeg',
    title: 'Wong Mendo #4',
    description: 'Isine raine galuh kabeh.'
  },
  {
    id: 31,
    src: 'https://i.imgur.com/P6Frneq.jpeg',
    title: 'Foto Penarikan, Aku Sek Moto',
    description: 'Rapopo ra ketok wonge, penting ono khasile OKE BAIK.'
  },
  {
    id: 32,
    src: 'https://i.imgur.com/rE1ae7t.jpeg',
    title: 'Pengambilan Lanyard Oleh Pak Kades dengan Pak Ketua',
    description: 'Oke JOSJIS.'
  },
  {
    id: 33,
    src: 'https://i.imgur.com/Tzr1Nvk.jpeg',
    title: 'Potret Lanangan Sangar',
    description: 'Oke JOSJIS.'
  },
  {
    id: 34,
    src: 'https://i.imgur.com/cQUPYGJ.jpeg',
    title: '2 Bocil Paling Solid',
    description: 'Oke JOSJIS.'
  },
  {
    id: 35,
    src: 'https://i.imgur.com/X2ehuvC.jpeg',
    title: 'Pamitan Tapi Mung Wong 5 HAHAHAHAH',
    description: 'Sing sabar yoo cah.'
  }
];

export default photos;
