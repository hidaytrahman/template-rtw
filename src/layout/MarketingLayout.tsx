// this is an example of another layout 
import { Outlet } from "react-router";

export default function MarketingLayout() {
	return (
		<div>
			<h1>MarketingLayout</h1>
			{/* will either be <Home/> or <Settings/> */}
			<Outlet />
		</div>
	);
}