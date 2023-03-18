window.onload = function() {
     setMode();
};

function toggleMode() {
    let element = document.body;
    let mode = localStorage.getItem('mode');
    console.log('akash',mode)

    if(mode == 'dark'){       
        localStorage.setItem("mode", "light");
        element.classList.remove("dark");
        element.classList.add("light");
        console.log('light2')

    }
else if(mode == 'light'){ 
        localStorage.setItem("mode", "dark");
        element.classList.remove("light");
        element.classList.add("dark");
        console.log('dark2')
    }

    console.log('toggle click done ')
       
}

function setMode() {
    let mode = localStorage.getItem('mode');

    if(!mode){localStorage.setItem("mode", "light");}

    if(mode == 'light'){
        document.body.classList.add('light');
    }else if(mode == 'dark'){
        document.body.classList.add('dark');
    }
}