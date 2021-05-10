<template>
  <div class="footer-box pt-5">
    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-5 text-left mt-5">
          <!-- <img
            src="@/assets/images/yunlogo.png"
            alt=""
            width="100px"
            height="100px"
            class="ml-4"
          /> -->
          <p class="mt-5 mb-3 text-light text-left">
            Link Cloud Survey is owned and operated by Decision
            GLOBALTON CONSULTING INC., a global marketing research and analytical consulting
            firm headquartered
          </p>
          <!-- <p class="col-md-8 text-light text-left">
            Headquarters: 604 Ave H E Arlington, TX 76011
          </p> -->
          <!-- <p class="text-light text-left">Email: contact@linkcloudsurvey.com</p> -->
        </div>
        <div class="col-md-3"></div>
        <div class="col-md-4 text-light text-left">
          <p class="h5 ml-4 mb-5">MENU</p>

          <a
            href="#/security"
            class="text-light"
            style="display: flex; height: 30px"
          >
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <p>Security</p></a
          >

          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="#/consumerrights" class="text-light text-decoration-none"
              >Consumer Rights</a
            >
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="#/terms" class="text-light text-decoration-none">Terms</a>
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="#/privacyPolicy" class="text-light text-decoration-none"
              >Privacy Policy</a
            >
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="#/contactUs" class="text-light text-decoration-none"
              >Contact Us</a
            >
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="#/affiliate" class="text-light text-decoration-none"
              >Affiliate
            </a>
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a
              href="#/personalInfoRequest"
              class="text-light text-decoration-none"
              >Personal Information Requests</a
            >
          </li>
          <li style="display: flex; height: 30px">
            <img
              src="@/assets/images/right-thick.png"
              alt=""
              width="40px"
              height="40px"
            />
            <a href="" class="text-light text-decoration-none"
              >Do Not Sell My Personal Information</a
            >
          </li>
        </div>
      </div>
    </div>
    <div class="container-fluid">
      <div class="row pt-5 pb-5" style="background: #333333">
        <div class="col-md-2"></div>
        <div class="col-md-4">
          <p class="text-light text-left">
            ©2021 GLOBALTON CONSULTING INC. All rights reserved.
          </p>
          <div class="text-light text-left">
            <a href="#/terms" class="text-light text-decoration-none" id="terms"
              >Terms of Use</a
            >
            /
            <a href="#/privacyPolicy" class="text-light text-decoration-none"
              >Privacy Policy</a
            >
          </div>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-4 text-light text-left">
          <div style="display: flex">
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
                <img src="@/assets/images/Instagram.png" alt="" width="24px" />
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

          <div>contact@linkcloudsurvey.com</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import $ from "jquery";
export default {
  name: "Footer",
  mounted() {
    window.onload = function() {
      // function $(id) {
      // 	return document.getElementById(id)
      // }
      //鼠标进
      $("terms").onmouseover = function() {
        debugger;
        // this.style.display="none";
        // $('mobileList').style.display = 'block'
        //给当钱的添加样式
        this.style.color = "red";
      };
      //鼠标出
      // $('headerMobile').onmouseout = function () {
      // 	$('mobileList').style.display = 'none'
      // 	this.style.boxShadow = 'none'
      // }
    };
  },
};
</script>
<style scoped lang="less">
.footer-box {
  background-color: #3c5997;
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
}
</style>
