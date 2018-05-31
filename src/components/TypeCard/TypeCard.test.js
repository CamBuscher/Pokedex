import React from 'react';
import { TypeCard } from './index'
import {shallow} from 'enzyme'

describe('TypeCard', () => {
  let wrapper
  let mockProps

  beforeEach(() => {
    mockProps = {
      pokemon: [{
        name: 'onyx',
        weight: '75',
        spites: {
          front_default: 'hello.jpg'
        }
      }],
      id: 1,
      name: 'ONYX'
    }
    wrapper = shallow(<TypeCard {...mockProps} />)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('fetchPokemon', () => {
    it('should call fetch with correct paramaters', () => {
      
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          name: 'onyx',
          weight: '75',
          spites: {
            front_default: 'hello.jpg'
          }
        })
      }))

      wrapper.simulate('click')

      expect(window.fetch).toHaveBeenCalled()
    })
  })
})