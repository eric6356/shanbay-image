(function addImgModal () {
    var imgModal = document.querySelector('.shortcuts-modal').cloneNode();
    imgModal.classList.remove('shortcuts-modal')
    imgModal.setAttribute('id', 'img-modal');
    document.body.appendChild(imgModal);
})(); // init image modal

function getWord () {
    var h1 = document.querySelector('h1:not(.span2)');
    return h1 && h1.innerText;
}

function removeIFrame() {
    var imgModal = document.querySelector('#img-modal');
    var IFrame = imgModal.querySelector('iframe');
    if (IFrame) {
        IFrame.remove();
    }
}

function addIFrame(word) {
    var imgModal = document.querySelector('#img-modal');
    var link = 'https://www.google.com/search?tbm=isch&q=' + word;
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', link);
    imgModal.appendChild(iframe);
}

function updateImgModal(word) {
    removeIFrame();
    addIFrame();
}

document.addEventListener('keypress', function(e) {
    var word = getWord();
    if (word && (e.keyCode == 73 || e.keyCode == 105)) { // 'i' or 'I'
        var modalOpened = document.body.classList.contains('modal-open');
        var imgModal = document.querySelector('#img-modal');
        if (modalOpened) {
            document.querySelector('.modal-backdrop').click();
            imgModal.removeAttribute('style');
        } else {
            document.querySelector('a.shortcuts-button').click(); // toggle shortcuts modal
            document.querySelector('.shortcuts-modal').removeAttribute('style'); // hide shortcuts modal
            updateImgModal(word);
            imgModal.setAttribute('style', 'display: block'); // show img modal
        }
    }
})