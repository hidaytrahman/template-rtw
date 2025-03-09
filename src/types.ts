import { ReactNode } from "react";


export type ROUTE = {
	path?: string;
	index?: boolean;
	name: string
	element: ReactNode
}

// export type ROUTE = {
// 	index: true; // If index is true, path is not required
// 	path?: never; // Ensure path is not provided when index is true
// 	name: string;
// 	element: ReactNode;
// } | {
// 	index?: false | undefined; // If index is false or not provided, path is required
// 	path: string; // Path is required in this case
// 	name: string;
// 	element: ReactNode;
// }