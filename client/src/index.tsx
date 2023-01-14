import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Store from "./store/store";


interface State {
    store: Store;
}

export const store = new Store();

export const StoreContext = React.createContext<State>(
    {
        store
    });

ReactDOM.render(
    <StoreContext.Provider value={{
        store
    }}>
        <App/>
    </StoreContext.Provider>,

    document.getElementById("root")
);
