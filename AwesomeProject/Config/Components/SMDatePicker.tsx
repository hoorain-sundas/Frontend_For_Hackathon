import React, { useState } from 'react';
import { View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import SMButton from './SMButton';
function SMDatePicker() {
    const [date, setDate] = useState(new Date())
    const [open, setOpen] = useState(false)
    return (
        <>
            <View>
            {/* <DatePicker date={date} onDateChange={setDate} /> */}
                <SMButton label="Select Date" onPress={() => setOpen(true)} />
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                        console.log(date);
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                
            </View>
        </>
    )
}

export default SMDatePicker
