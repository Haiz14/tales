<script>
	export let data
</script>
<p> Tales </p>

{#each data.posts as post}
	<p> {post.slug}</p>
{/each}
