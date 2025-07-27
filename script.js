document.addEventListener('DOMContentLoaded', function() {
    const loginContainer = document.getElementById('login-container');
    const registerContainer = document.getElementById('register-container');
    const showRegister = document.getElementById('show-register');
    const showLogin = document.getElementById('show-login');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    // Alternar entre login e cadastro
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginContainer.style.display = 'none';
        registerContainer.style.display = 'block';
    });

    showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
    });

    // Validação do formulário de login
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // Validação básica
        if (!email || !password) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Aqui você normalmente faria uma requisição para o servidor
        console.log('Tentativa de login:', { email, password });
        alert('Login realizado com sucesso! (simulação)');
    });

    // Validação do formulário de cadastro
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const fullname = document.getElementById('fullname').value;
        const email = document.getElementById('reg-email').value;
        const password = document.getElementById('reg-password').value;
        const cpfCnpj = document.getElementById('cpf-cnpj').value;
        const phone = document.getElementById('phone').value;
        const birthdate = document.getElementById('birthdate').value;
        
        // Validação básica
        if (!fullname || !email || !password || !cpfCnpj || !phone || !birthdate) {
            alert('Por favor, preencha todos os campos.');
            return;
        }
        
        // Aqui você normalmente faria uma requisição para o servidor
        console.log('Dados de cadastro:', { 
            fullname, 
            email, 
            password, 
            cpfCnpj, 
            phone, 
            birthdate 
        });
        alert('Cadastro realizado com sucesso! (simulação)');
        
        // Volta para a tela de login após cadastro
        registerContainer.style.display = 'none';
        loginContainer.style.display = 'block';
        registerForm.reset();
    });
});
