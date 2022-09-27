// material-ui
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

// custom material-ui
import { AppbarContainer, AppbarHeader, MyList } from '../../styles/appbar';

// project import
import Actions from './actions';

const AppbarDesktop = ({ matches }) => {
    return (
        <AppbarContainer>
            <AppbarHeader>My Bags</AppbarHeader>
            <MyList type="row">
                <ListItemText primary="Home" />
                <ListItemText primary="Categories" />
                <ListItemText primary="Products" />
                <ListItemText primary="Contact Us" />
                <ListItemButton>
                    <ListItemIcon>
                        <SearchIcon />
                    </ListItemIcon>
                </ListItemButton>
            </MyList>
            <Actions matches={matches} />
        </AppbarContainer>
    );
};

export default AppbarDesktop;
