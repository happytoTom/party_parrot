var worker = new Worker("color_cycle_worker.js");
worker.postMessage({'cmd': 'start'}); // Start the worker.

worker.addEventListener('message', function(e) {
  switch(e.data.cmd) {
	  case 'onRuntimeInitilized':
			onRuntimeInitialized();
			break;
	  case 'drawProcessedFrame':
			drawProcessedFrame(e.data.img_data);
			break;
  }
}, false);

var fp;

function onRuntimeInitialized() {
  console.log("onRuntimeInitialized");
}

function drawProcessedFrame(){
  console.log("drawProcessedFrame");

}

function makeFrameProcessor() {
  console.log("makeFrameProcessor");
};
