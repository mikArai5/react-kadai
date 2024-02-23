import React from "react";
import "./TopPage.css";
import { useLocation } from "react-router-dom";

const TopPage = () => {
    const pathname = useLocation().pathname;

    return (
        <>
        <div className="main">
            <div>
                <h1>トップページ</h1>
                <p>現在のパス:{pathname}</p>
            </div>
        </div>
        </>
    );
};

export default TopPage;