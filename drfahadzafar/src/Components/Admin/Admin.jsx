import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap"
import { FaTooth } from "react-icons/fa"

const Admin = () => {

    let history = useHistory();


    return (
        <div>


            <>
                <Button variant="" className="btn-large" onClick={() => history.push("/admin/perio")}> <div><FaTooth /></div> Perio </Button>{' '}
                <Button variant="" onClick={() => history.push("/admin/implant")} > <div><FaTooth /></div>Implants</Button>{' '}

                <Button variant="">Link</Button>
            </>
        </div >
    )
}
export default Admin