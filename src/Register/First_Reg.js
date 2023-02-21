import "./firstreg.css";
import { Link } from "react-router-dom";

function First_Reg(){

    return(
        <>
        <body className="reg">
            <div className="container">
                <br/> <br/>
                <Link  className="btn btn-light p-4" id="reg_1" to={"/registercus"}>
                    REGISTER AS A NEW CUSTOMER
                </Link>
                <br/> <br/>
                <Link  className="btn btn-light p-4" id="reg_2" to={"/register"}>
                     REGISTER AS A NEW CLIENT
                </Link>
                <br/> <br/>
                <h4 id="log">
                If you have an account : <Link id="log2" to={"/login"}> LOGIN</Link> 
                </h4>
            </div>
        </body>
        </>
    )

}
export default First_Reg