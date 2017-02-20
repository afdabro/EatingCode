import { Store } from "redux";
import { saveResponsive } from "../actions/responsive.actions";
export class ResponsiveService {
    // tslint:disable-next-line:no-any
    private store: Store<any>;

    private mql: MediaQueryList;

    // tslint:disable-next-line:no-any
    constructor(store: Store<any>) {
        this.store = store;
        this.mql = window.matchMedia("(min-width: 64em)"); // TODO: Move to responsive.settings
        this.mql.addListener(this.handleDesktopChange.bind(this));
    }

    public initialize() {
        this.handleDesktopChange(this.mql);
    }

    public handleDesktopChange(mediaQueryList: MediaQueryList) {
        let isDesktop;
        if (mediaQueryList.matches) {
            isDesktop = true;
        } else {
            isDesktop = false;
        }

        this.updateState(isDesktop);
    }

    private updateState(isDesktop: boolean) {
        this.store.dispatch(saveResponsive({
            "isDesktop": isDesktop,
        }));
    }
}
