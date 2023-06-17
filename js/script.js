// fungsi untuk membuka dan menutup sidebar
function openSidebar() {
  document.getElementById("sidebar").style.width = "160px";
}
function closeSidebar() {
  document.getElementById("sidebar").style.width = "0px";
}

// elemen HTML penampil pesan error
var errorName = document.querySelector(".error-name");
var errorEmail = document.querySelector(".error-email");
var errorTel = document.querySelector(".error-tel");
var errorNat = document.querySelector(".error-nat");
var errorIdtype = document.querySelector(".error-idtype");
var errorIdnum = document.querySelector(".error-idnum");
var errorRoomtype = document.querySelector(".error-roomtype");
var errorAddservice = document.querySelector(".error-addservice");
var errorCheckin = document.querySelector(".error-checkin");
var errorCheckout = document.querySelector(".error-checkout");
var errorRadio = document.querySelector(".error-radio");
var errorCheckbox = document.querySelector(".error-checkbox");

// cek apakah form sudah terisi
function checkFill(inputValue) {
  if (inputValue == "") {
    return false;
  }
  return true;
}

// cek apakah isi form menggunakan alfabet dan spasi
function isAlphabet(inputValue) {
  var pattern = /^[A-z\s]+$/;
  if (!pattern.test(inputValue)) {
    return false;
  }
  return true;
}

// cek apakah isi form menggunakan numerik
function isNumeric(inputValue) {
  var pattern = /^\d+$/;
  if (!pattern.test(inputValue)) {
    return false;
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

// cek apakah isi form sudah sesuai dengan format nomor telepon
function isTelpFormat(inputValue) {
  var telPattern = /^(\+\d{1,3}[\s.-]?)?\(?\d{3,4}\)?[\s.-]?\d{3,4}[\s.-]?\d{3,4}$/;
  if (!telPattern.test(inputValue)) {
    return false;
  }
  return true;
}

// cek apakah isi form sudah sesuai dengan format email
function isEmailFormat(inputValue) {
  var emailPattern = /^[\w\.-]{2,}@([\w-]{2,}\.)+[\w-]{2,}$/;
  if (!emailPattern.test(inputValue)) {
    return false;
  }
  return true;
}

// cek apakah checkbox sudah di check
function isCheckedCheckbox(check) {
  if (!check.checked) {
    errorCheckbox.innerHTML = "Mohon setujui persyaratan yang berlaku sebelum melakukan reservasi.";
    return false;
  }
  return true;
}

// cek apakah radiobutton sudah ada yg dipilih. parameter type data array
function isCheckedRadio(radio) {
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      break;
    }
    if (i == radio.length - 1) {
      errorRadio.innerHTML = "Mohon pilih tujuan invoice.";
      return false;
    }
  }
  return true;
}

// fungsi check setiap form
// cek form nama
function checkName(name) {
  if (!checkFill(name)) {
    errorName.innerHTML = "Mohon isi nama lengkap anda terlebih dahulu.";
    return false;
  }
  if (!isAlphabet(name)) {
    errorName.innerHTML = "Mohon isi nama lengkap dengan benar.";
    return false;
  }

  return true;
}

// cek form email
function checkEmail(email) {
  if (!checkFill(email)) {
    errorEmail.innerHTML = "Mohon isi alamat email anda terlebih dahulu.";
    return false;
  }
  if (!isEmailFormat(email)) {
    errorEmail.innerHTML = "Mohon isi email yang benar. Contoh: foo@example.com atau bar@example.nom.za";
    return false;
  }

  return true;
}

// cek form nomor telepon
function checkTelp(telp) {
  if (!checkFill(telp)) {
    errorTel.innerHTML = "Mohon isi nomor telepon anda terlebih dahulu.";
    return false;
  }
  if (!isTelpFormat(telp)) {
    errorTel.innerHTML = "Mohon isi nomor telepon dengan benar. Contoh: +62 XXXXXXXXXX, +62-XXX-XXXX-XXXX, XXXX-XXXX-XXXX, XXXXXXXXXXXX";
    return false;
  }

  return true;
}

