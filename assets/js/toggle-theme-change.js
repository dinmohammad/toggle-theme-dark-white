window.onload = function() {
     setMode();
};

function toggleMode() {
    let element = document.body;
    let mode = localStorage.getItem('mode');
    // console.log('akash',mode)

    if(mode == 'dark'){       
        localStorage.setItem("mode", "light");
        document.documentElement.setAttribute("data-theme", "light"); //set theme to light
        // console.log('light2')
    }
    else if(mode == 'light'){ 
        localStorage.setItem("mode", "dark");
        document.documentElement.setAttribute("data-theme", "dark")//set theme to dark
        // console.log('dark2')
    }
    // console.log('toggle click done ')
}

function setMode() {
    let mode = localStorage.getItem('mode');

    if(!mode){localStorage.setItem("mode", "light");}

    if(mode == 'light'){
        document.documentElement.setAttribute("data-theme", "light"); //set theme to light

    }else if(mode == 'dark'){
        document.documentElement.setAttribute("data-theme", "dark")//set theme to dark

    }
}