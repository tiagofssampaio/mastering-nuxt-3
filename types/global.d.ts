export {};

declare global {
    type Math<T> = T | null | undefined;
}
