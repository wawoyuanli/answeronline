<template>
	<div class="container-fluid fixed-top">
		<div class="row shadow" style="background: #275894">
			<div class="col-md-3 text-left" style="border-right: 1px solid #b8b8bc">
				<a href="#/home">
					<img
						src="@/assets/images/yunlogo.png"
						alt=""
						width="82px"
						height="83px"
						class="ml-5"
					/>
				</a>
				<div class="text-light pt-1 pb-1 ml-5">GLOBALTON CONSULTING INC</div>
			</div>
			<div class="col-md-7 text-right border-right">
				<ul class="nav justify-content-end mt-5">
					<li class="nav-item">
						<a class="nav-link active text-light h6" href="#/home">HOME</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-light h6" href="#/signup">SIGN UP</a>
					</li>
					<li class="nav-item">
						<a class="nav-link text-light h6" href="#/login">LOGIN</a>
					</li>
				</ul>
			</div>

			<div class="col-md-2 mt-5" style="display: flex">
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
						<img src="@/assets/images/instagram.png" alt="" width="24px" />
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
						<img src="@/assets/images/facebook.png" alt="" width="20px" /></div
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
						<img src="@/assets/images/twitter.png" alt="" width="24px" />
					</div>
				</a>
			</div>
		</div>
	</div>
</template>
 <<script>
 export default {
    name:'Nav',
    data(){
      return{
        
      }
    }
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

