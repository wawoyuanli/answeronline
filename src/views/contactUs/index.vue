<template>
	<div class="contact">
		<Nav />
		<div class="container-fluid" style="margin-top: 10rem">
			<div class="row">
        <div class="col-md-2"></div>
				<div class="col-md-8">
					<p class="h3 text-left">CONTACT US</p>
				</div>
				<div class="row">
					<div class="col-md-2"></div>
					<div class="col-md-8">
						<div class="text-left h5 mt-2 mb-3">
							Have questions for us concerning our service or website? Having a
							problem with the site? Simply fill out the form below and we will
							be in contact with you before you know it!
						</div>
						<div class="text-left h6 mt-3">Your Name:*</div>
						<input type="text" class="form-control col-md-5 border mt-2" />

						<div class="text-left h6 mt-3">Your Email Address: *</div>
						<input type="text" class="form-control col-md-5 border" />

						<div class="text-left h6 mt-3">Reason *</div>
						<select
							name="reason"
							class="form-control col-md-5"
							style="width: 500px"
							required=""
							id="id_reason"
						>
							<option value="" selected=""></option>
							<option value="7">General Question or Comment</option>
							<option value="9">Website Question or Comment</option>
							<option value="15">
								Use the Online Panel for Projects or Surveys
							</option>
							<option value="16">Advertising or Marketing Department</option>
						</select>
						<div class="text-left h6 mt-4">Comment or Question: *</div>
						<div class="text-left mt-2">
							<textarea
								name=""
								id=""
								cols="30"
								rows="10"
								class="col-md-5 required"
								style="width: 500px"
							></textarea>
						</div>

						<div class="text-left h6 mt-5">Verify You're Human *</div>
						<div class="text-left mt-4">
							<button class="btn btn-primary mb-5">
								SEND MESSAGE
							</button>
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
	name: 'Contact',
	components: {
		Nav: Nav,
		Footer: Footer,
	},
	data() {
		return {}
	},
	mounted() {},
	methods: {
		submit() {
			var reg = new RegExp(
				'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
			) //正则表达式
			if (!reg.test(this.email)) {
				alert('E-mail format is incorrect')
				return false
			}
			if (this.text === '') {
				alert('Text cannot be empty')
				return false
			}
			this.email = ''
			this.text = ''
			alert('Data submitted')
		},
	},
}
</script>
<style scoped lang="less">
.contact {
	.content-section {
		padding: 8rem 0rem;
		min-height: 75vh;
		h2 {
			font-size: 2rem;
		}
		p {
			margin-bottom: 1rem;
		}
		h3 {
			font-size: 1.75rem;
		}
		.m-t-30 {
			margin-top: 30px !important;
		}
		textarea {
			height: 100px;
		}
		.col-md-6 {
			.btn-success {
				color: #fff;
				background-color: #ff6f00;
				border-color: #ff6f00;
			}
			.btn {
				border-radius: 5px;
				font-family: Rubik;

				.fa {
					display: inline-block;
					font-size: inherit;
					text-rendering: auto;
					-webkit-font-smoothing: antialiased;
					font: normal normal normal 14px/1 FontAwesome;
				}
				.fa-plus:before {
					content: '\f067';
				}
			}
			.btn-primary {
				background-color: #ff6f00;
				border-color: #ff6f00;
				font-size: 1rem;
				// padding: 0px 0.75rem;
				margin-left: 0.75rem;
			}
		}
	}
}
</style>
