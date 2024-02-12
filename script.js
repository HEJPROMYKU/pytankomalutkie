document.addEventListener('DOMContentLoaded', function() {
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        document.querySelector('.container').appendChild(heart);
        heart.style.animationName = 'fall';
        setTimeout(() => heart.remove(), parseFloat(heart.style.animationDuration) * 1000);
    }

    setInterval(createHeart, 50);

    document.getElementById('btnTak').addEventListener('click', function() {
        document.getElementById('pytanieWalentynka').classList.add('ukryj');
        document.getElementById('pytanieMeeting').classList.remove('ukryj');
        document.getElementById('pytanieMeeting').classList.add('aktywne'); 
    });

    document.getElementById('btnNie').addEventListener('click', function() {
        document.getElementById('pytanieWalentynka').classList.add('ukryj');
        document.getElementById('pytaniegodzinanie').classList.remove('ukryj');
        document.getElementById('pytaniegodzinanie').classList.add('aktywne'); 
    });

    document.getElementById('meetingTak').addEventListener('click', function() {
        document.getElementById('pytanieMeeting').classList.add('ukryj');
        document.getElementById('pytaniegodzina').classList.remove('ukryj');
        document.getElementById('pytaniegodzina').classList.add('aktywne'); 
    });

    document.getElementById('meetingNie').addEventListener('click', function() {
        document.getElementById('pytanieMeeting').classList.add('ukryj');
        document.getElementById('pytaniegodzinanie').classList.remove('ukryj');
        document.getElementById('pytaniegodzinanie').classList.add('aktywne'); 
    });
    
    document.getElementById('btnodpowiedznie').addEventListener('click', function() {
        const odpowiedz = document.getElementById('odpowiedz').value.trim();
        if(odpowiedz) {
            document.getElementById('miejsceOdpowiedzi').textContent = odpowiedz;
            document.getElementById('pytanienie').classList.remove('ukryj');
            document.getElementById('pytaniegodzinanie').classList.add('ukryj');
            document.getElementById('pytanienie').classList.add('aktywne');
        } else {
            alert('Proszę wpisz odpowiedź.');
        }
    });
    
    document.getElementById('btnOdpowiedz').addEventListener('click', function() {
        const odpowiedzUzytkownika = document.getElementById('odpowiedzUzytkownika').value.trim();
        if(odpowiedzUzytkownika) {
            document.getElementById('tekstOdpowiedzi').textContent = odpowiedzUzytkownika;
            document.getElementById('wynik').classList.remove('ukryj');
            document.getElementById('pytaniegodzina').classList.add('ukryj');
            document.getElementById('wynik').classList.add('aktywne');
        } else {
            alert('Proszę wpisz odpowiedź.');
        }
    });
});