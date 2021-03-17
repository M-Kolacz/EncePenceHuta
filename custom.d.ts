import * as createPalette from '@material-ui/core/styles/createPalette';

declare module '@material-ui/core/styles/createPalette' {
    interface PaletteOptions {
        lightBlue: PaletteColorOptions;
        darkBlue: PaletteColorOptions;
    }
    interface Palette {
        lightBlue: PaletteColor;
        darkBlue: PaletteColor;
    }
}
