import { LionInput } from '@lion/input';
import { ChoiceInputMixin } from '@lion/choice-input';

/**
 * Lion-radio can be used inside a lion-radio-group.
 *
 * <lion-radio-group>
 *   <label slot="label">My Radio</label>
 *   <lion-radio name="name[]">
 *     <label slot="label">Male</label>
 *   </lion-radio>
 *   <lion-radio name="name[]">
 *     <label slot="label">Female</label>
 *   </lion-radio>
 * </lion-radio-group>
 *
 * You can preselect an option by setting marking an lion-radio checked.
 *   Example:
 *   <lion-radio name="name[]" checked>
 *
 *
 * @customElement lion-radio
 * @extends {LionInput}
 */
export class LionRadio extends ChoiceInputMixin(LionInput) {
  connectedCallback() {
    if (super.connectedCallback) super.connectedCallback();
    this.type = 'radio';
  }
}
