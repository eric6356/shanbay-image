function restoreConfig() {
    chrome.storage.sync.get({
        engine: 'chrome',
        shortcut: 'i'
    }, function (items) {
        document.getElementById('engine').value = items.engine;
        document.getElementById('inputShortcut').value = items.shortcut;
    });
}

function saveEngine() {
    chrome.storage.sync.set({
        engine: this.value
    });
}

function saveShortcut() {
    
}

function modifyShortcut() {
    var inputShortcut = document.getElementById('inputShortcut');
    if (this.innerText == '修改') {
        this.innerText = '保存'
        inputShortcut.removeAttribute('disabled');
        inputShortcut.select();
    } else {
        var newShortcut = inputShortcut.value
        if (/^[\x00-\x7F]$/.test(newShortcut)) {
            chrome.storage.sync.set({
                shortcut: inputShortcut.value
            })
        } else {
            chrome.storage.sync.get({
                shortcut: 'i'
            }, function (items) {
                inputShortcut.value = items.shortcut
            })
        }
        inputShortcut.setAttribute('disabled', true);
        this.innerText = '修改'
    }
}

document.addEventListener('DOMContentLoaded', function() {
    restoreConfig();
    document.querySelector('#engine').addEventListener('change', saveEngine);
    document.querySelector('#btnShortcut').addEventListener('click', modifyShortcut);
});
