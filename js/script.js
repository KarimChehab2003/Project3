function copyToClipboard() {
    // var copyText = document.getElementById(sentence).innerHTML;
    // navigator.clipboard.writeText(copyText);
    // alert('Your text has been copied' + copyText);

    var text = document.getElementById(sentence).innerHTML;
    navigator.clipboard.writeText(text).then(function () {
        console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
        console.error('Async: Could not copy text: ', err);
    });
}
