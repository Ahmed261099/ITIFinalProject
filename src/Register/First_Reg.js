import "./firstreg.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function First_Reg(){

    const history = useHistory();

    const { currentUser } = useSelector((state) => state.user);

    useEffect(() => {
        if(currentUser){
          history.push("profile")
        }
      }, [currentUser, history])

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
                     REGISTER AS A NEW Engineer/Provider
                </Link>
            </div>
        </body>
        </>
    )

}
export default First_Reg