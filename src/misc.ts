export type Dict<V> = {
    [key: string]: V;
}
var _getTextWidthDiv: HTMLDivElement;
function setUpDiv() {
    _getTextWidthDiv = document.createElement("div");
    _getTextWidthDiv.style.position = 'absolute';
    _getTextWidthDiv.style.top = '-9999px';
    _getTextWidthDiv.style.left = '-9999px';
    // _getTextWidthDiv.ariaHidden = true;
    document.body.appendChild(_getTextWidthDiv);
    return _getTextWidthDiv;
}
export function getTextWidth(text: string) {
    var div = _getTextWidthDiv ?? (setUpDiv());
    div.innerText = text
    return div.clientWidth;
}

export const root = '/mixer';
export function getDefault<T>(data: string | undefined, defaultValue: T) {
    if (data !== undefined) {
        return JSON.parse(data) as T;  // todo: figure out how to type-check this
    } else {
        return defaultValue;
    }
}
export function valueOr(data: String | undefined, defaultValue: number) {
    let rv = data ? +data : defaultValue;
    if (!isNaN(rv)) {
        return rv;
    } else {
        return defaultValue;
    }
}
export function booleanOr(data: String | undefined, defaultValue: boolean) {
    switch (data) {
        case 'true':
            return true;
        case 'false':
            return false;
        default:
            return defaultValue;
    }
}

// export function range(start: number, stop: number | undefined = undefined, step: number = 1): Array<number> {
//     if (stop === undefined) {
//         stop = start;
//         start = 0;
//     }
//     return Array(
//         Math.ceil((stop! - start) / step)
//     ).fill(start).map((x, y) => x + y * step)
// }

export function range(stop: number) {
    return Array.from(Array(stop).keys());
}
export type DeepPartial<T> = {
    [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};
