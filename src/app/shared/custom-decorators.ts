export function XmlElement(property: JSON) {
    return (target, key) => {
        Object.defineProperty(target, key, {
            set: () => target.key = property,
            get: () => property
        });
    };
}
