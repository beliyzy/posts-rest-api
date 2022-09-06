<template>
	<div>
		<div class="card-deck cards-container" v-if="visiblePosts.length">
			<PostCard
				v-for="card in visiblePosts"
				:title="card.title"
				:body="card.body"
				:author="card.author"
				:key="card.id"
			/>
		</div>
		<div v-else>
			<h3>No data :(</h3>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import PostCard from '../PostCard/PostCard.vue'

export default {
	components: {
		PostCard,
	},
	methods: {
		...mapActions(['getAuthor']),
	},
	computed: {
		...mapGetters(['visiblePosts']),
	},
}
</script>

<style src="./style.scss" lang="scss"></style>
