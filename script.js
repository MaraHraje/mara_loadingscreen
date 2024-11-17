window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('loadingScreen').style.display = 'block';

    const music = document.getElementById('backgroundMusic');
    music.volume = 0.1; // Nastavení základní hlasitosti na 0.1

    document.addEventListener('keydown', function (event) {
        if (event.code === 'Space') {
            if (music.paused) {
                music.play();
            } else {
                music.pause();
            }
        }
    });

    const images = [
        'images/image1.jpg',
        'images/image2.jpg',
        'images/image3.jpg',
        'images/image4.jpg',
        'images/image5.jpg',
        'images/image6.jpg',
        'images/image7.jpg'
    ];

    let currentImageIndex = 0;

    function changeBackgroundImage() {
        const imageElement = document.querySelector('.image');
        imageElement.style.backgroundImage = `url(${images[currentImageIndex]})`;

        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackgroundImage, 7000); // Změna každých 12 sekund
    changeBackgroundImage();

    window.addEventListener('message', (event) => {
        if (event.data.action === 'hideLoadingScreen') {
            document.getElementById('loadingScreen').style.display = 'none';
        }
    });
});
