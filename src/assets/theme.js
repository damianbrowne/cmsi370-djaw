import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
    palette: {
        offwhite: '#F6F4F4',
        offyellow: '#fff1b0',
        text: { main: '#292F36' },
        white: '#ffffff',
        black: '#000000',
        primary: { main: '#2e7eff' },
        // primary: { main: '#90C6F9' },
        secondary: { main: '#f5d64b' },
        tertiary: { main: '#FFEB58' },
        success: { main: '#E35557' },
        failure: { main: '#64CE8D' },

    },
    font: {
        primary: {main: "Roboto"},
    },
})
export default theme