
/**
 * EMG blocks
 */
//% weight = 80 color=#0fbc11 icon=""

let ave = 0
let sum = 0
let list: number[] = []
let EMG = 0
for (let index = 0; index <= 15; index++) {
    EMG = pins.analogReadPin(AnalogPin.P3)
    list.push(EMG)
}


namespace EmgFilter {
    /**
     * Use dynamic average window to filter EMG signal 
     */
    //% blockId = EmgFilter
    //% block="EMG_filtered"
    export function EmgFilter(): int32 {
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
}



