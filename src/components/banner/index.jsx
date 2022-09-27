// material-ui
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

// banner styles
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerTitle } from '../../styles/banner';

const Banner = () => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));
    return (
        <>
            <BannerContainer>
                <BannerImage src="/images/banner/banner.png" />
                <BannerContent>
                    <Typography variant="h6">Huge Collection</Typography>
                    <BannerTitle variant="h2">New Bags</BannerTitle>
                    <BannerDescription variant="subtitle">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste minima, ipsum iure consequuntur, ut atque maiores cupiditate cum
                        voluptatibus magnam ducimus eius eaque perspiciatis ad mollitia, alias qui labore nihil?
                    </BannerDescription>
                </BannerContent>
            </BannerContainer>
        </>
    );
};

export default Banner;
