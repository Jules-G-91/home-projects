<script>
	export let title;
	export let description;
	export let buttonText;
	export let baseColour; // for bg color of button and icon background
	export let iconColour = 'white'; // icon stroke/fill color
	export let iconBackgroundColour = 'white'; // icon stroke/fill color

	export let showImage = false;
	export let showIcon = false;
	export let imageSrc = 'https://picsum.photos/800/800';

	const colors = {
		green: 'bg-green-500',
		red: 'bg-red-500',
		blue: 'bg-blue-500',
		greenHover: 'bg-green-500 hover:bg-green-800',
		redHover: 'bg-red-500 hover:bg-red-800',
		blueHover: 'bg-blue-500 hover:bg-blue-800'
	};

	// SVG icon, fill or stroke color will be controlled by iconColour prop via inline style
	const defaultIcon = `
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="${iconColour}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-16 w-16">
			<line x1="12" y1="5" x2="12" y2="19"></line>
			<line x1="5" y1="12" x2="19" y2="12"></line>
		</svg>
	`;
</script>

<div class="flex h-full w-full max-w-md flex-col overflow-hidden rounded-xl bg-white shadow-lg">
	{#if showImage}
		<img src={imageSrc} alt={title} class="h-48 w-full rounded-t-xl object-cover" />
	{:else if showIcon}
		<div
			class={`${colors[iconBackgroundColour]} flex h-48 items-center justify-center rounded-t-xl`}
		>
			<div class="flex items-center justify-center" style="color: {iconColour};">
				{@html defaultIcon}
			</div>
		</div>
	{/if}

	<div class="flex flex-grow flex-col p-6">
		<h2 class="font-serif text-lg font-bold">{title}</h2>
		<p class="mt-2 flex-grow text-sm text-gray-600">{description}</p>
		<button
			class={`${colors[baseColour]} mt-4 w-full cursor-pointer rounded-md px-4 py-2 text-sm text-white transition`}
		>
			{buttonText}
		</button>
	</div>
</div>
