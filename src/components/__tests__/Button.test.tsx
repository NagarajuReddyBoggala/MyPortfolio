import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('renders with children', () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText('Click me')).toBeTruthy();
  });

  it('applies primary variant by default', () => {
    const { getByText } = render(<Button>Primary</Button>);
    const button = getByText('Primary');
    expect(button.className).toContain('btn-primary');
  });

  it('applies secondary variant', () => {
    const { getByText } = render(<Button variant="secondary">Secondary</Button>);
    const button = getByText('Secondary');
    expect(button.className).toContain('btn-secondary');
  });
});

