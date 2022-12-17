<template>
	<div>
		<Head>
			<Title>Nuxt Dojo | {{ id }}</Title>
			<Meta name="description" :content="id" />
		</Head>
		<div>products {{ id }}</div>
	</div>
</template>

<script setup>
	const { id } = useRoute().params;
	if (id == 1) {
		throw createError({
			statusCode: 404,
			statusMessage: "oooops",
			fatal: true,
		});
	}
</script>
