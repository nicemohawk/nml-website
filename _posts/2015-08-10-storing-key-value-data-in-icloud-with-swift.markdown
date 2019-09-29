---
layout: post
title: "Storing Key-Value Data in iCloud with Swift"
date: 2015-08-10 14:30
comments: false
categories: ["Swift", "tutorial", "iCloud"]
---
### Kristen

Hi, I'm Kristen––an iOS development newbie and Nice Mohawk’s summer intern. Most recently, Ben assigned me the task of building a simple example app that uses iCloud to store key-value data.

As one would expect, I immediately looked for a tutorial on the subject. I was disappointed, however, to come up short: all of the tutorials I found were written in Objective-C and I––the newbie who only knows Swift––could only half understand what was going on.

Thankfully, I did eventually figure out how to do all of this in Swift. It wasn’t too bad, either.

I decided to build an app with a text field and button, so that a user can type a short message and save it to iCloud. I began by setting up [iCloud entitlements (see steps 1 & 2)](http://code.tutsplus.com/tutorials/working-with-icloud-key-value-storage--pre-37542).

I then opened my ViewController.swift file and declared and initialized an ```NSUbiquitousKeyValueStore``` object:

    var iCloudKeyStore: NSUbiquitousKeyValueStore? = NSUbiquitousKeyValueStore()

The NSUbiquitousKeyValueStore class allows you to save values of various types––NSNumber, NSString, NSDictionary, etc.––and associate them with a key. To save the user’s message for my app, I created an outlet for my text field and a function to call the ```setString:forKey``` and ```synchronize``` methods. ```setString:forKey:``` pairs the text field’s contents with a key, while synchronize saves the message to iCloud.

    let iCloudTextKey = “iCloudText”
    @IBOutlet weak var textField: UITextField!  

    …

    func saveToiCloud() {
        iCloudKeyStore?.setString(textField.text, forKey: iCloudTextKey)
        iCloudKeyStore?.synchronize()
    }

I later realized that I should display the last message the user saved upon launching the app. To do this, I made a function that uses optional chaining and the ```stringForKey:``` method to check for and display a previously saved message.

    func iCloudSetUp() {
        if let savedString = iCloudKeyStore?.stringForKey(iCloudTextKey) {
            textField.text = savedString
        }
    }

Within the same function, I also registered for the ```NSUbiquitousKeyValueStoreDidChangeExternallyNotification``` notification so that my app could handle any changes made to the text field by other instances of the app while running.

#### &#9997; Ben: Sorry if you're reading this on a phone screen. Some bits were overlooked in Cocoa's conversion to Swift and haven't transitioned as completely as others. Notification constant names are one where you can tell they didn't get any love from Swift's move toward more concise descriptors.

Using the ```addObserver``` method to do this also requires an additional function to take some sort of action. In my case, I made this function update the message in the text field.

    func iCloudSetUp() {
        …
        NSNotificationCenter.defaultCenter().addObserver(self,
        	selector: “ubiquitousKeyValueStoreDidChangeExternally:",
        	name:  NSUbiquitousKeyValueStoreDidChangeExternallyNotification,
        	object: iCloudKeyStore)
    }

    func ubiquitousKeyValueStoreDidChangeExternally() {
        textField.text = iCloudKeyStore?.stringForKey(iCloudTextKey)
    }

Here's the [finished project repository](https://github.com/kristenm6/KeyValueApp) on GitHub. Note that the program is slightly more complicated, as I decided to incorporate a switch that allows the user to save text locally using ```NSUserDefaults``` or to iCloud.

And that's it! Not too bad, right?

#### &#9997; Kristen is pursuing a CS degree at Ohio University and recently finished her freshman year. This summer she's working on learning mobile development with Swift and updating Nice Mohawk apps built with Swift, namely [TypeSnippets](http://TypeSnippets.com).
