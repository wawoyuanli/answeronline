<template>
  <div class="login">
    <Nav></Nav>
    <div class="clogin">
      <p class="h1">Login</p>
      <div class="formdata">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <label
                for="userName"
                class="control-label mt-2 text-left"
                style="width:350px"
                >Username
                <label style="color: red">*</label>
              </label>
              <input
                class="form-control"
                data-toggle="tooltip"
                data-placement="right"
                :title="tipUsername"
                v-model="username"
              />
              <p v-show="isShow" style="font-size: 10px; color: red">
                {{ errMess }} *
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <label
                for="password"
                class="control-label mt-2 text-left"
                style="width:350px"
                >Password
                <label style="color: red">*</label>
              </label>
              <input
                class="form-control"
                data-toggle="tooltip"
                data-placement="right"
                :title="tipPassword"
                v-model="password"
              />
              <p v-show="show" style="font-size: 10px; color: red">
                {{ errMessPassword }} *
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="submit mt-5">
                <button
                  @click="login"
                  class="btn col-md-12"
                  type="button"
                  data-toggle="modal"
                  data-target="#myModal"
                >
                  Log in
                </button>
              </div>
              <div class="forgot">
                <a href="#/resetpwd"> I forgot my password</a>
              </div>
              <div class="toregister">
                Not a member yet? Click
                <a href="#/signup">here</a> to register.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Dialog ref="myConfirm" @userBehavior="userBehaviorFun"></Dialog>
    <Footer />
  </div>
</template>
<script>
import Nav from "@c/nav.vue";
// import Login from '@c/login.vue'
import Footer from "@c/footer.vue"; //引入底部组件
import Dialog from "@c/dialog.vue";
import { login } from "@/api/login";
export default {
  name: "LoginPage",
  components: {
    Nav: Nav,
    // Login: Login,
    Footer: Footer,
    // Dialog: Dialog,
  },
  data() {
    return {
      color: "#26a4c3",
      isActive: true,
      isShow: false,
      errMess: "Username can not be empty",
      tipUsername: "",
      username: "",
      password: "",
      tipPassword: "",
      show: false,
      errMessPassword: "",
    };
  },
  mounted() {},
  methods: {
    blur: function(username) {},
    input: function(e) {},
    blur2: function(password) {},
    input2: function(e) {},
    login() {
      let _th = this;
      if (!_th.username) {
        alert("Username can not be empty");
        return false;
      }
      if (!_th.username.trim().length) {
        alert("Username can not be empty");
        return false;
      }
      if (!_th.password) {
        alert("password can not be blank");

        return false;
      }
      if (!_th.password.trim().length) {
        alert("password can not be blank");
        return false;
      }
      let requestData = {
        username: _th.username,
        password: _th.password,
      };
      /**登录接口 */
      login(requestData)
        .then(function(res) {
          debugger;
          if (res.data.code === 0) {
            window.location.href = process.env.VUE_APP_URL; //登录成功跳转地址
          } else if (res.data.code === 500) {
            _th.$refs.myConfirm.content = res.data.msg;
            _th.$refs.myConfirm.isShowConfirm = true;
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    },
    userBehaviorFun(type, data) {
      this.$refs.myConfirm.isShowConfirm = false;
      // window.location.href = process.env.VUE_APP_URL //登录成功跳转地址
    },
  },
};
</script>
<style lang="less" scoped>
.clogin {
  min-height: 75vh;
  .h1 {
    text-align: center;
    padding-top: 8rem;
  }
  .formdata {
    .container {
      .row {
        justify-content: center;
        .col-md-4 {
          .form-control {
            margin: 10px 0px;
          }
        }
        .submit {
          .btn {
            background: #ff6f00;
            color: #fff;
          }
        }
        .forgot {
          margin-top: 20px;
          a {
            color: #ff6f00;

            text-decoration: underline;
          }
        }
        .toregister {
          margin-top: 20px;
          color: rgb(146, 135, 135);
          margin-bottom: 10rem;
          a {
            text-decoration: underline;
            color: #ff6f00;
          }
        }
      }
    }
  }
}
</style>