// cek form nationality
function checkNat(nat) {
  if (nat == "Select Nationality") {
    errorNat.innerHTML = "Mohon pilih kewarganegaraan anda.";
    return false;
  }

  return true;
}

// cek form id type
function checkIdType(idType) {
  if (idType == "Select Id Type") {
    errorIdtype.innerHTML = "Mohon pilih tipe ID anda.";
    return false;
  }

  return true;
}

// cek form room type
function checkRoomType(roomType) {
  if (roomType == "Select Room Type") {
    errorRoomtype.innerHTML = "Mohon pilih tipe ruangan anda.";
    return false;
  }

  return true;
}

// cek form additional service
function checkAddService(addService) {
  if (addService == "Select Additional Service") {
    errorAddservice.innerHTML = "Mohon pilih layanan tambahan.";
    return false;
  }

  return true;
}

// cek form nomor id
function checkId(idNum) {
  if (!checkFill(idNum)) {
    errorIdnum.innerHTML = "Mohon isi nomor ID anda terlebih dahulu.";
    return false;
  }
  if (!isNumeric(idNum)) {
    errorIdnum.innerHTML = "Mohon isi nomor ID dengan menggunakan angka.";
    return false;
  }
  if (!isIdDigit(idNum)) {
    errorIdnum.innerHTML = "Mohon isi nomor ID dengan 16 digit.";
    return false;
  }

  return true;
}

// cek form tanggal check in
function checkDateCI(checkIn) {
  if (!checkFill(checkIn)) {
    errorCheckin.innerHTML = "Mohon isi tanggal check-in.";
    return false;
  }

  var arrCheckIn = checkIn.split("-");
  // yyyy-mm-dd

  var date = new Date();
  var thisDate = date.getDate();
  var thisMonth = date.getMonth() + 1;
  var thisYear = date.getFullYear();

  if (parseInt(arrCheckIn[0]) < thisYear) {
    errorCheckin.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    return false;
  }
  if (parseInt(arrCheckIn[0]) == thisYear && parseInt(arrCheckIn[1]) < thisMonth) {
    errorCheckin.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    return false;
  }
  if (parseInt(arrCheckIn[0]) == thisYear && parseInt(arrCheckIn[1]) == thisMonth && parseInt(arrCheckIn[2]) < thisDate) {
    errorCheckin.innerHTML = "Tidak dapat memilih tanggal check-in pada waktu yang sudah lampau.";
    return false;
  }

  return true;
}

// cek form tanggal check out
function checkDateCO(checkIn, checkOut) {
  if (!checkFill(checkOut)) {
    errorCheckout.innerHTML = "Mohon isi tanggal check-out.";
    return false;
  }

  var arrCheckIn = checkIn.split("-");
  var arrCheckOut = checkOut.split("-");

  if (parseInt(arrCheckIn[0]) > parseInt(arrCheckOut[0])) {
    errorCheckout.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    return false;
  }
  if (parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) && parseInt(arrCheckIn[1]) > parseInt(arrCheckOut[1])) {
    errorCheckout.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    return false;
  }
  if (parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) && parseInt(arrCheckIn[1]) == parseInt(arrCheckOut[1]) && parseInt(arrCheckIn[2]) > parseInt(arrCheckOut[2])) {
    errorCheckout.innerHTML = "Tidak dapat memilih tanggal check-out sebelum tanggal check-in.";
    return false;
  }
  if (parseInt(arrCheckIn[0]) == parseInt(arrCheckOut[0]) && parseInt(arrCheckIn[1]) == parseInt(arrCheckOut[1]) && parseInt(arrCheckIn[2]) == parseInt(arrCheckOut[2])) {
    errorCheckout.innerHTML = "Pemesanan dapat dilakukan minimal satu malam.";
    return false;
  }

  return true;
}

