(function (cjs, an) {
	var p;
	var lib = {};
	var ss = {};
	var img = {};
	lib.ssMetadata = [];
	(lib.bit = function () {
		this.initialize(img.bit);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 224, 54);
	(lib.koldun = function () {
		this.initialize(img.koldun);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 153, 228);
	(lib.morgana = function () {
		this.initialize(img.morgana);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 150, 98);
	(lib.one = function () {
		this.initialize(img.one);
	}).prototype = p = new cjs.Bitmap();
	p.nominalBounds = new cjs.Rectangle(0, 0, 23, 42);
	function mc_symbol_clone() {
		var clone = this._cloneProps(
			new this.constructor(this.mode, this.startPosition, this.loop)
		);
		clone.gotoAndStop(this.currentFrame);
		clone.paused = this.paused;
		clone.framerate = this.framerate;
		return clone;
	}
	function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
		var prototype = cjs.extend(symbol, cjs.MovieClip);
		prototype.clone = mc_symbol_clone;
		prototype.nominalBounds = nominalBounds;
		prototype.frameBounds = frameBounds;
		return prototype;
	}
	(lib.Символ21 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.morgana();
		this.instance.parent = this;
		this.instance.setTransform(0, 0, 0.7403, 0.7403);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ21,
		new cjs.Rectangle(0, 0, 111.1, 72.6),
		null
	);
	(lib.Символ8 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#FB7725")
			.s()
			.p("AAAA1IhCBCIg0g0IBDhDIhEhCIA1g0IBCBDIBDhDIA1A0IhEBCIBDBDIg0A0g");
		this.shape.setTransform(-0.1, 0.05);
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ8,
		new cjs.Rectangle(-12, -11.8, 23.9, 23.8),
		null
	);
	(lib.Символ6 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.one();
		this.instance.parent = this;
		this.instance.setTransform(-6.8, -12.4, 0.5913, 0.5913);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ6,
		new cjs.Rectangle(-6.8, -12.4, 13.6, 24.9),
		null
	);
	(lib.Символ32копия6 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgYAzQgOgIgIgNQgIgNAAgRQAAgQAIgNQAIgOAOgHQAOgHARAAQAPAAAMAFQANAFAIALIgUASQgLgNgQAAQgIAAgHAEQgHAEgEAHQgEAHAAAJQAAAJAEAHQAEAIAHAEQAHAEAIAAQAQAAALgNIAUASQgIAKgNAGQgMAFgPAAQgRAAgOgHg"
			);
		this.shape.setTransform(-86.025, -24.875);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#6AE900")
			.s()
			.p("AgPA4IAAhWIgiAAIAAgZIBjAAIAAAZIgiAAIAABWg");
		this.shape_1.setTransform(-97.125, -24.9);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#6AE900")
			.s()
			.p(
				"Ag0A4IAAhvIA4AAQAWAAALAIQALAIAAAOQAAAHgEAGQgEAHgHAEQAKACAFAHQAFAHAAALQAAAOgLAIQgMAIgXAAgAgVAhIAaAAQARAAAAgLQAAgMgRAAIgaAAgAgVgKIAVAAQAQAAAAgMQAAgKgQAAIgVAAg"
			);
		this.shape_2.setTransform(-108.075, -24.9);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#6AE900")
			.s()
			.p("AgaA4IAkhWIgcAAIAAARIgbAAIAAgqIBbAAIAAAUIgnBbg");
		this.shape_3.setTransform(-124.25, -24.9);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgWAmQgLgFgFgKQgHgKAAgNQAAgMAHgKQAFgJALgGQAKgGAMAAQANAAALAGQAKAGAGAJQAGAKgBAMQABANgGAKQgGAKgKAFQgLAGgNAAQgMAAgKgGgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAIgHgBgMQABgLgIgHQgHgIgLAAQgKAAgHAIg"
			);
		this.shape_4.setTransform(-138.8, -23.575);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgJAuQgHgIAAgOIAAgoIgOAAIAAgQIAOAAIAAgUIATAAIAAAUIAXAAIAAAQIgXAAIAAAoQAAAGADADQADADAFAAQAHAAAFgDIAFAOQgDADgFABQgFACgGAAQgNAAgIgHg"
			);
		this.shape_5.setTransform(-147.375, -24.475);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgtA7IAAh0IAUAAIAAAMQAFgHAHgDQAHgDAIAAQAMAAAKAGQAKAFAGAKQAFAKABANQgBANgFAJQgGAKgKAFQgKAGgMAAQgRAAgJgMIAAAqgAgMglQgGADgEAGQgCAGAAAIQAAAIACAGQAEAFAGADQAGAEAGAAQALAAAHgIQAHgGAAgMQAAgMgHgHQgHgIgLAAQgGAAgGAEg"
			);
		this.shape_6.setTransform(-160.2, -22.075);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgfAiQgKgKAAgSIAAgwIAUAAIAAAtQAAALAFAGQAGAGAJAAQAKAAAGgHQAHgHAAgMIAAgqIAUAAIAABUIgTAAIAAgLQgFAGgHADQgIADgHAAQgRAAgKgJg"
			);
		this.shape_7.setTransform(-171.475, -23.525);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ32копия6,
		new cjs.Rectangle(-178.9, -36.8, 100.9, 23.499999999999996),
		null
	);
	(lib.Символ32копия4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgIA1QgEgDAAgGQAAgFAEgEQAEgDAEAAQAGAAADADQAEAEAAAFQAAAGgEADQgDAEgGAAQgEAAgEgEgAgHASIgEhKIAXAAIgEBKg"
			);
		this.shape.setTransform(-40.825, -24.85);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#6AE900")
			.s()
			.p(
				"AAWArIAAgtQAAgLgFgGQgGgGgJAAQgKAAgHAHQgGAHAAALIAAArIgUAAIAAhUIATAAIAAALQAFgGAHgDQAIgDAIAAQAQAAAKAJQAKAKAAASIAAAwg"
			);
		this.shape_1.setTransform(-48.475, -23.625);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgYArIAAhUIATAAIAAAMQAIgNAWAAIAAATIgFgBQgLAAgHAHQgGAHAAAMIAAApg"
			);
		this.shape_2.setTransform(-56.925, -23.625);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgXApQgHgEgEgFQgEgGAAgIQAAgLAJgHQAIgGATAAIAVAAIAAgBQAAgJgFgFQgGgFgJAAQgIAAgHACQgGACgFAFIgIgPQAHgFAJgDQAJgDAKAAQATAAAKAJQAKAJAAATIAAAxIgTAAIAAgLQgEAGgGADQgHADgJAAQgJAAgIgDgAgSARQAAAGAEADQAFADAHAAQAHAAAGgDQAGgEACgGIAAgKIgUAAQgRAAAAALg"
			);
		this.shape_3.setTransform(-65.825, -23.575);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgUAmQgLgFgGgKQgGgKAAgNQAAgLAGgKQAGgKAKgGQAKgGALAAQANAAAKAGQAKAFAFAKQAGAKAAAMIgBAGIhCAAQACAKAIAFQAHAGAKAAQAOAAAJgJIALAMQgGAHgJADQgIAEgLAAQgOAAgKgGgAAZgGQgCgJgGgGQgHgGgKAAQgIAAgHAGQgGAGgCAJIAwAAIAAAAg"
			);
		this.shape_4.setTransform(-75.375, -23.575);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgXA2QgKgFgGgKQgGgKAAgNQAAgNAGgJQAGgKAKgFQAJgGANAAQAHAAAIADQAGADAFAGIAAgsIAUAAIAAB2IgTAAIAAgLQgFAGgHADQgIADgHAAQgNAAgJgGgAgMgGQgFADgEAFQgDAGAAAIQAAAIADAGQAEAGAFADQAGAEAGAAQAHAAAGgEQAGgDAEgGQACgGAAgIQAAgIgCgGQgEgFgGgDQgGgEgHAAQgGAAgGAEg"
			);
		this.shape_5.setTransform(-90.55, -25.175);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#6AE900")
			.s()
			.p(
				"AAWArIAAgtQAAgLgFgGQgGgGgJAAQgKAAgHAHQgGAHAAALIAAArIgUAAIAAhUIATAAIAAALQAFgGAHgDQAIgDAIAAQAQAAAKAJQAKAKAAASIAAAwg"
			);
		this.shape_6.setTransform(-101.125, -23.625);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgXApQgHgEgEgFQgEgGAAgIQAAgLAJgHQAIgGATAAIAVAAIAAgBQAAgJgFgFQgGgFgJAAQgIAAgHACQgGACgFAFIgIgPQAHgFAJgDQAJgDAKAAQATAAAKAJQAKAJAAATIAAAxIgTAAIAAgLQgEAGgGADQgHADgJAAQgJAAgIgDgAgSARQAAAGAEADQAFADAHAAQAHAAAGgDQAGgEACgGIAAgKIgUAAQgRAAAAALg"
			);
		this.shape_7.setTransform(-111.775, -23.575);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics
			.f("#6AE900")
			.s()
			.p(
				"AAWArIAAgtQAAgLgFgGQgGgGgJAAQgKAAgHAHQgGAHAAALIAAArIgUAAIAAhUIATAAIAAALQAFgGAHgDQAIgDAIAAQAQAAAKAJQAKAKAAASIAAAwg"
			);
		this.shape_8.setTransform(-126.175, -23.625);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgJA+IAAhVIATAAIAABVgAgIgoQgEgEAAgFQAAgFAEgDQADgEAFAAQAFAAAEAEQAEADAAAFQAAAFgEAEQgDADgGAAQgFAAgDgDg"
			);
		this.shape_9.setTransform(-133.975, -25.475);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgtA7IAAh0IATAAIAAAMQAGgHAHgDQAHgDAIAAQAMAAAKAGQAKAFAGAKQAFAKAAANQAAANgFAJQgGAKgKAFQgKAGgMAAQgRAAgJgMIAAAqgAgMglQgGADgDAGQgDAGAAAIQAAAIADAGQADAFAGADQAGAEAGAAQALAAAHgIQAHgGAAgMQAAgMgHgHQgHgIgLAAQgGAAgGAEg"
			);
		this.shape_10.setTransform(-141.4, -22.075);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics
			.f("#6AE900")
			.s()
			.p(
				"AgVApQgJgDgGgEIAHgPQAGAEAIACQAIADAHAAQASAAAAgKQAAgEgFgCIgNgDIgRgEQgHgCgFgEQgFgGAAgJQAAgMAKgHQALgIAQAAQAJAAAIACQAJACAGAEIgIAPQgLgGgNAAQgIAAgFACQgEADAAAEQAAAFAFACQAEACAKACIARADQAGACAFAEQAEAFAAAJQAAAMgKAIQgKAHgRAAQgLAAgKgDg"
			);
		this.shape_11.setTransform(-151.375, -23.575);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgWAmQgLgFgFgKQgHgKAAgNQAAgMAHgKQAFgJALgGQAKgGAMAAQANAAALAGQAKAGAGAJQAGAKgBAMQABANgGAKQgGAKgKAFQgLAGgNAAQgMAAgKgGgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAHgIQAIgHgBgMQABgLgIgHQgHgIgLAAQgKAAgHAIg"
			);
		this.shape_12.setTransform(-165, -23.575);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgJAuQgHgIAAgOIAAgoIgOAAIAAgQIAOAAIAAgUIATAAIAAAUIAXAAIAAAQIgXAAIAAAoQAAAGADADQADADAFAAQAHAAAFgDIAFAOQgDADgFABQgFACgGAAQgNAAgIgHg"
			);
		this.shape_13.setTransform(-173.575, -24.475);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_13 },
						{ t: this.shape_12 },
						{ t: this.shape_11 },
						{ t: this.shape_10 },
						{ t: this.shape_9 },
						{ t: this.shape_8 },
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ32копия4,
		new cjs.Rectangle(-178.9, -36.8, 142.5, 23.499999999999996),
		null
	);
	(lib.Символ31копия6 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgZA2QgMgEgHgGIAIgQQAGAFAKAEQAKAEAKAAQAMgBAGgEQAGgDAAgHQAAgFgDgDQgEgDgFgCIgNgEQgNgDgIgDQgIgDgGgGQgFgGAAgLQAAgJAFgIQAFgIAKgEQAKgFAOABQAKAAAKACQAKADAHAFIgGAQQgIgFgIgCQgIgCgHAAQgMgBgGAFQgGAEAAAHQAAAEAEADQADAEAGACIANADIAUAHQAIACAGAGQAGAHAAALQAAAIgFAIQgFAIgLAEQgKAFgOgBQgMAAgNgDg"
			);
		this.shape.setTransform(22.575, -23.35);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgjAsQgNgNAAgZIAAg+IAVAAIAAA+QAAAhAcAAQAcAAAAghIAAg+IAUAAIAAA+QAAAZgMANQgNANgYAAQgWAAgNgNg"
			);
		this.shape_1.setTransform(11.25, -23.275);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#FFFFFF")
			.s()
			.p("AAhA4Ig9hLIAABLIgVAAIAAhvIARAAIA9BLIAAhLIAVAAIAABvg");
		this.shape_2.setTransform(-1.525, -23.35);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgeAyQgOgHgHgOQgIgNAAgQQAAgQAIgMQAHgNAOgIQAOgIAQABQARgBAOAIQAOAIAIANQAHAMAAAQQAAAQgHANQgIAOgOAHQgOAIgRgBQgQABgOgIgAgTgiQgJAGgFAJQgFAJAAAKQAAALAFAJQAFAJAJAGQAJAEAKAAQALAAAJgEQAJgGAFgJQAFgJAAgLQAAgKgFgJQgFgJgJgGQgJgEgLAAQgKAAgJAEg"
			);
		this.shape_3.setTransform(-14.725, -23.35);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgxA4IAAhvIA0AAQAUAAAKAIQALAIAAANQAAAIgEAHQgEAHgGADQAJACAFAHQAGAHAAALQAAAOgLAIQgMAIgVAAgAgcAnIAhAAQAYAAAAgPQAAgRgYABIghAAgAgcgIIAdAAQAKAAAGgDQAGgFAAgHQAAgIgGgEQgGgEgKABIgdAAg"
			);
		this.shape_4.setTransform(-27.125, -23.35);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#FFFFFF")
			.s()
			.p("AgpA4IAAhvIBRAAIAAASIg8AAIAAAcIA1AAIAAARIg1AAIAAAeIA+AAIAAASg");
		this.shape_5.setTransform(-43, -23.35);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AAqA4IgBhJIgkA8IgJAAIgkg8IAABJIgUAAIAAhvIARAAIArBJIAshJIARAAIAABvg"
			);
		this.shape_6.setTransform(-56.325, -23.35);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgeAyQgOgHgHgOQgIgNAAgQQAAgQAIgMQAHgNAOgIQAOgIAQABQARgBAOAIQAOAIAIANQAHAMAAAQQAAAQgHANQgIAOgOAHQgOAIgRgBQgQABgOgIgAgTgiQgJAGgFAJQgFAJAAAKQAAALAFAJQAFAJAJAGQAJAEAKAAQALAAAJgEQAJgGAFgJQAFgJAAgLQAAgKgFgJQgFgJgJgGQgJgEgLAAQgKAAgJAEg"
			);
		this.shape_7.setTransform(-70.675, -23.35);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgWAyQgOgHgHgOQgIgNAAgQQAAgQAIgMQAHgNAOgIQAOgIAQABQAOgBALAFQALAFAIAJIgNAMQgMgMgSAAQgLAAgJAEQgJAGgFAJQgFAIAAALQAAALAFAJQAFAKAJAFQAJAEALAAQASAAAMgNIANANQgIAJgLAFQgMAFgNgBQgQABgOgIg"
			);
		this.shape_8.setTransform(-83.075, -23.35);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics
			.f("#FFFFFF")
			.s()
			.p("AgnA4IAAhvIAVAAIAABdIA6AAIAAASg");
		this.shape_9.setTransform(-93.075, -23.35);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics
			.f("#FFFFFF")
			.s()
			.p("AgpA4IAAhvIBRAAIAAASIg8AAIAAAcIA1AAIAAARIg1AAIAAAeIA+AAIAAASg");
		this.shape_10.setTransform(-103.55, -23.35);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AAcA4IgchSIgbBSIgWAAIglhvIAVAAIAcBUIAdhUIASAAIAcBUIAdhUIAUAAIglBvg"
			);
		this.shape_11.setTransform(-118.375, -23.35);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_11 },
						{ t: this.shape_10 },
						{ t: this.shape_9 },
						{ t: this.shape_8 },
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ31копия6,
		new cjs.Rectangle(-129.5, -35.2, 159.3, 23.500000000000004),
		null
	);
	(lib.Символ31копия4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AAWArIAAgtQAAgLgFgGQgGgGgJAAQgKAAgHAHQgGAHAAALIAAArIgUAAIAAhUIATAAIAAALQAFgGAHgDQAIgDAIAAQAQAAAKAJQAKAKAAASIAAAwg"
			);
		this.shape.setTransform(-54.925, -22.075);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgYArIAAhUIATAAIAAAMQAIgNAWAAIAAATIgFgBQgLAAgHAHQgGAHAAAMIAAApg"
			);
		this.shape_1.setTransform(-63.375, -22.075);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgfAiQgKgKAAgSIAAgwIAUAAIAAAtQAAALAFAGQAGAGAJAAQAKAAAGgHQAHgHAAgMIAAgqIAUAAIAABUIgTAAIAAgLQgFAGgHADQgIADgHAAQgRAAgKgJg"
			);
		this.shape_2.setTransform(-72.575, -21.975);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgJAuQgHgIAAgOIAAgoIgOAAIAAgQIAOAAIAAgUIATAAIAAAUIAXAAIAAAQIgXAAIAAAoQAAAGADADQADADAFAAQAHAAAFgDIAFAOQgDADgFABQgFACgGAAQgNAAgIgHg"
			);
		this.shape_3.setTransform(-81.425, -22.925);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgYArIAAhUIATAAIAAAMQAIgNAWAAIAAATIgFgBQgLAAgHAHQgGAHAAAMIAAApg"
			);
		this.shape_4.setTransform(-92.075, -22.075);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgfAiQgKgKAAgSIAAgwIAUAAIAAAtQAAALAFAGQAGAGAJAAQAKAAAGgHQAHgHAAgMIAAgqIAUAAIAABUIgTAAIAAgLQgFAGgHADQgIADgHAAQgRAAgKgJg"
			);
		this.shape_5.setTransform(-101.275, -21.975);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#FFFFFF")
			.s()
			.p(
				"AgXAmQgKgFgGgKQgFgKAAgNQAAgMAFgKQAGgJAKgGQALgGAMAAQANAAAKAGQALAGAGAJQAFAKABAMQgBANgFAKQgGAKgLAFQgKAGgNAAQgMAAgLgGgAgRgSQgHAHAAALQAAAMAHAHQAHAIAKAAQALAAAIgIQAGgHABgMQgBgLgGgHQgIgIgLAAQgKAAgHAIg"
			);
		this.shape_6.setTransform(-111.85, -22.025);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#FFFFFF")
			.s()
			.p("AgJA4IAAgnIgshIIAWAAIAgA3IAhg3IAUAAIgrBIIAAAng");
		this.shape_7.setTransform(-122.275, -23.35);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ31копия4,
		new cjs.Rectangle(-129.5, -35.2, 82.2, 23.500000000000004),
		null
	);
	(lib.Символ24 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.koldun();
		this.instance.parent = this;
		this.instance.setTransform(0, 0, 0.6474, 0.6474);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ24,
		new cjs.Rectangle(0, 0, 99.1, 147.6),
		null
	);
	(lib.Символ12копия3 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#520833")
			.s()
			.p(
				"AgvBLQgVgLgMgUQgMgTAAgZQAAgYAMgTQAMgUAVgLQAVgLAaAAQAbAAAVALQAVALAMAUQAMATAAAYQAAAZgMATQgMAUgVALQgVALgbAAQgaAAgVgLgAgSgjQgIAFgFAJQgFAJAAAMQAAAMAFAKQAFAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAFgJQAFgKAAgMQAAgMgFgJQgFgJgIgFQgJgFgKAAQgJAAgJAFg"
			);
		this.shape.setTransform(207.375, 34.325);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAh4IgwAAIAAgrICXAAIAAArIgwAAIAAB4g");
		this.shape_1.setTransform(189.75, 34.325);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#520833")
			.s()
			.p(
				"AhMBSIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAASgJAOQgJAOgRAHQgRAIgXAAIgXAAIAAAogAgVAAIAUAAQALAAAFgFQAHgFAAgJQAAgKgHgFQgFgFgLAAIgUAAg"
			);
		this.shape_2.setTransform(173.6, 34.325);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAg8Ig+hnIA7AAIAgA4IAig4IA2AAIg+BoIAAA7g");
		this.shape_3.setTransform(156.2, 34.325);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#520833")
			.s()
			.p(
				"AAUBSIgbgpIgPAAIAAApIg4AAIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAARgIAMQgHAOgQAHIAjAzgAgWAAIATAAQALAAAFgFQAHgFAAgJQAAgKgHgFQgFgFgLAAIgTAAg"
			);
		this.shape_4.setTransform(139.6, 34.325);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#520833")
			.s()
			.p(
				"AglBLQgVgLgMgUQgMgTAAgZQAAgYAMgUQAMgTAVgLQAVgLAZAAQAYAAATAIQATAJAMAQIgjAfQgQgTgUAAQgRAAgKALQgLALAAASQAAATALALQAKALARAAQAUAAAQgTIAjAfQgMAQgTAJQgTAIgYAAQgZAAgVgLg"
			);
		this.shape_5.setTransform(121.825, 34.325);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#520833")
			.s()
			.p("AAaBSIAAg8IgzAAIAAA8Ig3AAIAAijIA3AAIAAA6IAzAAIAAg6IA3AAIAACjg");
		this.shape_6.setTransform(96.375, 34.325);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAh4IgwAAIAAgrICXAAIAAArIgxAAIAAB4g");
		this.shape_7.setTransform(79.25, 34.325);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#520833").s().p("AgbBSIAAijIA3AAIAACjg");
		this.shape_8.setTransform(67.425, 34.325);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics
			.f("#520833")
			.s()
			.p(
				"AAbBSIgbhXIgbBXIg7AAIg0ijIA5AAIAcBcIAehcIAyAAIAdBdIAfhdIA1AAIg1Cjg"
			);
		this.shape_9.setTransform(49.1, 34.325);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAg8Ig+hnIA7AAIAgA4IAig4IA2AAIg+BoIAAA7g");
		this.shape_10.setTransform(19.5, 34.325);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics
			.f("#520833")
			.s()
			.p(
				"AAqBSIgLgcIg+AAIgLAcIg4AAIBIijIA1AAIBICjgAAQAOIgQgpIgPApIAfAAg"
			);
		this.shape_11.setTransform(1.675, 34.325);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics
			.f("#520833")
			.s()
			.p("AhABSIAAijIA4AAIAAB4IBJAAIAAArg");
		this.shape_12.setTransform(-14.45, 34.325);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics
			.f("#520833")
			.s()
			.p(
				"AhMBSIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAASgJAOQgJAOgRAHQgRAIgXAAIgXAAIAAAogAgVAAIAVAAQAKAAAGgFQAFgFAAgJQAAgKgFgFQgGgFgKAAIgVAAg"
			);
		this.shape_13.setTransform(-30.75, 34.325);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_13 },
						{ t: this.shape_12 },
						{ t: this.shape_11 },
						{ t: this.shape_10 },
						{ t: this.shape_9 },
						{ t: this.shape_8 },
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ12копия3,
		new cjs.Rectangle(-40.9, 18.7, 259.5, 30.900000000000002),
		null
	);
	(lib.Символ12копия2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#520833")
			.s()
			.p(
				"AgvBLQgVgLgMgUQgMgTAAgZQAAgYAMgTQAMgUAVgLQAVgLAaAAQAbAAAVALQAVALAMAUQAMATAAAYQAAAZgMATQgMAUgVALQgVALgbAAQgaAAgVgLgAgSgjQgIAFgFAJQgFAJAAAMQAAAMAFAKQAFAJAIAFQAJAFAJAAQAKAAAJgFQAIgFAFgJQAFgKAAgMQAAgMgFgJQgFgJgIgFQgJgFgKAAQgJAAgJAFg"
			);
		this.shape.setTransform(207.375, 34.325);
		this.shape_1 = new cjs.Shape();
		this.shape_1.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAh4IgwAAIAAgrICXAAIAAArIgwAAIAAB4g");
		this.shape_1.setTransform(189.75, 34.325);
		this.shape_2 = new cjs.Shape();
		this.shape_2.graphics
			.f("#520833")
			.s()
			.p(
				"AhMBSIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAASgJAOQgJAOgRAHQgRAIgXAAIgXAAIAAAogAgVAAIAUAAQALAAAFgFQAHgFAAgJQAAgKgHgFQgFgFgLAAIgUAAg"
			);
		this.shape_2.setTransform(173.6, 34.325);
		this.shape_3 = new cjs.Shape();
		this.shape_3.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAg8Ig+hnIA7AAIAgA4IAig4IA2AAIg+BoIAAA7g");
		this.shape_3.setTransform(156.2, 34.325);
		this.shape_4 = new cjs.Shape();
		this.shape_4.graphics
			.f("#520833")
			.s()
			.p(
				"AAUBSIgbgpIgPAAIAAApIg4AAIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAARgIAMQgHAOgQAHIAjAzgAgWAAIATAAQALAAAFgFQAHgFAAgJQAAgKgHgFQgFgFgLAAIgTAAg"
			);
		this.shape_4.setTransform(139.6, 34.325);
		this.shape_5 = new cjs.Shape();
		this.shape_5.graphics
			.f("#520833")
			.s()
			.p(
				"AglBLQgVgLgMgUQgMgTAAgZQAAgYAMgUQAMgTAVgLQAVgLAZAAQAYAAATAIQATAJAMAQIgjAfQgQgTgUAAQgRAAgKALQgLALAAASQAAATALALQAKALARAAQAUAAAQgTIAjAfQgMAQgTAJQgTAIgYAAQgZAAgVgLg"
			);
		this.shape_5.setTransform(121.825, 34.325);
		this.shape_6 = new cjs.Shape();
		this.shape_6.graphics
			.f("#520833")
			.s()
			.p("AAaBSIAAg8IgzAAIAAA8Ig3AAIAAijIA3AAIAAA6IAzAAIAAg6IA3AAIAACjg");
		this.shape_6.setTransform(96.375, 34.325);
		this.shape_7 = new cjs.Shape();
		this.shape_7.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAh4IgwAAIAAgrICXAAIAAArIgxAAIAAB4g");
		this.shape_7.setTransform(79.25, 34.325);
		this.shape_8 = new cjs.Shape();
		this.shape_8.graphics.f("#520833").s().p("AgbBSIAAijIA3AAIAACjg");
		this.shape_8.setTransform(67.425, 34.325);
		this.shape_9 = new cjs.Shape();
		this.shape_9.graphics
			.f("#520833")
			.s()
			.p(
				"AAbBSIgbhXIgbBXIg7AAIg0ijIA5AAIAcBcIAehcIAyAAIAdBdIAfhdIA1AAIg1Cjg"
			);
		this.shape_9.setTransform(49.1, 34.325);
		this.shape_10 = new cjs.Shape();
		this.shape_10.graphics
			.f("#520833")
			.s()
			.p("AgbBSIAAg8Ig+hnIA7AAIAgA4IAig4IA2AAIg+BoIAAA7g");
		this.shape_10.setTransform(19.5, 34.325);
		this.shape_11 = new cjs.Shape();
		this.shape_11.graphics
			.f("#520833")
			.s()
			.p(
				"AAqBSIgLgcIg+AAIgLAcIg4AAIBIijIA1AAIBICjgAAQAOIgQgpIgPApIAfAAg"
			);
		this.shape_11.setTransform(1.675, 34.325);
		this.shape_12 = new cjs.Shape();
		this.shape_12.graphics
			.f("#520833")
			.s()
			.p("AhABSIAAijIA4AAIAAB4IBJAAIAAArg");
		this.shape_12.setTransform(-14.45, 34.325);
		this.shape_13 = new cjs.Shape();
		this.shape_13.graphics
			.f("#520833")
			.s()
			.p(
				"AhMBSIAAijIBOAAQAXAAARAHQARAIAJAOQAJAOAAATQAAASgJAOQgJAOgRAHQgRAIgXAAIgXAAIAAAogAgVAAIAVAAQAKAAAGgFQAFgFAAgJQAAgKgFgFQgGgFgKAAIgVAAg"
			);
		this.shape_13.setTransform(-30.75, 34.325);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.shape_13 },
						{ t: this.shape_12 },
						{ t: this.shape_11 },
						{ t: this.shape_10 },
						{ t: this.shape_9 },
						{ t: this.shape_8 },
						{ t: this.shape_7 },
						{ t: this.shape_6 },
						{ t: this.shape_5 },
						{ t: this.shape_4 },
						{ t: this.shape_3 },
						{ t: this.shape_2 },
						{ t: this.shape_1 },
						{ t: this.shape },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ12копия2,
		new cjs.Rectangle(-40.9, 18.7, 259.5, 30.900000000000002),
		null
	);
	(lib.Символ10копия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics
			.f("#FF2CA7")
			.s()
			.p(
				"Eg+5AgQIo3iHQgDgBgCgCQgCgDABgDICVpyIpyiWQgDAAgCgDQgCgDABgDICHo3QABgDADgBQACgCADAAIJzCWICVpzQABgDADgBQACgCADAAII3CHQADABACADQACADgBADIiVJyIJyCVQADABACADQABADAAADIiHI3QgBADgDABQgCACgDgBIpziVIiVJzQgBACgDACIgDABIgCAAgEhPIARrIJyCVQADABACADQACADgBADIiVJyIIoCEICVpzQABgDACgCQADgBADAAIJzCVICDooIpyiVQgDAAgCgDQgCgDABgDICVpyIooiEIiVJzQgBADgCACQgDABgDgBIpziVgA7KdIIm/hqQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIB1nuInuh2QAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIBrm/QAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAgBQABAAABAAQAAAAABAAIHuB2IB1nuQAAgBABAAQAAgBAAAAQABAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQABgBABAAQAAAAABABIG/BqQAAAAABAAQAAABABAAQAAAAABABQAAAAAAABQABABAAAAQAAABAAAAQAAABAAAAQAAABAAABIh2HtIHuB2QABAAABAAQAAAAAAABQABAAAAAAQABABAAABQAAAAAAABQABAAAAABQAAABAAAAQAAABAAAAIhrG/IgCAEQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAInuh2Ih1HuIgDAEIgDAAIgCAAgEgn9ARpIHuB1IAEADQAAABAAAAQABABAAAAQAAABAAABQAAAAAAABIh2HuIGzBoIB2nuQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAAAIAFgBIHuB1IBomzInuh1QgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBIgBgEIB2nuImzhoIh2HuIgDAEQAAAAgBAAQAAAAgBAAQAAABgBgBQgBAAAAAAInuh1gASxbVIm/hrQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQgBAAAAgBQAAgBAAAAQAAgBAAAAIB2nuInuh1QAAgBgBAAQAAAAgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIBqm/IADgDQAAgBABAAQAAAAABAAQABgBAAAAQABAAAAABIHuB1IB2nuIADgDQAAgBABAAQAAAAABAAQABAAAAAAQABAAAAAAIG/BrQABAAABAAQAAAAAAAAQABABAAAAQABABAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAIh2HuIHuB2QABAAAAAAQABABAAAAQABAAAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAAAABQAAAAgBABIhqG/QAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAInuh2Ih2HuQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgDABIgBAAgAF+P1IHuB2QAAAAABAAQABAAAAAAQABABAAAAQAAABABAAIAAAFIh1HuIGzBnIB1ntIADgEQABgBAAAAQABAAAAAAQABAAABAAQAAAAABAAIHuB2IBnm0Inuh1IgDgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIB2nuIm0hoIh1HuQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBABIgFABInuh2gEBA5AWkIo3iHQgDAAgCgDQgCgDABgCICVpzIpyiVQgDgBgCgDQgCgCABgDICHo2QABgDADgCQACgCADABIJzCUICVpxQABgDADgCQACgCADABII3CHQADABACADQACACgBADIiVJyIJyCVQADAAACADQABADAAADIiHI3QgBADgDABQgCACgDAAIpziVIiVJyQgBADgDACIgDAAIgCAAgEAwqAIAIJyCVQADABACACQACADgBADIiVJzIIoCDICVpyQABgDACgCQADgCADABIJzCVICDooIpyiVQgDgBgCgCQgCgDABgDICVpyIooiDIiVJxQgBADgCACQgDACgDgBIpziUgAmCKCIgBgCIgBgBIAvjGIjFguIgBgCIgBgBIArizIABgBIACgBIDFAvIAvjFIABgBIACgBICyArIACABIAAACIgvDFIDEAvIACABIAAACIgqCyIgCACIgBAAIjFgvIgvDFIgBACIgBAAgAoXGGIDGAvIABABIAAACIguDFICtAqIAvjFIABgCIACAAIDEAvIAqiuIjEgvIgCgBIAAgCIAvjFIiugqIgvDGIgBABIgCABIjFgvgEgpDAAlIgCgBIAAgCIAvjEIjFgvIgCgCIAAgBIAqizIACgBIABgBIDGAvIAvjFIABgBIABgBICzArIABABIABACIgvDFIDFAvIABABIABACIgrCyIgBACIgCAAIjFgvIgvDFIgBABIgCAAgEgrYgDWIDFAvIACACIAAABIgvDFICuApIAvjEIABgCIACAAIDFAvIAqiuIjGgvIgBgBIAAgCIAujFIitgpIgvDFIgBABIgCABIjFgvgAwDhOIo3iHQgDgBgCgCQgCgDABgDICVpyIpyiWQgDAAgCgDQgCgDABgDICHo3QABgDADgBQACgCADAAIJzCWICVpzQABgDADgBQACgCADAAII3CHQADABACADQACADgBADIiVJyIJyCVQADABACADQABADAAADIiHI3QgBADgDABQgCACgDgBIpziVIiVJzQgBACgDACIgDABIgCAAgEggSgPzIJyCVQADABACADQACADgBADIiVJyIIoCEICVpzQABgDACgCQADgBADAAIJzCVICDooIpyiVQgDAAgCgDQgCgDABgDICVpyIooiEIiVJzQgBADgCACQgDABgDgBIpziVgEAj9gEjIm/hqQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBgBAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBIB2ntInuh2QAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIBqm/IADgEQAAAAABgBQAAAAABAAQABAAAAAAQABAAAAAAIHuB2IB2nuIADgEQAAAAABAAQAAAAABgBQABAAAAAAQABAAAAABIG/BqQABAAABAAQAAABAAAAQABAAAAABQABAAAAABQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABIh2HuIHuB2QABAAAAAAQABAAAAABQABAAAAAAQAAABABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABgBABIhqG/QAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgBAAAAAAInuh2Ih2HuQAAAAAAABQAAAAgBABQAAAAgBABQAAAAgBAAIgDABIgBAAgAXKwCIHuB1QAAAAABAAQABABAAAAQABAAAAABQAAAAABABIAAAEIh1HuIGzBoIB1nuIADgEQABAAAAAAQABgBAAAAQABAAABAAQAAAAABABIHuB1IBnmzInuh1IgDgDQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBIB2nuIm0hoIh1HuQAAABAAAAQgBABAAAAQAAABgBAAQAAABgBAAIgFABInuh1gEA5GgO+IgBgBIgBgCIAvjFIjFgvIgBgBIgBgCIAriyIABgCIACAAIDFAvIAvjGIABgBIACAAICyAqIACABIAAACIgvDFIDFAvIACACIAAABIgqCzIgCABIgBABIjGgvIgvDFIgBABIgBABgEA2xgS5IDGAvIABABIAAACIguDFICtApIAvjFIABgBIACgBIDFAvIAqitIjFgvIgCgCIAAgBIAvjGIiugpIgvDFIgBACIgCAAIjFgvg"
			);
		this.shape.setTransform(208.4146, 206.39);
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ10копия,
		new cjs.Rectangle(-299.8, 0, 1016.4000000000001, 412.8),
		null
	);
	(lib.Символ4копия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.bit();
		this.instance.parent = this;
		this.instance.setTransform(-66.2, -16, 0.5913, 0.5913);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ4копия,
		new cjs.Rectangle(-66.2, -16, 132.5, 32),
		null
	);
	(lib.Символ1копия5 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#FFFFFF").s().p("A08EvIAApdMAp5AAAIAAJdg");
		this.shape.setTransform(124.075, 36.05);
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ1копия5,
		new cjs.Rectangle(-10, 5.8, 268.2, 60.60000000000001),
		null
	);
	(lib.Символ1копия4 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.shape = new cjs.Shape();
		this.shape.graphics.f("#6AE900").s().p("A08EvIAApdMAp5AAAIAAJdg");
		this.shape.setTransform(124.075, 36.05);
		this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ1копия4,
		new cjs.Rectangle(-10, 5.8, 268.2, 60.60000000000001),
		null
	);
	(lib.Символ22 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ21();
		this.instance.parent = this;
		this.instance.setTransform(55.5, 36.2, 1, 1, 0, 0, 0, 55.5, 36.2);
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.to({ y: 33.45 }, 29, cjs.Ease.quadInOut)
				.to({ y: 36.2 }, 35, cjs.Ease.quadInOut)
				.wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, -2.7, 111.1, 75.3);
	(lib.Символ19 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ10копия();
		this.instance.parent = this;
		this.instance.setTransform(399, 512, 1, 1, 0, 0, 0, 99.2, 99.2);
		this.instance.alpha = 0.3984;
		this.timeline.addTween(
			cjs.Tween.get(this.instance).to({ y: 100 }, 179).wait(1)
		);
		this.instance_1 = new lib.Символ10копия();
		this.instance_1.parent = this;
		this.instance_1.setTransform(399, 99.2, 1, 1, 0, 0, 0, 99.2, 99.2);
		this.instance_1.alpha = 0.3984;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_1).to({ y: -312.8 }, 179).wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, -412, 1016.4, 1237.6);
	(lib.Символ9 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ8();
		this.instance.parent = this;
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ9,
		new cjs.Rectangle(-12, -11.8, 23.9, 23.8),
		null
	);
	(lib.Символ7 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ6();
		this.instance.parent = this;
		this.instance.setTransform(-0.2, 0);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ7,
		new cjs.Rectangle(-7, -12.4, 13.6, 24.9),
		null
	);
	(lib.Символ23 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ24();
		this.instance.parent = this;
		this.instance.setTransform(49.5, 73.8, 1, 1, 0, 0, 0, 49.5, 73.8);
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.to({ y: 79.2 }, 29, cjs.Ease.quadInOut)
				.to({ y: 73.8 }, 35, cjs.Ease.quadInOut)
				.wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(0, 0, 99.1, 153);
	(lib.Символ5 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ4копия();
		this.instance.parent = this;
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ5,
		new cjs.Rectangle(-66.2, -16, 132.5, 32),
		null
	);
	(lib.Символ2копия2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ12копия2();
		this.instance.parent = this;
		this.instance.setTransform(124.05, 36, 1, 1, 0, 0, 0, 88.8, 34.4);
		this.instance_1 = new lib.Символ12копия3();
		this.instance_1.parent = this;
		this.instance_1.setTransform(124.05, 36, 1, 1, 0, 0, 0, 88.8, 34.4);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance }] })
				.to({ state: [{ t: this.instance_1 }] }, 1)
				.wait(1)
		);
		this.instance_2 = new lib.Символ1копия4();
		this.instance_2.parent = this;
		this.instance_2.setTransform(124, 36, 1, 1, 0, 0, 0, 124, 36);
		this.instance_3 = new lib.Символ1копия5();
		this.instance_3.parent = this;
		this.instance_3.setTransform(124, 36, 1, 1, 0, 0, 0, 124, 36);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_2 }] })
				.to({ state: [{ t: this.instance_3 }] }, 1)
				.wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-10, 5.8, 268.2, 60.60000000000001);
	(lib.Символ1копия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ19();
		this.instance.parent = this;
		this.instance.setTransform(
			1864.15,
			143.4,
			0.6947,
			0.6947,
			0,
			0,
			0,
			508.2,
			206.4
		);
		this.instance_1 = new lib.Символ19();
		this.instance_1.parent = this;
		this.instance_1.setTransform(
			1107.95,
			143.4,
			0.6947,
			0.6947,
			0,
			0,
			0,
			508.2,
			206.4
		);
		this.instance_2 = new lib.Символ19();
		this.instance_2.parent = this;
		this.instance_2.setTransform(
			353.05,
			143.4,
			0.6947,
			0.6947,
			0,
			0,
			0,
			508.2,
			206.4
		);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({
					state: [
						{ t: this.instance_2 },
						{ t: this.instance_1 },
						{ t: this.instance },
					],
				})
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ1копия,
		new cjs.Rectangle(0, 0, 2217.2, 573.5),
		null
	);
	(lib.Символ3 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ7();
		this.instance.parent = this;
		this.instance.setTransform(-81.2, 0.4);
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.wait(59)
				.to({ scaleX: 0.8162, x: -77.45 }, 2, cjs.Ease.get(1))
				.to({ scaleX: 1, x: -87.45 }, 9)
				.to({ x: -81.2 }, 9)
				.wait(1)
		);
		this.instance_1 = new lib.Символ9();
		this.instance_1.parent = this;
		this.instance_1.setTransform(-59.55, 0.4);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_1)
				.wait(59)
				.to({ rotation: -14.9983, y: 0.35 }, 2, cjs.Ease.get(1))
				.to({ rotation: 360, y: 0.4 }, 18)
				.wait(1)
		);
		this.instance_2 = new lib.Символ5();
		this.instance_2.parent = this;
		this.instance_2.setTransform(22.2, 0);
		this.timeline.addTween(
			cjs.Tween.get(this.instance_2)
				.wait(59)
				.to({ scaleX: 0.9019, x: 13.2 }, 2, cjs.Ease.get(1))
				.to({ scaleX: 1, x: 28.45 }, 9)
				.to({ x: 22.2 }, 9)
				.wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-94.4, -16, 189.10000000000002, 32);
	(lib.Символ27копия7 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ23();
		this.instance.parent = this;
		this.instance.setTransform(
			-10.3,
			76.25,
			1.6369,
			1.6369,
			0,
			0,
			0,
			49.6,
			73.8
		);
		this.instance_1 = new lib.Символ22();
		this.instance_1.parent = this;
		this.instance_1.setTransform(
			107.3,
			62.4,
			2.4494,
			2.4494,
			0,
			0,
			0,
			55.6,
			36.4
		);
		this.timeline.addTween(
			cjs.Tween.get({})
				.to({ state: [{ t: this.instance_1 }, { t: this.instance }] })
				.wait(1)
		);
	}).prototype = getMCSymbolPrototype(
		lib.Символ27копия7,
		new cjs.Rectangle(-91.5, -44.5, 334.6, 241.6),
		null
	);
	(lib.Символ27копия6 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ23();
		this.instance.parent = this;
		this.instance.setTransform(
			-19.9,
			68.1,
			1.7798,
			1.7798,
			0,
			0,
			0,
			49.6,
			73.8
		);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
		this.instance_1 = new lib.Символ22();
		this.instance_1.parent = this;
		this.instance_1.setTransform(
			107.95,
			53.05,
			2.6633,
			2.6633,
			0,
			0,
			0,
			55.6,
			36.4
		);
		this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ27копия6,
		new cjs.Rectangle(-108.2, -63.2, 363.8, 262.7),
		null
	);
	(lib.Символ11копия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ2копия2();
		this.instance.parent = this;
		this.instance.setTransform(124, 36, 1, 1, 0, 0, 0, 124, 36);
		new cjs.ButtonHelper(this.instance, 0, 1, 1);
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.wait(29)
				.to({ scaleX: 0.9, scaleY: 0.9 }, 11, cjs.Ease.quadInOut)
				.to({ scaleX: 1, scaleY: 1 }, 19, cjs.Ease.quadInOut)
				.to({ scaleX: 0.9, scaleY: 0.9 }, 8, cjs.Ease.quadInOut)
				.to({ scaleX: 1, scaleY: 1 }, 13, cjs.Ease.quadInOut)
				.to({ scaleX: 0.9, scaleY: 0.9 }, 8, cjs.Ease.quadInOut)
				.to({ scaleX: 1, scaleY: 1 }, 13, cjs.Ease.quadInOut)
				.wait(39)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-10, 5.8, 268.2, 60.60000000000001);
	(lib.Символ10копия2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.instance = new lib.Символ11копия();
		this.instance.parent = this;
		this.instance.setTransform(
			3.9,
			0.2,
			0.592,
			0.592,
			0,
			0,
			0,
			124.2,
			36.1
		);
		this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ10копия2,
		new cjs.Rectangle(-75.5, -17.7, 158.7, 35.9),
		null
	);
	(lib.Символ5copyкопия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.logo = new lib.Символ3();
		this.logo.name = "logo";
		this.logo.parent = this;
		this.logo.setTransform(0.5, 0.35, 0.8602, 0.8602, 0, 0, 0, 0.4, 0.4);
		this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));
	}).prototype = getMCSymbolPrototype(
		lib.Символ5copyкопия,
		new cjs.Rectangle(-75.7, -13.7, 151.9, 27.4),
		null
	);
	(lib.Symbol16копия2 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.frame_209 = function () {
			this.gotoAndPlay(21);
		};
		this.timeline.addTween(
			cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1)
		);
		this.instance = new lib.Символ27копия7();
		this.instance.parent = this;
		this.instance.setTransform(-37.8, -42.3, 0.7593, 0.7593);
		this.instance.alpha = 0;
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.to({ x: -109.8, alpha: 1 }, 19, cjs.Ease.get(0.96))
				.wait(191)
		);
		this.instance_1 = new lib.Символ32копия6();
		this.instance_1.parent = this;
		this.instance_1.setTransform(499.25, 74.1, 2.507, 2.507);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_1)
				.wait(116)
				.to({ _off: false }, 0)
				.wait(4)
				.to({ x: 447.35 }, 0)
				.to({ x: 499.25, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 461.65, alpha: 0.75 }, 3)
				.to({ regX: 0.1, regY: 0.1, x: 562.1, y: 74.35, alpha: 0 }, 9)
				.wait(1)
		);
		this.instance_2 = new lib.Символ31копия6();
		this.instance_2.parent = this;
		this.instance_2.setTransform(374.55, 31.25, 2.507, 2.507);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_2)
				.wait(116)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ x: 323.65, y: 23.9 }, 0)
				.to({ x: 375.55, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 361.8 }, 3)
				.to({ x: 431, alpha: 0 }, 9)
				.wait(4)
		);
		this.instance_3 = new lib.Символ32копия4();
		this.instance_3.parent = this;
		this.instance_3.setTransform(499.25, 74.1, 2.507, 2.507);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_3)
				.wait(22)
				.to({ _off: false }, 0)
				.wait(4)
				.to({ x: 447.35 }, 0)
				.to({ x: 499.25, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 461.65, alpha: 0.75 }, 3)
				.to({ regX: 0.1, regY: 0.1, x: 562.1, y: 74.35, alpha: 0 }, 9)
				.wait(95)
		);
		this.instance_4 = new lib.Символ31копия4();
		this.instance_4.parent = this;
		this.instance_4.setTransform(374.55, 31.25, 2.507, 2.507);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_4)
				.wait(22)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ x: 323.65, y: 23.9 }, 0)
				.to({ x: 375.55, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 361.8 }, 3)
				.to({ x: 431, alpha: 0 }, 9)
				.wait(98)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-179.2, -76.1, 684.9, 183.5);
	(lib.Символ30копия5 = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.frame_209 = function () {
			this.gotoAndPlay(21);
		};
		this.timeline.addTween(
			cjs.Tween.get(this).wait(209).call(this.frame_209).wait(1)
		);
		this.instance = new lib.Символ27копия6();
		this.instance.parent = this;
		this.instance.setTransform(
			215.2,
			-41,
			0.7593,
			0.7593,
			0,
			0,
			0,
			3.5,
			1.7
		);
		this.instance.alpha = 0;
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.to({ x: 180.6, alpha: 1 }, 19)
				.wait(191)
		);
		this.instance_1 = new lib.Символ32копия6();
		this.instance_1.parent = this;
		this.instance_1.setTransform(789.25, 74.1, 2.507, 2.507);
		this.instance_1.alpha = 0;
		this.instance_1._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_1)
				.wait(116)
				.to({ _off: false }, 0)
				.wait(4)
				.to({ x: 737.35 }, 0)
				.to({ x: 789.25, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 751.65, alpha: 0.75 }, 3)
				.to({ regX: 0.1, regY: 0.1, x: 852.1, y: 74.35, alpha: 0 }, 9)
				.wait(1)
		);
		this.instance_2 = new lib.Символ31копия6();
		this.instance_2.parent = this;
		this.instance_2.setTransform(664.55, 31.25, 2.507, 2.507);
		this.instance_2.alpha = 0;
		this.instance_2._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_2)
				.wait(116)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ x: 613.65, y: 23.9 }, 0)
				.to({ x: 665.55, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 651.8 }, 3)
				.to({ x: 721, alpha: 0 }, 9)
				.wait(4)
		);
		this.instance_3 = new lib.Символ32копия4();
		this.instance_3.parent = this;
		this.instance_3.setTransform(789.25, 74.1, 2.507, 2.507);
		this.instance_3.alpha = 0;
		this.instance_3._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_3)
				.wait(22)
				.to({ _off: false }, 0)
				.wait(4)
				.to({ x: 737.35 }, 0)
				.to({ x: 789.25, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 751.65, alpha: 0.75 }, 3)
				.to({ regX: 0.1, regY: 0.1, x: 852.1, y: 74.35, alpha: 0 }, 9)
				.to({ _off: true }, 1)
				.wait(94)
		);
		this.instance_4 = new lib.Символ31копия4();
		this.instance_4.parent = this;
		this.instance_4.setTransform(664.55, 31.25, 2.507, 2.507);
		this.instance_4.alpha = 0;
		this.instance_4._off = true;
		this.timeline.addTween(
			cjs.Tween.get(this.instance_4)
				.wait(22)
				.to({ _off: false }, 0)
				.wait(1)
				.to({ x: 613.65, y: 23.9 }, 0)
				.to({ x: 665.55, alpha: 1 }, 9)
				.wait(68)
				.to({ x: 651.8 }, 3)
				.to({ x: 721, alpha: 0 }, 9)
				.to({ _off: true }, 1)
				.wait(97)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(95.8, -90.3, 699.9000000000001, 199.5);
	(lib.Символ6copyкопия = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.frame_14 = function () {
			this.stop();
		};
		this.timeline.addTween(
			cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1)
		);
		this.instance = new lib.Символ5copyкопия();
		this.instance.parent = this;
		this.instance.alpha = 0;
		this.timeline.addTween(
			cjs.Tween.get(this.instance)
				.wait(1)
				.to({ x: -171.6 }, 0)
				.to({ x: 0, alpha: 1 }, 13, cjs.Ease.get(1))
				.wait(1)
		);
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-247.3, -13.7, 323.5, 27.4);
	(lib.index = function (mode, startPosition, loop) {
		this.initialize(mode, startPosition, loop, {});
		this.frame_0 = function () {
			var _this = this;
			window._setCanvasSize = function () {
				var windowSize = getWindowSize();
				_this.logo.x =
					windowSize.width > 750
						? windowSize.width * 0.08
						: windowSize.width > 600
						? windowSize.width * 0.9
						: windowSize.width > 450
						? windowSize.width * 0.86
						: windowSize.width * 0.82;
				_this.logo.y = windowSize.width > 750 ? 48 / 2 : 9;
				_this.btn.x =
					windowSize.width > 920
						? windowSize.width * 0.92
						: windowSize.width > 600
						? windowSize.width * 0.9
						: windowSize.width > 450
						? windowSize.width * 0.86
						: windowSize.width * 0.82;
				_this.btn.y = windowSize.width > 750 ? 48 / 2 : 33;
				_this.main.x =
					windowSize.width > 1000
						? windowSize.width * 0.5
						: windowSize.width > 750
						? windowSize.width * 0.44
						: windowSize.width * 0.44 - 60;
				_this.main.y = 48 / 2;
				_this.main.visible = windowSize.width > 600 ? true : false;
				_this.main2.x = windowSize.width * 0.05;
				_this.main2.y = 29;
				_this.main2.visible = windowSize.width > 600 ? false : true;
				_this.coin.x = windowSize.width * 0.5;
				_this.logo.scaleX = _this.logo.scaleY =
					windowSize.width > 1160
						? 1
						: windowSize.width > 900
						? 0.75
						: windowSize.width > 850
						? 0.68
						: windowSize.width > 750
						? 0.65
						: 0.58;
				_this.btn.scaleX = _this.btn.scaleY =
					windowSize.width > 1160
						? 1
						: windowSize.width > 750
						? 0.9
						: 0.6;
				_this.main.scaleX = _this.main.scaleY =
					windowSize.width > 1450
						? 0.52
						: windowSize.width > 1130
						? 0.5
						: windowSize.width > 1060
						? 0.5
						: windowSize.width > 870
						? 0.45
						: windowSize.width > 780
						? 0.45
						: windowSize.width > 650
						? 0.45
						: 0.45;
				_this.main2.scaleX = _this.main2.scaleY =
					windowSize.width > 350 ? 0.36 : 0.32;
				_this.coin.scaleX = _this.coin.scaleY = 1;
			};
			window.onresize = function () {
				_setCanvasSize();
			};
			window.onresize();
		};
		this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));
		this.btn = new lib.Символ10копия2();
		this.btn.name = "btn";
		this.btn.parent = this;
		this.btn.setTransform(633.75, 37.4, 1, 1, 0, 0, 0, 4.2, -0.1);
		this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));
		this.logo = new lib.Символ6copyкопия();
		this.logo.name = "logo";
		this.logo.parent = this;
		this.logo.setTransform(71.7, 94.35, 0.9421, 0.9421, 0, 0, 0, 0.1, 0.2);
		this.logo.shadow = new cjs.Shadow("rgba(0,0,0,1)", 1, 1, 1);
		this.timeline.addTween(cjs.Tween.get(this.logo).wait(1));
		this.main2 = new lib.Symbol16копия2();
		this.main2.name = "main2";
		this.main2.parent = this;
		this.main2.setTransform(-251.5, 196.05, 1, 1, 0, 0, 0, -127, -0.2);
		this.timeline.addTween(cjs.Tween.get(this.main2).wait(1));
		this.main = new lib.Символ30копия5();
		this.main.name = "main";
		this.main.parent = this;
		this.main.setTransform(
			434.65,
			56.45,
			0.7505,
			0.7505,
			0,
			0,
			0,
			413.9,
			-12
		);
		this.timeline.addTween(cjs.Tween.get(this.main).wait(1));
		this.coin = new lib.Символ1копия();
		this.coin.name = "coin";
		this.coin.parent = this;
		this.coin.setTransform(497.15, 192.05, 1, 1, 0, 0, 0, 1108.6, 265);
		this.timeline.addTween(cjs.Tween.get(this.coin).wait(1));
	}).prototype = p = new cjs.MovieClip();
	p.nominalBounds = new cjs.Rectangle(-11.4, -23, 1617.1000000000001, 523.6);
	lib.properties = {
		id: "8727DA44024E4C23AF0D1DAAD7884E18",
		width: 1200,
		height: 100,
		fps: 30,
		color: "#0B674D",
		opacity: 0.0,
		manifest: [
			{ src: "images/bit.png", id: "bit" },
			{ src: "images/koldun.png", id: "koldun" },
			{ src: "images/morgana.png", id: "morgana" },
			{ src: "images/one.png", id: "one" },
		],
		preloads: [],
	};
	(lib.Stage = function (canvas) {
		createjs.Stage.call(this, canvas);
	}).prototype = p = new createjs.Stage();
	p.setAutoPlay = function (autoPlay) {
		this.tickEnabled = autoPlay;
	};
	p.play = function () {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndPlay(this.getTimelinePosition());
	};
	p.stop = function (ms) {
		if (ms) this.seek(ms);
		this.tickEnabled = false;
	};
	p.seek = function (ms) {
		this.tickEnabled = true;
		this.getChildAt(0).gotoAndStop((lib.properties.fps * ms) / 1000);
	};
	p.getDuration = function () {
		return (this.getChildAt(0).totalFrames / lib.properties.fps) * 1000;
	};
	p.getTimelinePosition = function () {
		return (this.getChildAt(0).currentFrame / lib.properties.fps) * 1000;
	};
	an.bootcompsLoaded = an.bootcompsLoaded || [];
	if (!an.bootstrapListeners) {
		an.bootstrapListeners = [];
	}
	an.bootstrapCallback = function (fnCallback) {
		an.bootstrapListeners.push(fnCallback);
		if (an.bootcompsLoaded.length > 0) {
			for (var i = 0; i < an.bootcompsLoaded.length; ++i) {
				fnCallback(an.bootcompsLoaded[i]);
			}
		}
	};
	an.compositions = an.compositions || {};
	an.compositions["8727DA44024E4C23AF0D1DAAD7884E18"] = {
		getStage: function () {
			return exportRoot.getStage();
		},
		getLibrary: function () {
			return lib;
		},
		getSpriteSheet: function () {
			return ss;
		},
		getImages: function () {
			return img;
		},
	};
	an.compositionLoaded = function (id) {
		an.bootcompsLoaded.push(id);
		for (var j = 0; j < an.bootstrapListeners.length; j++) {
			an.bootstrapListeners[j](id);
		}
	};
	an.getComposition = function (id) {
		return an.compositions[id];
	};
	an.makeResponsive = function (
		isResp,
		respDim,
		isScale,
		scaleType,
		domContainers
	) {
		var lastW,
			lastH,
			lastS = 1;
		window.addEventListener("resize", resizeCanvas);
		resizeCanvas();
		function resizeCanvas() {
			var w = lib.properties.width,
				h = lib.properties.height;
			var iw = window.innerWidth,
				ih = window.innerHeight;
			var pRatio = window.devicePixelRatio || 1,
				xRatio = iw / w,
				yRatio = ih / h,
				sRatio = 1;
			if (isResp) {
				if (
					(respDim == "width" && lastW == iw) ||
					(respDim == "height" && lastH == ih)
				) {
					sRatio = lastS;
				} else if (!isScale) {
					if (iw < w || ih < h) sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 1) {
					sRatio = Math.min(xRatio, yRatio);
				} else if (scaleType == 2) {
					sRatio = Math.max(xRatio, yRatio);
				}
			}
			domContainers[0].width = w * pRatio * sRatio;
			domContainers[0].height = h * pRatio * sRatio;
			domContainers.forEach(function (container) {
				container.style.width = w * sRatio + "px";
				container.style.height = h * sRatio + "px";
			});
			stage.scaleX = pRatio * sRatio;
			stage.scaleY = pRatio * sRatio;
			lastW = iw;
			lastH = ih;
			lastS = sRatio;
			stage.tickOnUpdate = false;
			stage.update();
			stage.tickOnUpdate = true;
		}
	};
})((createjs = createjs || {}), (AdobeAn = AdobeAn || {}));
var createjs, AdobeAn;
