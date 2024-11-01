import './index.css';

import blocks from './blocks';
import compositions from './compositions';
import utilities from './utilities';

// Js has loaded—remove the no-js class
document.documentElement.classList.remove('no-js');

// compositions, utilities and blocks
compositions();
utilities();
blocks();
