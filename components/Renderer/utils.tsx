import {
  Button as AntdButton,
  Input as AntdInput,
  Radio as AntdRadio,
  Checkbox as AntdCheckbox,
  Typography as AntdText,
  Switch as AntdSwitch,
  Tag as AntdTag,
  ColorPicker as AntdColorPicker,
  DatePicker as AntdDatePicker,
  Cascader as AntdCascader,
  Rate as AntdRate,
  Card as AntdCard,
  Segmented as AntdSegmented,
} from "antd";
import { Button as ChakraButton } from "@chakra-ui/react";

export const ComponentsIndex = {
  HTML: {
    div: <div />,
    span: <span />,
    p: <p />,
  },
  ANTD: {
    text: <AntdText />,
    button: <AntdButton />,
    input: <AntdInput />,
    radio: <AntdRadio />,
    checkbox: <AntdCheckbox />,
    switch: <AntdSwitch />,
    tag: <AntdTag />,
    colorPicker: <AntdColorPicker />,
    datePicker: <AntdDatePicker />,
    cascader: <AntdCascader />,
    rate: <AntdRate />,
    card: <AntdCard />,
    // @ts-ignore
    segmented: <AntdSegmented />,
  },
  CHAKRA: {
    button: <ChakraButton />,
  },
};
