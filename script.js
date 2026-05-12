document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.menu-btn');
    const appContainer = document.querySelector('.app-container');
    
    // Eğer butona basınca ses çıksın istersen 'click.mp3' adında bir sesi assets klasörüne koy.
     const clickSound = new Audio('assets/click.mp3'); 

    // Hangi butonun hangi arka planı (assets klasöründeki ismini) açacağını belirliyoruz
    const backgrounds = {
        "Menümüz": "url('assets/bg-menu.jpg')",
        "Online Sipariş": "url('assets/bg-siparis.jpg')",
        "Adresimiz": "url('assets/bg-adres.jpg')",
        "Bize Yazın": "url('assets/bg-iletisim.jpg')"
    };

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonName = button.innerText;
            
            // 1. Tıklama sesini çal (Aktif etmek için başındaki // işaretlerini silmen yeterli)
             clickSound.currentTime = 0; // Sesi başa sar
             clickSound.play();

            // 2. Arka planı yumuşakça değiştir
            if (backgrounds[buttonName]) {
                appContainer.style.backgroundImage = backgrounds[buttonName];
            }

            // 3. Butonların aktiflik durumunu güncelle
            buttons.forEach(btn => btn.classList.remove('active-btn')); // Diğerlerinden aktifliği al
            button.classList.add('active-btn'); // Tıklanan butona aktifliği ver
        });
    });
});