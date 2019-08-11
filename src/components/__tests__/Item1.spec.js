import { shallowMount } from '@vue/test-utils'
import ItemList1 from '../../views/ItemList1.vue'
import Item1 from '../Item1.vue'

describe('ItemList1.vue', () => {
  test('renders and Item for each item in window.items', () => {
    window.items = [{},{},{}]
    const wrapper = shallowMount(ItemList1)
    expect(wrapper.findAll(Item1)).toHaveLength(window.items.length)
  })
})
