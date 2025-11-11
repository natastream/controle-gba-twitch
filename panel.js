function pressButton(buttonName) {
    console.log('🎮 Botão pressionado:', buttonName);
    // Efeito visual
    event.target.style.opacity = '0.7';
    setTimeout(() => event.target.style.opacity = '1', 200);
}

console.log('✅ Panel GBA Carregado via JS externo!');