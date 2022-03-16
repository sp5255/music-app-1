
import SongCard from "./SongCard";
import { Grid, Box } from "@mui/material";
const SongsContainer = () => {
    return (
        <>
        <Box sx ={{background:"lightblue" , ml:30, mt:10, mb:10, mr:0, pl:4}}>
            <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md:14, lg: 25 }}                
                sx ={{margin:"auto", ml:0, pl:0}}
            >
                {Array.from(Array(6)).map((_, index) => (
                    <Grid item xs={2} sm={4} md={4} key={index}>
                       <SongCard />
                    </Grid>
                ))}
            </Grid>
            </Box>
        </>
    );
};

export default SongsContainer;
