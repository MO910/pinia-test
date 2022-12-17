<template>
	<div>
		<div>title {{ title }}</div>
	</div>
</template>

<script setup>
	let { title } = defineProps(["title"]);
</script>
