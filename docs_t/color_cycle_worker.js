if( 'function' === typeof importScripts) {
   // This loads the wasm generated glue code
	importScripts('color_cycle_asm.js');
	   
	addEventListener('message', onMessage);

	function onMessage(e) { 
		switch(e.data.cmd){
			case "processFrame":
				processFrame();
				break;
		}
	}   
	
	// Overrides for the generated emcc script, module gets redifined later
	Module.onRuntimeInitialized = function() {
		postMessage({'cmd': 'onRuntimeInitilized'});
	}; 
	
	function processFrame(){
      postMessage({'cmd': 'drawProcessedFrame'});
	}
}





