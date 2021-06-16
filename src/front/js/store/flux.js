const getState = ({ getStore, getActions, setState }) => {
	const token = localStorage.getItem("token");
	return {
		store: {
			message: null,
			user: [],
			clothing: [],
			token: token
		},
		actions: {
			createUser: (data, callback) => {
				// const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/register";
				const config = {
					method: "POST",
					body: JSON.stringify({
						nickname: data.nickname,
						gender: data.gender,
						email: data.email,
						password: data.password,
						image: data.image
					}),
					headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ user: json });
						callback();
					})
					.catch(error => {});
			},

			logIn: (data, callback) => {
				// const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/login";
				const config = {
					method: "POST",
					body: JSON.stringify({
						email: data.email,
						password: data.password
					}),
					headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" }
				};

				fetch(endpoint, config)
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ token: json.token });
						// localStorage.setItem("token", json.token);
						// callback();
					})
					.catch(error => {});
			},

			logOut() {
				localStorage.removeItem("token");
				setStore({ token: null });
			},

			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},

			getMessage: () => {
				// fetching data from the backend
				fetch(process.env.BACKEND_URL + "/api/hello")
					.then(resp => resp.json())
					.then(data => setStore({ message: data.message }));
				// .catch(error => console.log("Error loading message from backend", error));
			},
			changeColor: (index, color) => {
				"";
			},
			//get the store

			createClothing: data => {
				const store = getStore();
				const endpoint = process.env.BACKEND_URL + "/api/clothing";
				const config = {
					method: "POST",
					body: JSON.stringify({
						user_id: 1,
						name: data.name,
						category: data.category,
						image:
							"https://th.bing.com/th/id/R9e6e1694bdbb9d0148c1d5d451b7169b?rik=A70S6pmmXpjrGA&pid=ImgRaw"
					}),
					headers: {
						"Content-Type": "application/json",
						"Access-Control-Allow-Origin": "*"
					}
				};

				fetch(endpoint, config)
					.then(response => {
						setName("");
						setImage("");
						setCategory("");
						return response.json();
					})
					.then(json => console.log(json))
					.catch(err => console.error(err));
			}
		}
	};
};
export default getState;
