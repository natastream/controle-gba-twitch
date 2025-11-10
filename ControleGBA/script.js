// Video Component - Controle GBA
console.log('🎮 Video Component Carregado - Natanaelsom');

let websocket = null;
let isConnected = false;

function connectWebSocket() {
    try {
        websocket = new WebSocket('ws://192.168.15.2:8080/');
        
        websocket.onopen = function() {
            console.log('✅ Conectado ao Streamer.bot!');
            isConnected = true;
            updateStatus('Conectado ✓');
        };
        
        websocket.onerror = function(error) {
            console.log('❌ Erro WebSocket');
            isConnected = false;
            updateStatus('Offline');
        };
        
        websocket.onclose = function() {
            console.log('🔌 WebSocket fechado');
            isConnected = false;
            setTimeout(connectWebSocket, 3000);
        };
        
    } catch (error) {
        console.error('Erro conexão:', error);
    }
}

function sendCommand(actionId) {
    console.log('🎯 Enviando:', actionId);
    
    if (!isConnected) {
        updateStatus('❌ Não conectado');
        return;
    }
    
    try {
        const message = {
            request: 'DoAction',
            action: {
                id: actionId
            }
        };
        websocket.send(JSON.stringify(message));
        updateStatus(`✅ ${actionId}`);
        console.log('📤 Enviado com sucesso!');
    } catch (error) {
        updateStatus('❌ Erro envio');
    }
}

function updateStatus(message) {
    const status = document.getElementById('status');
    if (status) status.textContent = message;
}

// Iniciar
connectWebSocket();