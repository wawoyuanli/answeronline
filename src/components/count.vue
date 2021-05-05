<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div :style="{width: '558px' }">
					<img :src="img" alt="" width="60px" height="60px" class="mb-4"/>
					<div class="text-light h3">{{ count }}</div>
					<div style="width:50px;height:4px;border-bottom:2px solid #fff;margin:0 auto" class="mt-4"></div>
					<div class="text-light mt-4">{{ text }}</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	name: 'Count',
	props: {
		bgcolor: {
			type: String,
			default: 'red',
		},
        img:{
            type:String,
            default:'../assets/images/Like.png'
        }
	},
	data() {
		return { 
			count: '$30,146,855',
			text: 'Paid Out',
		}
	},
    mounted(){
    }
}
</script>