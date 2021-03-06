import { createMuiTheme } from '@material-ui/core/styles';
import { commonProps } from './common_theme_data';
import './prototype_mods';

// Normal or default theme
const theme = createMuiTheme({
    palette: {
        type: 'light',
        elevations: {
            0: { main: '#ffffff' },
            1: { main: '#ffffff' },
            2: { main: '#ffffff' },
            3: { main: '#ffffff' },
            4: { main: '#ffffff' },
            6: { main: '#ffffff' },
            8: { main: '#ffffff' },
            12: { main: '#ffffff' },
            16: { main: '#ffffff' },
            24: { main: '#ffffff' },
        },
        primary: {
            main: '#6200ee',
            dark: '#3700b3',
            contrastText: 'rgba(255,255,255,87%)',
        },
        secondary: {
            main: '#03dac6',
            dark: '#018786',
            contrastText: 'rgba(0,0,0,87%)',
        },
        error: {
            main: '#b00020',
        },
        background: {
            paper: '#ffffff',
            default: '#eeeeee'
        },
        text: {
            primary: 'rgba(0,0,0,87%)',
            secondary: 'rgba(0,0,0,60%)',
            hint: 'rgba(0,0,0,60%)',
            disabled: 'rgba(0,0,0,38%)',
        }
    },
    zIndex: {
        appBar: 1250
    },
    props: commonProps,
});

theme.overrides = {
    MuiDrawer: {
        paper: {
            width: 240
        }
    },
    MuiCardHeader: {
        root: {
            paddingBottom: 0,
            textAlign: 'center',
        },
    },
};

export default theme;