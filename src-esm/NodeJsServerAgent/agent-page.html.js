export default `<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<!-- <link rel="stylesheet" type="text/css"       href="/CSS/JsOT.css"> -->
	<!-- <script                type="text/javascript" src="/JsOT.js" ></script> -->
	<title>{{ name }} - JsOT</title>
	<style>
		body {
			margin: 0;
		}
		body>a:nth-child(1) {
			text-align: center;
			display: block;
			font-style: italic;
			font-weight: bold;
			background-color: #333;
			color: #eee;
			padding: 10px;
		}
		h1 {
			text-align: center;
		}
		.pre-wr {
			text-align: center;
		}
		pre {
			margin: 20px;
			display: inline-block;
			margin-bottom: 200px;
			text-align: left;
		}
	</style>
</head>
<body>
	<a target="_blank" href="{{ theUrl }}">{{ theUrl }}</a>
	<h1>{{ name }}</h1>
	<div class="pre-wr">
		<pre id="explorer" class="jsot"></pre>
	</div>
	<script type="text/javascript" src="{{ __basename }}"></script>
	<script type="text/javascript">
		new jsot.Explorer(explorer, {ajaxReqUrl : "/parse"});
	</script>
</body>
</html>`;