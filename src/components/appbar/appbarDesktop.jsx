import { ListItemText } from '@mui/material';
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';

const AppbarDesktop = ({ matches }) => {
    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList sx={{ display: 'flex' }}>
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
            </MyList>
        </AppbarContainer>
    );
};

export default AppbarDesktop;
