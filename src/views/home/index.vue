<template>
	<div class="homepage">
		<Nav />

		<div style="height: 60vh"></div>
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<p class="h3">WHY SIGN UP?</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 h5" style="border-bottom: 1px solid black">
					American Consumer Opinion® has over 6 million members worldwide who
					get paid to participate in surveys and research projects.
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
		<div class="container clearfix">
			<div class="row">
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
			</div>
			<div class="row">
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
				<div class="col-md-4">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
			</div>
			<div class="row mb-3">
				<div class="col-md-2"></div>
				<div class="col-md-8" style="display: flex">
					<div
						style="width: 340px; height: 10px; border-bottom: 1px solid #e5e5e5"
						class="mr-2"
					></div>
					<div
						style="
							width: 18px;
							height: 18px;
							border-radius: 9px;
							background: #e5e5e5;
						"
					></div>
					<div
						style="width: 340px; height: 10px; border-bottom: 1px solid #e5e5e5"
						class="ml-2"
					></div>
				</div>
				<div class="col-md-2"></div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4">
					<Count ref="count" :bgcolor="'#505975'" :img="'./static/Like.png'" />
				</div>
				<div class="col-md-4">
					<Count
						ref="count"
						:bgcolor="'#586f9e'"
						:img="'./static/wechat.png'"
					/>
				</div>
				<div class="col-md-4">
					<Count
						ref="count"
						:bgcolor="'#6798b9'"
						:img="'./static/people.png'"
					/>
				</div>
			</div>
		</div>
		<div class="container-fluid text-light" style="background: #03acee">
			<div class="row">
				<div class="col-md-12">
					<p>What Our Members Are Saying</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-5">
					<div>
						<p>
							American Consumer Opinion gives me the opportunity to share my
							thoughts & opinions on different products, services, etc.
						</p>
						<p>-- E.R., Massachusetts</p>
					</div>
					<div>
						<p>All interesting & well done</p>
						<p>--M.J., Idaho</p>
					</div>
				</div>
				<div class="col-md-2">
					<div class="border-bottom">
						<p>
							I do surveys for several different companies and, I have to say,
							American Consumer Opinion ranks at the top as they have a very
							good site with no junk [that] seems to be well managed.
						</p>
						<p>--H.B., Tennessee</p>
					</div>
					<div>
						<p>Direct surveys, nice rewards, no problems.</p>
						<p>--A.W., California</p>
					</div>
				</div>
				<div class="col-md-5">
					<div class="border-bottom">
						<p>All emails and surveys are easy to follow.</p>
						<p>--A.D., North Carolina</p>
					</div>
					<div class="border-bottom">
						<p>[It's] great to be a part of a great opinion site.</p>
						<p>--J.S., Ohio</p>
					</div>
				</div>
			</div>
		</div>
		<!-- join us -->
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<p>JOIN US!</p>
					<p>
						You will never have to pay any money to be a member. Your
						participation in our surveys is the only "cost" of membership. As a
						panel member, you will typically participate in several surveys a
						year.
					</p>
					<p>MAKE YOUR OPINIONS COUNT.</p>
					<button class="btn btn-primary mb-3">SIGN UP!</button>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
		<Footer />
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
import Count from '@c/count.vue'
import Because from '@c/because.vue'
export default {
	name: 'Login',
	components: {
		Nav,
		Footer,
		Count,
		Because,
	},
	data() {
		return {
			img: '../static/Like.png',
		}
	},
}
</script>