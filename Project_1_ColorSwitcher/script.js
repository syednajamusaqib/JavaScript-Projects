const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button)=>{
    button.addEventListener('click',function(event){
        switch (event.target.id) {
            case 'grey':
                body.style.backgroundColor = event.target.id;
                break;
            case 'white':
                body.style.backgroundColor = event.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = event.target.id;
                break;
            case 'blue':
                body.style.backgroundColor = event.target.id;
                break;
            case 'red':
                body.style.backgroundColor = event.target.id;
                break;
            case 'green':
                body.style.backgroundColor = event.target.id;
                break;
            case 'dark':
                body.style.backgroundColor = '#212121';
                break;
            case 'purple':
                body.style.backgroundColor = event.target.id;
                break;
            default:
                break;
        }
    })
})