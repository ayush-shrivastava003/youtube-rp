 // YouTube loads things asynchrnously, so we have to wait until the contents are loaded in before doing anything
async function onDOMReady() {
    return new Promise((resolve) => {
        let interval = setInterval(() => {
            if (document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0] &&
                document.querySelector("yt-formatted-string.style-scope.ytd-channel-name")) {
                clearInterval(interval)
                return resolve()
            }
        }, 1000)
    })
}