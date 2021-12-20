import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
const Admin = () => {

    let history = useHistory();
    const checkToken = () => {
        const token = localStorage.getItem('user_Token')
        if (!token) {
            history.replace('/login')
        }
    }

    useEffect(() => {
        checkToken()
    }, [])

    return (
        <div>


            <>

                <div className="my-5">






                    <div id="container">

                        <div className="product-details mx-5">

                            <h1 className="d-flex justify-content-center">Perio Cases</h1>

                            <p className="information">Perio Cases Explination</p>

                        </div>

                        <div className="product-image">

                            <img src="http://didimdental.co.uk/wp-content/uploads/2017/12/periodontology-didim-dental-768x511.jpg" alt="" className="mt-5" />


                            <div className="info">
                                <h2> Perio Cases</h2>


                                <button className="btn" onClick={() => history.push("/admin/perio")} >
                                    <span className="todo">See More About Perio</span>

                                    <span className="function">See All Articles</span>
                                </button>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="my-5">






                    <div id="container">

                        <div className="product-details mx-5">

                            <h1 className="d-flex justify-content-center">Implant Cases</h1>

                            <p className="information">Implant Cases Explination</p>

                        </div>

                        <div className="product-image">

                            <img src="https://mlsw.com/wp-content/uploads/2020/08/Chirurgia-guidata-implantologia.jpg" alt="" className="mt-5" />


                            <div className="info">
                                <h2> Perio Cases</h2>
                                {/* <p className="ml-2">id :{perioData._id}</p> */}

                                <button className="btn" onClick={() => history.push("/admin/implant")} >
                                    <span className="todo">See More About Implant</span>

                                    <span className="function">See All Articles</span>
                                </button>
                                {/* <div>
                <button className="btn delete mt-3" onClick={() => history.push("/admin/implant")} >
                    <span className="todo">to remove</span>

                    <span className="function">Delete</span>
                </button></div> */}
                            </div>
                        </div>

                    </div>

                </div>
            </>
        </div >
    )
}
export default Admin