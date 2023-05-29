var errorMsg = document.querySelector(".error-msg");

// cek apakah form sudah terisi
function checkFill(inputValue) {
  if (inputValue == "") {
    return false;
  }

  return true;
}

// cek apakah isi form menggunakan alfabet
function isAlphabet(inputValue) {
  var pattern = /[a-z ]/i;
  for (let i = 0; i < inputValue.length; i++) {
    if (pattern.test(inputValue.charAt(i)) == false) {
      return false;
    }
  }

  return true;
}

// cek apakah isi form menggunakan numerik
function isNumeric(inputValue) {
  var pattern = /[0-9]/i;
  for (let i = 0; i < inputValue.length; i++) {
    if (pattern.test(inputValue.charAt(i)) == false) {
      return false;
    }
  }

  return true;
}

// cek apakah isi form menggunakan alfanumerik
function isAlphaNumeric(inputValue) {
  var pattern = /[a-z0-9]/i;
  for (let i = 0; i < inputValue.length; i++) {
    if (pattern.test(inputValue.charAt(i)) == false) {
      return false;
    }
  }

  return true;
}

// cek apakah isi form sudah 16 digit
function isIdDigit(inputValue) {
  if (inputValue.length != 16) {
    return false;
  }

  return true;
}

// cek apakah isi form sudah minimal berisi 10 digit angka / huruf maksimal 12 digit
function isTelpDigit(inputValue) {
  if (inputValue.length < 10 || inputValue.length > 12) {
    return false;
  }

  return true;
}

// cek apakah isi form sudah sesuai dengan format nomor telepon indonesia (diawali 08)
function isTelpFormat(inputValue) {
  pattern = "08";
  for (let i = 0; i < pattern.length; i++) {
    if (inputValue.charAt(i) != pattern.charAt(i)) {
      return false;
    }
  }

  return true;
}

// cek apakah isi form sudah sesuai dengan format email
function isEmailFormat(inputValue) {
  if (inputValue.length < 13 ) {
    return false;
  }
  pattern1 = /@/g;
  pattern2 = ".com";
  if (!(pattern1.test(inputValue))) {
    return false;
  }
  let j = inputValue.length-1;
  for (let i = pattern2.length-1; i >= 0; i-- ) {
    if ( inputValue.charAt(j) != pattern2.charAt(i) ) {
      return false;
    }
    j--;
  }

  return true;
}

