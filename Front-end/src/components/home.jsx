import React from "react";

const Home = () => {
  return (
    <>
    <p></p>
    <div style={{display: '',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
      <h3>Dette er CPH-AA344's site</h3>
      <p>Jeg har fjernet readme, og lagt forklaring/beskrivelse her i Home</p>
      <p>Login er placeret i en dropdown, hvor funktionalitet foregår der.</p>
      <p>Når man logger ind som admin, får man adgang til "AdminSite".</p>
      <p>Her kan man oprette en bruger, og kan kun tilgå dette endpoint som admin</p>
      <p>Logger man ind som user, var det meningen at man skulle kunne købe/tilføje en hund og få vist sine hunde.</p>
      <p>Men så langt nåede jeg ikke.</p>
      <p>På Dogs fanen fetches der et endpoint som henter random billeder af hunde.</p>
      <p></p>
      </div>
    </>
  );
};

export default Home;
