import React, { useEffect, useState } from "react";
import './Articles.css';
import { BiHeart } from 'react-icons/bi'; 
import { useLocation } from 'react-router-dom';
import Header from "./Header";
import Footer from "./Footer";
import { Link } from 'react-router-dom';
import Filter from "./Filter";

const Articles = () => {
    const location = useLocation();
    const { category, section } = location.state || {};
    const [items, setItems] = useState([]);
    const [sortedItems, setSortedItems] = useState([]); // State for sorted items
    const [loading, setLoading] = useState(true); // State for loading indicator

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/items'); // Update this to your actual API endpoint
                if (!response.ok) {
                    throw new Error('Failed to fetch items');
                }
                const data = await response.json();
                setItems(data);
                setSortedItems(data); // Initialize sortedItems with fetched data
                setLoading(false); // Update loading state when data is fetched
            } catch (error) {
                console.error('Error fetching items:', error);
                setLoading(false); // Update loading state on error
            }
        };
        fetchData();
    }, []);

    const transformImagePath = (path) => {
        const transformedPath = path.replace(/^path\/to\//, '/');
        return transformedPath;
    };

    const filteredItems = sortedItems.filter(item => {
        let matchesCategory = true;
        let matchesSection = true;

        if (category) {
            matchesCategory = item.category === category.name;
        }

        if (section) {
            matchesSection = item.section === section;
        }

        return matchesCategory && matchesSection;
    });

    // Show loading indicator while fetching data
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header />
            <div className="articles-head">
                <h2 className="a-head">{category ? category.name : "New Arrivals"}</h2>
            </div>
            <Filter items={items} setSortedItems={setSortedItems} />
            <div className="arrivals">
                {filteredItems.map(item => (
                    <div className="arrival-items" key={item.id}>
                        <Link to={`/item/${item.id}`} className="article-link">
                            <div className="arrival-thumbnail">
                                <div className="arrival-picture1">
                                    <img src={require("../Media"+transformImagePath(item.img1))} className="arrival-img1" alt={item.name} />
                                </div>
                                <div className="arrival-picture2">
                                    <img className="img-responsive" src={require("../Media"+transformImagePath(item.img2))} alt={item.name} />
                                </div>
                                <BiHeart className="heart" />
                            </div>
                            <div className="arrival-desc">
                                <span className="arrival-desc-name">{item.name}</span>
                            </div>
                            <div className="arrival-price">
                                <span className="arrival-price-span">RS {item.price.toFixed(2)}</span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default Articles;