// fungsi check setiap form
// cek form nama
function checkName(name) {
  if (!checkFill(name)) {
    errorMsg.innerHTML = "Mohon isi nama lengkap anda terlebih dahulu.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isAlphabet(name)) {
    errorMsg.innerHTML = "Mohon isi nama lengkap dengan benar.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form email
function checkEmail(email) {
  if (!checkFill(email)) {
    errorMsg.innerHTML = "Mohon isi alamat email anda terlebih dahulu.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isEmailFormat(email)) {
    errorMsg.innerHTML = "Mohon isi alamat email dengan benar.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form nomor telepon
function checkTelp(telp) {
  if (!checkFill(telp)) {
    errorMsg.innerHTML = "Mohon isi nomor telepon anda terlebih dahulu.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isNumeric(telp)) {
    errorMsg.innerHTML = "Mohon isi nomor telepon dengan menggunakan angka.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isTelpDigit(telp)) {
    errorMsg.innerHTML =
      "Mohon isi nomor telepon minimal 10 digit dan maksimal 12 digit.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isTelpFormat(telp)) {
    errorMsg.innerHTML = "Mohon isi nomor telepon dengan benar.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form nationality
function checkNat(nat) {
  if (nat == "Select Nationality") {
    errorMsg.innerHTML = "Mohon pilih kewarganegaraan anda.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form id type
function checkIdType(idType) {
  if (idType == "Select Id Type") {
    errorMsg.innerHTML = "Mohon pilih tipe ID anda.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form room type
function checkRoomType(roomType) {
  if (roomType == "Select Room Type") {
    errorMsg.innerHTML = "Mohon pilih tipe ruangan anda.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form additional service
function checkAddService(addService) {
  if (addService == "Select Additional Service") {
    errorMsg.innerHTML = "Mohon pilih layanan tambahan.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form nomor id
function checkId(idNum) {
  if (!checkFill(idNum)) {
    errorMsg.innerHTML = "Mohon isi nomor ID anda terlebih dahulu.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isNumeric(idNum)) {
    errorMsg.innerHTML = "Mohon isi nomor ID dengan menggunakan angka.";
    errorMsg.style.display = "block";
    return false;
  }
  if (!isIdDigit(idNum)) {
    errorMsg.innerHTML = "Mohon isi nomor ID dengan 16 digit.";
    errorMsg.style.display = "block";
    return false;
  }
  
  return true;
}

// cek form tanggal check in
function checkDateCI(checkIn) {
  if (!checkFill(checkIn)) {
    errorMsg.innerHTML = "Mohon isi tanggal check-in.";
    errorMsg.style.display = "block";
    return false;
  }

  var arrCheckIn = checkIn.split("-");

  var date = new Date();
  var thisDate = date.getDate();
  var thisMonth = date.getMonth() + 1;
  var thisYear = date.getFullYear();

  if (parseInt(arrCheckIn[0]) < thisYear) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    errorMsg.style.display = "block";
    return false;
  }
  if (
    parseInt(arrCheckIn[0]) == thisYear &&
    parseInt(arrCheckIn[1]) < thisMonth
  ) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    errorMsg.style.display = "block";
    return false;
  }
  if (
    parseInt(arrCheckIn[0]) == thisYear &&
    parseInt(arrCheckIn[1]) == thisMonth &&
    parseInt(arrCheckIn[2]) < thisDate
  ) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// cek form tanggal check out
function checkDateCO(checkIn, checkOut) {
  if (!checkFill(checkOut)) {
    errorMsg.innerHTML = "Mohon isi tanggal check-out.";
    errorMsg.style.display = "block";
    return false;
  }

  var arrCheckIn = checkIn.split("-");
  var arrCheckOut = checkOut.split("-");

  if (parseInt(arrCheckIn[0]) > parseInt(arrCheckOut[0])) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    errorMsg.style.display = "block";
    return false;
  }
  if (
    parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) &&
    parseInt(arrCheckIn[1]) > parseInt(arrCheckOut[1])
  ) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    errorMsg.style.display = "block";
    return false;
  }
  if (
    parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) &&
    parseInt(arrCheckIn[1]) == parseInt(arrCheckOut[1]) &&
    parseInt(arrCheckIn[2]) > parseInt(arrCheckOut[2])
  ) {
    errorMsg.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    errorMsg.style.display = "block";
    return false;
  }
  if (
    parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) &&
    parseInt(arrCheckIn[1]) == parseInt(arrCheckOut[1]) &&
    parseInt(arrCheckIn[2]) == parseInt(arrCheckOut[2])
  ) {
    errorMsg.innerHTML = "Pemesanan dapat dilakukan minimal satu malam.";
    errorMsg.style.display = "block";
    return false;
  }

  return true;
}

// fungsi validasi form
function formValidation() {
  // validasi nama
  let name = document.getElementById("name");
  let nameValue = name.value;
  if (!checkName(nameValue)) {
    name.style.border = "1px solid #f74040";
    return false;
  }
  name.style.border = "1px solid #1dbf73";

  // validasi email
  let email = document.getElementById("email");
  let emailValue = email.value;
  if (!checkEmail(emailValue)) {
    email.style.border = "1px solid #f74040";
    return false;
  }
  email.style.border = "1px solid #1dbf73";

  // validasi nomor telepon
  let telp = document.getElementById("telepon");
  let telpValue = telp.value;
  if (!checkTelp(telpValue)) {
    telp.style.border = "1px solid #f74040";
    return false;
  }
  telp.style.border = "1px solid #1dbf73";

  // validasi nationality
  let nat = document.getElementById("nationality");
  let natValue = nat.value;
  if (!checkNat(natValue)) {
    nat.style.border = "1px solid #f74040";
    return false;
  }
  nat.style.border = "1px solid #1dbf73";

  // validasi id type personal detail
  let idTypePD = document.getElementById("id-type-PD");
  let idTypePDValue = idTypePD.value;
  if (!checkIdType(idTypePDValue)) {
    idTypePD.style.border = "1px solid #f74040";
    return false;
  }
  idTypePD.style.border = "1px solid #1dbf73";

  // validasi nomor id personal detail
  let idNumPD = document.getElementById("id-num-PD");
  let idNumPDValue = idNumPD.value;
  if (!checkId(idNumPDValue)) {
    idNumPD.style.border = "1px solid #f74040";
    return false;
  }
  idNumPD.style.border = "1px solid #1dbf73";

  // validasi room type
  let roomType = document.getElementById("room-type");
  let roomTypeValue = roomType.value;
  if (!checkRoomType(roomTypeValue)) {
    roomType.style.border = "1px solid #f74040";
    return false;
  }
  roomType.style.border = "1px solid #1dbf73";

  // validasi tanggal check in
  let checkIn = document.getElementById("check-in");
  let checkInValue = checkIn.value;
  if (!checkDateCI(checkInValue)) {
    checkIn.style.border = "1px solid #f74040";
    return false;
  }
  checkIn.style.border = "1px solid #1dbf73";

  // validasi tanggal check out
  let checkOut = document.getElementById("check-out");
  let checkOutValue = checkOut.value;
  if (!checkDateCO(checkInValue, checkOutValue)) {
    checkOut.style.border = "1px solid #f74040";
    return false;
  }
  checkOut.style.border = "1px solid #1dbf73";

  // validasi additional service
  let addService = document.getElementById("add-service");
  let addServiceValue = addService.value;
  if (!checkAddService(addServiceValue)) {
    addService.style.border = "1px solid #f74040";
    return false;
  }
  addService.style.border = "1px solid #1dbf73";

  // validasi id type book detail
  let idTypeBD = document.getElementById("id-type-BD");
  let idTypeBDValue = idTypeBD.value;
  if (!checkIdType(idTypeBDValue)) {
    idTypeBD.style.border = "1px solid #f74040";
    return false;
  }
  idTypeBD.style.border = "1px solid #1dbf73";

  // validasi nomor id book detail
  let idNumBD = document.getElementById("id-num-BD");
  let idNumBDValue = idNumBD.value;
  if (!checkId(idNumBDValue)) {
    idNumBD.style.border = "1px solid #f74040";
    return false;
  }
  idNumBD.style.border = "1px solid #1dbf73";

  return true;
}
