<template>
	<div class="container-fluid p-0">
		<Nav />
		<div class="row" style="margin-top: 10rem">
			<div class="col-md-12">
				<p class="h3 mb-5">PERSONAL INFORMATION REQUESTS</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8 card shadow mb-5">
				<p class="pt-5"></p>
				<p class="h6 pt-5 text-left ml-4">
					REQUESTS TO LEARN HOW WE COLLECT AND USE YOUR PERSONAL INFORMATION
					(PI)
				</p>

				<div class="text-left ml-4 mt-3">
					To learn more about how we collect and use your personal information,
					please choose from the following options:
				</div>
				<div class="mt-3 text-left ml-4">
					<input type="checkbox" /><label for="" class="ml-2">
						I want to see the categories of PI you have about me.</label
					>
				</div>
				<div class="mt-3 text-left ml-4">
					<input type="checkbox" /><label for="" class="ml-2">
						I want to know where you obtained my PI from.</label
					>
				</div>
				<div class="mt-3 text-left ml-4">
					<input type="checkbox" /><label for="" class="ml-2">
						I want to know the business purpose for collecting my PI.</label
					>
				</div>
				<div class="mt-3 text-left ml-4">
					<input type="checkbox" /><label for="" class="ml-2">
						I want to know who my PI has been shared with.</label
					>
				</div>
				<div class="mt-3 text-left ml-4">
					<input type="checkbox" /><label for="" class="ml-2">
						I want to see the PI that has been collected about me.</label
					>
				</div>
				<div class="mt-3 text-left ml-4">
					To fulfill your request, we need to know and verify your identity.
					Please enter your information in the text box below so we can find
					your information in our system and to contact you to for verification.
					Please provide at least two pieces of information to aid in our
					verification process.
				</div>
				<textarea
					cols="2"
					rows="10"
					style="width: 500px"
					class="ml-4 mt-4 mb-5"
				></textarea>
				<div class="mt-3 text-left ml-4">
					This information will only be used to verify who you are. After this
					request is processed and completed, the above information will be made
					inaccessible to IVA Research and our partners.
				</div>
				<button
					class="btn btn-primary mb-5 mt-5"
					style="width: 200px; margin: 0 auto"
				>
					SUBMIT
				</button>
			</div>
		</div>
		<div class="mt-5 pt-5"></div>
		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'PersonalInfo',
	components: {
		Nav,
		Footer,
	},
	mounted() {},
}
</script>