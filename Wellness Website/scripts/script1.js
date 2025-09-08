// this is the function to direct thebuser to the required page that he selects from the search bar.

let search = document.getElementById("search");

function searchElement() {
    let selectedPage = search.value;
    if (selectedPage) {
        window.location.href = selectedPage;
    }
}

search.addEventListener("change", searchElement);