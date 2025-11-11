// Twitch Extension Helper
if (window.Twitch && window.Twitch.ext) {
    console.log('✅ Twitch Extension Helper carregado!');
    
    Twitch.ext.onAuthorized(function(auth) {
        console.log('🔑 Extensão autorizada:', auth);
        // A extensão deve aparecer agora
    });
    
    Twitch.ext.onError(function(err) {
        console.error('❌ Erro na extensão:', err);
    });
} else {
    console.log('❌ Twitch Extension Helper não carregou');
}

// Funções dos botões
function pressButton(buttonName) {
    console.log('🎮 Botão pressionado:', buttonName);
    event.target.style.opacity = '0.7';
    setTimeout(() => event.target.style.opacity = '1', 200);
}

console.log('✅ Panel GBA Carregado via JS externo!');