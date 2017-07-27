<style scoped lang='stylus'>
	.detailbox{
		width: 100%;
	}
	ul li{
		position: relative;
		list-style :none;
		margin: 20px 0;
		overflow: hidden;
	}
	ul li:hover{
		background: #eee;
	}
	ul li span.cty{
		position: absolute;
		top: 0px;
		left: 0px;
		width: 120px;
		height: 69px;
		display: block;
		/*border: 1px solid #000;*/
	}
	ul li div.top{
		width: 100%;
		border: 1px solid #eee;
		float: left;
		box-sizing:border-box;
	}
	ul li div.top div{
		float: left;
	}
	ul li div.top span{
		color: #84ccc9;
		font-size: 14px;
		border: #84ccc9 solid 1px;
		border-radius: 5px;
		margin: 0px 10px 2px 0px;
		padding: 0px 10px;
	}
    ul li div.top span.first{
    	color: #ec6941;
    	font-size: 14px;
    	border: #ec6941 solid 1px;
    	border-radius: 5px;
    	margin: 0px 10px 2px 0px;
    	padding: 0px 10px;
	}
	ul li div.bottom{
		float: right;
		width: 100px;
		height: 40px;
		background: #cca53c;
		text-align: center;
		line-height: 40px;
	}
	ul li div.bottom a{
		display: block;
		text-decoration: none;
		font-size: 18px;
		color: #fff;
	}
	ul li div.img img{
		width: 314px;
		height: 235px;
	}
	ul li h3{
		font-size: 22px;
		padding: 15px;
		color: #333;
		font-family: "Microsoft YaHei";
		cursor: pointer;
	}
	ul li p{
		padding: 0px 15px;
		margin-bottom: 15px;
		font-family: "Microsoft YaHei";
		color: #666;
    	font-size: 16px;
	}
	ul li div.price{
		position: absolute;
		bottom: 80px;
		right:20px;
		font-family: "Microsoft YaHei";
	}
	ul li div.price span{
		font-size: 36px;
		color: #cca53c;
		font-family: arial;
	}
</style>
<template>
	<div class="detailbox">
		<ul>
			<li v-for="(item , index) in getListData">
				<div class="top">
					<div class="img"><a href=""><img :src="item.pic"></a></div>
					<div>
						<h3>{{item.title}}</h3>
						<p>{{item.annotation}}</p>
						<p>
							<span v-for="_item in item.tag">{{_item}}</span>
						</p>
						<p>出发日期：{{item.date_start}}、结束日期：{{item.date_end}}</p>
						<p>出发城市：{{item.start}}---目的地国家：{{item.end}}</p>
						<p>出行天数：{{item.date_amount}}</p>
					</div>
				</div>
				<div class="price">
					<span>¥{{item.price}}</span>/人起
				</div>
				<span class="cty"></span>
				<div class="bottom"><a href="#">查看详情</a></div>
			</li>
		</ul>
	</div>
</template>
<script>
export default{
	data(){
		return {};
	},
	methods:{

	},
    computed : {
        getListData(){
            return this.$store.state.data.listdata.results;
        }
    },
}
</script>