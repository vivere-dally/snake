import { Button, Stack } from "@mui/material";

export default function Home(): JSX.Element {
    return (
        <Stack spacing={2}>
            <Button variant="contained" href="/game">New game</Button>
            <Button variant="outlined" href="/game" onClick={() => {
                // Load last's game data from cache
            }}>Continue</Button>
        </Stack>
    );
}
