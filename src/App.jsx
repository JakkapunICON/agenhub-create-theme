import { useEffect } from 'react';

// material-ui
import { ThemeProvider, Container, Button } from '@mui/material';

// project import
import theme from './styles/theme';
import Appbar from './components/appbar';
import Banner from './components/banner';

const App = () => {
    useEffect(() => {
        document.title = 'AgenHub - Page?';
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="xl" sx={{ backgroundColor: '#fff' }}>
                <Appbar />
                <Banner />
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
