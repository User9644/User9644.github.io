let moduleSrc = 'https://user9644.github.io/scripts';

function loadModule(...modules) {
    for(let i = 0; i < modules.length; i ++) {
        const s = document.createElement('script');
        s.src = moduleSrc + '/' + modules[i] + '.js';
        s.type = 'text/javascript';
        document.head.appendChild(s);
    }
}