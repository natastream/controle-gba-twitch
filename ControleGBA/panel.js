function pressButton(buttonName) {
    console.log('🎮 Botão pressionado:', buttonName);
    event.target.classList.add('pressed');
    setTimeout(() => event.target.classList.remove('pressed'), 200);
    updateStatus(`✅ ${buttonName} pressionado!`);
}

function updateStatus(message) {
    const status = document.getElementById('status');
    if (status) {
        status.textContent = message;
        setTimeout(() => status.textContent = '✅ Extensão Carregada - Botões Prontos!', 2000);
    }
}

// Twitch Extension
if (window.Twitch && window.Twitch.ext) {
    window.Twitch.ext.onAuthorized(function(auth) {
        console.log('✅ Twitch Extension autorizada!');
    });
}

console.log('✅ Panel Compacto Carregado!');