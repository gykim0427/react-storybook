import './newbutton.css';

export interface NewButtonProps {
  /** Is this the principal call to action on the page? */
  primary?: boolean;
  /** What background color to use */
  backgroundColor?: string;
  /** How large should the button be? */
  size?: 'small' | 'medium' | 'large';
  /** Button contents */
  label: string;
  /** Optional click handler */
  onClick?: () => void;
}

/** Primary UI component for user interaction */
export const NewButton = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: NewButtonProps) => {
  const mode = primary ? 'storybook-newbutton--primary' : 'storybook-newbutton--secondary';
  return (
    <button
      type="button"
      className={['storybook-newbutton', `storybook-newbutton--${size}`, mode].join(' ')}
      style={{ backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};
