<template>
  <div class="homepage">
    <Nav />
    <div class="" style="height: 550px"></div>
    <div class="container-fluid" style="background: #275894">
      <div class="row pt-5 pb-5">
        <div class="col-md-6 text-right border-right">
          <div class="text-light h5">
            MEMBERSHIP IS FREE - SIGN UP IS FAST & EASY!
          </div>
          <div class="sighup">
            <div class="btn btn-danger text-light mt-4 btn-lg">
              <a href="#/signup" class="text-decoration-none text-light"
                >Sign Up!</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-6 h5 text-left text-light">
          <div class="text-light h5">LOGIN TO YOUR ACCOUNT</div>
          <div class="sighup">
            <div class="btn btn-info text-light mt-4 btn-lg">
              <a href="#/login" class="text-decoration-none text-light"
                >Login</a
              >
            </div>
            <div class="mt-4" style="font-size: 14px">
              <a href="#/resetpwd" class="text-light text-decoration-none"
                >Forgot Password?</a
              >
            </div>
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
            <a
              class="text-center text-light"
              style="width: 80%"
              href="https://www.facebook.com/"
            >
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
              src="@/assets/images/google-logo.png"
              alt=""
              width="20px"
              height="20px"
              class="ml-2"
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
              src="@/assets/images/apple.png"
              alt=""
              width="20px"
              height="20px"
              class="ml-2"
            />
            <a
              class="text-center text-light"
              style="width: 80%"
              href="https://appleid.apple.com/"
            >
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
            LinkCloudSurvey has hundreds of thousands of members worldwide who
            are paid to take part in surveys and research projects.
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
        <div class="col-md-1"></div>
        <div class="col-md-3 ml-5">
          <Because
            :img="'./static/thumbs-up.png'"
            :title="title1"
            :content="content1"
          />
        </div>
        <div class="col-md-3">
          <Because
            :img="'./static/money.png'"
            :title="title2"
            :content="content2"
          />
        </div>
        <div class="col-md-3">
          <Because
            :img="'./static/megaphone.png'"
            :title="title3"
            :content="content3"
          />
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-md-1"></div>
        <div class="col-md-3 ml-5">
          <Because
            :img="'./static/shopping-basket.png'"
            :title="title4"
            :content="content4"
          />
        </div>
        <div class="col-md-3">
          <Because
            :img="'./static/movie.png'"
            :title="title5"
            :content="content5"
          />
        </div>
        <div class="col-md-3">
          <Because
            :img="'./static/shield.png'"
            :title="title6"
            :content="content6"
          />
        </div>
      </div>
      <div class="row mb-5 mt-5 pt-5">
        <div style="display: flex; margin: 0 auto">
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
      </div>
    </div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p class="h2 mt-5">Our Achievement</p>
          <p class="mb-5">
            Based on your demographics, linkcloudsurvey will provide you with
            paid research and market research opportunities and will provide you
            with remuneration.
          </p>
        </div>
      </div>
      <div class="row">
        <div
          class="col-md-4"
          style="background: linear-gradient(#7fcdee, #3d65ca)"
        >
          <div style="height: 60px"></div>
          <Count
            ref="count"
            :img="'./static/PayOutSide.png'"
            :number="5319018"
            :text="'Total Payout To Date'"
            :simple="'$'"
          />
          <div style="height: 50px"></div>
        </div>
        <div
          class="col-md-4"
          style="background: linear-gradient(#7fcdee, #3d65ca)"
        >
          <div style="height: 60px"></div>
          <Count
            ref="count"
            :img="'./static/surveys-scheduled.png'"
            :number="300000"
            :text="'Surveys Taken '"
            :simple="'+'"
          />
          <div style="height: 60px"></div>
        </div>
        <div
          class="col-md-4"
          style="background: linear-gradient(#7fcdee, #3d65ca)"
        >
          <div style="height: 60px"></div>
          <Count
            ref="count"
            :bgcolor="'#6798b9'"
            :img="'./static/users.png'"
            :number="89721"
            :text="'Monthly Active Users'"
            :simple="''"
          />
          <div style="height: 60px"></div>
        </div>
      </div>
    </div>
    <div style="height: 140px"></div>
    <div style="background: #275894">
      <div style="height: 60px"></div>
      <div class="container text-light">
        <div class="row"></div>
        <div class="row mt-5">
          <div class="col-md-12">
            <p class="h1 pb-5 pt-5">WHAT OUR MEMBERS ARE SAYING</p>
            <div
              style="width: 50px; margin: 0 auto"
              class="border-bottom mb-5"
            ></div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 m-0 p-0">
            <div class="border-bottom border-right">
              <div class="pt-3">
                <i class="h6">
                  'I'm very happy with the amount, and frequency of, survey
                  opportunities and the rewards provided for them.."
                </i>
              </div>
              <p class="text-left h6 pt-2">-- A.D., North Carolina</p>
            </div>
            <div class="border-right">
              <p class="text-left h6 pt-5">
                <i>"It's great to be a part of a linkcloudsurvey site."</i>
              </p>
              <p class="text-left h6 pb-5">--JS OHIO</p>
            </div>
          </div>
          <div class="col-md-4 m-0 p-0">
            <div class="border-bottom border-right">
              <div class="text-left ml-2 h6 pt-3">
                <i
                  >"It's easy to do a few surveys in your Spare time, no quotas,
                  easy cash out options, unobtrusive emails, just right"</i
                >
              </div>
              <p class="text-left ml-2 h6 pt-2">--J.L, HAWAI</p>
            </div>
            <div class="border-right">
              <p class="text-left ml-2 h6 pt-5">
                <i
                  >"The linkcloudsurvey has been one of the best, and probably
                  THE best, panel that I have worked with in some time</i
                >
              </p>
              <p class="text-left ml-2 h6 pb-3">--J.D. TEXAS</p>
            </div>
          </div>
          <div class="col-md-4 m-0 p-0">
            <div class="border-bottom">
              <p class="text-left ml-2 h6 pt-4">
                <i>"All interesting & well done"</i>
              </p>
              <p class="text-left ml-2 h6 pb-4">--M.J. IDAHO</p>
            </div>
            <div class="">
              <p class="text-left ml-2 h6 pt-4">
                <i>"All emails and surveys are easy to follow "</i>
              </p>
              <p class="text-left ml-2 h6">--ALD. NORTH CAROLINA</p>
            </div>
          </div>
        </div>
      </div>
      <div style="height: 150px"></div>
    </div>
    <!-- join us -->
    <div class="container-fluid">
      <div class="row mt-5 mb-5">
        <div class="col-md-3"></div>
        <div class="col-md-6">
          <p class="h2 mt-5 mb-5">JOIN US!</p>
          <p style="color: gray" class="h4 mb-5">
            You will never have to pay any money to be a member. Your
            participation in our surveys is the only "cost" of membership. As a
            panel member, you will typically participate in several surveys a
            year.
          </p>
          <p class="h5 mb-5">MAKE YOUR OPINIONS COUNT.</p>
          <a href="#/login" class="text-decoration-none">
            <button
              class="btn btn-primary mb-3 bg-lg"
              style="display: flex; margin: 0 auto"
            >
              <img src="@/assets/images/star.png" alt="" />
              <div class="h5" style="line-height: 32px">SIGN UP!</div>
            </button>
          </a>
        </div>
        <div class="col-md-3"></div>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
