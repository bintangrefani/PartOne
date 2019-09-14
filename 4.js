function cetak_gambar(bilangan) {
  const bintang = ' * ';
  const garis = ' = ';

  // dilakukan pengecekan termasuk bilangan ganjil atau bukan
  if(bilangan % 2 == 0) {
    return console.log('Bilangan yang anda masukkan ' + bilangan + ' tolong masukkan bilangan ganjil');
  };

  // buat header berada di tengah
  console.log(' '.repeat(bilangan / 2) + '--- panjang ---' + ' '.repeat(bilangan / 2));


  for(var row = 0; row < bilangan; row++) {
    // pengecekan, jika berada pada garis tengah print bintang
    if(row === Math.floor(bilangan / 2) ) {
      console.log(bintang.repeat(bilangan));
    }else {
      // untuk menmapilkan bintang - garis - bintang
      console.log(bintang+garis.repeat(bilangan - 2)+bintang);
    }
  }
}

cetak_gambar(9);
cetak_gambar(10);