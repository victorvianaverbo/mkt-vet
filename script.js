/**
 * Vanilla JS para Interatividade de Alta Performance Clínica
 * Sem dependências pesadas. Focado em Intersection Observers.
 */

document.addEventListener('DOMContentLoaded', () => {

    /** 
     * 1. Reveal on Scroll Genérico (Elementos que sobem com Fade)
     * Usado nas caixas do Bento, Textos de Cases, etc.
     */
    const revealElements = document.querySelectorAll('.reveal-on-scroll');

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px 0px -20px 0px', // Reduzido de -100px para garantir que apareça no mobile
        threshold: 0.05
    });

    revealElements.forEach(el => revealObserver.observe(el));


    /**
     * 2. Effeito Skew Oberservado nos Mocksups dos Dashboards do Google Ads
     * Aplica classe .skewed para tirar do 3D fixo apenas logo quando aparece na tela
     */
    const mockupElements = document.querySelectorAll('.skew-on-scroll');

    const skewObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('skewed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3 // Esperar 30% da Imagem aparecer para dar o giro
    });

    mockupElements.forEach(mockup => skewObserver.observe(mockup));


    /**
     * 3. Animação de Entrada do Form (Reflect) 
     * Usado nas Pricing Cards para dar um leve pop up no Pricing table.
     */
    const priceCards = document.querySelectorAll('.reflect-on-scroll');
    
    const priceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
         rootMargin: '0px 0px -20px 0px',
         threshold: 0.05
    });

    priceCards.forEach(card => {
        card.classList.add('reveal-on-scroll');
        priceObserver.observe(card);
    });


    /**
     * 4. Validação de Telefone (intl-tel-input)
     */
    const phoneInput = document.querySelector('#modal-tel');
    let iti;
    if (phoneInput && typeof window.intlTelInput === 'function') {
        try {
            iti = window.intlTelInput(phoneInput, {
                initialCountry: 'br',
                preferredCountries: ['br', 'us', 'pt'],
                separateDialCode: true,
                strictMode: true,
                utilsScript: 'https://cdn.jsdelivr.net/npm/intl-tel-input@24.6.0/build/js/utils.js'
            });
        } catch (e) {
            console.error('Erro ao inicializar intlTelInput:', e);
        }
    }


    /**
     * 5. Lógica de Modal
     */
    const modal = document.querySelector('#lead-modal');
    const modalClose = document.querySelector('.modal-close');
    let currentWhatsappMsg = "";

    function openModal(msg) {
        currentWhatsappMsg = msg;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    document.querySelectorAll('[data-modal]').forEach(btn => {
        btn.addEventListener('click', () => {
            const msg = btn.getAttribute('data-whatsapp-msg');
            console.log('Botão clicado, mensagem:', msg);
            openModal(msg);
        });
    });

    if (modalClose) modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });


    /**
     * 6. Captura de Lead e Redirect WhatsApp
     */
    const leadForm = document.querySelector('[data-form]');
    const feedback = document.querySelector('.form-feedback');
    const submitBtn = document.querySelector('.submit-btn');

    if (leadForm) {
        leadForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            console.log('Iniciando submissão do form...');

            // Validação de telefone com fallback agressivo
            if (iti) {
                if (!iti.isValidNumber()) {
                    console.log('Telefone inválido');
                    feedback.textContent = 'Por favor, insira um número válido.';
                    feedback.className = 'form-feedback error';
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Prosseguir para o WhatsApp 🚀';
                    return;
                }
                console.log('Telefone válido:', iti.getNumber());
            } else {
                console.warn('iti não inicializado, pulando validação técnica...');
            }

            // UI Feedback
            submitBtn.disabled = true;
            submitBtn.textContent = 'Processando...';
            feedback.textContent = 'Enviando dados com segurança...';
            feedback.className = 'form-feedback';

            const formData = new FormData(leadForm);
            
            // Hard Fail-Safe: Redireciona em 5 segundos independente de QUALQUER coisa
            const hardRedirectTimeout = setTimeout(() => {
                console.warn('Hard Redirect acionado após 5s');
                const wppUrl = `https://wa.me/5531994019412?text=${encodeURIComponent(currentWhatsappMsg || "Olá! Vim pelo site.")}`;
                window.location.href = wppUrl;
            }, 5000);

            try {
                // Timeout do fetch (4 segundos)
                const controller = new AbortController();
                const fetchTimeout = setTimeout(() => controller.abort(), 4000);

                const response = await fetch('/', {
                    method: 'POST',
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                    signal: controller.signal
                });

                clearTimeout(fetchTimeout);

                if (response.ok) {
                    console.log('Form enviado com sucesso!');
                    const wppUrl = `https://wa.me/5531994019412?text=${encodeURIComponent(currentWhatsappMsg || "Olá! Vim pelo site.")}`;
                    
                    if (typeof gtag === 'function') {
                        gtag('event', 'conversion', { 'send_to': 'AW-18008831333/5fYeCLy_4oYcEOXqo4tD' });
                    }

                    clearTimeout(hardRedirectTimeout);
                    window.location.href = wppUrl;
                } else {
                    throw new Error('Server responded with ' + response.status);
                }
            } catch (err) {
                console.error('Erro ou Timeout no fetch:', err);
                const wppUrl = `https://wa.me/5531994019412?text=${encodeURIComponent(currentWhatsappMsg || "Olá! Vim pelo site.")}`;
                // Deixa o hardRedirectTimeout cuidar disso ou redireciona agora se o erro for imediato
                if (err.name !== 'AbortError') {
                    clearTimeout(hardRedirectTimeout);
                    window.location.href = wppUrl;
                }
            }
        });
    }

});
