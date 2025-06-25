const songs = [...document.querySelectorAll('.song')];

songs.forEach(song => song.ontimeupdate = nextSong);
    
function nextSong(e) {

    const end = this.duration;

    let now = this.currentTime;

    if (end <= now) {
        
        const position = songs.indexOf(this);

        if (position === songs.length - 1) {
            songs[0].play();

        } else {
            songs[position + 1].play();
        }
    }
}