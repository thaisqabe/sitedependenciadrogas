function startVideoFromCamera() {
    const specs = { video: { width: 1080, aspectRatio: 21 / 9 } };

    navigator.mediaDevices.getUserMedia(specs)
        .then(stream => {
            const videoElement = document.querySelector('#video');
            videoElement.srcObject = stream;
        })
        .catch(error => {
            console.log(error);
        });
}

window.addEventListener("DOMContentLoaded", startVideoFromCamera);
