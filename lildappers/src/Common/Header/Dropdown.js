// import React from "react";
import './Dropdown.css';

const Dropdown = ({ data }) => {
    return (
        <div className="Dropdown">
            <div className="container">
                <div className="row">
                    {data.map((column, index) => (
                        <div className="col-md-4" key={index}>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a className="nav-link-head active" href="#"><strong>{column.title}</strong></a>
                                </li>
                                {column.items.map((item, i) => (
                                    <li className="nav-item-list" key={i}>
                                        <a className="nav-link-sub" href="#">{item}</a>
                                    </li>
                                ))}
                            </ul>
                            <a target="_blank" rel="noopener noreferrer" href={column.link}>
                                <img src={column.img} alt="Web Design Guides" className="img-fluid" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
