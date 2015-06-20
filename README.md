# Reactive binary downloader
Download assets as binary and be reactively informed when assets are ready.

## Installation
```bash
meteor add pierreeric:rxbufferdownload
```

## Example usages
### Basic download
```coffee
rxAsset = new RxBufferDownload '/cfs/images/d965f58228e4f65f334f0a46'
Tracker.autorun ->
  if rxAsset.ready()
    content = rxAsset.getBuffer()
```

### Multiple downloads
```coffee
# Use the WaitList from iron:controller
waitList = new Iron.WaitList
rxAsset1 = new RxBufferDownload '/cfs/images/d965f58228e4f65f334f0a46'
rxAsset2 = new RxBufferDownload '/cfs/images/8e4a8878275209c016106505'
waitList.wait -> rxAsset1.get()
waitList.wait -> rxAsset2.get()
Tracker.autorun ->
  if waitList.ready()
    content1 = rxAsset1.getBuffer()
    content2 = rxAsset2.getBuffer()
```

## Links
* [Buffer](https://nodejs.org/api/buffer.html)
* [EventedMind's WaitList](https://www.eventedmind.com/feed/the-reactive-waitlist-data-structure)
* [WaitList](https://github.com/iron-meteor/iron-controller/blob/master/lib/wait_list.js)
