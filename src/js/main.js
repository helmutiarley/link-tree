var items = document.getElementsByClassName("item");

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseover", function() {
        var shareHidden = this.getElementsByClassName("share-hidden")[0];
        shareHidden.style.opacity = "1";
    });
    items[i].addEventListener("mouseout", function() {
        var shareHidden = this.getElementsByClassName("share-hidden")[0];
        shareHidden.style.opacity = "0";
    });
}
