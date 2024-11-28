const music = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
const musicIcon = musicToggle.querySelector('i');

// 默认音乐不自动播放
music.volume = 0.3;  // 设置适中的音量

musicToggle.addEventListener('click', function () {
    if (music.paused) {
        music.play();
        musicIcon.classList.add('playing');
    } else {
        music.pause();
        musicIcon.classList.remove('playing');
    }
});