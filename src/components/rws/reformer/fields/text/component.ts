import { attr, observable } from '@microsoft/fast-element';
import { RWSViewComponent, RWSView } from '@rws-framework/client';

@RWSView('reformer-text')
class ReFormerText extends RWSViewComponent {
    @attr name: string;
    @observable defaultValue: string = null;
    @observable value: string = null;
    @observable setForm: (field: string, value: any) => Promise<void>;

    connectedCallback(): void {
        super.connectedCallback();
        this.value = this.defaultValue;
    }
}

ReFormerText.defineComponent();

export { ReFormerText };