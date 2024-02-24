import React from "react";

import style from "./BestSellingCard.module.css"
import { Link } from "react-router-dom";

function BestSellingCard({ title }) {

    const products = [
        { name: 'Reboke Red Shoe', category: 'Sport Shoes', stock: 12 },
        { name: 'Ladies High Hills shoes', category: 'High Hills', stock: 8 },
        { name: 'White Orange Reboke Shoes', category: 'Sport Shoes', stock: 10 },
    ];

    return (
        <div className={style.container}>
            <div className="flex justify-between grow">
                <p>{title}</p>
                <Link to={"/best-selling-products"} className="text-sm text-orange-400">View more -</Link>
            </div>
            <div className="flex flex-col gap-2 text-sm">
                {products.map((product) => (
                    <div className="flex flex-row justify-between bg-white rounded-lg items-center px-3 py-1">
                        <img
                            src={`images/${product.name}.jpg`}
                            className="h-16 w-16 object-cover rounded"
                        />
                        <div>
                            <div>
                                <p>{product.name}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </div> 
                        <div>
                            <p>Stocked Product: {product.stock}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default BestSellingCard;