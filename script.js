const eyeIcon = document.querySelector('#hideshow');
const password = document.querySelector('#pass');

eyeIcon.addEventListener('click', function() 
{
    /* toggle the type */
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    /* toggle the eye icon*/
    this.classList.toggle('fa-eye');
    this.classList.toggle('fa-eye-slash');
})