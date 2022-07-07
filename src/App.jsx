import React from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Route , Switch} from "react-router-dom";
import EditPage from "./EditPage";
import ViewPage from "./ViewPage";


const App = () =>{
  return (
     <>
     <Navbar />
     <MainContent />
      {/* <Route exact path="/" component={MainContent} />
      <Route exact path="/ViewPage" component={ViewPage} ><ViewPage /></Route>
      <Route exact path="/Editpage" component={EditPage} ><EditPage /></Route> */}
     
     
     <Footer />
     </>
  );
};

export default App;




