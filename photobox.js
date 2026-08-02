// =====================================================
// ISI 8 TEMPAT PHOTObOX DI BAGIAN INI
// Cukup ganti teks di dalam tanda kutip.
// Pratinjau peta dibuat dari "lokasi"; tombol Maps mencari berdasarkan "nama" tempat.
// =====================================================

const photoboxPlaces = [
    {
        nama: "Photoplace Flagship Royal Plaza Surabaya",
        lokasi: "Royal Plaza Lt. LG, Jl. Ahmad Yani No.16-18, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur",
        jarak: "±1.1–1.2 km",
        instagram: "@photoplace.id"
    },
    {
        nama: "Photocandy Studio Royal Plaza",
        lokasi: "Royal Plaza Lt. 3 (M3-28, Jl. Ahmad Yani No.16-18, Wonokromo, Kec. Wonokromo, Surabaya, Jawa Timur",
        jarak: "±1-1.2 km",
        instagram: "@photocandystudio"
    },
    {
        nama: "Gwiyomi Selfie Studio Royal Plaza ", 
        lokasi: "Royal Plaza Lt. 3 (M3-35, Jl. Ahmad Yani No.16-18, Wonokromo. Kec. Wonokromo, Surabaya, Jawa Timur", 
        jarak: "±1.1-1.2 km", 
        instagram: "@gwiyomiselfiestudio"
    },
    {
        nama: "Selfie Time Royal Plaza",
        lokasi: "Royal Plaza Lantai Ground, Jl. A. Yani Frontage Barat No. 16-18, Wonokromo, Surabaya, Jawa Timur",
        jarak: "sekitar 1 km",
        kategori: "Mall",
        instagram: "@selfietimeid"
    },
    {
        nama: "Ixobox Royal Plaza",
        lokasi: "Royal Plaza LG AB3 / 26-27, Jl. A. Yani No. 16-18, Wonokromo, Surabaya, Jawa Timur",
        jarak: "sekitar 1 km",
        kategori: "Mall",
        instagram: ""
    },
    {
        nama: "Xstudio Photobox Royal Plaza",
        lokasi: "Royal Plaza, Jl. Ahmad Yani, Wonokromo, Surabaya, Jawa Timur",
        jarak: "sekitar 1 km",
        kategori: "Mall",
        instagram: ""
    },
    {
        nama: "Clarity Photobooth",
        lokasi: "Jl. Sidosermo Indah XII No. 5, Sidosermo, Wonocolo, Surabaya, Jawa Timur",
        jarak: "sekitar 4-5 km",
        kategori: "Lokasi mandiri",
        instagram: ""
    },
    {
        nama: "Selfie Time Tunjungan Plaza 1", 
        lokasi: "Tunjungan Plaza 1 Lt. 2, Jl. Jenderal Basuki Rachmat No.8-12, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur", 
        jarak: "±7-7.5 km", 
        instagram: "https://www.instagram.com/selfietimeid/"
    },
    {
        nama: "Photoism Tunjungan Plaza", 
        lokasi: "Tunjungan Plaza 1 Lt. 3 Unit. 47-50, Jl. Jenderal Basuki Rachmat No.8-12 Lt 5, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur", 
        jarak: "±6.8-7 km",
        instagram: "https://www.instagram.com/photoism_idn/"
    },
    {
        nama: "Photocandy Studio Tunjungan Plaza", 
        lokasi: "PhotoCandy Studio Tunjungan Plaza, Tunjungan Plaza 2 Lt. LG, Jl. Basuki Rahmat. 8-12, Kedungdoro, Kec, Kedungdoro, Kec. Tegalsari, Surabaya, Jawa Timur", 
        jarak: "±6.5-7 km", 
        instagram: "https://www.instagram.com/photocandystudio/"
    },
    {
        nama: "Fun Self Photo Studio PTC", 
        lokasi: "Pakuwon Trade Center, Jalan Mayjen Yono Suwoyo No.2, Babatan, Wiyung, Surabaya, Jawa Timur", 
        jarak: "±11.5-12 km", 
        instagram: "https://www.instagram.com/photomaticsid/"
    },
    {
        nama: "Photomatics PTC", 
        lokasi: "Pakuwon Trade Center, Jalan Puncak Indah Lontar II No.2, Babatan, Wiyung, Surabaya, East Java 60213", 
        jarak: "±11.5-12 km", 
        instagram: "@photomatics"
    },
    {
        nama: "Joy Photocorner",
        lokasi: "Jl. Simpang Darmo Permai Selatan IX No. 10, Lontar, Surabaya, Jawa Timur",
        jarak: "sekitar 13-15 km",
        kategori: "Lokasi mandiri",
        instagram: ""
    },
    {
        nama: "Snapobox di Pause Coffee",
        lokasi: "Pause Coffee, Bukit Telaga Golf TC3/1, Surabaya, Jawa Timur",
        jarak: "cek rute di Maps",
        kategori: "Kafe",
        instagram: "@snapobox"
    }
];

