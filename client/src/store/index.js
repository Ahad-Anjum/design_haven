import { proxy } from 'valtio';

const state = proxy ({
    intro: true,
    color: '#EFDB48',
    isLogoTexture: true,
    isFullTexture: false,
    logoDecal: './mac_bball.PNG',
    fullDecal: './mac_bball.PNG'

});

export default state;