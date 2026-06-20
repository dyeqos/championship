import type { ButtonInterface } from 'src/components/button/ButtonInterface';

export const getButtonProps = (button: ButtonInterface): ButtonInterface => {
  return {
    ...(button.label !== undefined && { label: button.label }),
    ...(button.icon !== undefined && { icon: button.icon }),
    ...(button.color !== undefined && { color: button.color }),
    ...(button.disable !== undefined && { disable: button.disable }),
    ...(button.outline !== undefined && { outline: button.outline }),
    ...(button.type !== undefined && { type: button.type }),
    action: () => {
      button.action?.();
    },
  };
};
