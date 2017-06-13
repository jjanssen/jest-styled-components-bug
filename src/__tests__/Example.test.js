import 'jest-styled-components';
import React from 'react';
import { mount } from 'enzyme';

import Example from '../Example';

describe('Example', () => {
    it('should have the correct properties', () => {
        const tree = mount(<Example />);
        expect(tree).toHaveStyleRule('width', '100%');
        expect(tree).toHaveStyleRule('padding', '10px');
    });
});