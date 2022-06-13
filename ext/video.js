// The injected script that will scrape the page for the video title.

onDOMReady().then(() => {
    alert("content loaded")
    let h1 = document.getElementsByClassName("title style-scope ytd-video-primary-info-renderer")[0]
    let title = h1.children[0].innerText
    let author = document.querySelector("yt-formatted-string.style-scope.ytd-channel-name").children[0].innerText

    fetch(`http://localhost:3000?title=${title}&author=${author}`).then((res) => {
        console.log(res)
    })
})