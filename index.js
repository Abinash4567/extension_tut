document.querySelector('#popup').addEventListener("click", async function(){
    let [tab] = await chrome.tabs.query({active: true});
    chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: function respond(){
            alert("Hello World");
        }
    })
});
