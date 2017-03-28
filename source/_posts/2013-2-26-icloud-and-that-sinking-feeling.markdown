---
layout: post
title: "iCloud and That Sinking Feeling"
date: 2013-2-26
comments: true
categories: [iCloud, Apple]
---

### Ben
So we’re doing this blog. And we have an app that uses iCloud. And there has been some chatter recently about iCloud — how its not as good as Dropbox, can’t sync CoreData stores with any dependability, or might send your all your PDFs into a void. So you see, the only choice we have is to disagree with these sentiments. Or agree with them, I *guess* that’s a choice we have also.

### Bob
It’s easy for us to like iCloud because our app only syncs UIDocuments. And we happen to be syncing lists, which means we can give each list item a modified date and a unique identifier. That makes it really easy to resolve conflicts and keep everything in sync.

### Ben
Oops, I got distracted.  Ok, so yeah, we may not be the best people to talk to.  We haven’t used iCloud to sync financial information between the arms of our Swiss bank conglomerate or even…

#### &#9997; Bob: And Ben’s mohawk prevents him from experiencing any syncing conflicts, no matter what app he’s using.

…well, yeah. That too. But we do think about iCloud a lot and have some experiences that might give us an idea of what it could be like in the future with some improvements.  So we’re going to go through some possible improvements Apple could make to iCloud and how that might make everyone happy.

### Bob
My number one feature request is sharing iCloud documents between users. Apple took a step in this direction by allowing Photo Stream sharing in iOS 6; of course, that’s not changing the photos themselves, but the comments have to stay in sync. I’m hoping this will get rolled out to third-party iOS and Mac apps this year. But that seems like a short timeframe for real-time collaboration like Google Docs, particularly since all the reports I’ve read indicate that syncing Core Data over iCloud [still doesn’t work](http://inessential.com/2013/02/07/yet_more_on_icloud_core_data_syncing).

#### &#9997; Ben: Having a shipping feature that isn’t viable for real-life usage is a huge (and high priority) problem.  Just read BareBones’ [Yojimbo iCloud Transition Status](http://barebones.com/support/yojimbo/icloud.html) if you want a quick feel for how much of a developer nightmare Core Data syncing currently is.

### Ben
Another big issue with iCloud is siloing documents on a per app basis.  If you haven’t read about this problem, you can [here](http://www.imore.com/stuck-between-dropbox-was-and-icloud-isnt-yet) or [here](http://brooksreview.net/2013/01/app-silos).  The basic gist is that documents in iCloud cease being app agnostic — their status since the introduction of file extensions (and/or type codes) — and have become more like app specific user data instead.  The advantages of this shift include that apps now have a pretty good idea of what documents a user might be interested in working with. The negative side is the obvious issues introduced with document portability and inter-application workflows.

#### &#9997; Bob: Translation — iCloud makes it hard to use files in more than one app.

A simple way that Apple could improve iCloud containers to handle this issue is to break the iCloud Documents & Data section of Settings.app out into a simple system app with the ability to move documents between containers that support that document’s file type.  A further improvement would be to enhance UIDocumentInteractionController’s “Open In…” functionality and, for UIDocument-based applications, integrate it as a default UIActivity in the iOS 6-style activity view that is slowly becoming ubiquitous.

### Bob
Having gone to so much trouble to get rid of the file system, I don’t see Apple bringing it back. And personally, I don’t want to dick around with moving documents between containers — that sounds like the current iCloud nightmare plus some additional aggravation.

#### &#9997; Ben: This makes me wonder how Apple thinks about iCloud documents.  We, as nerds/geeks/smart people, think of them as objects that exist on a filesystem with a name and some data.  But iCloud really deals with two discrete things: documents which are similar to what we’re used to thinking of and data stores which are more nebulous and unusable by multiple apps.

Is the solution to just let an app open any document it thinks it can open? When I open my iCloud documents using [Byword](http://bywordapp.com), show me all text documents in my iCloud account, regardless of what app they were created with. I don’t have to worry about where the files are; I just see everything.

I would hate this, because I want my files to be organized. But is that the solution? It certainly seems preferable to app-specific iCloud folders.

### Ben
I don’t see Apple removing the document-to-app relationship like this because it blurs the border of the sandbox they’ve worked so hard to create and maintain.  Perhaps a better melding of these ideas might simply be a user facing interface that shows all documents of each file type, no matter what container they’re located in, and allows you to open them in any app that supports the file type.  This preserves the idea that an app doesn’t know about documents outside of its own sandbox while allowing for files to be opened by any app on the device.  The main question would be whether this operation would end up with the document being moved into the new app’s container, copied there, or linked to both containers.

### Bob
With all that said, we really like iCloud. When it works — and it *just works* for 99% of our users — it’s simple and seamless. It’s magical. iCloud syncing is easier for our users to set up than Dropbox syncing, and they don’t have to remember to open [Ita](http://nicemohawk.com/ita) before boarding a plane, getting on the subway, or leaving the confines of their data plan. All their iCloud documents are already in place.

So we’re committed to iCloud; we just want to see it get good enough for every app that needs ubiquitous syncing—a category that looks more and more just like “every app.” This leaves us, here at Nice Mohawk Limited, looking forward to what Apple has to announce about iCloud at WWDC this year with more interest than some years in the past. Apple wants iCloud to be the hub the whole ecosystem is built on. We’re hoping they can deliver more fully on that promise.

#### &#9997; Update February 28: [@dzamir](https://twitter.com/dzamir/status/307060262287077376) pointed out on Twitter that we didn’t mention the version of iCloud document sharing that Apple introduced in iOS 5. Good catch. iCloud does already allow developers to create a snapshot of an iCloud file that can be viewed by others. Unfortunately, that snapshot a) isn’t updated with subsequent changes to the file and b) is read-only, but this is a good first step toward the full document collaboration that we’re hoping for.
