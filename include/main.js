const toggle = document.querySelector('.toggle-input');
const initialState = localStorage.getItem('toggleState') == 'true';
toggle.checked = initialState;

var checkbox = document.querySelector('input[name=mode]');
 
        checkbox.addEventListener('change', function() {
            if(this.checked) {
                trans()
                document.documentElement.setAttribute('data-theme', 'lighttheme')
            } else {
                trans()
                document.documentElement.setAttribute('data-theme', 'darktheme')
            }
        })
 
        let trans = () => {
            document.documentElement.classList.add('transition');
            window.setTimeout(() => {
                document.documentElement.classList.remove('transition');
            }, 1000)
        }