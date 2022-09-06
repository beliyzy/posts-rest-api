<template>
	<div class="input-search">
		<input
			type="text"
			v-model.trim="inputValue"
			@input="$emit('search', inputValue)"
			class="form-control"
			placeholder="Seacrh by author"
			aria-label="Username"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			inputValue: '',
		}
	},
}
</script>

<style src="./style.scss" lang="scss"></style>
