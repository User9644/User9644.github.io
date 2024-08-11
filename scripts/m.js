function loadModule(modules) {
    for(let i = 0; i < modules.length; i ++) {
        const s = document.createElement('script');
script.src = 'https://user9644.github.io/scripts/' + modules[i] + '.js';
script.type = 'text/javascript';
document.head.appendChild(s);
    }
}