import Count from "@c/count.vue";
import Because from "@c/because.vue";

export default {
  name: "Login",
  components: {
    Nav,
    Footer,
    Count,
    Because,
  },
  data() {
    return {
      // img: '../static/PayOutSide.png',
      title1: "MEMBERSHIP IS FREE",
      content1:
        'You will never have to pay any money to be a member. Your participation in our surveys is the only "cost" of membership.',
      content2:
        "Incentives range in value from 100 to 5,000 Points per survey or research project, depending upon the time it takes. A Point equals a penny.",
      content3: `Most members of LinkCloudSurvey enjoy having the opportunity to make their opinions count, to influence the future. It's similar to voting for elected officials—but here, you are voting on products and services you want in the future. `,
      content4: `You will have the opportunity to evaluate new products and new product ideas as well as optimize existing products and packaging designs.
Your participation will help companies determine which products are worthy of placement in the stores you shop in every day.
`,
      content5: `We do hundreds of surveys a year to help companies do a better job. Your opinions really do make a difference.
Your name and address will never be used for sales or advertising purposes, and your name will never be sold to anyone.
`,
      content6: `Your opinions, information, and advice are confidential. Your answers are combined with other panel members' answers and reported as statistical summaries. Your individual answers will never be revealed to anyone without your explicit permission.`,
      title2: "MAKE MONEY TAKING SURVEYS",
      title3: "YOUR VOICE IS HEARD",
      title4: "EVALUATE NEW PRODUCTS",
      title5: "TEST NEW ADVERTISING",
      title6: "WE PROTECT YOUR PRIVACY",
      bgcolor: `linear-gradient(#4a8ad0, #3d65ca);`,
    };
  },
};
</script>
<style scoped>
.homepage {
  background-image: url("../../assets/images/slide01.jpeg");
  z-index: -1;
  background-size: 100vw 100vh;
  background-repeat: no-repeat;
  background-color: #fff;
}
</style>
