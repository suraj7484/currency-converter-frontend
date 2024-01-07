import React from "react";
import ReactSelect, { ActionMeta, StylesConfig, OptionProps } from 'react-select';

interface SelectOption {
  value: string | number;
  label: string;
}

interface SelectProps {
  field?: any;
  isMulti?: boolean;
  isDisabled?: boolean;
  maxMenuHeight?: number;
  isClearable?: boolean;
  menuPlacement?: string;
  defaultValue?: OptionProps<SelectOption>;
  innerComponents?: any;
  customStyle?: any;
  placeholder?: string;
  value?: OptionProps<SelectOption>;
  options: SelectOption[] | [];
  onChange?: (value: OptionProps, actionMeta: ActionMeta<OptionProps>) => void;
  onInputChange?: (inputValue: string, actionMeta: ActionMeta<SelectOption>) => void;
  onFocus?: () => void;
    menuPosition?: string;
    noOptionsMessage?: ( obj: { inputValue: string } ) => string;
    isLoading?: boolean;
    loadingMessage?: string;
}

const Select: React.FC<SelectProps> = ({
    field,
    isMulti,
    isDisabled,
    maxMenuHeight,
    isClearable,
    menuPlacement,
    defaultValue,
    innerComponents,
    customStyle,
    placeholder,
    value,
    options,
    onChange,
    onInputChange,
    onFocus,
    menuPosition,
    noOptionsMessage,
    isLoading,
    loadingMessage
} ) =>
{
    const colourStyles = {
        option: (base: any, state: { isSelected: any; }) => ({
            ...base,
            borderBottom: '1px dotted #ced4da',
            color: state.isSelected ? 'grey' : 'black',
            fontWeight: state.isSelected ? '900' : '400',
            backgroundColor: state.isSelected ? '#e4e4e4' : 'white',
            padding: 10,
            cursor: 'pointer'
        } ),
        control: (base: any) => ({
            ...base,
            width: "100%",
            cursor: 'pointer',
            display: 'flex',
            boxShadow: 'none',
            border: '1px solid orange',
            borderRadius: "5px",
            margin: '0',
            '&:hover': {
              border: '1px solid #ced4da'
            },
            '@media screen and (max-width: 1024px)': {
              margin: '0px'
            },
            '@media screen and (max-width: 576px)': {
              width: '100%'
            }
        } ),
        container: (base: any) => {
            return {
              ...base,
              width: "100%",
            };
          },
      };
  return (
    <ReactSelect
        {...field}
        isMulti={isMulti}
        isDisabled={isDisabled}
        maxMenuHeight={maxMenuHeight}
        isClearable={isClearable}
        menuPlacement={menuPlacement}
        defaultValue={defaultValue}
        components={{
            ...innerComponents,
        }}
        styles={{ ...colourStyles, ...customStyle }}
        placeholder={placeholder}
        key={value ? (value as unknown as SelectOption).value : null}
        value={value ? value : undefined}
        options={options}
        // onChange={(data) => {
        //   field.onChange(data);
        // }}
        onInputChange={onInputChange}
        onFocus={onFocus}
        menuPosition={ menuPosition }
        hideSelectedOptions={ true }
        isLoading={ isLoading }
        loadingMessage={ loadingMessage }
        noOptionsMessage={noOptionsMessage}
        pageSize={ 4 }
          
    />
  );
};

export default Select;
