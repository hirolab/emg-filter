
/**
* Use this file to define custom functions and blocks.
* Read more at https://makecode.microbit.org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

let ave = 0
let sum = 0
let list: number[] = []
let EMG = 0
for (let index = 0; index <= 15; index++) {
    EMG = pins.analogReadPin(AnalogPin.P3)
    list.push(EMG)
}



/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * Use dynamic average window to filter EMG signal
     */
    //% block="EMG_filtered"
    export function EmgFilter(): number {
        // Add code here
        EMG = pins.analogReadPin(AnalogPin.P3)
        list.unshift(EMG)
        list.removeAt(15)
        sum = 0
        for (let index = 0; index <= 15; index++) {
            sum = sum + list[index]
        }
        ave = sum / 15
        return ave
    }

    /**
     * TODO: describe your function here
     * @param value describe value here, eg: 5
     */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value -1) + fib(value - 2);
    }
}
