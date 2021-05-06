<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12" style="display: flex">
				<img :src="img" alt="" width="60px" height="60px" />
				<div>
					<p class="h6 text-left ml-3">{{title}}</p>
					<p class="text-left ml-3">
					{{content}}
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Because',
	props: {
		img: String,
		title:String,
		content:String
	},
}
</script>