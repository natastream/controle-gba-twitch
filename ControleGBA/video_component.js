// Remova toda a estrutura JSON complexa e envie apenas uma string simples
function sendTriggerToStreamerBot(buttonId) {
    if (ws.readyState === WebSocket.OPEN) {
        // Envia apenas o ID do botão como uma string simples
        ws.send(buttonId); 
    } else {
        console.error('WebSocket is not open. Cannot send message.');
    }
}