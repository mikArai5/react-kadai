import React from "react";
import { useLocation } from "react-router-dom";

const ArticlePage = () => {
    const pathname = useLocation().pathname;
    return (
        <>
        <h1>記事一覧</h1>
        <p>現在のパス:{pathname}</p>
        </>
    );
};

export default ArticlePage;