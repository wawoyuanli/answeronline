<template>
	<div class="terms">
		<Nav></Nav>
		<div class="terms-content">
			<div class="container-fluid">
				<div class="row">
					<div class="col-md-12 h3 mb-3">TERMS AND CONDITIONS SUMMARY</div>
				</div>
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<p class="text-left h4">Summary</p>
						<p class="text-left">
							The <label class="h6">Link Cloud Survey</label> is
							owned and operated by
							<label class="h6">GLOBALTON CONSULTING INC.</label> (<a
								href="www.linkcloudsurvey.com"
								class="text-decoration-none"
								>www.linkcloudsurvey.com</a
							>).
						</p>
						<p class="text-left mt-3">
							This page is a summary of the binding Legal Agreement between you
							and the Link Cloud Survey. If you click on the "I
							Agree" button and/or you use the Link Cloud Survey
							website and participate in Research Projects, you agree to all of
							the Terms and Conditions.
						</p>
						<div class="text-left mt-3">
							You will receive Points for surveys, and you will receive Points
							or an entry in a monthly prize drawing for screeners. These Points
							will accumulate in your Member Account. These Points may be
							redeemed when you have fulfilled all of the terms of this
							Agreement. Point incentives range from 5 Points (US 5 cents) up to
							1,000 Points (US $10.00) or more. Winners of the monthly prize
							drawings will be notified via email.
						</div>
						<div class="text-left mt-3">
							You must maintain a current and correct email address in your
							Member Account at www.acop.com at all times, and you agree that
							all transactions will be conducted by email or similar electronic
							communications. If you fail to maintain a current and correct
							email address or fail to respond to repeated emails, you will lose
							the Points in your Member Account.
						</div>
						<div class="text-left mt-3">
							Your privacy, confidentiality, and anonymity are strictly guarded
							(click here to see details of Privacy Policy).
						</div>
						<div class="text-left">
							You agree to answer all survey questions honestly and truthfully
							to the best of your ability.
						</div>
						<div class="text-left mt-3 ">
							You agree to protect the confidentiality of information (such as
							new products, new ads, new promotions, etc.) that may be revealed
							to you during a research project.
						</div>
						<div class="text-left mt-3">
							You must be 14 years of age or older to become a Member of the
							Link Cloud Survey. Only one Member per household is
							permitted.
						</div>
						<div class="text-left mt-3">
							From time to time, the terms and conditions of this Agreement may
							be modified. You will be notified of any changes by notice posted
							on Site.
						</div>
						<div class="text-left mb-5">
							<a href="#/termsDetail" class="text-decoration-none">
								Click Here To See Full Terms and Conditions
							</a>
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
	name: 'Privacy',
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
		// document.getElementById('borderBottom').classList.add('borderBottom')
	},
}
</script>
<style lang="less" scoped>
.terms {
	width: 100vw;
	background-color: #ffffff;
	.terms-content {
		text-align: center;
		min-height: 75vh;
		padding-top: 7rem;
		.container {
			.row {
			}
		}
	}
}
</style>
