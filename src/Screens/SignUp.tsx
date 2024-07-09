import { TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundImage: "url(https://cdn.pixabay.com/photo/2015/07/19/10/00/school-work-851328_640.jpg)",
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",

            }}
        >
            <form style={{ backgroundColor: "lightgray", width: 500, height: 450, borderRadius: 35, marginTop: 180 }}>

                <div >
                    <Typography style={{ fontSize: 25, marginLeft: 200, paddingTop: 20 }}>

                        Sign Up
                    </Typography>

                    <div style={{ marginTop: 25 }}>
                        <div>
                            <TextField id="filled-basic" label="UserName" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310 }} size="small" />
                        </div>

                        <div>
                            <TextField id="filled-basic" label="Email" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310, marginTop: 30 }} size="small" />
                        </div>

                        <div>
                            <TextField id="filled-basic" label="Create Password" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310, marginTop: 30 }} size="small" />
                        </div>

                        <div>
                            <TextField id="filled-basic" label="Confirm Password" variant="outlined" style={{ backgroundColor: "#fff", marginLeft: 100, width: 310, marginTop: 30 }} size="small" />
                        </div>
                    </div>

                    <div>
                        <button
                            style={{
                                backgroundColor: "grey",
                                marginTop: 30,
                                marginLeft: 100,
                                color: "white",
                                padding: "10px 100px",
                                border: "none",
                                borderRadius: "5px",
                                cursor: "pointer",
                                transition: "background-color 0.3s, transform 0.3s"
                            }}
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
                            onClick={()=> navigate("/")}
                        >
                            Create Account
                        </button>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default SignUp
