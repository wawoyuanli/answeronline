<template>
	<div class="container">
		<div class="row">
			<div class="col-md-4">
				<div :style="{ backgroundColor: bgcolor,width: '558px', height: '326px' }">
					<img :src="img" alt="" />
					<div class="text-light">{{ count }}</div>
					<div class="text-light">{{ text }}</div>
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