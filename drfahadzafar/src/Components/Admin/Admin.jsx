import { useHistory } from 'react-router-dom';
import { Button } from "react-bootstrap"
import { FaTooth } from "react-icons/fa"

const Admin = () => {

    let history = useHistory();


    return (
        <div>


            <>
                <Button variant="primary" className="btn-large" onClick={() => history.push("/admin/perio")}> <div><FaTooth /></div> Perio </Button>{' '}
                <Button variant="secondary" onClick={() => history.push("/admin/implant")} > <div><FaTooth /></div>Implants</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button>
            </>
        </div >
    )
}
export default Admin