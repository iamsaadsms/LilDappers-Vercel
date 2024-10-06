import React from "react";
import './Categories.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Categories = ({ category, textBtn, onCategoryClick,Section }) => {
    console.log(Section);
    const handleCategoryClick = (cat) => {
        console.log('Navigating to Articles with category:', cat);
        if (onCategoryClick) {
            onCategoryClick(cat);
        }
    };

    return (
        <div className="Categories">
            {category.map((cat, index) => (
                <div key={index} className="cat">
                    <Link 
                        to="/Articles" 
                        state={{ category: cat , section:Section}}
                        onClick={() => handleCategoryClick(cat)}
                    >
                        <img className="cat-img" src={cat.img} alt={cat.name} />
                        <span className="cat-name">{cat.name}</span>
                        <Button data={textBtn} className="category-btn" />
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default Categories;
