
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/


let ave = 0
let sum = 0
let list: number[] = []
let EMG_raw = 0
for (let index = 0; index <= 15; index++) {
    EMG_raw = pins.analogReadPin(AnalogPin.P3)
    list.push(EMG_raw)
}


/**
 * Neupulator blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace Neupulator {
    /**
     * Use dynamic average window to filter EMG_raw signal from Pin P3
     */
    //% block="EMG Signal"
    export function EMG_rawFilter(): number {
        // Add code here
        EMG_raw = pins.analogReadPin(AnalogPin.P3)
        list.unshift(EMG_raw)
        list.removeAt(15)
        sum = 0
        for (let index = 0; index <= 15; index++) {
            sum = sum + list[index]
        }
        ave = sum / 15
        return ave
    }
}
