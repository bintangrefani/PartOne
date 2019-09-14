function getBiodata() {
  return {
    name: 'Bintang Refani Mauludi',
    age : 21,
    address: 'Dsn Beciro RT 03 RW 02 Wonoayu Sidoarjo',
    hobbies: ['Jogging', 'Berenang'], //Array
    is_married: false, //Boolean
    list_school : [{
      name : 'MI Babrul Ulum',
      year_in : 2004,
      year_out : 2010,
      major : null
    },
    {
      name : 'SMP Negeri 1 Wonoayu',
      year_in : 2010,
      year_out : 2013,
      major : null
    },
    {
      name : 'SMA Negeri 4 Sidoarjo',
      year_in : 2013,
      year_out : 2016,
      major : 'IPA'
    },
    {
      name : 'Politeknik Elektronika Negeri Surabaya',
      year_in : 2016,
      year_out : 2019,
      major : 'Teknik Informatika'
    }], // Array Of Object
    skills: [{
      skill_name: 'Android Developer',
      level: 'Advanced'
    },
    {
      skill_name: 'PHP',
      level: 'Advanced'
    },
    {
      skill_name: 'Javascript',
      level: 'Beginner'
    }], // Array Of Object
    interest_in_coding : true //Boolean
  }
}

console.log(getBiodata());




// JSON (JavaScript Object Notation) adalah sebuah format data yang digunakan untuk pertukaran dan penyimpanan data.
// JSON sebagai format untuk bertukar data client dan server atau antar aplikasi.