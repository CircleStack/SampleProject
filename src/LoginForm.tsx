import { TextField } from "@mui/material";
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
            <form style={{ backgroundColor: "lightgray", width: 500, height: 400, borderRadius: 35, marginTop: 180 }}>
                <div >
                    <h1 style={{ fontSize: 30, marginLeft: 200, paddingTop: 50 }}>
                        Login
                    </h1>

                    <div style={{ marginTop: 25 }}>
                        <div>
                            <TextField id="filled-basic" label="Email" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310 }} size="small" />
                        </div>

                        <div>
                        <TextField id="filled-basic" label="Password" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310 , marginTop:30}} size="small" />
                        </div>
                    </div>

                    <div>
                        <button
                            style={{
                                backgroundColor: "grey",
                                marginTop: 40,
                                marginLeft: 200,
                                color: "white",
                                padding: "10px 20px",
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
                    </div>

                </div>

            </form>
        </div>
    )
}

export default LoginForm
