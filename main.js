var engineDict = {
    google: 'https://www.google.com/search?tbm=isch&q=',
    bing: 'https://cn.bing.com/images/search?q='
}

function getWord() {
    var h1 = document.querySelector('h1:not(.span2)');
    return h1 && h1.innerText;
}

function getLink(engine, word) {
    return engineDict[engine] + word;
}

document.addEventListener('keypress', function (e) {
    var word = getWord();

    if (!word) {
        return
    }

    chrome.storage.sync.get({
        engine: 'google',
        shortcut: 'i'
    }, function (items) {
        if (e.key.toLowerCase() == items.shortcut.toLowerCase()) {
            window.open(getLink(items.engine, word), '_blank');
        }
    })
})
