---
layout: post
title: "Making Screens Look Like Objects"
date: 2013-03-13 11:51
categories: [Design, iOS]
---
###Bob
There are lots of apps on iOS and Mac that try to look like real-world objects, and many of them are terrible. But we made an app called Ita last year, and its design takes cues from classic notebooks. That’s not (just) because we’re terrible designers. When the objects and the interface are right, making screens look like real-world stuff can be great. We settled on two principles to guide our design:

1. If we were going to choose to make a user interface resemble a real-world object, we should choose an object that looks really, really good, one that both provides a useful context for a user, and, ideally, one that provides an emotional connection to the app.

2. Skeuomorphic design should provide a context for the app, but shouldn’t limit how the app works. We didn’t want to get trapped by the conceit that the user is interacting with a real-world object when stepping out of that conceit would make the app work better.

####&#9997; Ben: Number two is really important here. If you’ve ever used an audio app that makes the user fiddle with knobs — instead of easy to manipulate buttons and sliders — you know that this is a very real possibility when designing skeumorphically.

Apple’s own iOS apps are often skeuomorphic, or at least use skeuomorphic details for parts of their UI, and they’ve been widely critiqued elsewhere. The two most commonly derided skeuomorphic elements added to iOS in the past year are the shredder in Passbook and the reel-to-reel player in Podcasts. Let’s take a look at how these interface elements, contrary to popular opinion, are examples of a good use of real-world simulacra on iOS.

Podcasts’ reel-to-reel player calls up an iconic real-world object. It also provides useful information: as the user plays or scrubs through a podcast, the tape appropriately unwinds from one reel to the other, revealing a visual representation of the play state that doesn’t require reading the smaller digital player on the bottom of the screen.

<img src="/blog/images/podcasts-icon-and-controls.jpg" width="660" height="568" />

What does the user give up for this interface? A big icon of the podcast feed must get pushed offscreen in order for the reel-to-reel to be visible. Until that icon gets moved, the app has no visible scrubbing capability. By contrast, in iOS’s Music app, you can scrub as soon as you start playing; here, that takes an extra swipe. That seems like an unfortunate trade-off, but it’s not strictly necessary: if the podcast icon were smaller, or were incorporated into the reel-to-reel — for example, as a label spinning on the reels themselves — the scrubbing capabilities would be immediately accessible. Perhaps they’re less accessible because scrubbing, sharing, changing the play speed, and setting a sleep timer are all advanced controls that don’t need to be immediately accessible.

The book pages that show up in iBooks for iPad are a similar, less successful, design element. Unlike the reel-to-reel’s tape, the book pages don’t change as the user progresses through a book. If they displayed more information, they’d be more useful and more fun. Instead, the pages are only a decorative element. That doesn’t make them bad, but interactive pages might make the app feel more cohesive.

Animations like Passbook’s shredder have lower costs, so it’s easier to make a case for them — the shredder only appears when a pass is deleted, so it’s not taking up valuable screen real estate. The animation is meant to delight and amaze the user. Sometimes design notes like that can fail — the animation could be too long, or get repetitive. It’s theoretically possible that creating animations like this means neglecting another, more essential, feature of the app. But these small details can give apps personality. When they’re successful, they’re great. Atebits’ [Letterpress](http://www.atebits.com/letterpress/) has a great deletion animation, made up of exploding pixels. It’s a great detail that reveals the care and personality that went into every element of the Letterpress. Passbook’s animation, though neat and fun, seems less successful, not because it looks like a real-world object, but maybe because it doesn’t fit in as well with the rest of the app.

This isn’t to say that skeuomorphism can’t be harmful. Sometimes that harm is a matter of taste, particularly with the polarizing stitched leather choices in some apps, or the potentially irritating ripped pages in Notes and Calendar. Following real objects too closely as a guide can lead to apps with all the limitations of real objects, while an incomplete implementation of a real-world object can feel strange — the Notes app feels very strange when the cursor shows up on top of the legal pad, and the mix of Helvetica for titles and dates feels out of place against the (horrifying) default font. Notes would be better if it were wholly skeuomorphic or not skeuomorphic at all; instead, it feels a bit cobbled together.

####&#9997; Ben: An example of a limitation imposed by Skeumorphism in Notes.app is that if you have more than 11 distinct notes, their titles are occluded by a leather flap when in landscape orientation on iPad.

There are many variations of Steve Jobs quotes that say something [like this](http://blogs.wsj.com/digits/2011/08/24/steve-jobss-best-quotes/): “Some people think design means how it looks. But of course, if you dig deeper, it’s really how it works.” Making apps look like real-world objects can be great; so can making apps look like gradients on a screen. Making a screen *act* like a real-world object, on the other hand, is more difficult to do successfully.

When making screens look like real objects changes how they work, we should consider whether the trade-off is worth it. But when skeuomorphism can provide a reference to a real-world object — particularly a beautiful one — while the user interface also takes advantage of all the ways screens are better than real-world objects, skeuomorphism has its advantages. In matters of beauty, we can agree to disagree whether any particular user interface is superior to another. It’s usability, not appearance, where skeuomorphism can break an interface.

####&#9997; Disclaimer: This post should not be construed as an endorsement of the [Chrysler Cordoba](/blog/images/cordoba.jpg).