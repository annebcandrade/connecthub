
function getCookie(name) {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        // Verificar se o cookie começa com o nome do cookie desejado
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

// Função para verificar se o usuário está autenticado com base no nome de usuário armazenado nos cookies
export function checkLoggedIn() {
    // Verificar se há um cookie com o nome de usuário
    const username = getCookie('username');
    return !!username;
}