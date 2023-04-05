import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#0a0654',
    color2: '#ffffff',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './mac_bball.PNG',
    fullDecal: './mac_bball.PNG'

});

export default state;