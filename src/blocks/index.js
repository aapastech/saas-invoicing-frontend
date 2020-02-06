import { 
    Icon as SemanticIcon, Divider as SemanticDivider, Header as SemanticHeader ,
    Placeholder as SematicPlaceHolder, Segment as SemanticSegment, Label as SemanticLabel
} from 'semantic-ui-react';
import ComponentWrapper from 'utils/helper';

export const Label = ComponentWrapper(SemanticLabel);
export const Icon = ComponentWrapper(SemanticIcon);
export const Divider = ComponentWrapper(SemanticDivider);
export const Header = ComponentWrapper(SemanticHeader);
export const Segment = ComponentWrapper(SemanticSegment);
export const Placeholder = ComponentWrapper(SematicPlaceHolder);
export const PlaceholderHeader = ComponentWrapper(SematicPlaceHolder.Header);
export const PlaceholderLine = ComponentWrapper(SematicPlaceHolder.Line);
export const PlaceholderLinePara = ComponentWrapper(SematicPlaceHolder.Paragraph);

export { Box } from './box';
export { default as FluidContainer } from './fluidcontainer';
export { ButtonBlock as Button, ButtonGroup, ButtonOr } from './button';
export { CenterContainer } from './centercontainer';
export { FormBlock as Form, FormGroup } from './form';
export { FormFieldWrapper as FormField, FormInput } from './formField';
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