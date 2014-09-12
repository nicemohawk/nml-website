---
layout: post
title: "Adding forEach() to Swift Arrays"
date: 2014-09-12 17:43
comments: flase
categories: [Swift, Code]
---

###Ben

I've been working on a small project in Swift recently. It's been both fun and amazingly frustrating at turns. Moving from a language which I've been using for 13+ years to one that I've only known about for 3 months is *hard*.

One of the things I'm not used to yet is a base object set that isn't as full featured as Foundation's. This isn't a nock against Swift, just an obvious difference that I think will change with time. Swift has also been built such that it's quite a bit easier and more acceptable to add basic functionality to these standard library types. However, for me always remembering that I can do this is the trick.  

Today I was wanting the functionality provided by NSArray's <br>`-makeObjectsPerformSelector:` method. I could have just briged the Swift array I was working with into an NSArray and called the method, but I felt like it might be nice to try extending `Array` instead.  This is what I came up with:

    extension Array {
    	func forEach(doThis: (element: T) -> Void) {
    		for e in self {
    			doThis(element: e)
    		}
    	}
    }

Wow. That was easy! Code to use it simply looks like:

    someArray.forEach { element in 
    	// do something with the element
    }
    
Being able to make this kind of simple extension to a low level type and having it just work makes me a little more open to the idea of Generics invading our little corner of the software development world. 


