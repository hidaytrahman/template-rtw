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

interface CreateTodoResult {
  data: unknown;
  error: string | null;
}

// create a post api method with axios
export const createTodo = async (
  title: string,
  completed: boolean = false
): Promise<CreateTodoResult> => {
  try {
    const response = await axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed
    });
	return { data: response.data, error: null };
  } catch (error) {
    console.error(error);
    return { data: null, error: error instanceof Error ? error.message : 'Unknown error' };
  }
};

