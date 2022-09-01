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
    //% block="set P3 pin as analog read pin"
    //% inlineInputMode=inline
    export function EmgFilter(): void {
        EMG = pins.analogReadPin(AnalogPin.P3)
        list.unshift(EMG)
        list.removeAt(15)
        sum = 0
        for (let index = 0; index <= 15; index++) {
            sum = sum + list[index]
        }
        ave = sum / 15
        led.plotBarGraph(
            ave,
            1023
        )
    }
}



