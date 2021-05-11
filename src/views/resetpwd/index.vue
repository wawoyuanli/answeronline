<template>
  <div class="resetpwd">
    <Nav></Nav>
    <div class="container pt">
      <div class="row">
        <div class="col-md-12">
          <p class="h2 text-center">Reset my password</p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2 text-left col-md-12" 
            >username:*</label
          >
          <input
            type="text"
            class="form-control col-md-12"
            v-model="username"
            maxlength="30"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <div class="row">
            <div class="col-md-7">
              <label class="mt-3 mb-2 text-left col-md-12"  >
                email *
              </label>
              <input
                type="text"
                class="form-control col-md-12"
                v-model="email"
                maxlength="30"
                minlength="0"
              />
            </div>
            <div class="col-md-5">
              <label class="mt-3 text-left col-md-12" style="opacity: 0;">
                code
              </label>
              <button
                class="btn btn-primary form-control col-md-12"
                @click="sendCode"
                :disabled="disabled"
              >
                {{ sendCodetext }}
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2 text-left col-md-12">
            Email Verification Code *
          </label>
          <input
            type="text"
            class="form-control col-md-12"
            v-model="code"
            maxlength="6"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <label class="mt-3 mb-2 text-left col-md-12"  
            >password:*</label
          >
          <input
            type="text"
            class="form-control col-md-12"
            v-model="password"
            maxlength="20"
            minlength="6"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-3"></div>
        <div class="col-md-5">
          <input
            type="submit"
            class="mt-4 col-md-12 btn btn-primary mb-4"
            @click="resetPwd"
          />
        </div>
      </div>
    </div>
    <Dialog ref="resetpwd" @userBehavior="userBehaviorFun" />
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
import Footer from "@c/footer.vue";
import { resetPwd, getCode } from "@/api/login.js";
import Dialog from "@c/dialog.vue";
export default {
  name: "Resetpwd",
  components: {
    Nav,
    Footer,
    Dialog,
  },

  data() {
    return {
      isActive: true,
      color: "#26a4c3",
      username: "",
      email: "",
      code: "",
      password: "",
      disabled: false,
      sendCodetext: "get verification code",
    };
  },
  mounted() {
    // document.getElementById("borderBottom").classList.add("borderBottom");
  },
  methods: {
    sendCode: function() {
      let _th = this;
      let req = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
      if (!req.test(_th.email)) {
        alert("E-mail format is incorrect");
        return false;
      }
      _th.disabled = true;
      _th.countDown(60);
      getCode({ email: _th.email })
        .then(function(res) {
          console.log(res);
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    resetPwd: function() {
      let _th = this;
      let data = {
        username: _th.username,
        email: _th.email,
        remark: _th.code,
        password: _th.password,
      };
      if (!data.username) {
        alert("username must been input");
        return false;
      }
      if (!data.email) {
        alert("email must been input");
        return false;
      }
      if (!data.remark) {
        alert("remark must been input");
        return false;
      }
      if (!data.password) {
        alert("password must been input");
        return false;
      }

      resetPwd(data)
        .then(function(res) {
          if (res.data.code === 0) {
            _th.$router.push("/login");
          } else if (res.data.code === 500) {
            _th.$refs.resetpwd.content = res.data.msg;
            _th.$refs.resetpwd.isShowConfirm = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    countDown(time = 60) {
      // this.countDownTime = time
      if (time !== 0) {
        this.sendCodetext = "Countdown " + time + " s";
        setTimeout(() => {
          time--;
          this.countDown(time);
        }, 1000);
      } else {
        this.disabled = false;
        this.sendCodetext = "get verification code";
      }
    },
    userBehaviorFun(type, data) {
      this.$refs.resetpwd.isShowConfirm = false;
      this.$router.push("#/login");
    },
  },
};
</script>
<style lang="less" scoped>
.resetpwd {
  .container {
    min-height: 75vh;
  }
  .pt {
    padding-top: 8rem;
    label {
      font-size: 18px;
      font-family: "Liberation Sans";
    }
  }
}
</style>
