function searchSongs() {
    const search = document
        .getElementById("searchBox")
        .value
        .toLowerCase()
        .trim();

    const songs = document.querySelectorAll(".song-card");

    songs.forEach(function(song) {
        const text = song.innerText.toLowerCase();

        if (text.includes(search)) {
            song.style.display = "";
        } else {
            song.style.display = "none";
        }
    });
}


function showAll() {
    const songs = document.querySelectorAll(".song-card");

    songs.forEach(function(song) {
        song.style.display = "";
    });

    document.getElementById("searchBox").value = "";
}


function showCategory(category) {
    const songs = document.querySelectorAll(".song-card");

    songs.forEach(function(song) {

        if (song.dataset.category === category) {
            song.style.display = "";
        } else {
            song.style.display = "none";
        }

    });

    document.getElementById("searchBox").value = "";
}
