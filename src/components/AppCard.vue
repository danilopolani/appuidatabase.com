<template>
	<a :href="href" class="block group bg-white border-2 border-pastel-black relative after:w-[calc(100%+6px)] after:h-[calc(100%+6px)] after:absolute after:-bottom-4 after:-right-4 after:-z-10 after:bg-pastel-red mr-4 mb-4">
		<img
			:src="(typeof image === 'string' ? image : image.src)"
			:alt="title + ' thumbnail'"
			class="object-cover border-b-2 border-pastel-black"
		/>

		<div class="p-3 group-hover:underline underline-offset-2 decoration-2 decoration-pastel-purple">
			<h3 class="text-lg font-semibold font-heading tracking-[-0.15rem]">{{ title }}</h3>
			<p class="text-sm text-pastel-black/60">{{ screensCount }} screens</p>
		</div>
	</a>
</template>

<script lang="ts" setup>
defineProps<{
	title: string;
	image: string | ImageMetadata;
	href: string;
	screensCount: number;
}>();
</script>