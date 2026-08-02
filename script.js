// =========================================
// TANGGAL PENGAMBILAN ALMAMATER
// =========================================

// Countdown berakhir pada
// 6 Agustus 2026 pukul 23:59:59

const countdownDates = {

    "06":"2026-08-06T09:00:00+07:00",
    "07":"2026-08-07T09:00:00+07:00",
    "08":"2026-08-08T09:00:00+07:00",
    "09":"2026-08-09T09:00:00+07:00",
    "10":"2026-08-10T09:00:00+07:00",
    "11":"2026-08-11T09:00:00+07:00",
    "12":"2026-08-12T09:00:00+07:00"

};

const requestedDay = new URLSearchParams(window.location.search).get("day");
const savedDay = requestedDay || localStorage.getItem("selectedDay");
const selectedDay = Object.hasOwn(countdownDates, savedDay) ? savedDay : "06";
// Menandai pengguna yang baru kembali dari halaman photobox.
const returningFromPhotobox = sessionStorage.getItem("journeyArrival") === "home";
// Menandai pengguna yang kembali dari halaman Kritik & Saran.
const returningFromFeedback = sessionStorage.getItem("feedbackJourney") === "to-home";

// Pulihkan pilihan apabila versi lama pernah menyimpan nilai yang tidak valid.
localStorage.setItem("selectedDay", selectedDay);

let targetDate=new Date(countdownDates[selectedDay]).getTime();

// =========================================
// ELEMENT
// =========================================

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countdownHero = document.getElementById("countdownHero");

const message = document.getElementById("message");

// =========================================
// UPDATE COUNTDOWN
// =========================================

function updateCountdown(){

    const now = new Date().getTime();

    const distance = targetDate - now;

    if(distance <= 0){

        clearInterval(interval);

        if (countdownHero) countdownHero.style.display = "none";

        days.innerHTML="00";
        hours.innerHTML="00";
        minutes.innerHTML="00";
        seconds.innerHTML="00";

        message.innerHTML="🎉 Pengambilan Almamater Telah Dibuka";

        return;

    }

    const d=Math.floor(distance/(1000*60*60*24));

    const h=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const m=Math.floor((distance%(1000*60*60))/(1000*60));

    const s=Math.floor((distance%(1000*60))/1000);

    animate(days,d);
    animate(hours,h);
    animate(minutes,m);
    animate(seconds,s);

}

// =========================================
// ANIMASI ANGKA
// =========================================

function animate(element,value){

    value=String(value).padStart(2,"0");

    if(element.innerHTML!==value){

        element.style.transform="scale(1.15)";
        element.style.opacity=".7";
        element.animate([

{

transform:"scale(.8)",

opacity:.4

},

{

transform:"scale(1.15)"

},

{

transform:"scale(1)"

}

],{

duration:300

});

        setTimeout(()=>{

            element.innerHTML=value;

            element.style.transform="scale(1)";
            element.style.opacity="1";

        },120);

    }

}

// =========================================

updateCountdown();

const interval=setInterval(updateCountdown,1000);

// =========================================
// MODAL PANDUAN
// =========================================

const modal = document.getElementById("guideModal");
const openGuide = document.getElementById("openGuide");
const closeGuide = document.querySelector(".close");

openGuide.addEventListener("click", () => {
    modal.classList.add("show");
});

closeGuide.addEventListener("click", () => {
    modal.classList.remove("show");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
});




// =========================================
// TOMBOL
// =========================================

document.querySelectorAll(".info-btn,.group-btn").forEach(btn=>{

    btn.addEventListener("click",function(){

        this.style.transform="scale(.95)";

        setTimeout(()=>{

            this.style.transform="scale(1)";

        },150);

    });

});

// =========================================
// ANIMASI CARD
// =========================================

window.addEventListener("load",()=>{

    const cards=document.querySelectorAll(".card");

    cards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(25px)";

        setTimeout(()=>{

            card.style.transition=".5s";

            card.style.opacity="1";

            card.style.transform="translateY(0)";

        },index*180);

    });

});

// =========================================
// FOOTER TAHUN OTOMATIS
// =========================================

const footer=document.querySelector("footer p");

if(footer){

    footer.innerHTML=footer.innerHTML.replace("2026",new Date().getFullYear());

}


// =========================================
// NOTIFIKASI WEBSITE
// =========================================

const notification = document.getElementById("top-notification");

