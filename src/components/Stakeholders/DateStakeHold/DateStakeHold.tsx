import React, { useState } from 'react';
import { StyleProp, Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { styles } from './style'
import Calendar from '../../../../assets/svg/calendar.svg'

import DatePicker from 'react-native-date-picker'
import { COLORS } from '../../../themes/colors/ZettingColors';


type Props = {
    date: Date,
    setDate: React.Dispatch<React.SetStateAction<Date>>
    componentWrapper?: StyleProp<ViewStyle>
}

const DateStakeHold = ({
    date,
    setDate,
    componentWrapper
}: Props) => {
    const [open, setOpen] = useState(false)
    return (
        <View style={[componentWrapper]}>
            <Text style={[styles.title]}>calendar</Text>
            <TouchableOpacity
                onPress={() => setOpen(true)}
                style={styles.wraper}
            >
                <Text style={styles.textDate}>{date.toDateString()}</Text>
                <DatePicker
                    modal
                    open={open}
                    date={date}
                    onConfirm={(date) => {
                        setOpen(false)
                        setDate(date)
                    }}
                    onCancel={() => {
                        setOpen(false)
                    }}
                />
                <Calendar width={18.39} height={18.39} fill={COLORS.white} style={{ alignSelf: 'flex-end', marginBottom: 10 }} />
            </TouchableOpacity >
        </View>
    );
};

export default DateStakeHold;