// fungsi validasi form
function formValidation() {
  // variabel penampung nilai form, type data boolean (true/false)
  var result = true;

  // validasi nama
  var name = document.getElementById("name");
  var nameValue = name.value;
  if (!checkName(nameValue)) {
    name.style.border = "1px solid #f74040";
    errorName.style.display = "block";
    result = false;
  } else {
    name.style.border = "1px solid #1dbf73";
    errorName.style.display = "none";
  }

  // validasi email
  var email = document.getElementById("email");
  var emailValue = email.value;
  if (!checkEmail(emailValue)) {
    email.style.border = "1px solid #f74040";
    errorEmail.style.display = "block";
    result = false;
  } else {
    email.style.border = "1px solid #1dbf73";
    errorEmail.style.display = "none";
  }

  // validasi nomor telepon
  var telp = document.getElementById("telepon");
  var telpValue = telp.value;
  if (!checkTelp(telpValue)) {
    telp.style.border = "1px solid #f74040";
    errorTel.style.display = "block";
    result = false;
  } else {
    telp.style.border = "1px solid #1dbf73";
    errorTel.style.display = "none";
  }

  // validasi nationality
  var nat = document.getElementById("nationality");
  var natValue = nat.value;
  if (!checkNat(natValue)) {
    nat.style.border = "1px solid #f74040";
    errorNat.style.display = "block";
    result = false;
  } else {
    nat.style.border = "1px solid #1dbf73";
    errorNat.style.display = "none";
  }

  // validasi id type personal detail
  var idType = document.getElementById("id-type");
  var idTypeValue = idType.value;
  if (!checkIdType(idTypeValue)) {
    idType.style.border = "1px solid #f74040";
    errorIdtype.style.display = "block";
    result = false;
  } else {
    idType.style.border = "1px solid #1dbf73";
    errorIdtype.style.display = "none";
  }

  // validasi nomor id personal detail
  var idNum = document.getElementById("id-num");
  var idNumValue = idNum.value;
  if (!checkId(idNumValue)) {
    idNum.style.border = "1px solid #f74040";
    errorIdnum.style.display = "block";
    result = false;
  } else {
    idNum.style.border = "1px solid #1dbf73";
    errorIdnum.style.display = "none";
  }

  // validasi room type
  var roomType = document.getElementById("room-type");
  var roomTypeValue = roomType.value;
  if (!checkRoomType(roomTypeValue)) {
    roomType.style.border = "1px solid #f74040";
    errorRoomtype.style.display = "block";
    result = false;
  } else {
    roomType.style.border = "1px solid #1dbf73";
    errorRoomtype.style.display = "none";
  }

  // validasi additional service
  var addService = document.getElementById("add-service");
  var addServiceValue = addService.value;
  if (!checkAddService(addServiceValue)) {
    addService.style.border = "1px solid #f74040";
    errorAddservice.style.display = "block";
    result = false;
  } else {
    addService.style.border = "1px solid #1dbf73";
    errorAddservice.style.display = "none";
  }

  // validasi tanggal check in
  var checkIn = document.getElementById("check-in");
  var checkInValue = checkIn.value;
  if (!checkDateCI(checkInValue)) {
    checkIn.style.border = "1px solid #f74040";
    errorCheckin.style.display = "block";
    result = false;
  } else {
    checkIn.style.border = "1px solid #1dbf73";
    errorCheckin.style.display = "none";
  }

  // validasi tanggal check out
  var checkOut = document.getElementById("check-out");
  var checkOutValue = checkOut.value;
  if (!checkDateCO(checkInValue, checkOutValue)) {
    checkOut.style.border = "1px solid #f74040";
    errorCheckout.style.display = "block";
    result = false;
  } else {
    checkOut.style.border = "1px solid #1dbf73";
    errorCheckout.style.display = "none";
  }

  // validasi radio
  var radio = document.reservation.radio;
  if (!isCheckedRadio(radio)) {
    errorRadio.style.display = "block";
    result = false;
  } else {
    errorRadio.style.display = "none";
  }

  // validasi checkbox
  var checkbox = document.reservation.checkbox;
  if (!isCheckedCheckbox(checkbox)) {
    errorCheckbox.style.display = "block";
    result = false;
  } else {
    errorCheckbox.style.display = "none";
  }

  return result;
}
