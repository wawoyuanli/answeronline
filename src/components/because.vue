<template>
	<div class="container">
		<div class="row">
			<div class="col-md-12" style="display: flex">
				<img :src="img" alt="" width="80px" height="80px" />
				<div>
					<p>MEMBERSHIP IS FREE</p>
					<p class="text-left">
						You will never have to pay any money to be a member. Your
						participation in our surveys is the only "cost" of membership.
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
	},
}
</script>