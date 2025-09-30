import { Input } from '../ui/input';

interface IProps {
  label: string;
}

const InputWithLabel = ({ label, ...props }: React.ComponentProps<'input'> & IProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm font-medium text-black">{label}</div>
      <Input className="text-sm" {...props} />
    </div>
  );
};

export default InputWithLabel;
