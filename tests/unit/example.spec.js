
import { axe, toHaveNoViolations } from 'jest-axe';
import { render } from '@testing-library/vue';
import HelloWorld from '@/components/HelloWorld.vue';

expect.extend(toHaveNoViolations);

describe('HelloWorld.vue', () => {
  it('should have no accessibility violations', async () => {
    const { container } = render(HelloWorld);
    const results = await axe(container, {
      rules: {
        'color-contrast': { enabled: false },  // Disabling a specific rule, as an example
      },
    });
    expect(results).toHaveNoViolations();
  });
});


// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })
