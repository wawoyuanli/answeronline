<template>
	<div class="register-wrap">
		<Nav />
		<div class="container" style="margin-top: 10rem">
			<div class="row">
				<div class="col-md-12 h2 text-center">Register</div>
			</div>
			<!--userName-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label for="userName" class="mt-2 text-left col-md-12"
						>Username
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control col-md-12"
						id="userName"
						v-model="userName"
						:title="tipUsername"
						maxlength="30"
						minlength="6"
					/>
					<div v-show="show" style="margin-top: 10px; color: red">
						{{ errorMessage }}
					</div>
				</div>
			</div>
			<!--邮箱：email-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-3">
					<label for="email" class="text-left mt-2 col-md-12"
						>Email
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control col-md-12"
						id="email"
						v-model="email"
						:title="tipEmail"
						maxlength="30"
						minlength="0"
					/>
				</div>
				<div class="col-md-3">
					<label for="sendCode" class="mt-2">
						<label style="color: red; opacity: 0"> sendcode</label>
					</label>
					<button
						class="btn btn-primary form-control"
						@click="sendVerificationCode"
						:disabled="disabled"
					>
						{{ sendCode }}
					</button>
				</div>
			</div>
			<!--验证码-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label for="remark" class="text-left mt-2 col-md-12"
						>Email Verification Code:
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control col-md-12"
						id="remark"
						v-model="remark"
						placeholder=""
						:title="tipRemark"
						maxlength="6"
						minlength="6"
					/>
				</div>
			</div>
			<!--密码-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label for="password" class="text-left mt-2 col-md-12"
						>Password
						<label style="color: red">*</label>
					</label>
					<input
						class="form-control col-md-12"
						id="password"
						v-model="password"
						type="password"
						:title="tipPassword"
						maxlength="20"
						minlength="6"
					/>
				</div>
			</div>
			<!--firstName lastName-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-3">
					<label for="firstName" class="text-left mt-2 col-md-12"
						>FirstName
						<label style="color: red">*</label>
					</label>
					<input
						type="text"
						class="form-control col-md-12"
						placeholder=""
						v-model="firstName"
						:title="tipFirstname"
						maxlength="30"
						minlength="0"
					/>
				</div>
				<div class="col-md-3">
					<label for="lastName" class="text-left mt-2 col-md-12"
						>LastName
						<label style="color: red">*</label>
					</label>
					<input
						type="text"
						class="form-control col-md-12"
						placeholder=""
						v-model="lastName"
						:title="tipLastname"
						maxlength="30"
						minlength="0"
					/>
				</div>
			</div>
			<!--sex-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label for="sex" class="text-left mt-2 col-md-12"
						>Sex
						<label style="color: red">*</label>
					</label>
					<select id="inputState" class="form-control col-md-12">
						<option selected>Male</option>
						<option>Female</option>
					</select>
				</div>
				<div class="col-lg-3" style="opacity: 0"></div>
			</div>
			<!--出生日期-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-2">
					<label for="sex" class="text-left mt-2 col-md-12"
						>Birthday year
						<label style="color: red">*</label>
					</label>
					<date-picker
						v-model="time1"
						type="year"
						value-type="format"
						format="YYYY"
						class="col-md-12"
					></date-picker>
				</div>
				<div class="col-md-2">
					<label for="birthdaymonth" class="text-left mt-2 col-md-12"
						>Birthday month
						<label style="color: red">*</label>
					</label>
					<date-picker
						class="col-md-12"
						v-model="time2"
						type="month"
						value-type="format"
						format="M"
					></date-picker>
				</div>
				<div class="col-md-2">
					<label for="sex" class="text-left mt-2 col-md-12"
						>Birthday day
						<label style="color: red">*</label>
					</label>
					<date-picker
						class="col-md-12"
						v-model="time3"
						type="day"
						format="D"
						value-type="format"
					></date-picker>
				</div>
			</div>
			<!--address-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label for="referrer" class="text-left mt-2 col-md-12"
						>Address ：
					</label>
					<input
						class="form-control control-label-referrer col-md-12"
						id="password2"
						v-model="address"
						:title="tipAddress"
						maxlength="30"
					/>
				</div>
			</div>
			<!--postCode 邮编-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label class="mt-2 text-left col-md-12">
						PostCode:
						<label style="color: red">*</label>
					</label>

					<input
						class="form-control col-md-12"
						id="password2"
						v-model="postCode"
						:title="tipPostcode"
						maxlength="10"
					/>
				</div>
			</div>
			<!--phone 电话号码-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label class="mt-2 text-left col-md-12">
						Phone:
						<label style="color: red">*</label>
					</label>

					<input
						class="form-control col-md-12"
						id="password2"
						v-model="phonenumber"
						:title="tipPhonenumber"
						type="tel"
						maxlength="11"
					/>
				</div>
			</div>
			<!--PIN 个人识别码-->
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label class="mt-2 text-left col-md-12">
						PinCode:
						<label style="color: red">*</label>
					</label>

					<input
						class="form-control col-md-12"
						id="pinCode"
						v-model="pinCode"
						:title="tipPincode"
						maxlength="4"
					/>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<label class="h6 mt-3 text-left col-md-12"> Vetification:</label>
					<div style="color: red" class="p-2" v-if="showTip">
						{{ validate }}
					</div>

					<re-captcha
						:sitekey="sitekey"
						@getValidateCode="getValidateCode"
					></re-captcha>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 mt-4 text-left">Detected country:</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<!-- 美国-US、中国-CN、英国-GB、澳大利亚-AU、加拿大-CA、德国-DE、法国-FR -->
					<div class="mt-3" style="display: flex" v-if="countryCode === 'US'">
						<svg-icon icon-class="us"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">United States</p>
					</div>
					<div class="mt-3" style="display: flex" v-if="countryCode === 'CN'">
						<svg-icon icon-class="cn"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">China</p>
					</div>
					<div class="mt-3" style="display: flex" v-if="countryCode === 'GB'">
						<svg-icon icon-class="gb"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">United Kingdom</p>
					</div>
					<div class="mt-3" style="display: flex" v-if="countryCode === 'AU'">
						<svg-icon icon-class="au"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">Australia</p>
					</div>
					<div class="mt-3" style="display: flex" v-if="countryCode === 'CA'">
						<svg-icon icon-class="ca"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">Canada</p>
					</div>
					<div style="display: flex" v-if="countryCode === 'DE'">
						<svg-icon icon-class="de"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">Germany</p>
					</div>
					<div class="mt-3" style="display: flex" v-if="countryCode === 'FR'">
						<svg-icon icon-class="fr"></svg-icon>
						<p class="text-dark ml-3" style="font-size: 18px">France</p>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 d-flex justify-content-start align-items-center">
					<input id="checkbox1" type="checkbox" name="" />

					<div class="ml-2">I have read and accepted</div>
					<a
						style="color: #ff6f00"
						href="#/terms"
						class="ml-2 text-decoration-none"
						>Terms And Conditions *</a
					>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 d-flex justify-content-start align-items-center">
					<input id="checkbox2" type="checkbox" name="" />

					<div class="ml-2">I have read and accepted</div>
					<a
						style="color: #ff6f00"
						href="#/terms"
						class="ml-2 text-decoration-none"
						>Privacy Policy *</a
					>
				</div>
			</div>
			<div class="row">
				<div class="col-md-3"></div>
				<div class="col-md-6 d-flex justify-content-start align-items-center">
					<input id="checkbox3" type="checkbox" name="" />
					<img
						src="@/assets/images/envelope.png"
						alt=""
						width="20px"
						height="20px"
            class="ml-2"
					/>
					<div class="ml-2">I want to receive marketing communication</div>
				</div>
			</div>
			 
			<div class="row mb-5 mt-3">
				<div class="col-md-3"></div>
				<div class="col-md-6">
					<div class="register-buttons mt-3">
						<input
							type="submit"
							name="register"
							value="Register"
							class="btn btn-primary btn-block btn-lg"
							@click="registerHandler"
						/>
					</div>
				</div>
			</div>
		</div>
		<Dialog ref="dialog" @userBehavior="userBehaviorFun"></Dialog>
		<Footer />
	</div>
