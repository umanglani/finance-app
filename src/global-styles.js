import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    flexStart: {
        justifyContent: 'flex-start',
    },
    flexCenter: {
        justifyContent: 'center',
    },
    flexEnd: {
        alignItems: 'flex-end',
    },
    vCenter: {
        alignItems: 'center'
    },
    flexRow: {
        flexDirection: 'row'
    },
    fullWidth: {
        width: '100%'
    },
    lightSmallText: {
        fontSize: 12,
        fontFamily: 'Nunito_300Light'
    },
    lightText: {
        fontSize: 13,
        fontFamily: 'Nunito_300Light'
    },
    bigTitle: {
        fontSize: 32,
        fontFamily: 'Nunito_700Bold'
    },
    mediumTitle: {
        fontSize: 18,
        fontFamily: 'Nunito_700Bold'
    },
    regularTitle: {
        fontSize: 16,
        fontFamily: 'Nunito_700Bold'
    },
    bold: {
        fontWeight: 700
    },
    gray: {
        color: '#f7f7f7'
    },
    purple: {
        color: '#895ebe'
    },
    icon: {
        fontSize: 17
    },
    padding15: {
        padding: 15
    }
});

export const Colors = {
    Gray: '#afafaf',
    LightGray: '#e1e1e1',
    ListBackground: '#ffdfdf'
};