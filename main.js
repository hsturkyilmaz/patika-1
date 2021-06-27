//username
let username = prompt("Lütfen adınızı giriniz.")
let title = document.querySelector('.title').innerHTML = `Merhaba, ${username}! Hoş geldin! 👋`

//date
const d = new Date()
const year = d.getFullYear()
const day = d.getDate()

const months = [
  'Ocak',
  'Şubat',
  'Mart',
  'Nisan',
  'Mayıs',
  'Haziran',
  'Temmuz',
  'Ağustos',
  'Eylül',
  'Ekim',
  'Kasım',
  'Aralık'
]
const monthIndex = d.getMonth()
const monthName = months[monthIndex]

const days = [
  'Pazar',
  'Pazartesi',
  'Salı',
  'Çarşamba',
  'Perşembe',
  'Cuma',
  'Cumartesi'
]
const dayIndex = d.getDay()
const dayName = days[dayIndex]

function startTime() {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();
  m = checkTime(m);
  s = checkTime(s);
  document.querySelector('.clock').innerHTML = `Ve saat tam olarak ${h}:${m}:${s} ⏰`;
  let t = setTimeout(function() {
    startTime()
  }, 1000);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i
  };
  return i;
}

startTime()

let fullDate = `${day} ${monthName} ${year}`;
document.querySelector('.date').innerHTML = ` ${fullDate} tarihinde  patika.dev JavaScript patikasının ilk ödevini görüntülemektesin.`
document.querySelector('.day').innerHTML = `Bugün günlerden ${dayName}!`