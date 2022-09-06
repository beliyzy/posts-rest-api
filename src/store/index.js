import { createStore } from 'vuex'

export default createStore({
	state() {
		return {
			posts: [],
			query: '',
		}
	},
	actions: {
		async initPage({ commit }) {
			let fetchedPosts = []
			let fetchedUsers = []

			await fetch('https://jsonplaceholder.typicode.com/posts')
				.then((res) => res.json())
				.then((data) => (fetchedPosts = data))

			await fetch('http://jsonplaceholder.typicode.com/users')
				.then((res) => res.json())
				.then((data) => (fetchedUsers = data))
				.then(() => {
					for (let post of fetchedPosts) {
						const temp = fetchedUsers.find((user) => post.userId === user.id)
						commit('setPosts', {
							...post,
							author: temp.name,
						})
					}
				})
		},

		changeQuery({ commit }, payload) {
			commit('setQuery', payload)
		},
	},
	mutations: {
		setPosts(state, payload) {
			state.posts.push(payload)
		},
		setQuery(state, payload) {
			state.query = payload
		},
	},
	getters: {
		visiblePosts(state) {
			return state.posts.filter((post) => post.author.toUpperCase().includes(state.query.toUpperCase())).slice(0, 6)
		},
	},
})
