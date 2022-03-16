import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Grid, Stack, Box } from "@mui/material";
import { Paper } from "@mui/material";

const SongCard = () => {
    return (
        <>
        <Box>
            <Paper elevation={3} sx={{ maxWidth: 200}}>
            <Stack spacing={2} sx = {{padding:2, pt:0}}>


                {/* <Paper elevation={3} sx={{Height:100}}  > */}
                    <Card sx={{ maxWidth: "100%", height:150, mb:4}}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="100"
                                image="/static/images/cards/contemplative-reptile.jpg"
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography
                                    // gutterBottom
                                    variant="h6"
                                    // component="div"
                                >
                                    Lizard
                                </Typography>                             
                            </CardContent>
                        </CardActionArea>
                    </Card>
                {/* </Paper> */}
                djlkfasl
                </Stack>
            </Paper>
            </Box>
        </>
    );
};

export default SongCard;
