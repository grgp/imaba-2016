<html>
	<head>
		<style>
			@import url(http://fonts.googleapis.com/css?family=Lobster);

			body {
			  padding:0px; 
			  margin:0px; 
			  background-color:#000; 
			  background-image:url('http://experiments.72lions.com/CanvasDisplayList/solar-system/jsrb53o.png'); 
			}

			#world {
			  position:absolute; 
			  top:50%;
			  left:50%;
			  margin-left:-450px; 
			  margin-top:-350px;
			}

			#info {
			  border-radius: 8px;
			  padding:9px; 
			  position:absolute; 
			  top:5px; 
			  left:50%;
			  width: 200px;
			  text-align: center;
			  margin-left: -100px;
			  background-color:#000;
			  color:#fff; 
			  font-family: 'Lobster'; 
			  font-size: 28px;
			  z-index:100;
			}
		</style>
	</head>
	<body>
		<canvas id="world"></canvas>
		<div id="info" style="">Solar System</div>

		<script src="jquery-2.1.4"></script>
		<script src="solar.js"></script>
	</body>	
</html>