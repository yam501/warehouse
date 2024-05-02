import {BrowserRouter, useLocation} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Header from "./components/Header";
import {useContext, useEffect} from "react";
import {Context} from "./index";

function App() {
    const { user } = useContext(Context)

    async function loadToContext() {
        await user.checkAuth()
    }
    useEffect(() => {
        if (localStorage.getItem('token')) {
            loadToContext()
        }
    }, [user._user.id])
  return (
      <BrowserRouter>
          <Header/>
        <AppRouter/>
      </BrowserRouter>
  );
}

export default App;
