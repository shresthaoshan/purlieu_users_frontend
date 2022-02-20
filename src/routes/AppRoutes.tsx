import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<h2>Home</h2>} />
			<Route path="**" element={<Navigate to="/" />} />
		</Routes>
	);
};

export default AppRoutes;
