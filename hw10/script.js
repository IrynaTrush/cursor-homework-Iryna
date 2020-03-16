const keyValues = ['q', 'w', 'e', 'r', 't', 'y', 'u'];

const items = document.querySelectorAll('.item');
items.forEach(item => {
    item.addEventListener('click', () => {
        playList(item);
    });
});

document.addEventListener('keydown', e => {
    if(e.repeat) return;
    const item = e.key;
    const itemIndex = keyValues.indexOf(item);
    if(itemIndex > -1) playList(items[itemIndex]);
});

let song = null;

function playList(item) {
    let song = document.getElementById(item.dataset.note);
    song.play();
    song.currentTime = 0;

    document.addEventListener('play', e => {
        if(song && song != e.target) {
            song.pause();
        }
        song = e.target;
    },
    true
    );
}
