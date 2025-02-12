import { isNil } from "lodash-es";

const DefaultRenderer = (props) => {
    const { value } = props;
    if (isNil(value)) {
        return '-'
    }
}
export class AtomRender {
    private renderer;
    private data;
    private label: string[];
    constructor() {

    }

    useCore() {

    }
    register(renderer) {
        this.renderer = renderer
    }
    setRenderer(renderer) {
        this.renderer = renderer
    }
    setData(data) {
        this.data = data;
    }
    registerLabel(label: string[]) {
        this.label = label;
    }
    renderAtom(field, props) {
        if (this.renderer) {
            let Component = this.renderer[field];
            if (!Component) {
                Component = this.renderer.DefaultRenderer;
            }
            if (!Component) {
                Component = DefaultRenderer;
            }
            const value = (this.data || props.data)?.[field];

            return <Component value={value} data={this.data} {...props} />
        } else  {
            throw Error('无渲染器')
        }
    }
}