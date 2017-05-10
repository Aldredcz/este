// @flow
import type { Element } from 'react';

export type Bold =
  | 'normal'
  | 'bold'
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type Color =
  | 'primary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'black'
  | 'white'
  | 'gray';

// I wish I know how to reuse Color for ColorProps and Colors, if possible.
export type ColorProps = {
  primary?: boolean,
  success?: boolean,
  warning?: boolean,
  danger?: boolean,
  black?: boolean,
  white?: boolean,
  gray?: boolean,
};

type Colors = {|
  primary: string,
  success: string,
  warning: string,
  danger: string,
  black: string,
  white: string,
  gray: string,
|};

export type Theme = {|
  typography: {|
    fontSize: number => number,
    lineHeight: number,
    rhythm: number => number,
  |},
  colors: Colors,
  page: {|
    backgroundColor: Color,
  |},
  text: {|
    bold: Bold,
    color: Color,
    fontFamily: string,
  |},
  heading: {|
    bold: Bold,
    fontFamily: string,
    marginBottom: number,
  |},
  p: {|
    marginBottom: number,
  |},
  button: {|
    borderRadius: number,
    borderWidth: number,
    marginHorizontal: number,
    marginVertical: number,
    paddingVertical: number,
    disabledOpacity: number,
  |},
  form: {|
    marginBottom: number,
    maxWidth: number,
  |},
  textInput: {|
    disabledOpacity: number,
  |},
  checkbox: {|
    checkedIcon: Element<*>,
    uncheckedIcon: Element<*>,
  |},
  radio: {|
    checkedIcon: Element<*>,
    uncheckedIcon: Element<*>,
  |},
|};
