<template>
	<div class='p-5'>
		<h1 class='text-3xl text-zinc-500 mb-1'>Assalamualaikum</h1>
		<p class="text-zinc-500">Welcome to this Vue template, cooked by Zen.</p>
	</div>

	<img v-for='(_, n) in Array(5)' class="block mb-10 w-full h-auto" v-lazy='`https://http.cat/${n + 1}00.jpg`' alt="" />
</template>

<style scoped="">
	* {
		@apply italic text-center
	}
</style>