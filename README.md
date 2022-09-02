
> Open this page at [https://alexwurobot.github.io/emg-filter/](https://alexwurobot.github.io/emg-filter/)

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/alexwurobot/emg-filter** and import

## Usage 

### ``emg-filter``

Use the ``emg-filter`` block to read the filtered EMG data.

```blocks
basic.forever(function () {
    led.plotBarGraph(
    EmgFilter.EmgFilter(),
    1023
    )
})
```
Demo video: https://youtu.be/gieYM_RnGLI

## Edit this project ![Build status badge](https://github.com/alexwurobot/emg-filter/workflows/MakeCode/badge.svg)

To edit this repository in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **Import** then click on **Import URL**
* paste **https://github.com/alexwurobot/emg-filter** and click import

## Blocks preview

This image shows the blocks code from the last commit in master.
This image may take a few minutes to refresh.

![A rendered view of the blocks](https://github.com/alexwurobot/emg-filter/raw/master/.github/makecode/blocks.png)

#### Metadata (used for search, rendering)

Reference video: https://youtu.be/ztrm4XehfGo
Reference return value: https://makecode.microbit.org/courses/blocks-to-javascript/writing-functions


