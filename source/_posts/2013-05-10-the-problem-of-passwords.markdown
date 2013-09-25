---
layout: post
title: "The Inescapable Problem of Passwords"
date: 2013-05-10 12:30
comments: false
categories: [Security, Passwords, Recommendations]
---
###Bob

One of Ben’s many faults is that he keeps his passwords in his system keychain, like an animal, a small creature of the forest, hiding nuts for winter. Today I’ll try to get him to start using [**1Password**](https://agilebits.com/onepassword) or some other password-management app. This will make his life better by giving him secure passwords he can access from anywhere, easily transfer between Macs, and by giving him an easy place to safely and securely store other sensitive information — server info, financial data, etc. Ben, are you ready to switch?

###Ben

I think I am. But I’m unsure of the day to day consequences of doing so. It seems scary to give my passwords to a service, no matter how into security they are, and the idea of not knowing my own passwords is unsettling. On the flip side, I don’t actually know all my passwords, leading to resetting passwords more often than I like. 

Password security is a rather difficult thing. Eight characters was once the golden standard for strong passwords, then eight or more characters inclusive of a numeral, and more recently eight or more characters including a numeral, an uppercase character, two punctuation marks and your best friend’s three favorite emoji. This makes it really hard for users to memorize compliant passwords due to the limitations of human short-term memory to around four ‘chunks’ of information{% footnote_ref 1 %}.

###Bob

Right. Maybe we should back up a bit and think about password security in general. In the past, I’ve had some good passwords that I remember, but it’s hard to have great passwords for every different service, so I end up either a) using passwords that aren’t secure or b) using the same password on multiple sites. Even after switching to 1Password, I have three or four secure passwords that I remember and know by heart, and use for my go-to services: Dropbox, iTunes, and 1Password. That’s a comprehensive list.

###Ben

I have to say, the services I use on a weekly basis stretch beyond those mentioned. Passwords I use every single day are really only my computer’s password, Apple and Google. But there are probably 5-10 other services that I use several times per week.

###Bob

I don’t mind remembering passwords for a few things, but I have trouble remembering 10 different secure passwords for 10 services I really want to use and really want to stay secure. For example...

####&#9997; Ben: Bob, are you sure you want to list all the services you use? It seems like a security risk or something. You know, because of the Hackers. But I guess you’re pretty convinced that your password scheme is really all that.

Good point. Uh, I use Shmemail, Gwitter, and Blamazon. 

That’s one problem 1Password and like services fix: they make it easier to use better passwords for those 10 important sites. The other problem that 1Password solves: there are 100 other sites that I have a login to that might not need to be incredibly secure, but I’d still rather not use a single password that I share with all of them — I want those sites to have their own passwords, and have those passwords be pretty good, but I have no intention of memorizing them. Keychain would work for this, but Keychain doesn’t sync to my iPhone or iPad.

###Ben

But I’m still unsettled by the notion that I might not be able to access my password for a given service at some future moment in time when I’m on a device that isn’t my own. How does that pan out?

###Bob

If I don’t have my iPhone, iPad, or Mac, I can’t log in to services that I don’t remember the password for unless I want to do a password reset. That’s still a problem, but it’s one I’m OK having. Do you have any potential qualms about using 1Password?

###Ben

Sure. My biggest one is simply that I don’t like installing software on my computers. I’m a bit of a grumpy person about it. I’d rather use built in solutions when at all possible--it makes my life more simple and I have less “operator knowledge” to manage and keep up to date on, not to mention making it easier to set up a new Mac when I upgrade.

###Bob

You can use OS X’s built in password creator to make secure passwords and store them in your system keychain pretty easily. But there are two problems that I can’t figure out how to solve using the built-in keychain: I don’t have access to my passwords when I’m on iOS, and I don’t get the advantages of auto-fill for services where I have multiple logins. Are those problems for you, and how do you manage them without a password manager?

###Ben