setTimeout(() => {

    notification.classList.add("hide-notification");

}, 10000);

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    if (!loader) return;

    // Jangan tampilkan loader pembuka ketika pengguna kembali dari halaman lain.
    // Transisi halaman yang sesuai sudah ditampilkan sendiri.
    if (returningFromPhotobox || returningFromFeedback) {
        loader.remove();
        return;
    }

    setTimeout(() => {

        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        

        setTimeout(() => {

            loader.remove();

        }, 500);

    }, 1200);
});


// =============================
// SIDEBAR MENU (OPEN & CLOSE)
// =============================

const menuBtn = document.getElementById("menuBtn");
const sideMenu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");
const menuItems = document.querySelectorAll("#sideMenu a[data-day]");

// Klik tombol ☰ → buka/tutup menu

menuBtn.addEventListener("click", () => {

    sideMenu.classList.toggle("show");
    overlay.classList.toggle("show");
    menuBtn.classList.toggle("active");

});

overlay.addEventListener("click", () => {

    sideMenu.classList.remove("show");
    overlay.classList.remove("show");
    menuBtn.classList.remove("active");

});

// ==========================
// GANTI TANGGAL COUNTDOWN
// ==========================



menuItems.forEach(item=>{

    item.addEventListener("click",(e)=>{

        e.preventDefault();

        const day=item.dataset.day;

        localStorage.setItem("selectedDay",day);

        location.reload();

    });

});

menuItems.forEach(item=>{

    if(item.dataset.day===selectedDay){

        item.classList.add("active");

    }

});

const month = "Agustus 2026";

const selectedDateText =
document.getElementById("selectedDateText");

menuItems.forEach(item=>{

    if(item.dataset.day===selectedDay){

        item.classList.add("active");

        selectedDateText.innerHTML =
        item.dataset.day + " " + month;

    }

});


const today=new Date().getDate();

menuItems.forEach(item=>{

    if(parseInt(item.dataset.day)==today){

        item.style.border="2px solid #FFD54F";

    }

});

// ==========================
// UBAH JUDUL COUNTDOWN
// ==========================

const countdownTitle = document.getElementById("countdownTitle");

const selectedSchedule = new Date(countdownDates[selectedDay]);
const titleDate = new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Jakarta"
}).format(selectedSchedule);

if (countdownTitle) {
    countdownTitle.textContent = `${titleDate}, 09.00 WIB`;
}

// ==========================
// KALENDER & NOTIFIKASI
// ==========================

const addToCalendar = document.getElementById("addToCalendar");
const enableNotification = document.getElementById("enableNotification");
const notificationStatus = document.getElementById("notificationStatus");
const calendarDate = `202608${selectedDay}`;

function setNotificationStatus(text) {
    if (notificationStatus) notificationStatus.textContent = text;
}

function downloadCalendar() {
    const title = `Pengambilan Jas Almamater UNESA - ${titleDate}`;
    const ics = [
        "BEGIN:VCALENDAR",
        "VERSION:2.0",
        "PRODID:-//Countdown Almamater UNESA//ID",
        "BEGIN:VEVENT",
        `UID:almamater-unesa-${calendarDate}@countdown`,
        `DTSTAMP:${calendarDate}T020000Z`,
        `DTSTART;TZID=Asia/Jakarta:${calendarDate}T090000`,
        `DTEND;TZID=Asia/Jakarta:${calendarDate}T160000`,
        `SUMMARY:${title}`,
        "LOCATION:Gedung Serba Guna GSG UNESA",
        "DESCRIPTION:Bawa dokumen yang diperlukan dan pastikan ukuran jas almamater sudah benar.",
        "BEGIN:VALARM",
        "TRIGGER:-P1D",
        "ACTION:DISPLAY",
        "DESCRIPTION:Besok jadwal pengambilan jas almamater UNESA.",
        "END:VALARM",
        "END:VEVENT",
        "END:VCALENDAR"
    ].join("\r\n");
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `pengambilan-almamater-${calendarDate}.ics`;
    link.click();
    URL.revokeObjectURL(link.href);
}

function showReminder(title, body) {
    new Notification(title, { body, icon: "assets/favicon.ico" });
}

function scheduleBrowserReminders() {
    const target = new Date(countdownDates[selectedDay]).getTime();
    const now = Date.now();
    const reminders = [
        { time: target - 24 * 60 * 60 * 1000, text: `Besok, ${titleDate} pukul 09.00 WIB, pengambilan jas almamater dimulai.` },
        { time: target, text: `Pengambilan jas almamater untuk ${titleDate} sudah dimulai.` }
    ];
    reminders.forEach(({ time, text }) => {
        const delay = time - now;
        if (delay > 0) {
            setTimeout(() => showReminder("Pengambilan Jas Almamater UNESA", text), delay);
        }
    });
}

