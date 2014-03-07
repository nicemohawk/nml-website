---
layout: post
title: "Animating Constraints"
date: 2014-03-06 19:33
comments: false
categories: ["code", "Auto Layout"]
---
###Ben

In doing some research for [a talk](http://cocoaconf.com/chicago-2014/sessions/auto-layout-lachman) on Auto Layout at [CocoaConf Chicago](http://cocoaconf.com/chicago-2014). I ran across some great resources. I'll be posting some of them in the form of talk notes in the near future. However, one thing stuck out at me. Animating layout constraints is mentioned pretty every time people talk about Auto Layout. However, it's often either glossed over or is a lot of ugly code. So here's what I do. Hopefully it's useful to someone.

    @interface MyViewController ()
    @property IBOutlet NSLayoutConstraint *animatedConstraint;
	
	…
	
	self.animatedConstraint.constant = newValue;
	
	[UIView animateWithDuration:0.5 animations:^{
		[[self.animatedConstraint.fistItem superview] layoutIfNeeded];
	}];

Make sure you connect your outlet in Interface Builder (or in code)!
