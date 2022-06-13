chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status != "complete") return
    let fullurl = tab.url.split("/")
    
    if (fullurl[2] != "www.youtube.com") return
    let video_title = null

    switch (fullurl[3]) {
        case "":
            video_title = "Idle"
            break

        case "channel":
            video_title = "Spying on a channel"
            break

        default:
            chrome.scripting.executeScript({
                target: {tabId},
                files: ["updateRPC.js"]
            })
    }
})