var engineDict = {
    chrome: 'https://www.google.com/search?tbm=isch&q=',
    bing: 'https://cn.bing.com/images/search?q='
}

function getWord () {
    var h1 = document.querySelector('h1:not(.span2)');
    return h1 && h1.innerText;
}

function getLink (engine, word) {
    return engineDict[engine] + word;
}

document.addEventListener('keypress', function(e) {
    var word = getWord();
    if (word && (e.keyCode == 73 || e.keyCode == 105)) { // 'I' or 'i'
        chrome.storage.sync.get({
            engine: 'chrome'
        }, function (items) {
            window.open(getLink(items.engine, word), '_blank');
        });
    }
})
