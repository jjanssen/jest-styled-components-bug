import 'jest-styled-components';
import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Example from '../Example';

describe('Example', () => {
    it('enzyme: should have the correct properties', () => {
        const tree = mount(<Example />);
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '10px');
    });

    it('react-test-renderer: should have the correct properties', () => {
        const tree = renderer.create(<Example />).toJSON();
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '10px');
    });
});