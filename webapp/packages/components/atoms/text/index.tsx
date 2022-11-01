type VariantOptions = 'default' | 'up' | 'down';

interface Props {
  label: string;
  variant: VariantOptions;
}

const TEXT_COLOR_VARIANT: Record<VariantOptions, string> = {
  default: '',
  up: 'text-red-500',
  down: 'text-blue-500',
};

export function Text({ label, variant }: Props) {
  return (
    <p className={`text-xl font-medium ${TEXT_COLOR_VARIANT[variant]}`}>
      {label}
    </p>
  );
}

export function SmallText({ label }: Omit<Props, 'variant'>) {
  return <p className='text-xs'>{label}</p>;
}

export function H1({ label }: Omit<Props, 'variant'>) {
  return <p className='text-xl font-semibold py-4'>{label}</p>;
}
