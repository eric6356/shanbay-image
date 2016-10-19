function restoreEngine() {
    chrome.storage.sync.get({
        engine: 'chrome'
    }, function (items) {
        document.getElementById('engine').value = items.engine;
    });
}

function saveEngine() {
    chrome.storage.sync.set({
        engine: document.getElementById('engine').value
    });
}

document.addEventListener('DOMContentLoaded', function() {
    restoreEngine();
    document.querySelector('#engine').addEventListener('change', saveEngine);
});
