function startVideoFromCamera() {
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            const videoElement = document.querySelector("#video");
            videoElement.srcObject = stream;
        })
        .catch(error => console.error(error));
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera);