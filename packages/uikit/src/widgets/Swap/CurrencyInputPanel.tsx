import { inputContainerVariants } from "./SwapWidget.css";

import { NumericalInput, NumericalInputProps } from "./NumericalInput";
import { Text, AtomBox } from "../../components";

interface CurrencyInputPanelProps extends Omit<NumericalInputProps, "onBlur"> {
  onInputBlur?: () => void;
  id: string;
  top?: React.ReactNode;
  bottom?: React.ReactNode;
  showBridgeWarning?: boolean;
}
export function CurrencyInputPanel({
  value,
  onUserInput,
  onInputBlur,
  top,
  bottom,
  id,
  disabled,
  error,
  loading,
  showBridgeWarning,
}: CurrencyInputPanelProps) {
  return (
    <AtomBox position="relative" id={id} display="grid" gap="4px">
      <AtomBox display="flex" alignItems="center" justifyContent="space-between">
        {top}
      </AtomBox>
      <AtomBox
        display="flex"
        flexDirection="column"
        flexWrap="nowrap"
        position="relative"
        backgroundColor="backgroundAlt2"
        zIndex="1"
      >
        <AtomBox
          as="label"
          className={inputContainerVariants({
            showBridgeWarning: !!showBridgeWarning,
            error: Boolean(error),
          })}
        >
          <AtomBox
            display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            color="text"
            fontSize="12px"
            lineHeight="16px"
            px="16px"
            pt="12px"
          >
            <NumericalInput
              error={Boolean(error)}
              disabled={disabled}
              loading={loading}
              className="token-amount-input"
              value={value}
              onBlur={onInputBlur}
              onUserInput={(val) => {
                onUserInput(val);
              }}
            />
          </AtomBox>
          {bottom}
        </AtomBox>

        {error ? (
          <Text pb="8px" fontSize="12px" color="red">
            {error}
          </Text>
        ) : null}

        {disabled && (
          <AtomBox role="presentation" position="absolute" inset="0px" backgroundColor="backgroundAlt" opacity="0.6" />
        )}
      </AtomBox>
    </AtomBox>
  );
}
