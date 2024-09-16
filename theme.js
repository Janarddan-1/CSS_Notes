function dark_mode_toggle(){
    let element =  document.querySelector('html')
    const mode = element.getAttribute('data-bs-theme')
    const sun = document.getElementById('sun');
    const moon = document.getElementById('moon');
    const theme = document.getElementById("Theme");
    if(mode === 'dark'){
        element.setAttribute('data-bs-theme', 'light');
        sun.style.display = 'inline-block'
        moon.style.display = 'none'
        theme.style.border = '2px solid #919191'
    }
    else{
        element.setAttribute('data-bs-theme', 'dark');
        sun.style.display = 'none'
        moon.style.display = 'inline-block'
        theme.style.border = '2px solid gainsboro'
    }
}