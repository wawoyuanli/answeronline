<template>
	<div class="agreement">
		<Nav></Nav>
		<div class="agreement-content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12 h3 text-center"></div>
				</div>
				<div class="row">
					<div class="col-md-2"></div>
					<div
						class="col-md-8 border mt-5 text-left ml-2 mb-5 shadow-lg p-3 mb-5 bg-white rounded"
					>
						<div class="ml-3 mt-4 h6">
							IVA Research is growing our panel and we want to pay
							you to help us do that!
						</div>
						<div class="ml-3 mt-3 h6">
							Our Panel is made up of several million consumers worldwide who
							get paid to participate in surveys and research projects.
						</div>
						<div class="ml-3 mt-3 h6">
							IVA Research. originally created the IVA Research.Members
							were personally invited to participate in the panel by telephone,
							and answered the surveys via the mail. Members primarily tested
							and provided their feedback on new products.
						</div>
						<div class="ml-3 mt-1">
							<div class="text-center h5 mt-5 mb-5">
								<p>***IMPORTANT!***</p>
								<div class="border-bottom border-secondary h5" style="width:100px;margin:0 auto"></div>
							</div>
							<div class="mb-2">
								We are currently only able to accept affiliates who recruit in
								the following countries: The United States, China, Canada, Australia, The United
								Kingdom, Germany and France.
							</div>
							<div style="color: red"  class="mb-2">
								All leads from countries other than those listed above do not
								qualify and will be reversed by the 20th of each month.
							</div>
							<div  class="mb-2">
								All other country quotas have been filled. Please check this
								page in the future for changes to this policy.
							</div>
							<div  class="mb-2">
								To our valued affiliates, IVA Research offers:
							</div>
							<div  class="mb-2">
								<li>
									$1.00 USD for each valid, confirmed and non-duplicated
									participant who double opts-in and completes a new member
									survey for the IVA Research. Leads outside
									of the U.S., China, Australia, U.K., Germany, France, Canada are non-qualifying
									and will be reversed. Negotiable based on demographics and/or
									traffic.
								</li>
							</div>
							<div  class="mb-2">
								<li>Contests with cash bonuses</li>
							</div>
							<div>
								<li>Excellent communication via newsletters, email, etc.</li>
							</div>
						</div>
						<div class="ml-3 mt-3" style="">
							<li>
								Dedicated Affiliate Marketing Manager focused on customer
								service
							</li>
						</div>
						<div class="ml-3 mt-1">
							<li>20%-25% conversion rate.</li>
						</div>
						<div class="ml-3 mt-3" style="font-size: 14px; font-weight: 600">
							High performers with valid sign-ups WILL be eligible for bonuses
							or a higher pay rate overall. For questions, comments or concerns
							please contact:
						</div>
					</div>
				</div>
			</div>
		</div>
		<Footer></Footer>
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'Agreement',
	components: {
		Nav: Nav,
		Footer: Footer,
	},
	data() {
		return {
			isActive: true,
			color: '#26a4c3',
		}
	},
	mounted() {
		document.getElementById('borderBottom').classList.add('borderBottom')
	},
}
</script>
<style lang="less" scoped>
.agreement {
	width: 100vw;
	background-color: #ffffff;
	.agreement-content {
		// width: 90vw;
		text-align: center;
		min-height: 75vh;
		padding-top: 7rem;
	}
}
</style>
