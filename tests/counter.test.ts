import Counter from '../src/lib/Counter.svelte'
import { render, cleanup, fireEvent, waitFor } from '@testing-library/svelte'

it('it works', async () => {
  const { getByTestId } = render(Counter);

  const increment = getByTestId('increase');
  const decrement = getByTestId('decrease');
  const counter = getByTestId('counter');

  await fireEvent.click(increment);
  await fireEvent.click(increment);
  await fireEvent.click(increment);
  await fireEvent.click(decrement);

  // We need to use waitFor() because awaiting click()
  // doesn't wait for the resulting animation to complete.
  // So, if you have something like spring, you won't
  // get the updated results immediately.
  await waitFor(() => {
    expect(counter.textContent).toBe('2');
  });

  // with jest-dom
  expect(counter).toHaveTextContent('2');

  cleanup();
});
