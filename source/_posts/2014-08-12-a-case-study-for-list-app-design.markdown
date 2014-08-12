---
layout: post
title: "Ita 2.0 as a Case Study for List App Design"
date: 2014-08-12 14:35
comments: false
categories: [Ita, "User Interaction", Design, Lists]
---
###Ben

Last week [we released](/blog/2014/08/ita-2-released-to-customers-worldwide/) a big update to our [list-making app, Ita](/ita). For version 2.0 we redesigned the look of the app, but we also changed some of the interactions to create an even more simple and consistent interface throughout the app. Ita's goal has always been to be the most quick, simple and enjoyable list making app out there, so we thought we'd talk a bit about how we designed Ita's interaction model and compare it to some other list apps out there.

###Bob
Ita 2.0 has a new feature called "edit mode" that lets users switch between editing items without having to go back to the normal list view (just tap another item!) like you did in Ita 1.x. We like this feature, and it changed user interaction within a list in a variety of ways. When designing that feature, it was helpful to look closely at different apps and see how they handled similar problems. With that type of process in mind, it seems useful to think through the different things that you can do with a list, and look at how a few popular list apps respond to similar challenges. Users need to do a core set of things with their lists: create new items, edit item text, reorder items, mark items completed/uncompleted, and delete items. It's hard to make all of these options available to the user at any given point. So list apps have to prioritize some actions over others while preserving design space for any unique features of their own. &nbsp;   
 
## The System Standard: Reminders

####&#9997; Ben: Wait, isn't the system standard Notes.app? 

####&#9997; Bob: Notes isn't a list app?

####&#9997; Ben: But so many people use it to make lists! We all know they're doing it wrong, but…

####&#9997; Bob: Good point. 1) They should use Ita. 2) While you can use a text editor to make lists (I do it all the time on my Mac), it's easier to make a list on iOS using a dedicated list app than a text editor for various reasons we should avoid going into now. Dedicated list apps generally share user interface patterns that make comparing them to each other both more informative than and very different from comparing text editors. So let's call Reminders "The System Standard List App."
 
## The System Standard List App: <del>Notes</del> Reminders
  - **Create new items**:  
	When not editing, tap anywhere at the bottom of the list. While editing an item, tap only on the single empty line immediately after the last item on the list. 
  - **Edit item text**:  
	Tap on an item. Only available when not in "global editing" mode ("global editing" mode is accessed by tapping the "edit" button which is visible when not editing an item).
  - **Reorder items**:  
	Reordering is only available in "global editing" mode.
  - **Mark items completed**:  
	Tap the dot next to item text in left-hand margin. Available while editing an item for all items *except* the one being edited. Not available in "global editing" mode.
  - **Delete items**:  
	Swipe on an item, then tap delete button; also available in "global editing" mode, where pressing the delete button has the same result as a swipe (and gives you the "more" option!? Understandable, but not a super elegant bit of UI —Bob).
- **Additional Functions**:  
	Reminders has a "More" button that allows one to add recurrence or date/time alerts to an item. This is available by pressing the detail disclosure button while editing an item (which is a really neat bit of UI) or by swiping left on an item and tapping "more."  

&nbsp;
## A Custom Gesture-Based Interface: Clear
  - **Create new items**:  
	Pull down on list or pinch into list. 
  - **Edit item text**:  
	Tap an item.
  - **Reorder items**:  
	Long press an item, then drag to new location
  - **Mark items completed/uncompleted**:  
	Swipe to the right.
  - **Delete items**:  
	Swipe to the left
  - **Additional Functions**:  
	Shake to undo. Can add reminders to items.

####&#9997; Bob: While this interface is much more simple than that of Reminders.app, neither of us can use Clear without becoming wildly frustrated within seconds. But for people with whom it "clicks," they really like it.

&nbsp; 
## The Common Denominator (comes with an extra kitchen sink): Wunderlist
  - **Create new items**:  
	Tap the "Add an item..." box at the top of the list.
  - **Edit item text**:  
	Tap an item to open it, then tap the text box on the resulting screen. Or swipe to the left, then tap the pencil icon.
  - **Reorder items**:  
	Long press, then drag to new location. Or tap the "Sort" button at the bottom of the screen and then choose a sorting option.
  - **Mark items completed/uncompleted**:  
	Tap the checkbox next to an item.
  - **Delete items**:  
	Swipe left, tap the trash can, then tap "Delete item" to confirm. Alternatively, tap an item, then tap the three-vertical-dot-button at the bottom-right, then tap the trash can, then tap "Delete" to confirm.
  - **Additional Functions**:  
	Lots of other functions in the toolbar at the bottom of the screen or the "Share" button at the top right corner of screen or you can pull down to initiate sync.

