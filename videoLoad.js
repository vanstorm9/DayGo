document.getElementById('MyVideo').addEventListener('ended',myHandler,false);
			function myHandler(e) {
				
				if(output.length > 0){
					
					
					document.getElementById('MyVideo').src = output[mainCount];
					document.getElementById('MyVideo').load();
					document.getElementById('MyVideo').play();
					
					if(mainCount >= output.length - 1)
					{
						mainCount = 0;
					} else {
						mainCount++;
					}
					
					
				}
				
				
				
				//
				//alert('End of video');
			}