</template>
<script>
import $ from 'jquery'
import { getCode, getCountryCode, registerHandler } from '@/api/login'
import ReCaptcha from '@c/reCaptcha'
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'

/**日期选择器 */
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import Dialog from '@c/dialog.vue'
export default {
	name: 'SignUp',
	components: {
		DatePicker,
		ReCaptcha,
		Nav,
		Footer,
		Dialog,
	},
	data() {
		return {
			sendCode: 'get verification code',
			disabled: false,
			tipUsername:
				'Choose your desired username,It must be 4-20 characters long and can only contain letters and numbers. it must start with a letter',
			tipPassword:
				'Choose your password.It must be 4-80 characters long and can only contain letters,numbers and !@#$%^&*(0-=+.,',
			tipEmail:
				'Choose your desired username.It must be 4-20 characters long and can only contain letters and numbers.it must start width a letter',
			tipRemark: 'validate code must be six numbers',
			tipPincode:
				'This is your additional security. we will request it before your cashout or password reset.It can only contain only 4 numbers (0-9)',
			tipFirstname: 'you will input your first name',
			tipLastname: 'tou will input your last name',
			tipAddress: 'please input your address',
			tipPostcode: 'please input your post code',
			tipPhonenumber: 'plase input your phone number must be 11 letters',
			userName: '',
			email: '',
			remark: '', //邮箱校验码
			password: '',
			firstName: '',
			lastName: '',
			sex: '0',
			phonenumber: '',
			pinCode: '',
			birthYear: '',
			referrer: '',
			address: '',
			postCode: '',
			iconName: 'man',
			errorMessage: '',
			show: false,
			countryCode: 'CA', //国家码
			sitekey: process.env.VUE_APP_SITEKEY,
			checkCode: false,
			validate: 'Perform man-machine authentication',
			showTip: false,
			time1: new Date().getFullYear().toString(),
			time2: (new Date().getMonth() + 1).toString(),
			time3: new Date().getDate().toString(),
			countDownTime: 60,
		}
	},
	created: function () {},
	mounted() {
		let _th = this
		/**国家码获取 */
		getCountryCode()
			.then(function (res) {
				_th.countryCode = res.data.data
				console.log(res)
			})
			.catch(function (err) {
				console.log('接口请求失败')
			})
	},
	methods: {
		selectYear: function () {
			this.dateYear
			console.log(this.dateYear)
		},
		selectMonth: function () {
			console.log(this.dateMonth)
		},
		selectDay: function () {
			console.log(this.dateDay)
		},
		/**获取验证码 */
		sendVerificationCode: function () {
			const _th = this
			var reg = new RegExp(
				'^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
			) //正则表达式
			let data = {
				email: _th.email,
			}
			if (!data.email) {
				alert('E-mail can not be empty!')
				return false
			}
			if (!reg.test(data.email)) {
				alert('please enter your vaild email!')
				return false
			}
			// _th.sendCode = "sending...";
			// _th.disabled = true;
			_th.disabled = true
			_th.countDown(60)
			getCode(data)
				.then(function (res) {
					if (res.data.code === 0) {
						// _th.sendCode = "send the verification code";
						// _th.disabled = false;
					}
				})
				.catch(function (err) {
					// _th.sendCode = "send the verification code";
					// _th.disabled = false;
					console.log(err)
				})
		},
		registerHandler: function () {
			let _th = this
			const data = {
				loginName: _th.userName,
				email: _th.email,
				password: _th.password,
				surveyFirstName: _th.firstName,
				surveyLastName: _th.lastName,
				remark: _th.remark,
				sex: _th.sex,
				surveyBirthdayYear: _th.time1, //年
				surveyBirthdayMonth: _th.time2, //月
				surveyBirthdayDay: _th.time3, //日
				surveyAddress: _th.address,
				surveyPostcode: _th.postCode,
				phonenumber: _th.phonenumber,
				surveyPinCode: _th.pinCode,
				checkCode: _th.checkCode,
				checkbox1: $('#checkbox1').is(':checked'),
				checkbox2: $('#checkbox2').is(':checked'),
				checkbox3: $('#checkbox3').is(':checked'),
			}

			if (!data.loginName.trim().length) {
				alert('Username can not be empty')
				return false
			}
			if (!data.email) {
				alert('E-mail can not be empty')
				return false
			}
			if (!data.password) {
				alert('password can not be empty')
				return false
			}
			if (!data.surveyFirstName) {
				alert('firstName can not be empty')
				return false
			}
			if (!data.surveyLastName) {
				alert('lastName can not be empty')
				return false
			}
			if (!data.remark) {
				alert('remark can not be empty')
				return false
			}
			if (!data.sex) {
				alert('sex can not be empty')
				return false
			}
			if (!data.surveyBirthdayYear) {
				alert('surveyBirthdayYear can not be empty')
				return false
			}
			if (!data.surveyBirthdayMonth) {
				alert('surveyBirthdayMonth can not be empty')
				return false
			}
			if (!data.surveyBirthdayDay) {
				alert('surveyBirthdayDay can not be empty')
				return false
			}
			if (!data.surveyAddress) {
				alert('surveyAddress can not be empty')
				return false
			}
			if (!data.surveyPostcode) {
				alert('surveyPostcode can not be empty')
				return false
			}

			if (!data.phonenumber) {
				alert('phonenumber can not be empty')
				return false
			}

			if (!data.surveyPinCode) {
				alert('surveyPinCode can not be empty')
				return false
			}
			if (/^[a-zA-Z]/.test(data.surveyPinCode)) {
				alert('Need to enter four digits')
				return false
			}
			if (/^[\u4e00-\u9fa5]/.test(data.surveyPinCode)) {
				alert('Need to enter four digits')
				return false
			}
			if (data.surveyPinCode.length < 4) {
				alert('Need to enter four digits')
				return false
			}
			if (!data.checkCode) {
				alert(`Verify You're Human`)
				return false
			}
			if (!data.checkbox1) {
				alert('You have related agreements that have not been read and checked')
				return false
			}
			if (!data.checkbox2) {
				alert('You have related agreements that have not been read and checked')
				return false
			}

			if (!data.checkbox3) {
				alert('You have related agreements that have not been read and checked')
				return false
			}
			if (!data.checkCode) {
				return false
			}

			registerHandler(data)
				.then(function (res) {
					if (res.data.code === 0) {
						_th.$router.push('/login')
					} else if (res.data.code === 500) {
						_th.$refs.dialog.content = res.data.msg
						_th.$refs.dialog.isShowConfirm = true
					}
				})
				.catch(function (err) {
					// _th.$toast("registration failed");
					console.log(err)
				})
		},

		getValidateCode(code) {
			// debugger
			if (code) {
				//认证成功
				this.checkCode = code
			} else {
				//认证失败
				this.checkCode = code
			}
		},
		userBehaviorFun(type, data) {
			this.$refs.dialog.isShowConfirm = false
			this.$router.push('#/login')
		},
		countDown(time = 60) {
			this.countDownTime = time
			if (time !== 0) {
				this.sendCode = 'Countdown ' + time + ' s'
				setTimeout(() => {
					time--
					this.countDown(time)
				}, 1000)
			} else {
				this.disabled = false
				this.sendCode = 'get verification code'
			}
		},
	},
}
</script>
<style scoped lang="less">
.register-wrap {
	min-height: 100vh;
	padding-bottom: 3rem;
}
</style>
