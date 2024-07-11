
import { LockOutlined } from "@mui/icons-material";
import { Checkbox, FormControl, FormControlLabel, Link, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";


const LoginForm = () => {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate('/home');
    };
    return (
        <div style={{
            backgroundImage: "url(https://d3mvlb3hz2g78.cloudfront.net/wp-content/uploads/2020/11/thumb_720_450_dreamstime_m_186895001.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",

        }}>
            <form style={{ backgroundColor: "lightgray", width: 500, height: 420, borderRadius: 35, marginTop: 180 }}>
              
                <div >
                <LockOutlined style={{marginLeft:215, marginTop:30}} />
                    <Typography style={{ fontSize: 25, marginLeft: 200 }}>

                        Login
                    </Typography>

                    <div style={{ marginTop: 25 }}>
                        <div>
                            <TextField id="filled-basic" label="Email" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310 }} size="small" />
                        </div>

                        <div>
                            <TextField id="filled-basic" label="Password" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310, marginTop: 30 }} size="small" />
                        </div>
                        <div style={{ marginLeft: 100, flexDirection: "row" }}>
                            <FormControl >
                                <FormControlLabel
                                    control={
                                        <Checkbox />

                                    }
                                    label="Remember Me"
                                />
                            </FormControl>

                        </div>
                    </div>

                    <div>
                        <button
                            style={{
                                backgroundColor: "grey",
                                marginTop: 20,
                                marginLeft: 100,
                                color: "white",
                                padding: "10px 140px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                transition: "background-color 0.3s, transform 0.3s"
                            }}
                            onClick={handleLogin}
                            onMouseEnter={(e) => {
                                (e.target as HTMLButtonElement).style.backgroundColor = "darkgrey";
                            }}
                            onMouseLeave={(e) => {
                                (e.target as HTMLButtonElement).style.backgroundColor = "grey";
                            }}
                            onMouseDown={(e) => {
                                (e.target as HTMLButtonElement).style.transform = "scale(0.95)";
                            }}
                            onMouseUp={(e) => {
                                (e.target as HTMLButtonElement).style.transform = "scale(1)";
                            }}
                        >
                            Login
                        </button>
                        <div style={{ flexDirection: "row", marginLeft:100 }}>
                            <Link
                                component="button"
                                variant="body2"
                                style={{fontSize:12,color:"#000"}}
                            >
                                Forget Password?
                            </Link>

                            <Link
                                component="button"
                                variant="body2"
                                style={{marginLeft:50, fontSize:12,color:"#000"}}
                                onClick={()=>navigate("/signup")}
                            >
                                Don't have an account?SignUp
                            </Link>
                        </div>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default LoginForm