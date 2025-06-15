<script>
	import Card from '../Components/Card.svelte';
	import DynamicCard from '../Components/DynamicCard.svelte';
</script>

<div class="mx-4 grid grid-cols-6 gap-4 py-4">
	<DynamicCard
		title="Image Card"
		description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		buttonText="View More"
		baseColour="blueHover"
		showImage={true}
		showIcon={false}
	/>
	<DynamicCard
		title="Icon Card"
		description="This card shows a full width colored background with a centered icon."
		buttonText="Click Here"
		baseColour="blueHover"
		iconBackgroundColour="blue"
		iconColour="white"
		showImage={false}
		showIcon={true}
	/>
	<DynamicCard
		title="Image Card"
		description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		buttonText="View More"
		baseColour="blueHover"
		showImage={true}
		showIcon={false}
	/>
	<DynamicCard
		title="Icon Card"
		description="This card shows a full width colored background with a centered icon."
		buttonText="Click Here"
		baseColour="blueHover"
		iconBackgroundColour="blue"
		iconColour="white"
		showImage={false}
		showIcon={true}
	/>
	<DynamicCard
		title="Image Card"
		description="lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
		buttonText="View More"
		baseColour="blueHover"
		showImage={true}
		showIcon={false}
	/>
	<DynamicCard
		title="Icon Card"
		description="This card shows a full width colored background with a centered icon."
		buttonText="Click Here"
		baseColour="blueHover"
		iconBackgroundColour="blue"
		iconColour="white"
		showImage={false}
		showIcon={true}
	/>
</div>
