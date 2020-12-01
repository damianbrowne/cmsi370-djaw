import { createMuiTheme } from '@material-ui/core/styles'
const theme = createMuiTheme({
    palette: {
        offwhite: {main: '#F6F4F4'},
        offyellow: { main: '#fff1b0'},
        text: { main: '#292F36'},
        white: {main: '#ffffff'},
        black: {main: '#000000'},
        primary: {main: '#2e7eff'},
        // primary: { main: '#90C6F9' },
        secondary: {main: '#FFE054'},
        success: { main: '#64CE8D' },
        failure: { main: '#FF5B5B' },
    },

    font: {
        primary: {main: "Roboto"},
    },
})
export default theme