&nbsp;
##You've Tried the Rest, Now Try the Best: Ita
  - **Create new items**:  
	Tap the plus button.
  - **Edit item text**:  
	 Tap the edit hand button to to enter "edit" mode. Or to starting editing a specific item, swipe left on that item, then tap the edit hand. Tapping on any item when editing *or adding items* switches to editing that item.
  - **Reorder items**:  
	Long press an item, then drag to new location. Not available while editing/adding items.
  - **Mark items completed/uncompleted**:  
	Tap an item. To combat accidental marking we wait a moment for a second tap which reverts the items to it prior state. Not available while editing/adding items
  - **Delete items**:  
	Swipe to the left, then tap the trash can.
  - **Additional Functions**:  
	Action button at bottom of list allows sharing, removing completed items, restoring completed items to their uncompleted state, renaming list title, deleting list.

###Ben

What we can see is that each app has an opinion about which actions are most important. For Reminders, this is editing an item (it only takes one tap) followed by creating new reminders (I'm not completely sure about this actually since it gets murky quick). With Clear, it is obviously creating new items that is most easily accessible at any given moment. Wunderlist has an abundance of features, none of which standout as a primary focus but as a whole make the app very full featured.

With Ita, we've focused on the act of marking items complete (a single tap) and reordering items (a long press). This is because when you are *using* a list, these are the actions that you do most often. (ex: You bought a present off your list of gift ideas, picked up a new record from your recommended music list, or you moved a task lower down on your daily todo list). 

In addition to our assumed common uses of lists, there are those other things that you do with a list. We treat these as quantified interactions that can be split off from the most common use of an existing list. Adding items is something that users do all the time, but they often do it several times in a row (perhaps mixed with editing some items as well), so that mode can be accessed via a single targeted tap on the plus button. Editing is done either to a single item or to multiple items in series but occurs less frequently than creating items, marking them completed or reordering. Because of this, while it can also be accessed via avery simple action, that action is given less prime real estate. 

###Bob
I hope we've done an OK job of documenting how these other apps work; we're not in a position to know much about the motivations of those other developers or know why/how they've made design decisions.

####&#9997; Ben: And while we don't want to pan any of them particularly, we think any discerning list maker will most certainly see how nice Ita is.

What we can share are some of the principles we use when making design decisions, apart from the specifics of the feature we're designing.

- **Know Your Audience.** We want Ita to be useful for casual users and, just as importantly, for power users who are distracted. Ita's not OmniFocus; it's not even as complicated as Reminders. We want to create a place for lists that can be checked off while you're packing or at the store (Ita's average session length is less than 30 seconds per use). Simplicity isn't just for casual users; simplicity is also about providing a clear experience for users who might need to focus on stuff other than our app.

- **Leave Room to Grow.** We have a current feature set that we're happy with, but we're also planning for future releases. We want to leave space for adding features to the app. If we make the app as complicated as it can comfortably be, then adding new features will make the app feel cramped or require a redesign that will take development resources and require reeducating users. (And those reeducation camps are expensive.)

- **Be Like Apple.** We want to follow standard iOS conventions all the time, unless we have a good reason not to. Yes, part of that means reading the [HIG](https://developer.apple.com/library/iOS/design/index.html#//apple_ref/doc/uid/TP40013289). The other part is looking closely at user interaction in stock apps and trying to understand how and why they work the way they do. Mail and Reminders are great examples for us — Mail in particular is usually on the cutting edge of Apple's public UI innovations.

###Ben
If you haven't already used Ita 2.0, [go get it](https://itunes.apple.com/us/app/ita-list-app-to-do-list-making./id528185276). We're really happy with the interactions and the new features, but we like to hear feedback on our design choices. Tweet us [@nicemohawk](http://twitter.com/nicemohawk) and we can have a conversation 140 characters at a time.