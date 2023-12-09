(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"无标题_3_HTML5 Canvas_atlas_", frames: [[1282,0,493,480],[1777,0,153,171],[1777,173,153,171],[0,0,1280,832]]}
];


// symbols:



(lib.image3 = function() {
	this.spriteSheet = ss["无标题_3_HTML5 Canvas_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.zz10 = function() {
	this.spriteSheet = ss["无标题_3_HTML5 Canvas_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.zz10png复制 = function() {
	this.spriteSheet = ss["无标题_3_HTML5 Canvas_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.背景2 = function() {
	this.spriteSheet = ss["无标题_3_HTML5 Canvas_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.元件2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.背景2();
	this.instance.parent = this;
	this.instance.setTransform(-640,-416);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-640,-416,1280,832);


(lib.元件1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.image3();
	this.instance.parent = this;
	this.instance.setTransform(-246.5,-240);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-246.5,-240,493,480);


// stage content:
(lib.无标题3_HTML5Canvas = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 图层_1
	this.instance = new lib.元件1("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(649.5,785);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({rotation:360},47).wait(1));

	// 图层_2
	this.instance_1 = new lib.元件2("synched",0);
	this.instance_1.parent = this;
	this.instance_1.setTransform(640,416);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(48));

	// 图层_3
	this.instance_2 = new lib.zz10();
	this.instance_2.parent = this;
	this.instance_2.setTransform(435,442);

	this.instance_3 = new lib.zz10png复制();
	this.instance_3.parent = this;
	this.instance_3.setTransform(435,442);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2}]}).to({state:[{t:this.instance_3}]},37).wait(11));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(640,416,1280,1025);
// library properties:
lib.properties = {
	id: '80ACC8F397D0C547B137068061F6869C',
	width: 1280,
	height: 832,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/无标题_3_HTML5 Canvas_atlas_.png", id:"无标题_3_HTML5 Canvas_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['80ACC8F397D0C547B137068061F6869C'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;