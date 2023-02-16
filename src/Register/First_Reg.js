import "./firstreg.css";
import { Link } from "react-router-dom";

function First_Reg(){

    return(
        <>
        <body>
            <div className="container">
                <br/> <br/>
                <Link  className="btn btn-light p-4" id="reg_1" to={"/registercus"}>
                    REGISTER AS A NEW CUSTOMER
                </Link>
                <br/> <br/>
                <Link  className="btn btn-light p-4" id="reg_2" to={"/register"}>
                     REGISTER AS A NEW CLIENT
                </Link>
            </div>
        </body>
        </>
    )

}
export default First_Reg