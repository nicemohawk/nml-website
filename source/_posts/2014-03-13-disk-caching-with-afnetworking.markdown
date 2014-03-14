---
layout: post
title: "Disk Caching with AFNetworking"
date: 2014-03-13 15:22
comments: false
categories: AFNetworking
---
####&#9997; And we’re back, due to an overwhelming show of support from our reader.

###Bob


Today’s quick tip: taking advantage of in-memory and on-disk caches when using AFNetworking. If you’re already using AFNetworking for your networking needs — and you probably are — you might be wondering whether you need to do anything special to use a cache for your objects. Specifically, we wanted to make sure we were getting all the advantages of both AFImageCache and NSURLCache — AFImageCache for in-memory caching, and NSURLCache as a disk cache.

It’s easy!

**Step 1:** Set up an NSURLCache, probably in AppDelegate. No memory capacity, as AFNetworking already has AFImageCache for a memory cache:
``` objc
    NSURLCache *URLCache = [[NSURLCache alloc] initWithMemoryCapacity:0 diskCapacity:50 * 1024 * 1024 diskPath:nil];
    [NSURLCache setSharedURLCache:URLCache];
```

**Step 2:** When you’re about to send off an NSURL request, check the AFImageCache first:
	
    NSURLRequest *urlRequest = [NSURLRequest requestWithURL:[NSURL URLWithString:URLString] cachePolicy:NSURLRequestReturnCacheDataElseLoad timeoutInterval:30.0f];
    UIImage *image = [[UIImageView sharedImageCache] cachedImageForRequest:urlRequest];
    if (image != nil) {
        return;
    }

**Step 3.** If the return value is nil, let your request get processed normally. AFHTTPRequestOperation will use the NSURLCache automatically before going to the web:

    AFHTTPRequestOperation *postOperation = [[AFHTTPRequestOperation alloc] initWithRequest:urlRequest];
    postOperation.responseSerializer = [AFImageResponseSerializer serializer];
    [postOperation setCompletionBlockWithSuccess:^(AFHTTPRequestOperation *operation, id responseObject) {
        UIImage *image = responseObject;
        [[UIImageView sharedImageCache] cacheImage:image forRequest:urlRequest];
    } failure:^(AFHTTPRequestOperation *operation, NSError *error) {
        NSLog(@"Image error: %@", error);
    }];
    [postOperation start];

And that, [like the man says](https://www.youtube.com/watch?v=HdVmnZ88ECM#t=77), is that.
