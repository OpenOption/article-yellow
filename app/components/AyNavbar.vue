<template>
	<nav class="ay-navbar">
		<h1 class="ay-branding">
			Article.Yellow
		</h1>

		<ul class="ay-menu">
			<li class="ay-menu-item" v-for="route in routes">
				<router-link class="ay-menu-link" :to="`/${route}`">{{capitalize(route)}}</router-link>
			</li>
		</ul>
	</nav>
</template>

<style lang="less" scoped>
	@import "../less/theme.less";

	.ay-navbar {
		display: flex;
		background: #eeeeee;
		box-shadow: 0 0 3px 3px rgba(0, 0, 0, .2);
		justify-content: space-between;
		align-items: center;
		padding: 0 60px;
		padding-right: 10vw;
		height: 64px;

		.ay-branding {
			.clear-whitespace;

			color: #333333;
			font-size: 2.2rem;
			font-family: @branding-font;
		}

		.ay-menu {
			.clear-whitespace;

			display: flex;

			.ay-menu-item {
				font-family: "Roboto Condensed", sans-serif;
				font-size: 1.6rem;
				font-weight: 400;
				display: flex;
				align-items: center;

				.ay-menu-link {
					color: #222222;
					text-decoration: none;
				}

				&:not(:last-child)::after {
					content: '';
					display: inline-block;
					background: #bfbfbf;
					margin: 0 10px;
					width: 2px;
					height: 32px;
				}
			}
		}
	}
</style>

<script>
	export default {
		computed: {
			routes() {
				return ['about', 'highscore', 'write'];
			}
		},

		methods: {
			capitalize(route) {
				return route[0].toUpperCase() + route.slice(1);
			}
		}
	};
</script>
