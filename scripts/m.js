function loadModule(...modules) {
    for(let i = 0; i < modules.length; i ++) {
        const s = document.createElement('script');
s.src = 'https://user9644.github.io/scripts/' + modules[i] + '.js';
s.type = 'text/javascript';
document.head.appendChild(s);
    }
}