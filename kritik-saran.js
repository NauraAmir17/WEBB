const feedbackForm = document.getElementById("feedbackForm");
const feedbackSubmit = document.getElementById("feedbackSubmit");
const feedbackStatus = document.getElementById("feedbackStatus");
const backLink = document.querySelector(".back-link");

function setStatus(message, state = "") {
    feedbackStatus.textContent = message;
    feedbackStatus.className = state;
}

function getEndpoint() {
    return String(contactSettings?.feedbackEndpoint || "").trim();
}

if (backLink) backLink.addEventListener("click", event => {
    event.preventDefault();
    sessionStorage.setItem("feedbackJourney", "to-home");
    const journey = showFeedbackJourney("fa-message", "fa-house", "Kembali ke Informasi Pengambilan");
    setTimeout(() => { location.href = backLink.href; }, journey.duration);
}, { once: true });

if (sessionStorage.getItem("feedbackJourney") === "to-feedback") {
    sessionStorage.removeItem("feedbackJourney");
    const journey = showFeedbackJourney("fa-building-columns", "fa-message", "Sampaikan Kritik & Saran");
    setTimeout(() => journey.layer.remove(), journey.duration + 100);
}

if (feedbackForm) {
    feedbackForm.addEventListener("submit", async event => {
        event.preventDefault();
        if (!feedbackForm.reportValidity()) return;

        const endpoint = getEndpoint();
        if (!endpoint) {
            setStatus("Tujuan penyimpanan belum diatur. Isi feedbackEndpoint pada file site-config.js.", "is-error");
            return;
        }

        const data = new FormData(feedbackForm);
        data.append("submittedAt", new Date().toISOString());
        data.append("source", "Website Pengambilan Almamater UNESA");

        feedbackSubmit.disabled = true;
        setStatus("Sedang mengirimkan kritik dan saran...");

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                // Web App Google Apps Script menerima data lintas domain,
                // tetapi browser tidak selalu diizinkan membaca balasannya.
                // Mode ini tetap mengirim data formulir ke Sheet tanpa error CORS.
                mode: "no-cors",
                body: new URLSearchParams(data)
            });

            // Respons no-cors bersifat opaque, sehingga status HTTP-nya tidak
            // dapat dibaca oleh browser. Respons biasa tetap diperiksa.
            if (response.type !== "opaque" && !response.ok) {
                throw new Error("Tujuan penyimpanan tidak dapat menerima data.");
            }

            feedbackForm.reset();
            setStatus("Terima kasih. Kritik dan saran Anda sudah terkirim.", "is-success");
        } catch (error) {
            setStatus("Kritik dan saran belum terkirim. Coba lagi beberapa saat lagi.", "is-error");
        } finally {
            feedbackSubmit.disabled = false;
        }
    });
}
