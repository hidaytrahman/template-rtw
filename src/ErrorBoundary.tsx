import { Alert } from '@mui/material';
import { Component } from 'react';

class ErrorBoundary extends Component {
	// @ts-ignore
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	// @ts-ignore
	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	// @ts-ignore
	componentDidCatch(error, errorInfo) {
		console.error('Error caught by error boundary:', error, errorInfo);
	}

	render() {
		// @ts-ignore
		if (this.state.hasError) {
			return <Alert variant='filled' color='error'>Something went wrong.</Alert>;
		}
		// @ts-ignore
		return this.props.children;
	}
}

export default ErrorBoundary;