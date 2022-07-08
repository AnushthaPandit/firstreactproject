import React from "react";
import MainContent from "./MainContent";
import Navbar from "./Navbar";
import Footer from "./Footer";

import { Route, Routes } from "react-router-dom";
import EditPage from "./EditPage";
import ViewPage from "./ViewPage";

const App = () => {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" element={<MainContent />} />
				<Route path="ViewPage" element={<ViewPage />} />
				<Route path="EditPage" element={<EditPage />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
