<template>
	<div class="container-fluid p-0">
        <Nav/>
		<div class="row" style="margin-top:10rem">
			<div class="col-md-12">
				<p class="h3 mb-5">SECURITY</p>
			</div>
		</div>
		<div class="row">
			<div class="col-md-2"></div>
			<div class="col-md-8 card shadow mb-5">
                <p class="pt-5"></p>
				<p class="h6 pt-5 text-left ml-4">
					THE INFORMATION YOU PROVIDE ABOUT YOUR HOUSEHOLD IS STRICTLY
					CONFIDENTIAL AND PROTECTED AT ALL TIMES.
				</p>
				<p class="h6 pt-3 text-left ml-4">
					YOUR NAME AND ADDRESS AND PERSONAL DATA WILL NEVER BE USED FOR ANY
					PURPOSE OTHER THAN SURVEY RESEARCH.
				</p>
				<p class="pt-3 text-left ml-4 h6">YOUR NAME AND PERSONAL DATA WILL NEVER BE SOLD TO ANYONE.</p>
			<div class="text-left ml-4 mt-3 ">
                Your information is held in secure databases, protected by firewalls.
            </div>
            <div class="text-left ml-4 mt-3">
                All surveys you complete are strictly confidential and anonymous. Your individual answers and data will never be released or published.
            </div>
            <!-- </div> -->
               <div class="text-left ml-4 mt-3">
                   You can safely update or delete your account online at any time.
               </div>
               <div class="text-left ml-4 pb-5 mt-3">
                   Your information is safe, and you have complete control over your account. We hope you will decide to join. If you have any other questions about the security of IVA Research, please email contact@ivaresearch.com.
               </div>
                  <p class="pb-5"></p>
            </div>
		</div>
        <div class="mt-5 pt-5"></div>
      <Footer/>
       
	</div>
</template>
<script>
import Nav from '@c/nav.vue'
import Footer from '@c/footer.vue'
export default {
	name: 'Security',
    components:{
        Nav,
        Footer
    }
}
</script>