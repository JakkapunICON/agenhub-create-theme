// matarial-ui
import { useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// project import
import AppbarDesktop from './appbarDesktop';
import AppbarMobile from './appbarMobile';

const Appbar = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return <>{matches ? <AppbarMobile matches={matches} /> : <AppbarDesktop matches={matches} />}</>;
};

export default Appbar;
