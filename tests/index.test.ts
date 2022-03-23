process.version //?

// it('it works', async () => {
//   expect(2).toBe(2);
// });

import Index from '../src/routes/index.svelte'
import { render, cleanup } from '@testing-library/svelte'

it('it works', async () => {

  const { getByText } = render(Index);
  expect(getByText(/try editing/)).toBeInTheDocument();

  cleanup();
});