They are. On iOS I find myself using a somewhat smaller subset of my service passwords. Generally the ones I access most often and am most likely to have memorized. I don’t use the same password for all of these or anything close to that. This is because passwords can be quite memorable while still being strong. It’s obvious that a password having the largest amount of entropy per character will be strongest, and that means a password utilizing a selection of all available characters in a random pattern will be most secure. However, all we really need to do is create a password good enough that it can’t be broken quickly — say in the next 10 years. There has been [good research on this topic](http://www.cse.unsw.edu.au/~meyden/3441/UCAM-CL-TR-500.pdf) as far back as the dawn of consumer internet security awareness (we’ll call that circa 2000) and it has [continued](http://repository.cmu.edu/cgi/viewcontent.cgi?article=1043&context=isr&sei-redir=1) over the past decade. Thomas Baekdal wrote [a phenomenal analysis of phrase based password security](http://www.baekdal.com/insights/password-security-usability) in 2007 which outlines the benefits, and strength, of using multi-word, dictionary-based phrases for passwords. If you only read one link from this article, make it that one. Unfortunately there are still [many services](https://defuse.ca/password-policy-hall-of-shame.htm) that limit passwords’ character count{% footnote_ref 2 %} making this type of password only useful in certain circumstances.

####&#9997; Ben: For instance, an **online banking** interface I use had a limit of 10 characters until about 2 years ago. This pointed to both clear text password storage and made it <s>harder for</s> close to useless for phrase-based passwords.

So, it seems like this is the right way to do things: 

* Have a few good strong, yet memorable, passwords for the services you use most regularly.
* Store these and the myriad of other service passwords in a high quality password management service. 

You’ve thrown the 1Password name around a lot, are there alternatives, or are they the only game in town? 

###Bob

1Password does have competitors, like [LastPass](https://lastpass.com) or [DataVault](http://www.ascendo-inc.com/DataVault.html), but I wouldn’t recommend them. The LastPass Safari extension, for example, doesn’t have a “binary component”, so it won’t do nice things like log you out of LastPass automatically after you’ve been idle. That’s fine, but it suggests that they’re not a Mac-first company. And I’ve run into the 1Password guys a few times at conferences; they’re incredibly bright and admirably paranoid about password security.

###Ben 

If you’re counting, that’s one more smiley face in the 1Password column. Ok, so 1Password it is. I know I can handle this and probably should have done it long ago. Just let me cough of up the dosh for it…

… $68 for both Mac and iOS!? Too expensive. Should be 99¢. One ★.

In all seriousness though, not everyone ‘knows about computers’ like we do, and can see the value in a $70 solution. Is there a lower cost solution that is workable for the masses?

###Bob

I’m not sure whether there’s any solution that’s perfect for everyone. I haven’t recommended 1Password to my Mom. I’m not sure she needs its features, and I don’t want to add complexity to her life. But it’s not too difficult a program to use.

###Ben

But what do we suggest to our friends and family? Password issues are prolific across the internet and as both you and I know, most people use a single, very low strength password. Using a fairly expensive password management service isn’t going to fly for most regular consumers. So what will?

###Bob

Using one good password would be a good step up. People might also consider having one password for random services, one (better) password for more important services, and one really good password that's only for financial stuff. But that's still not a better solution than using 1Password.

###Ben

Agreed. My go to recommendation for the past few years has been this three password approach. But in a world where services are hacked more and more regularly, unless the user is very self disciplined about which password is used for which type of service, service to service escalation is very possible. With high security services often having more rigorous password requirements which, as we’ve discussed, make for poor password memorability, we go down the road of many password resets and simple to remember/simple to crack security questions. Thus, I am more and more convinced that this advice isn’t particularly sound. That’s assuming people actually adhere to it, and they don’t.

So it’s a password manager or bust. Get out your wallets, folks.

####N.b.: Some of the other services mentioned above are significantly less expensive than 1Password. If cost is an inhibiting factor for you or your password-feeble friends and family, do explore the other services — they might just work.

{% footnotes %}
  {% fn %} [The magical number 4 in short-term memory: A reconsideration of mental storage capacity](http://www.pri.kyoto-u.ac.jp/ai/intra_data/KawaiN/Kawai-Matsuzawa-Magical_number_5_in_a_chimpanzee.pdf) — Cowen 2000. 
  {% fn %} Not to mention the fact that most sites which enforce a character limit on passwords have a [strong likelihood](https://defuse.ca/passwordrestrictions.htm) of storing your passwords in clear text.
{% endfootnotes %}