// Elementos do DOM
const urlInput = document.getElementById('urlInput');
const shortenBtn = document.getElementById('shortenBtn');
const loading = document.getElementById('loading');
const result = document.getElementById('result');
const error = document.getElementById('error');
const shortUrl = document.getElementById('shortUrl');
const copyBtn = document.getElementById('copyBtn');
const originalUrl = document.getElementById('originalUrl');
const createdAt = document.getElementById('createdAt');
const errorMessage = document.getElementById('errorMessage');

// Função para mostrar loading
function showLoading() {
    loading.classList.remove('hidden');
    result.classList.add('hidden');
    error.classList.add('hidden');
    shortenBtn.disabled = true;
}

// Função para esconder loading
function hideLoading() {
    loading.classList.add('hidden');
    shortenBtn.disabled = false;
}

// Função para mostrar resultado
function showResult(data) {
    shortUrl.value = data.shortURL;
    originalUrl.textContent = data.originURL;
    createdAt.textContent = new Date(data.createdAt).toLocaleString('pt-BR');
    
    result.classList.remove('hidden');
    error.classList.add('hidden');
}

// Função para mostrar erro
function showError(message) {
    errorMessage.textContent = message;
    error.classList.remove('hidden');
    result.classList.add('hidden');
}

// Função para validar URL
function isValidUrl(string) {
    try {
        new URL(string);
        return true;
    } catch (_) {
        return false;
    }
}

// Função para encurtar URL
async function shortenUrl() {
    const url = urlInput.value.trim();
    
    // Validação
    if (!url) {
        showError('Por favor, insira uma URL válida.');
        return;
    }
    
    if (!isValidUrl(url)) {
        showError('Por favor, insira uma URL válida (ex: https://www.google.com).');
        return;
    }
    
    showLoading();
    
    try {
        const response = await fetch('/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ originURL: url })
        });
        
        const data = await response.json();
        
        if (!response.ok) {
            throw new Error(data.error || 'Erro ao encurtar URL');
        }
        
        showResult(data);
        
        // Limpar input
        urlInput.value = '';
        
    } catch (err) {
        console.error('Erro:', err);
        showError(err.message || 'Erro ao conectar com o servidor. Tente novamente.');
    } finally {
        hideLoading();
    }
}

// Função para copiar URL
async function copyUrl() {
    try {
        await navigator.clipboard.writeText(shortUrl.value);
        
        // Feedback visual
        const originalText = copyBtn.innerHTML;
        copyBtn.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        copyBtn.style.background = '#28a745';
        
        setTimeout(() => {
            copyBtn.innerHTML = originalText;
            copyBtn.style.background = '';
        }, 2000);
        
    } catch (err) {
        console.error('Erro ao copiar:', err);
        showError('Erro ao copiar URL. Tente copiar manualmente.');
    }
}

// Event listeners
shortenBtn.addEventListener('click', shortenUrl);

urlInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        shortenUrl();
    }
});

copyBtn.addEventListener('click', copyUrl);

// Animações de entrada
document.addEventListener('DOMContentLoaded', () => {
    // Animação suave para os elementos
    const elements = document.querySelectorAll('.header, .main, .features');
    elements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            el.style.transition = 'all 0.6s ease';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Feedback visual para o input
urlInput.addEventListener('focus', () => {
    urlInput.style.borderColor = '#667eea';
});

urlInput.addEventListener('blur', () => {
    if (!urlInput.value.trim()) {
        urlInput.style.borderColor = '#e1e5e9';
    }
});

// Prevenir múltiplos cliques
let isProcessing = false;

shortenBtn.addEventListener('click', () => {
    if (isProcessing) return;
    isProcessing = true;
    
    shortenUrl().finally(() => {
        isProcessing = false;
    });
});
