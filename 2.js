// username 
// - huruf kecil 
// - huruf besar 
// - angka
// - panjang karakter 5-9
// - username tidak boleh diawali angka/karakter spesial

// password
// - huruf kecil 
// - huruf besar {minimal satu karakter}
// - angka {minimal satu karakter}
// - karkater spesial {minimal satu karakter}
// - harus ada @
// - panjang minimal 8 karakter 


function is_username_valid(username) {
    var huruf = /^[A-Za-z][A-Za-z0-9]{5,9}$/i;
    if(5 <= username.length <= 9  && huruf.test(username)) {
      return true;
    }
    return false;
}
function is_password_valid(password) {
  var sandi = /^[A-Za-z0-9@!#$%&'*+/=?^_`{|}~-]{8,}$/i;
  if(password.length >= 8 && sandi.test(password)) {
     return true;
  }
  return false;
}
console.log(is_username_valid('@sony'));
console.log(is_username_valid('Ayu99v'));
console.log(is_password_valid('p@ssW0rd#'));
console.log(is_password_valid('C0d3YourFuture!#'));


