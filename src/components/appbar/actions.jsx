// material-ui
import { Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { ShoppingCart as ShoppingCartIcon, Person as PersonIcon, Favorite as FavoriteIcon } from '@mui/icons-material';

// custom material-ui
import { ActionIconsContainerDesktop, ActionIconsContainerMobile, MyList } from '../../styles/appbar';
import { Colors } from '../../styles/theme';

const Actions = ({ matches }) => {
    const Component = matches ? ActionIconsContainerMobile : ActionIconsContainerDesktop;
    return (
        <Component>
            <MyList type="row">
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <ShoppingCartIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <FavoriteIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
                <ListItemButton sx={{ justifyContent: 'center' }}>
                    <ListItemIcon sx={{ display: 'flex', justifyContent: 'center', color: matches && Colors.secondary }}>
                        <PersonIcon />
                    </ListItemIcon>
                </ListItemButton>
                <Divider orientation="vertical" flexItem />
            </MyList>
        </Component>
    );
};

export default Actions;