// Pilihan tambahan ini sengaja dipisahkan dari rekomendasi utama di atas.
// Pengguna dapat membuka Google Maps untuk mengecek ketersediaan terkini.
const alternativePlaces = [
    {
        nama: "April Photo Studio",
        lokasi: "Royal Plaza, Lantai 3 M3 No. 05, Jl. Ahmad Yani No. 16-18, Wonokromo, Surabaya",
        jarak: "±1,2 km",
        distanceKm: 1.2
    },
    {
        nama: "Laxa Studio",
        lokasi: "Royal Plaza, Lantai 3 M3 No. 18, Jl. Ahmad Yani No. 16-18, Wonokromo, Surabaya",
        jarak: "±1,2 km",
        distanceKm: 1.2
    },
    {
        nama: "Onix Photostudio",
        lokasi: "Royal Plaza, Lantai 3 M3 No. 26, Jl. Ahmad Yani No. 16-18, Wonokromo, Surabaya",
        jarak: "±1,2 km",
        distanceKm: 1.2
    },
    {
        nama: "Photolookup",
        lokasi: "Royal Plaza, Lantai 3 M2 No. 22-23, Jl. Ahmad Yani No. 16-18, Wonokromo, Surabaya",
        jarak: "±1,2 km",
        distanceKm: 1.2
    },
    {
        nama: "Seoulfie Photobox",
        lokasi: "Kaza Mall, Lantai G, Jl. Kapas Krampung No. 45, Tambaksari, Surabaya",
        jarak: "±9-10 km",
        distanceKm: 9.5
    },
    {
        nama: "Cherish Photobox",
        lokasi: "Pakuwon Trade Center, Lantai UG Unit E9 No. 38, Jl. Raya Lontar No. 2, Wiyung, Surabaya",
        jarak: "±11,5-12 km",
        distanceKm: 11.5
    },
    {
        nama: "KPix Selfie Studio",
        lokasi: "Pakuwon Mall, Lantai 2M, Jl. Raya Lontar No. 2, Babatan, Wiyung, Surabaya",
        jarak: "±11,5-12 km",
        distanceKm: 11.5
    }
];

const grid = document.getElementById("photoboxGrid");

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

const backLink = document.querySelector(".back-link");
if (backLink) backLink.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.setItem("journeyArrival", "home");
    const journey = showJourney("fa-camera-retro", "fa-house", "Pulang dengan Kenangan Indah");
    setTimeout(() => { location.href = backLink.href; }, journey.duration);
}, { once: true });

if (sessionStorage.getItem("journeyArrival") === "photobox") {
    sessionStorage.removeItem("journeyArrival");
    const journey = showJourney("fa-building-columns", "fa-camera-retro", "Abadikan Momen Indahmu");
    setTimeout(() => journey.layer.remove(), journey.duration + 100);
}

