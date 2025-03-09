import axios from "axios";


// create a get api method with axios
export const fetchUser = async () => {
	try {
		const response = await axios.get('https://raw.githubusercontent.com/hidaytrahman/hidaytrahman/main/me.json');
		console.log(response.data);
		return response.data
	} catch (error) {
		console.error(error);
	}
};

// create a post api method with axios
const createTodo = async () => {
	try {
		const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
			title: 'New Todo',
			completed: false
		});
		console.log(response.data);
	} catch (error) {
		console.error(error);
	}
};

