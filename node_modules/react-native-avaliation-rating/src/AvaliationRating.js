import { TouchableOpacity, Text, StyleSheet, View} from 'react-native'
import React from 'react'

export default function AvaliationRating({
    recomendationLevel,
    onPress,
    numberSelected,
    colorNumberActive,
    colorNumberInative,
    colorBackgroundActive,
    colorBackgroundInative,
    colorBorderInactive,
    styleFontLess,
    styleFontMore,
    textLess,
    textMore,
    numberContentStyle,
    styleNumberText
}) {
    return (
        <View style={{flex: 1, width: '100%'}}>
            <View style={{flexDirection: 'row', flex: 1, width: '100%'}}>
                {recomendationLevel.map((item, index) => (
                    <TouchableOpacity onPress={()=>onPress(index+1)}
                        key={index} 
                        style={[{backgroundColor: index + 1 <= numberSelected ? colorBackgroundActive : colorBackgroundInative, borderColor: index + 1 <= numberSelected ? colorNumberActive : colorBorderInactive, }, styles.noteButton, numberContentStyle]}>
                        <Text style={[{color: index + 1 <= numberSelected ? colorNumberActive : colorNumberInative}, styleNumberText]}>{item}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, paddingHorizontal: 5}}>
                <Text style={styleFontLess}>{textLess}</Text>
                <Text style={styleFontMore}>{textMore}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    noteButton: {
        height: 35,
        flex: 1,
        borderWidth: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

  });
  