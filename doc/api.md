

<!-- Start rxBufferDownload.coffee -->

# A reactive binary asset downloader.

This class inherits from ReactiveVar.
Downloads are performed using the XMLHttpRequest v2 method with a type
set on 'arraybuffer'.

It requires:

- Buffer: The same NodeJS package for the browser).
- ArrayBufferToBuffer: A transformation function from ArrayBuffer
  into Buffer.

## RxBufferDownload(url)

C-tor: Create a reactive object that will be ready once the requested
download has ended.

### Params:

* **String** *url* URL of the requested ressources.

## ready()

Reactive function that returns the state of the downloaded asset.

### Return:

* **Boolean** true if asset has been downloaded, false otherwiser.

## getBuffer()

Get the content of the downloaded asset as a Buffer (see NodeJS).

### Return:

* **Buffer** Content of the downloaded asset.

# Buffer.

Buffer is exposed in browser's global scope.

<!-- End rxBufferDownload.coffee -->

