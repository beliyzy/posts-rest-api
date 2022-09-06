<template>
	<div class="wrapper">
		<InputSearch @search="input" />
		<CardsContainer />
	</div>
</template>

<script>
import InputSearch from './components/InputSearch/InputSearch.vue'
import CardsContainer from './components/CardsContainer/CardsContainer.vue'
import { mapActions } from 'vuex'
export default {
	components: {
		CardsContainer,
		InputSearch,
	},

	methods: {
		...mapActions(['initPage', 'changeQuery']),
		input(value) {
			this.changeQuery(value)
		},
	},
	created() {
		this.initPage()
	},
}
</script>

<style lang="scss"></style>
