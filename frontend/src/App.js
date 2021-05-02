import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import "./App.css";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import AuthState from "./context/auth/AuthState";
import NoteState from "./context/notes/NoteState";
import { About } from "./Pages/About";
import Home from "./Pages/Home";
import setAuthToken from "./utlis/setAuthToken";
import PrivateRoute from "./components/routing/PrivateRoute";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpandSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <AuthState>
      <NoteState>
        <BrowserRouter>
          <div className="min-h-screen flex flex-col justify-between">
            <div>
              <Navbar expandSidebar={handleExpandSidebar} />
              <Toaster position="bottom-center" />
              <div className="flex">
                <Sidebar
                  classes={`${
                    isExpanded ? "fixed z-10 sm:relative max-w-xs pr-8" : ""
                  } pt-4 shadow bg-white`}
                  isExpanded={isExpanded}
                  expandSidebar={handleExpandSidebar}
                />
                <div className="mx-auto">
                  <Switch>
                    <PrivateRoute exact path="/" component={Home} />{" "}
                    <Route exact path="/about" component={About} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                  </Switch>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      </NoteState>
    </AuthState>
  );
}

export default App;
