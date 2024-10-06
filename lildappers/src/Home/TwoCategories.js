import React from "react";
import './TwoCategories.css';
import b1 from '../Media/b1.jpg';
import b2 from '../Media/b2.jpg';
import Button from '../Common/Button'; // Ensure Button component is imported correctly

const TwoCategories = ({ style }) => {
    return (
        <div className="TwoCategories">
            <div className="two-cat-head">
                <span className="tc-head">OUR FAVORITE FITS</span>
            </div>
            <div className="two-imgs">
                <div className="left-img">
                    <img className="t-img" src={b1} alt="Category 1" />
                    <div className="tc-data">
                        <span className="r1">FINEST</span>
                    </div>
                    <Button data="SHOP BOYS" className="btn-tc-img-1" style={style.tc_btn1} />
                </div>
                <div className="right-img">
                    <img className="t-img" src={b2} alt="Category 2" />
                    <div className="tc-data">
                        <span className="l1">MOST LOVED</span>
                    </div>
                    <Button data="SHOP GIRLS" className="btn-tc-img-2" style={style.tc_btn2} />
                </div>
            </div>
        </div>
    )
}

export default TwoCategories;