function escapeHtml(value = "") {
    return String(value).replace(/[&<>'"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#039;", "\"": "&quot;" })[character]);
}

function mapUrl(lokasi) {
    return `https://www.google.com/maps?q=${encodeURIComponent(lokasi)}&output=embed`;
}

function mapsLink(nama) {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(nama)}`;
}

function instagramLink(akun) {
    const input = String(akun || "").trim();
    if (!input) return "";
    if (/^https?:\/\//i.test(input)) return input;

    // Mendukung format @username, username, atau instagram.com/username.
    const username = input
        .replace(/^@/, "")
        .replace(/^(www\.)?instagram\.com\//i, "")
        .replace(/\/.*/, "");

    return username ? `https://www.instagram.com/${username}/` : "";
}

function createCard(tempat) {
    const instagramUrl = instagramLink(tempat.instagram);
    const instagram = instagramUrl
        ? `<a class="instagram" href="${escapeHtml(instagramUrl)}" target="_blank" rel="noopener"><i class="fa-brands fa-instagram"></i> Instagram</a>`
        : "";
    const map = tempat.lokasi
        ? `<iframe class="map-preview" title="Peta ${escapeHtml(tempat.nama)}" src="${mapUrl(tempat.lokasi)}" loading="lazy"></iframe>`
        : "";
    const maps = tempat.nama
        ? `<a class="maps" href="${mapsLink(tempat.nama)}" target="_blank" rel="noopener"><i class="fa-solid fa-map-location-dot"></i> Lihat di Maps</a>`
        : "";
    const actions = instagram || maps ? `<div class="card-actions">${instagram}${maps}</div>` : "";

    return `<article class="place-card">
        ${map}
        <div class="place-content">
            ${tempat.jarak ? `<span class="distance"><i class="fa-solid fa-route"></i> ${escapeHtml(tempat.jarak)}</span>` : ""}
            ${tempat.kategori ? `<span class="place-type"><i class="fa-solid fa-store"></i> ${escapeHtml(tempat.kategori)}</span>` : ""}
            <h2>${escapeHtml(tempat.nama || "Tempat photobox")}</h2>
            ${tempat.lokasi ? `<p>${escapeHtml(tempat.lokasi)}</p>` : ""}
        </div>
        ${actions}
    </article>`;
}

grid.innerHTML = photoboxPlaces.map(createCard).join("");

// Pencarian bebas di Google Maps untuk tempat di luar daftar rekomendasi.
const placeSearchForm = document.getElementById("placeSearchForm");
const placeSearchInput = document.getElementById("placeSearchInput");
const placeSearchResult = document.getElementById("placeSearchResult");
const placeSuggestions = document.getElementById("placeSuggestions");

function showMapSearchResult(query) {
    if (!placeSearchResult) return;
    const safeQuery = escapeHtml(query);
    const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
    placeSearchResult.innerHTML = `
            <article class="search-map-card">
                <div class="search-map-card__title"><i class="fa-solid fa-map-location-dot"></i><span>Hasil pencarian: <strong>${safeQuery}</strong></span></div>
                <iframe title="Google Maps untuk ${safeQuery}" src="${mapUrl(query)}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                <a href="${googleMapsUrl}" target="_blank" rel="noopener"><i class="fa-solid fa-arrow-up-right-from-square"></i> Buka hasil lengkap di Google Maps</a>
            </article>`;
}

function showPlaceSuggestions(keyword) {
    if (!placeSuggestions) return;
    const normalized = keyword.toLowerCase().trim();
    const isPhotoboxSearch = /photo\s*(box|booth)/i.test(normalized);
    if (!isPhotoboxSearch) {
        placeSuggestions.innerHTML = "";
        return;
    }

    const terms = normalized.replace(/photo\s*(box|booth)/ig, "").trim().split(/\s+/).filter(Boolean);
    const nearbyAlternatives = alternativePlaces
        .filter(tempat => tempat.distanceKm <= 15)
        .sort((a, b) => a.distanceKm - b.distanceKm);
    const matches = nearbyAlternatives.filter(tempat => {
        const searchable = `${tempat.nama} ${tempat.lokasi}`.toLowerCase();
        return terms.every(term => searchable.includes(term));
    });

    const suggestions = matches.length ? matches : nearbyAlternatives;
    placeSuggestions.innerHTML = `<p class="place-suggestions__title"><i class="fa-solid fa-wand-magic-sparkles"></i> Pilihan lain (radius maks. 15 km dari GSG Unesa)</p>${suggestions.map(tempat => `
        <button type="button" class="place-suggestion" data-place="${escapeHtml(tempat.nama)}">
            <i class="fa-solid fa-camera-retro"></i>
            <span><strong>${escapeHtml(tempat.nama)}</strong><small>${escapeHtml(tempat.lokasi)}</small></span>
            <em>${escapeHtml(tempat.jarak)}</em>
        </button>`).join("")}`;
}

if (placeSearchForm && placeSearchInput && placeSearchResult) {
    placeSearchForm.addEventListener("submit", event => {
        event.preventDefault();
        const query = placeSearchInput.value.trim();
        if (!query) return;
        showMapSearchResult(query);
        placeSuggestions.innerHTML = "";
        placeSearchResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    placeSearchInput.addEventListener("input", () => {
        const keyword = placeSearchInput.value.trim();
        if (!keyword) {
            placeSuggestions.innerHTML = "";
            placeSearchResult.innerHTML = "";
            return;
        }
        showPlaceSuggestions(keyword);
    });
    placeSuggestions?.addEventListener("click", event => {
        const suggestion = event.target.closest(".place-suggestion");
        if (!suggestion) return;
        const placeName = suggestion.dataset.place;
        placeSearchInput.value = placeName;
        placeSuggestions.innerHTML = "";
        showMapSearchResult(placeName);
        placeSearchResult.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });
}
