function feedbackJourneyDuration() {
    const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    const speeds = { "slow-2g": 2200, "2g": 1850, "3g": 1350, "4g": 850 };

    // Browser yang menyediakan estimasi downlink mendapat durasi yang lebih presisi.
    if (typeof connection?.downlink === "number") {
        if (connection.downlink < 1) return 2200;
        if (connection.downlink < 3) return 1650;
        if (connection.downlink < 10) return 1150;
        return 800;
    }

    return speeds[connection?.effectiveType] || 1100;
}

function showFeedbackJourney(fromIcon, toIcon, message) {
    const duration = feedbackJourneyDuration();
    const layer = document.createElement("div");
    layer.className = "feedback-journey";
    layer.style.setProperty("--feedback-journey-duration", `${duration}ms`);
    layer.innerHTML = `
        <div class="feedback-journey__content">
            <p>${message}</p>
            <div class="feedback-journey__route" aria-hidden="true">
                <i class="fa-solid ${fromIcon}"></i>
                <div class="feedback-journey__path">
                    <b></b>
                    <i class="fa-solid fa-paper-plane"></i>
                </div>
                <i class="fa-solid ${toIcon}"></i>
            </div>
        </div>`;
    document.body.appendChild(layer);
    requestAnimationFrame(() => layer.classList.add("show"));
    return { layer, duration };
}
