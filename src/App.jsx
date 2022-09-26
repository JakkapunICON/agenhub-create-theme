import { useEffect } from 'react';

// material-ui
import { ThemeProvider, Container, Button } from '@mui/material';

// project import
import theme from './styles/theme';
import Appbar from './components/appbar';

const App = () => {
    useEffect(() => {
        document.title = 'AgenHub - Home';
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#fff' }}>
                <Appbar />
                {/* 
                Appbar
                Banner 
                Promotions
                title
                Products
                Footer
                searchbox
                appdrawer
                */}
                {/* <Button variant="contained">test</Button> */}
            </Container>
        </ThemeProvider>
    );
};

export default App;
