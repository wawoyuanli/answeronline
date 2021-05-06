<template>
	<div class="homepage">
		<Nav />
		<div class="" style="height: 550px"></div>
		<div class="container-fluid" style="background: #333333">
			<div class="row pt-5 pb-5">
				<div class="col-md-6 text-right border-right">
					<div class="text-light h5">
						MEMBERSHIP IS FREE - SIGN UP IS FAST & EASY!
					</div>
					<div class="sighup">
						<div class="btn btn-danger text-light mt-4 btn-lg">
							<a href="#/signup" class="text-decoration-none text-light">Sign Up!</a>
						</div>
					</div>
				</div>
				<div class="col-md-6 h5 text-left text-light">
					<div class="text-light h5">LOGIN TO YOUR ACCOUNT</div>
					<div class="sighup">
						<div class="btn btn-info text-light mt-4 btn-lg">
							<a href="#/login" class="text-decoration-none text-light">Login</a>
						</div>
						<div class="mt-4" style="font-size: 14px">Forgot Password?</div>
					</div>
				</div>
			</div>
			<div class="row pb-4">
				<div class="col-md-12">
					<div
						style="
							width: 60vw;
							height: 10px;
							border-bottom: 1px solid #ffffff;
							margin: 0 auto;
						"
					></div>
				</div>
			</div>
			<div class="row mt-4 pb-5">
				<div class="col-md-1"></div>
				<div class="col-md-2"></div>
				<div class="col-md-2">
					<div
						style="
							background: #e9624c;
							display: flex;
							align-items: center;
							width: 200px;
						"
						class="pt-2 pb-2"
					>
						<img
							src="@/assets/images/f.png"
							alt=""
							width="20px"
							height="20px"
						/>
						<a class="text-center text-light" style="width: 80%" href="https://www.facebook.com/">
							Login with Facebook
						</a>
					</div>
				</div>
				<div class="col-md-2">
					<div
						style="
							background: #743519;
							display: flex;
							align-items: center;
							width: 200px;
						"
						class="pt-2 pb-2"
					>
						<img
							src="@/assets/images/f.png"
							alt=""
							width="20px"
							height="20px"
						/>
						<a class="text-center text-light" style="width: 80%">
							Sign in with Google
						</a>
					</div>
				</div>
				<div class="col-md-2 text-light">
					<div
						style="
							background: #ed4034;
							display: flex;
							align-items: center;
							width: 200px;
						"
						class="pt-2 pb-2"
					>
						<img
							src="@/assets/images/f.png"
							alt=""
							width="20px"
							height="20px"
						/>
						<a class="text-center text-light" style="width: 80%" href="https://appleid.apple.com/">
							Sign in with Apple
						</a>
					</div>
				</div>
				<div class="col-md-2"></div>
				<div class="col-md-1"></div>
			</div>
		</div>
		<div class="container-fluid pt-5 pb-5" style="background: #fff">
			<div class="pt-5"></div>
			<div class="row">
				<div class="col-md-12">
					<p class="h3 pb-3">WHY SIGN UP?</p>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 h5">
					<div style="color: gray">
						American Consumer Opinion® has over 6 million members worldwide who
						get paid to participate in surveys and research projects.
					</div>
					<div
						style="width: 50px; border-bottom: 2px solid black; margin: 0 auto"
						class="pt-5"
					></div>
				</div>
				<div class="col-md-3"></div>
			</div>
		</div>
		<div class="container-fluid clearfix" style="background: #fff">
			<div class="row mb-5">
				<div class="col-md-2"></div>
				<div class="col-md-3">
					<Because :img="'./static/thumbs-up.png'" />
				</div>
				<div class="col-md-3">
					<Because :img="'./static/money.png'" />
				</div>
				<div class="col-md-3">
					<Because :img="'./static/megaphone.png'" />
				</div>
			</div>
			<div class="row pt-5">
				<div class="col-md-2"></div>
				<div class="col-md-3">
					<Because :img="'./static/shopping-basket.png'" />
				</div>
				<div class="col-md-3">
					<Because :img="'./static/movie.png'" />
				</div>
				<div class="col-md-3">
					<Because :img="'./static/shield.png'" />
				</div>
			</div>
			<div class="row mb-5 mt-5 pt-5">
				<div class="col-md-4"></div>
				<div class="col-md-6" style="display: flex">
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
				<div class="col-md-1"></div>
			</div>
		</div>
		<div class="container-fluid">
			<div class="row">
				<div class="col-md-4" style="background: #505975">
					<div style="height: 60px"></div>
					<Count ref="count" :img="'./static/Like.png'" />
					<div style="height: 50px"></div>
				</div>
				<div class="col-md-4" style="background: #586f9e">
					<div style="height: 60px"></div>
					<Count
						ref="count"
						:bgcolor="'#586f9e'"
						:img="'./static/wechat.png'"
					/>
					<div style="height: 60px"></div>
				</div>
				<div class="col-md-4" style="background: #6798b9">
					<div style="height: 60px"></div>
					<Count
						ref="count"
						:bgcolor="'#6798b9'"
						:img="'./static/people.png'"
					/>
					<div style="height: 60px"></div>
				</div>
			</div>
		</div>
		<div style="height: 140px"></div>
		<div style="background: #275894">
			<div style="height:60px"></div>
			<div class="container text-light" >
			<div class="row"></div>
			<div class="row mt-5">
				<div class="col-md-12">
					<p class="h1 pb-5 pt-5">What Our Members Are Saying</p>
					<div style="width:50px;margin:0 auto" class="border-bottom mb-5"></div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-4 m-0 p-0">
					<div class="border-bottom border-right">
						<p class="text-left h6">"All emails and surveys are easy to follow."</p>
						<p class="text-left h6">-- A.D., North Carolina</p>
					</div>
					<div class="border-right">
						<p class="text-left h6 pt-4">All interesting & well done</p>
						<p class="text-left h6">--M.J., Idaho</p>
					</div>
				</div>
				<div class="col-md-4 m-0 p-0">
					<div class="border-bottom border-right">
						<div class="text-left ml-2 h6">
							I do surveys for several different companies and, I have to say,
							American Consumer Opinion ranks at the top as they have a very
							good site with no junk [that] seems to be well managed.
						</div>
						<p class="text-left ml-2 h6">--H.B., Tennessee</p>
					</div>
					<div class="border-right border-left">
						<p class="text-left ml-2 h6 pt-4">Direct surveys, nice rewards, no problems.</p>
						<p class="text-left ml-2 h6 mb-5">--A.W., California</p>
					</div>
				</div>
				<div class="col-md-4 m-0 p-0">
					<div class="border-bottom">
						<p class="text-left ml-2 h6 mt-4">All emails and surveys are easy to follow.</p>
						<p class="text-left ml-2 h6 mb-4">--A.D., North Carolina</p>
					</div>
					<div class="">
						<p class="text-left ml-2 h6 mt-4">[It's] great to be a part of a great opinion site.</p>
						<p class="text-left ml-2 h6">--J.S., Ohio</p>
					</div>
				</div>
			</div>
		</div>
			<div style="height:150px"></div>
		</div>
		<!-- join us -->
		<div class="container-fluid">
			<div class="row mt-5 mb-5">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<p class="h2 mt-5 mb-5">JOIN US!</p>
					<p style="color:gray" class="h4 mb-5">
						You will never have to pay any money to be a member. Your
						participation in our surveys is the only "cost" of membership. As a
						panel member, you will typically participate in several surveys a
						year.
					</p>
					<p class="h5 mb-5">MAKE YOUR OPINIONS COUNT.</p>
					<button class="btn btn-primary mb-3 bg-lg" style="display:flex;margin:0 auto;">
						<img src="@/assets/images/star.png" alt="">
						<div class="h5" style="line-height:32px">SIGN UP!</div>
					</button>
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
<style scoped>
.homepage {
	background-image: url('../../assets/images/slide-1.jpeg');
	z-index: -1;
	background-size: cover cover;
	background-repeat: no-repeat;
	background-color: #fff;
}
</style>