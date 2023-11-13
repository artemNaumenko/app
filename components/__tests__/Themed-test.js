import * as React from 'react';
import renderer from 'react-test-renderer';

import {Text, View, useThemeColor} from '../Themed';
import assert from "assert";

const mockedUseColorScheme = jest.fn();

jest.mock('react-native/Libraries/Utilities/useColorScheme', () => {
    return {
        default: mockedUseColorScheme,
    };
});

test(`Text useThemeColor case1`, () => {
    const lightColor = 'rgba(0,0,0,0.8)';

    const color = useThemeColor({ light: lightColor}, 'background');

    assert(color === lightColor);
});

test(`Text useThemeColor case2`, () => {
    const darkColor = 'rgba(255,255,255,0.8)';

    const color = useThemeColor({ dark: darkColor}, 'text');

    assert(color === "#000");
});

test(`Text useThemeColor case3`, () => {
    const darkColor = 'rgba(255,255,255,0.8)';

    const color = useThemeColor({}, 'text');

    assert(color === "#000");
});

test(`Text renders correctly`, () => {
    const tree = renderer.create(<Text>Snapshot Text test!</Text>).toJSON();

    expect(tree).toMatchSnapshot();
});

test(`View renders correctly`, () => {
    const tree = renderer.create(<View>Snapshot View test!</View>).toJSON();

    expect(tree).toMatchSnapshot();
});
