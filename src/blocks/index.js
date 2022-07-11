import * as Semantic from 'semantic-ui-react';
import ComponentWrapper from 'utils/helper';

export const Image = ComponentWrapper(Semantic.Image);
export const Label = ComponentWrapper(Semantic.Label);
export const Icon = ComponentWrapper(Semantic.Icon);
export const Divider = ComponentWrapper(Semantic.Divider);
export const Header = Semantic.Header;
export const Segment = ComponentWrapper(Semantic.Segment);
export const Placeholder = ComponentWrapper(Semantic.Placeholder);
export const PlaceholderHeader = ComponentWrapper(Semantic.Placeholder.Header);
export const PlaceholderLine = ComponentWrapper(Semantic.Placeholder.Line);
export const PlaceholderLinePara = ComponentWrapper(Semantic.Placeholder.Paragraph);
export const Dropdown = ComponentWrapper(Semantic.Dropdown);
export const Grid = ComponentWrapper(Semantic.Grid);
export const GridCol = ComponentWrapper(Semantic.Grid.Column);
export const Radio = ComponentWrapper(Semantic.Radio);
export const FormField = ComponentWrapper(Semantic.Form.Field);
export const FormInput = ComponentWrapper(Semantic.Form.Input);
export const Select = ComponentWrapper(Semantic.Select);
export const TextArea = ComponentWrapper(Semantic.TextArea);

export { Box } from './box';
export { default as FluidContainer } from './fluidcontainer';
export { ButtonBlock as Button, ButtonGroup, ButtonOr } from './button';
export { CenterContainer } from './centercontainer';
export { FormBlock as Form, FormGroup } from './form';
export { InputBlock as Input } from './input';
export { Paper } from './paper';
export { View } from './view';
export { default as AppBody } from './appbody';
export { 
    SidebarBlock, SidebarPushable, SidebarPusher 
} from './sidebar/sidebar';
export { default as Sidebar } from './sidebar';
export { default as Table } from './table';
export { default as Step } from './steps';
export { default as SitePlaceholder } from './siteplaceholder';
export { default as Modal } from './modal';
export { default as Confirm } from './modal/confirm';
export { default as ImageHolderGround } from './imageholdingground';
export { default as ColorPicker } from './colorpicker';
export { default as PayPalReact } from './paypal';
export { default as Link } from './link';