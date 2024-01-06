export interface State {
    message: string;
    type: string;
    show: boolean;
}

export interface Action {
    type: string;
    message?: string;
    alertType?: string;
}