<template>
	<div class="card">
		<div class="card-body">
			<h5 class="card-title">{{ title }}</h5>
			<p class="card-text">
				{{ body }}
			</p>
			<p class="card-text">
				<small class="text-muted"> {{ author }}</small>
			</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		title: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
		author: {
			type: String,
			required: true,
		},
	},
}
</script>

<style src="./style.scss" lang="scss"></style>
