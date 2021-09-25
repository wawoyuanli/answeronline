<template>
	<div class="container-fluid p-0">
		<Nav />
		<div class="row" style="margin-top: 10rem">
			<div class="col-md-12">
				<p class="h3 mb-5">CONSUMER RIGHTS</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8 mb-5">
				<table class="table border">
					<tbody>
						<tr class="table-primary">
							<th scope="col" colspan="4" class="text-left">
								Consumers have the right to freely express their opinions,
								preferences, and grievances to the companies and governments
								that provide products and services to them. IVA Research
								 will always report consumers' viewpoints honestly and
								accurately to these organizations.
							</th>
						</tr>
						<tr>
							<th scope="col" colspan="4" class="text-left">
								Consumers have an inalienable right to privacy. GLOBALTON CONSULTING 
								INC protects the privacy and anonymity of its
								panel members. Private data about these individuals (name, email
								address, street address, phone number, income, education, family
								composition, etc.) is never sold or leased to anyone.
								Statistical summaries of groups of consumers are compiled into
								reports, but the individual data of each person is always secure
								and private.
							</th>
						</tr>
						<tr class="table-primary">
							<th scope="col" colspan="4" class="text-left">
								Consumers are entitled to free markets and free choice. GLOBALTON 
								CONSULTING INC will strive to promote free markets and free
								choice for consumers, so that they can choose how, when, and
								where they want to spend their money, energies, and time.
							</th>
						</tr>
						<tr>
							<th scope="col" colspan="4" class="text-left">
								Consumers are entitled to the benefits of competition, wherein
								many companies and organizations are striving and competing to
								satisfy consumer needs and preferences. IVA Research
								 will work to promote competition around the globe.
							</th>
						</tr>
						<tr class="table-primary">
							<th scope="col" colspan="4" class="text-left">
								Consumers are entitled to truth in advertising about the
								products and services they buy. IVA Research will
								strive to promote this ideal through its advertising-testing
								services.
							</th>
						</tr>
						<tr>
							<th scope="col" colspan="4" class="text-left">
								Consumers are entitled to safe and healthful products that
								perform as promised. IVA Research will strive to
								support continuous product improvements through its product
								testing services.
							</th>
						</tr>
						<tr class="table-primary">
							<th scope="col" colspan="4" class="text-left">
								Consumers are entitled to a safe environment. IVA Research
								 will work through its clients, its corporate
								activities, and its consulting services to promote behaviors,
								products, and services that help to preserve, protect, and
								restore the earth's natural environment.
							</th>
						</tr>
						<tr>
							<th scope="col" colspan="4" class="text-left">
								Children have a special right to protection, and extra measures
								will be taken to ensure their safety. IVA Research
								encourages parents to review any online survey directed to a
								child. No child under 14 years of age will be surveyed by
								IVA Research without parental permission.
							</th>
						</tr>
					</tbody>
				</table>
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
	name: 'Security',
	components: {
		Nav,
		Footer,
	},
}
</script>