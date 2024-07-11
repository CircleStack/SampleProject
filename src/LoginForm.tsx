import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Grid, Checkbox, FormControlLabel, Link } from '@mui/material';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";


const LoginForm = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
    };

    return (
        <div style={{
            display: "flex",
            height: "100vh",
            width: "100vw"
        }}>
            <div style={{
                flex: 1.15,
                backgroundImage: `url(https://mui.com/static/images/templates/templates-images/sign-in-side-bg.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}>
            </div>
            <div style={{
                flex: 0.85,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
            }}>
                <div style={{
                    width: '100%',
                    maxWidth: 600,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                     <FontAwesomeIcon icon={faSignInAlt} size="2x" color="#1565c0" />
                    <Typography variant="h4" align="center" style={styles.title} gutterBottom>
                        Sign In 
                    </Typography>
                    <form noValidate autoComplete="off" style={{ width: '100%' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <TextField
                                    label="Email"
                                    variant="outlined"
                                    fullWidth
                                    style={styles.textField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    label="Password"
                                    variant="outlined"
                                    type="password"
                                    fullWidth
                                    style={styles.textField}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox name="rememberMe" color="primary" />}
                                    label="Remember Me"
                                    sx={{ color: 'black' }}             
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    fullWidth
                                    onClick={handleLogin}
                                    style={{
                                        padding: '10px 20px',
                                        marginTop: 20
                                    }}
                                >
                                    Sign In
                                </Button>
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                <Link href="#" variant="body2">
                                    Forgot Password?
                                </Link>
                            </Grid>
                            <Grid item xs={6} style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Link href="#" variant="body2">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </div>
        </div>
    );
};

const styles: { [key: string]: React.CSSProperties } = {
    textField: {
        backgroundColor: '#fff',
        borderRadius: '4px',
        justifyContent: "center",
        alignItems: "center",
    },
    title: {
        textAlign: 'center',
        marginBottom: '20px',
        color: 'Black',
      },
};

export default LoginForm;
