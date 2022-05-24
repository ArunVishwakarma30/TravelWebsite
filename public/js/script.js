const open = document.getElementById('open');
    const modal_container = document.getElementById('modal_container');
    const close = document.getElementById('close')

    open.addEventListener('click', () => {
      modal_container.classList.add('show');
    })


    close.addEventListener('click', () => {
      modal_container.classList.remove('show');
    })



    const register = document.getElementById('register');
    const modal_container1 = document.getElementById('modal_container1');
    const signed_in = document.getElementById('signed_in')

    register.addEventListener('click', () => {
      modal_container1.classList.add('show');
    })


    signed_in.addEventListener('click', () => {
      modal_container1.classList.remove('show');
    })
    
    