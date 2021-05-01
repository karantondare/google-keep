import React, { useContext, useEffect } from "react";
import NoteForm from "../components/NoteForm";
import Notes from "../components/notes/Notes";
import AuthContext from "../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="py-8 flex justify-center">
        <NoteForm />
      </div>
      <Notes />
    </>
  );
};

export default Home;
