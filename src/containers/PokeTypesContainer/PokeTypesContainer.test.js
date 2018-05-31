import React from 'react';
import { shallow } from 'enzyme';
import { connect } from 'react-redux'

import { PokeTypesContainer, mapDispatchToProps, mapStateToProps } from './index';

describe('PokeTypesContainer', () => {
  let mockProps
  let wrapper

  beforeEach(() => {
    mockProps = {
      getPokeTypes: jest.fn(),
      isLoading: false,
      hasErrored: false,
      types: []
    } 

    wrapper = shallow(<PokeTypesContainer {...mockProps} />)
  })

  it('should match snapshot when loading is false', () => {
    expect(wrapper).toMatchSnapshot()
  })

  it('should match snapshot when loading is true', () => {
    mockProps = {
      getPokeTypes: jest.fn(),
      isLoading: true,
      hasErrored: false,
      types: []
    }

    wrapper = shallow(<PokeTypesContainer {...mockProps} />)
    expect(wrapper).toMatchSnapshot()
  })
})