if (addToCalendar) addToCalendar.addEventListener("click", downloadCalendar);

if (enableNotification) enableNotification.addEventListener("click", async () => {
    if (!("Notification" in window)) {
        setNotificationStatus("Browser ini belum mendukung notifikasi.");
        return;
    }
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
        localStorage.setItem("almamaterNotifications", "enabled");
        scheduleBrowserReminders();
        showReminder("Pengingat aktif", "Kami akan mengingatkanmu saat situs ini tetap terbuka.");
        setNotificationStatus("Notifikasi aktif. Untuk pengingat yang pasti, tambahkan juga ke kalender.");
    } else {
        setNotificationStatus("Izin notifikasi belum diberikan. Kamu tetap bisa memakai pengingat kalender.");
    }
});

if ("Notification" in window && Notification.permission === "granted" && localStorage.getItem("almamaterNotifications") === "enabled") {
    scheduleBrowserReminders();
    setNotificationStatus("Notifikasi browser aktif.");
}

function journeyDuration() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const speeds = { "slow-2g": 2400, "2g": 2000, "3g": 1550, "4g": 1050 };
    return speeds[connection?.effectiveType] || 1200;
}

function showJourney(from, to, text) {
    const duration = journeyDuration();
    const layer = document.createElement("div");
    layer.className = "page-journey";
    layer.style.setProperty("--journey-duration", `${duration}ms`);
    layer.innerHTML = `<div class="page-journey-content"><p>${text}</p><div class="page-route"><i class="fa-solid ${from}"></i><div class="page-road"><b></b><i class="fa-solid fa-person-walking"></i></div><i class="fa-solid ${to}"></i></div></div>`;
    document.body.appendChild(layer);
    requestAnimationFrame(() => layer.classList.add("show"));
    return { layer, duration };
}

const photoboxLink = document.querySelector(".photobox-menu-link");
if (photoboxLink) photoboxLink.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.setItem("journeyArrival", "photobox");
    const journey = showJourney("fa-building-columns", "fa-camera-retro", "Abadikan Momen Indahmu");
    setTimeout(() => { location.href = photoboxLink.href; }, journey.duration);
}, { once: true });

// =========================================
// KONTAK ADMIN
// Nomor WhatsApp diatur pada site-config.js
// =========================================

const contactAdminLink = document.getElementById("contactAdminLink");

function adminWhatsAppLink() {
    const rawNumber = String(contactSettings?.adminWhatsApp || "");
    const number = rawNumber.replace(/\D/g, "").replace(/^0/, "62");
    const message = "Halo Admin, saya ingin bertanya tentang fitur web.";
    return number ? `https://wa.me/${number}?text=${encodeURIComponent(message)}` : "";
}

if (contactAdminLink) {
    const destination = adminWhatsAppLink();
    if (destination) {
        contactAdminLink.href = destination;
        contactAdminLink.target = "_blank";
        contactAdminLink.rel = "noopener";
    } else {
        contactAdminLink.classList.add("is-unconfigured");
        contactAdminLink.title = "Nomor WhatsApp admin belum diatur.";
        contactAdminLink.addEventListener("click", event => {
            event.preventDefault();
            alert("Nomor WhatsApp admin belum diatur. Isi adminWhatsApp pada file site-config.js.");
        });
    }
}

// =========================================
// TRANSISI HALAMAN UTAMA <-> KRITIK & SARAN
// =========================================

const feedbackMenuLink = document.querySelector(".feedback-menu-link");

if (feedbackMenuLink) feedbackMenuLink.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.setItem("feedbackJourney", "to-feedback");
    const journey = showFeedbackJourney("fa-building-columns", "fa-message", "Sampaikan Kritik & Saran");
    setTimeout(() => { location.href = feedbackMenuLink.href; }, journey.duration);
}, { once: true });

if (sessionStorage.getItem("feedbackJourney") === "to-home") {
    sessionStorage.removeItem("feedbackJourney");
    const journey = showFeedbackJourney("fa-message", "fa-house", "Kembali ke Informasi Pengambilan");
    setTimeout(() => journey.layer.remove(), journey.duration + 100);
}

if (returningFromPhotobox) {
    sessionStorage.removeItem("journeyArrival");
    // Dihapus langsung agar loader pembuka tidak sempat muncul di balik transisi.
    document.getElementById("loader")?.remove();
    const journey = showJourney("fa-camera-retro", "fa-house", "Pulang dengan Kenangan Indah");
    setTimeout(() => journey.layer.remove(), journey.duration + 100);
}
