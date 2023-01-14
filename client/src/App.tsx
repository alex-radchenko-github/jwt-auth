import React, {FC, useContext, useEffect, useState} from 'react';
import LoginForm from "./components/LoginForm";
import {StoreContext} from "./index";
import {observer} from "mobx-react-lite";
import {IUser} from "./models/IUser";
import UserService from "./services/UserService";

const App: FC = () => {
    const {store} = useContext(StoreContext);
    useEffect(() => {
        if (localStorage.getItem('token')) {

            store.checkAuth()
        }
    }, []);

    if (store.isLoading) {
        return <div>Loading...</div>
    }

    if (!store.isAuth) {
        return <LoginForm/>
    }
    return (
        <div>
            <h1>{store.isAuth ? `Пользователь авторизован ${store.user.email}` : "АВТОРИЗУЙТЕСЬ"}</h1>
            <button onClick={() => store.logout()}>LOGOUT</button>
        </div>
    )
};
export default observer(App);
