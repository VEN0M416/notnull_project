import axios from "axios";
import { serverURI } from "./config";

const api = axios.create({
	baseURL: serverURI,
});

api.interceptors.request.use((req) => {
	return {
		...req,
		baseURL: serverURI,
	};
});

export { api };