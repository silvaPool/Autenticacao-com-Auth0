import { useAuth0 } from "@auth0/auth0-react";
import { Button, Grid } from "@mui/material";



function SignIn() {
    const {loginWithRedirect} = useAuth0();

    return (
        <main style={{padding: '1rem 0'}}>
            <Grid container>
                <Grid container justifyContent="center">
                <Button variant="contained" onClick={loginWithRedirect}>Sign In</Button>
                </Grid>
            </Grid>
        </main>
    )
}

export default SignIn;