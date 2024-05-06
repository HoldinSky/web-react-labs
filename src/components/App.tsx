import React, {useEffect} from 'react';
import MainPage from "./pages/main/MainPage";
import "../styles/App.scss"
import {Routes, Route} from "react-router-dom";
import MenuPage from './pages/MenuPage';
import NotFoundPage from './pages/NotFoundPage';
import Layout, {LayoutProps} from "./Layout";
import NavBar from "./NavBar";

function InnerLayout({children}: LayoutProps) {
    return <Layout>{{
        header: <NavBar/>,
        body: children.body,
        footer: children.footer
    }}</Layout>;
}

function App() {
    useEffect(() => {
        document.title = "Puzata Hata";
    }, []);

    return (
        <Routes>
            <Route path="/">
                <Route index
                       element={<InnerLayout children={{body: <MainPage/>}}/>}
                />
                <Route path="/menu"
                       element={<InnerLayout children={{body: <MenuPage/>}}/>}
                />
                <Route path="*"
                       element={<InnerLayout children={{body: <NotFoundPage/>}}/>}
                />
            </Route>
        </Routes>
    );
}

export default App;
