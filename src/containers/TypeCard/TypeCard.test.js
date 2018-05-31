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
          sprites: {
            front_default: 'hello.jpg'
          }
        })
      }))

      Promise.resolve(wrapper.simulate('click'))
        .then(() => {
          wrapper.update()
        })
        .then(() => {
          expect(window.fetch).toHaveBeenCalled()
        })
    })

    it('should update card state with new pokemon', () => {

      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          name: 'onyx',
          weight: '75',
          sprites: {
            front_default: 'hello.jpg'
          }
        })
      }))

      Promise.resolve(wrapper.simulate('click'))
        .then(() => {
          wrapper.update()
        })
        .then(() => {
          expect(wrapper.state().pokemon).toEqual([{
            name: 'onyx',
            weight: '75',
            sprites: {
              front_default: 'hello.jpg'
            }
          }])
        })
    })

    it('should render a pokemon inside the card after call is made', () => {
      window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
        json: () => Promise.resolve({
          name: 'onyx',
          weight: '75',
          sprites: {
            front_default: 'hello.jpg'
          }
        })
      }))

      Promise.resolve(wrapper.simulate('click'))
        .then(() => {
          wrapper.update()
        })
        .then(() => {
          const info = wrapper.find('div')

          expect(info.length).toEqual(1)
        })
    })
  })
})