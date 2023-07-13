import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row bg-dark text-warning">
                    <div className="col-md-3 text-center">
                        <Link className="navbar-brand fs-3 fw-bold" to="#">Navbar</Link>

                    </div>
                    <div className="col-md-6 py-1">
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-warning" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="col-md-3 fs-3 d-flex justify-content-evenly">
                        <Link to={''}>
                            <i className='bi bi-box-arrow-in-left text-info'></i>
                        </Link>
                        <Link to={'/register'}>
                            <i className='bi bi-person-plus text-warning'></i>
                        </Link>
                        <Link to='/cart'>
                            <i className='bi bi-cart text-success'></i>
                        </Link>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-body-secondary">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/deals">Deals</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/faq">FAQs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact</Link>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><Link className="dropdown-item" to="#">Action</Link></li>
                                    <li><Link className="dropdown-item" to="#">Another action</Link></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link disabled" to='#'>Disabled</Link>
                            </li> */}
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Header