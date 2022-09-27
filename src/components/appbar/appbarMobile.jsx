// material-ui
import { IconButton } from '@mui/material';
import { Menu as MenuIcon, Search as SearchIcon } from '@mui/icons-material';

// custom material-ui
import { AppbarContainer, AppbarHeader } from '../../styles/appbar';

// project import
import Actions from './actions';

const AppbarMobile = ({ matches }) => {
    return (
        <AppbarContainer>
            <IconButton>
                <MenuIcon />
            </IconButton>
            <AppbarHeader textAlign="center" variant="h4">
                My Bags
            </AppbarHeader>
            <IconButton>
                <SearchIcon />
            </IconButton>
            <Actions matches={matches} />
        </AppbarContainer>
    );
};

export default AppbarMobile;
