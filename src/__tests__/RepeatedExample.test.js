import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import RepeatedExample from '../RepeatedExample';

describe('RepeatedExample', () => {
    it('enzyme: should have the correct properties', () => {
        const tree = mount(<RepeatedExample />);
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '10px');
    });

    it('react-test-renderer: should have the correct properties', () => {
        const tree = renderer.create(<RepeatedExample />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '10px');
    });

    it('enzyme: should have the correct (small) properties', () => {
        const tree = mount(<RepeatedExample />);
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '5px');
    });

    it('react-test-renderer: should have the correct (small) properties', () => {
        const tree = renderer.create(<RepeatedExample />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '5px');
    });
});