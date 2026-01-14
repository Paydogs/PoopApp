import { useState, useEffect, useCallback, createContext, useContext } from 'react';
import { useColorScheme } from 'react-native';

export const Colors = {
    Light: {
        "primaryText": "#1c1107",
        "secondaryText": "#a2622a",
        "theme_5": "#faf2eb",
        "theme_10": "#f5e4d6",
        "theme_20": "#eacaae",
        "theme_30": "#e0af85",
        "theme_40": "#d5955d",
        "theme_50": "#cb7a34",
        "theme_60": "#a2622a",
        "theme_70": "#7a491f",
        "theme_80": "#513115",
        "theme_90": "#29180a",
        "theme_95": "#1c1107"
    },
    Dark: {
        "primaryText": "#faf2eb",
        "secondaryText": "#d5955d",
        "theme_5": "#1c1107",
        "theme_10": "#29180a",
        "theme_20": "#513115",
        "theme_30": "#7a491f",
        "theme_40": "#a2622a",
        "theme_50": "#cb7a34",
        "theme_60": "#d5955d",
        "theme_70": "#e0af85",
        "theme_80": "#eacaae",
        "theme_90": "#f5e4d6",
        "theme_95": "#faf2eb",
    }
}

export const Font = {
    regular: 'MouseMemoirs-Regular',
    bold: 'LapsusPro-Bold',
    other: 'WeeBairn'
};