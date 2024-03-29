import { shallowMount } from '@vue/test-utils'
import Item from '../Item.vue'

describe('Item.vue', () => {
  test('renders item.url', () => {
    const item = {
      title: 'some title'
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.text()).toContain(item.title)
  })
})

describe('Item.vue', () => {
  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      title: 'some title',
    }
    const wrapper = shallowMount(Item, {
      propsData: { item }
    })
    expect(wrapper.find('a').text()).toBe(item.title)
  })
})

describe('Item.vue', () => {
  test('renders a link to the item.url with item.title as text', () => {
    const item = {
      title: 'some title',
      url: 'http://some-url.com'
    };
    const wrapper = shallowMount(Item, {
      propsData: { item }
    });
    const a = wrapper.find('a');
    expect(a.text()).toBe(item.title);
    expect(a.attributes().href).toBe(item.url);

  })
})
