
form = {
    form_register: () => document.getElementById('form-register'),
    form_login: () => document.getElementById('form-login'), 
    
    overlayAccount: () => document.getElementById('overlayAccount'),
}


function goToRegister() 
{
    form.form_register().classList.remove('invisible');
    form.form_login().classList.add('invisible');
}

function goToLogin() 
{
    form.form_login().classList.remove('invisible');
    form.form_register().classList.add('invisible');
}

function showCreateUserAccount(state)
{

    switch (state)
    {
        case 'login':
            goToLogin();
            form.overlayAccount().classList.remove('invisible');
            break;

        case 'register':
            goToRegister();
            form.overlayAccount().classList.remove('invisible');
            break;
    }

    
}

function hideCreateUserAccount()
{
    const quest = confirm('Tem certeza que deseja sair?. Seus dados serão perdidos');
    
    if (quest)
    {
        form.overlayAccount().classList.add('invisible');
    }
}