import axios from "axios"

const base = "https://jsonplaceholder.typicode.com"

export const api = {
	get: async (url:string)=>{
		let response = await axios.get(`${base}${url}`)
		let json = response.data;
		return json;
	}
}