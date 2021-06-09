<template>
	<div
		class="container-fluid fixed-top shadow pt-3 pb-3"
		style="background: #275894"
	>
		<div class="row">
			<div
				class="col-md-3 d-flex justify-content-end align-items-center border-right"
			>
				<a
					class="text-light h3 text-right text-decoration-none mr-5"
					href="#/home"
				>
					IVA Research</a
				>
			</div>
			<div class="col-md-9 d-flex justify-content-end">
				<nav class="navbar navbar-expand-lg navbar-light">
					<button
						class="navbar-toggler bg-light border-0"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon bg-light"></span>
					</button>

					<div class="collapse navbar-collapse row" id="navbarSupportedContent">
						<div class="col-md-8">
							<ul class="navbar-nav mr-auto border-right">
								<li class="nav-item active">
									<a class="nav-link text-light" href="#/home"
										>HOME <span class="sr-only">(current)</span></a
									>
								</li>
								<li class="nav-item">
									<a class="nav-link text-light" href="#/signup">SIGN UP</a>
								</li>

								<li class="nav-item">
									<a class="nav-link text-light" href="#/login">LOGIN</a>
								</li>
							</ul>
						</div>
						<div class="col-md-4 d-flex justify-content-around">
							<a href="http://www.pinterest.com" id="pinterest">
								<div
									style="
										width: 48px;
										height: 48px;
										display: flex;
										align-items: center;
										justify-content: center;
									"
								>
									<img
										src="@/assets/images/_pinterest.png"
										alt=""
										width="24px"
										style=""
										id="pinterestImg"
									/>
								</div>
							</a>

							<a href="https://wwd.com/tag/instagram" id="instagram">
								<div
									style="
										width: 48px;
										height: 48px;
										display: flex;
										align-items: center;
										justify-content: center;
									"
								>
									<img
										src="@/assets/images/Instagram.png"
										alt=""
										width="24px"
									/>
								</div>
							</a>

							<a href="http://www.facebook.com" id="facebook">
								<div
									style="
										width: 48px;
										height: 48px;
										display: flex;
										align-items: center;
										justify-content: center;
									"
								>
									<img
										src="@/assets/images/facebook.png"
										alt=""
										width="20px"
									/></div
							></a>
							<a href="http://www.twitter.com" id="twitter">
								<div
									style="
										width: 48px;
										height: 48px;
										display: flex;
										align-items: center;
										justify-content: center;
									"
								>
									<img src="@/assets/images/Twitter.png" alt="" width="24px" />
								</div>
							</a>
						</div>
					</div>
				</nav>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Nav',
	data() {
		return {}
	},
}
</script>
<style scoped lang="less">
#pinterest {
	transition: all 1s ease-in;
}
#pinterest :hover {
	// transform: translateY(-8px);

	background: #d81e06;
}
#instagram :hover {
	background: #d4237a;
}
#facebook :hover {
	background: #1769ff;
}
#twitter :hover {
	background: #1296db;
}
</style>
