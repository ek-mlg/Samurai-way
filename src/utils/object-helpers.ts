export const updateObjectInArray = (items: any[], itemId: number, objPropsName: string, newObjProps: object) => {
    return items.map(u => {
        if (u[objPropsName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    });
}