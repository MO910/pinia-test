<template lang="pug">
v-card(
	class="mx-auto"
	max-width="344"
	variant='outlined'
	color='primary'
	theme='dark'
)
	| {{name}}
	v-list(:items="tasks")
	v-card-actions
		v-btn(variant="outlined" rounded @click='store.change') Button
v-text-field(v-model.trim='searchVal')
| {{searchVal}}
v-btn(rounded @click='reset') Reset
</template>

<script>
	import { useTaskStore } from "../store/tasks";
	import { storeToRefs } from "pinia";
	export default {
		setup() {
			const store = useTaskStore();
			const { tasks, searchVal, name } = storeToRefs(store);

			return { store, tasks, searchVal, name };
		},
		data: () => ({
			a: 1,
			val: "",
			items: ["Greyhound", "divisely"],
		}),
		methods: {
			reset() {
				this.store.$reset();
			},
		},
		created() {
			console.log(this.a); // => 2
		},
	};
</script>
